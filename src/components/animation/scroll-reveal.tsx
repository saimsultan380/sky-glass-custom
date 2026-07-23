"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Optional stagger interval (seconds) when wrapping multiple children */
  staggerChildren?: number;
}

const EASE = [0.21, 0.47, 0.32, 0.98] as const;
const OFFSET = 20;
const VIEWPORT = { once: true, margin: "-50px", amount: 0.15 } as const;

function makeItemVariants(
  duration: number,
  delay: number,
  direction: ScrollRevealProps["direction"],
): Variants {
  const initial: Record<string, number> = { opacity: 0 };

  if (direction === "up") initial.y = OFFSET;
  else if (direction === "down") initial.y = -OFFSET;
  else if (direction === "left") initial.x = OFFSET;
  else if (direction === "right") initial.x = -OFFSET;

  return {
    hidden: initial,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: EASE,
      },
    },
  };
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.4,
  direction = "up",
  staggerChildren,
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  const item = makeItemVariants(duration, delay, direction);

  if (staggerChildren) {
    return (
      <motion.div
        className={cn(className)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren },
          },
        }}
      >
        {React.Children.map(children, (child) => (
          <motion.div variants={makeItemVariants(duration, 0, direction)}>
            {child}
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={item}
    >
      {children}
    </motion.div>
  );
}
