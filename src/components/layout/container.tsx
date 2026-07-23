import * as React from "react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  /** Soft scroll reveal for below-fold section content (default true) */
  animate?: boolean;
  /**
   * Light stagger between top-level Container children (~0.08–0.12).
   * Pass `0` to reveal the whole block as one unit.
   */
  staggerChildren?: number;
}

export function Container({
  children,
  className,
  as: Component = "div",
  animate = true,
  staggerChildren = 0.1,
  ...props
}: ContainerProps) {
  const content = animate ? (
    <ScrollReveal staggerChildren={staggerChildren}>{children}</ScrollReveal>
  ) : (
    children
  );

  return (
    <Component
      className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {content}
    </Component>
  );
}
