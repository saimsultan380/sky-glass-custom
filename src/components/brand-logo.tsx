import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /** Display height — width scales automatically to preserve the logo. */
  heightClassName?: string;
  priority?: boolean;
};

/**
 * Canonical Sky Glass logo — always `/logo.PNG`, never cropped or recolored.
 * Use this everywhere the brand mark appears (header, footer, etc.).
 */
export function BrandLogo({
  className,
  heightClassName = "h-11 sm:h-[52px]",
  priority = false,
}: BrandLogoProps) {
  return (
    <Image
      src="/logo.PNG"
      alt="Sky Glass"
      width={845}
      height={295}
      priority={priority}
      unoptimized
      className={cn("w-auto object-contain object-left", heightClassName, className)}
    />
  );
}
