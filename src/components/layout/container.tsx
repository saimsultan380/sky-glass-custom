import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  /**
   * Kept for call-site compatibility. Sitewide motion is handled by
   * AutoBlurReveal + BlurReveal on heroes.
   */
  animate?: boolean;
  staggerChildren?: number;
}

export function Container({
  children,
  className,
  as: Component = "div",
  animate: _animate = false,
  staggerChildren: _staggerChildren,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
