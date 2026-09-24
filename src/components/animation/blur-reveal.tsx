"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export type BlurRevealVariant = "text" | "cta" | "media" | "card" | "hero";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = {
  once: true,
  amount: 0.14,
  margin: "0px 0px -40px 0px",
} as const;

const PRESETS: Record<
  BlurRevealVariant,
  { y: number; blur: number; duration: number }
> = {
  text: { y: 22, blur: 8, duration: 0.62 },
  cta: { y: 16, blur: 6, duration: 0.52 },
  media: { y: 28, blur: 10, duration: 0.68 },
  card: { y: 20, blur: 10, duration: 0.56 },
  hero: { y: 18, blur: 8, duration: 0.72 },
};

type BlurRevealProps = {
  children: React.ReactNode;
  className?: string;
  variant?: BlurRevealVariant;
  delay?: number;
  as?: "div" | "h1" | "h2";
};

export function BlurReveal({
  children,
  className,
  variant = "text",
  delay = 0,
  as = "div",
}: BlurRevealProps) {
  const reduceMotion = useReducedMotion();
  const preset = PRESETS[variant];

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={cn(className)}>{children}</Tag>;
  }

  const MotionTag =
    as === "h1" ? motion.h1 : as === "h2" ? motion.h2 : motion.div;

  return (
    <MotionTag
      className={cn(className)}
      initial={{
        opacity: 0,
        y: preset.y,
        filter: `blur(${preset.blur}px)`,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={VIEWPORT}
      transition={{
        duration: preset.duration,
        delay,
        ease: EASE,
      }}
      style={{ willChange: "opacity, transform, filter" }}
    >
      {children}
    </MotionTag>
  );
}

type BlurRevealGroupProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  variant?: BlurRevealVariant;
};

/** Parent + staggered children for card grids */
export function BlurRevealGroup({
  children,
  className,
  stagger = 0.06,
  delay = 0,
  variant = "card",
}: BlurRevealGroupProps) {
  const reduceMotion = useReducedMotion();
  const preset = PRESETS[variant];

  if (reduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {React.Children.map(children, (child) => (
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: preset.y,
              filter: `blur(${preset.blur}px)`,
            },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: preset.duration,
                ease: EASE,
              },
            },
          }}
          style={{ willChange: "opacity, transform, filter" }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
