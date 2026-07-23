import * as React from "react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  animate?: boolean;
}

export function Container({
  children,
  className,
  as: Component = "div",
  animate = true,
  ...props
}: ContainerProps) {
  const content = animate ? (
    <ScrollReveal>{children}</ScrollReveal>
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
