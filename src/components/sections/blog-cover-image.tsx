import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type BlogCoverImageProps = {
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
  aspectClassName?: string;
  priority?: boolean;
};

/** Cover image for listing cards and article heroes; falls back to a placeholder. */
export function BlogCoverImage({
  src,
  alt = "",
  label = "Image coming soon",
  className,
  aspectClassName = "aspect-[16/9]",
  priority = false,
}: BlogCoverImageProps) {
  if (src) {
    return (
      <div
        className={cn(
          "relative overflow-hidden bg-[rgba(11,14,44,0.03)]",
          aspectClassName,
          className,
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          unoptimized
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 760px"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "glass-card flex items-center justify-center overflow-hidden bg-[rgba(11,14,44,0.03)]",
        aspectClassName,
        className,
      )}
      aria-hidden
    >
      <div className="flex flex-col items-center gap-2 px-4 text-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(123,47,255,0.1)] text-[#7B2FFF]">
          <ImageIcon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <span className="text-[12px] font-medium tracking-wide text-[#5C607A] sm:text-[13px]">
          {label}
        </span>
      </div>
    </div>
  );
}
