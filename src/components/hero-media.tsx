"use client";

import { useEffect, useRef } from "react";

type HeroMediaProps = {
  alt: string;
};

/**
 * Plays the hero MP4 and keys out near-white pixels so the solid white
 * backdrop becomes transparent without changing non-white animation colors.
 */
export function HeroMedia({ alt }: HeroMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const WHITE_CUTOFF = 248;
    const SOFTNESS = 18;

    const drawFrame = () => {
      if (video.readyState < 2) {
        frameRef.current = requestAnimationFrame(drawFrame);
        return;
      }

      const width = video.videoWidth || 1200;
      const height = video.videoHeight || 900;

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      ctx.drawImage(video, 0, 0, width, height);
      const image = ctx.getImageData(0, 0, width, height);
      const pixels = image.data;

      for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        const minChannel = Math.min(r, g, b);

        // Near-white / light-gray backdrop only — leave colorful pixels alone
        if (minChannel >= WHITE_CUTOFF) {
          pixels[i + 3] = 0;
        } else if (minChannel > WHITE_CUTOFF - SOFTNESS) {
          const t = (WHITE_CUTOFF - minChannel) / SOFTNESS;
          pixels[i + 3] = Math.round(255 * t);
        }
      }

      ctx.putImageData(image, 0, 0);
      frameRef.current = requestAnimationFrame(drawFrame);
    };

    const start = () => {
      void video.play().catch(() => {});
      cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(drawFrame);
    };

    if (video.readyState >= 2) start();
    else video.addEventListener("loadeddata", start, { once: true });

    return () => {
      cancelAnimationFrame(frameRef.current);
      video.removeEventListener("loadeddata", start);
    };
  }, []);

  return (
    <div className="relative mx-auto h-auto max-h-[260px] w-full sm:max-h-none">
      <video
        ref={videoRef}
        className="pointer-events-none absolute h-px w-px opacity-0"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      >
        <source src="/hero-animation.mp4" type="video/mp4" />
      </video>
      <canvas
        ref={canvasRef}
        width={1200}
        height={900}
        role="img"
        aria-label={alt}
        className="mx-auto block h-auto max-h-[260px] w-full bg-transparent object-contain object-center sm:max-h-none"
      />
    </div>
  );
}
