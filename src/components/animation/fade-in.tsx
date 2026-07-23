"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  /** Stagger children by this interval in seconds (~0.08–0.12) */
  staggerChildren?: number;
}

const EASE = [0.21, 0.47, 0.32, 0.98] as const;
const OFFSET_Y = 14;
const VIEWPORT = { once: true, margin: "-40px", amount: 0.2 } as const;

const containerVariants = (stagger: number): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
    },
  },
});

const itemVariants = (duration: number, delay: number): Variants => ({
  hidden: { opacity: 0, y: OFFSET_Y },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: EASE,
    },
  },
});

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.35,
  staggerChildren,
}: FadeInProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  if (staggerChildren) {
    return (
      <motion.div
        className={cn(className)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={containerVariants(staggerChildren)}
      >
        {React.Children.map(children, (child) => (
          <motion.div variants={itemVariants(duration, 0)}>{child}</motion.div>
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
      variants={itemVariants(duration, delay)}
    >
      {children}
    </motion.div>
  );
}
