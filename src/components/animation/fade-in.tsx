"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  /** Stagger children by this interval in seconds */
  staggerChildren?: number;
}

const EASE = [0.21, 0.47, 0.32, 0.98] as const;
const OFFSET_Y = 20;

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
  duration = 0.45,
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
        viewport={{ once: true, margin: "0px 0px -60px 0px", amount: 0 }}
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
      viewport={{ once: true, margin: "0px 0px -60px 0px", amount: 0 }}
      variants={itemVariants(duration, delay)}
    >
      {children}
    </motion.div>
  );
}
