import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /** Display height — width scales automatically to preserve the logo. */
  heightClassName?: string;
  priority?: boolean;
  /**
   * `transparent` — UI chrome (header/footer) over light or glassy backgrounds.
   * `solid` — favicon / OG / places that need the full black-backed mark.
   */
  variant?: "transparent" | "solid";
};

/**
 * Sky Glass brand mark.
 * Header/footer use the transparent asset; SEO surfaces use the solid logo.
 */
export function BrandLogo({
  className,
  heightClassName = "h-8 sm:h-10",
  priority = false,
  variant = "transparent",
}: BrandLogoProps) {
  const src =
    variant === "solid" ? "/logo.PNG" : "/logo-transparent.PNG";

  return (
    <Image
      src={src}
      alt="Sky Glass IPTV"
      width={845}
      height={295}
      priority={priority}
      unoptimized
      className={cn("w-auto object-contain object-left", heightClassName, className)}
    />
  );
}
