"use client";

import {
  Children,
  isValidElement,
  useMemo,
  type CSSProperties,
  type ReactNode,
} from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type WordToken = {
  text: string;
  style?: CSSProperties;
  className?: string;
};

type MaskRevealProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  as?: "h1" | "h2" | "div";
  /** Word-wrap row alignment */
  align?: "left" | "center";
};

function pushWords(
  tokens: WordToken[],
  text: string,
  style?: CSSProperties,
  className?: string,
) {
  const parts = text.split(/(\s+)/);
  for (const part of parts) {
    if (!part || /^\s+$/.test(part)) continue;
    tokens.push({ text: part, style, className });
  }
}

/** Flatten mixed text + accent spans into word tokens */
function tokenize(
  children: ReactNode,
  inheritedStyle?: CSSProperties,
  inheritedClass?: string,
): WordToken[] {
  const tokens: WordToken[] = [];

  Children.forEach(children, (child) => {
    if (child == null || typeof child === "boolean") return;

    if (typeof child === "string" || typeof child === "number") {
      pushWords(tokens, String(child), inheritedStyle, inheritedClass);
      return;
    }

    if (isValidElement<{ children?: ReactNode; style?: CSSProperties; className?: string }>(child)) {
      const nextStyle = { ...inheritedStyle, ...child.props.style };
      const nextClass = cn(inheritedClass, child.props.className);
      tokenize(child.props.children, nextStyle, nextClass).forEach((t) => tokens.push(t));
    }
  });

  return tokens;
}

const EASE = [0.16, 1, 0.3, 1] as const;
const VIEWPORT = { once: true, amount: 0.2, margin: "-40px" } as const;

const wordVariants = {
  hidden: { y: "100%", skewY: 8, opacity: 0 },
  visible: {
    y: "0%",
    skewY: 0,
    opacity: 1,
    transition: {
      duration: 0.85,
      ease: EASE,
    },
  },
};

/**
 * Skewed text reveal — overflow-hidden mask + inner slide/skew.
 * Plays once; respects prefers-reduced-motion.
 */
export function MaskReveal({
  children,
  className,
  style,
  delay = 0.18,
  as: Tag = "h1",
  align = "center",
}: MaskRevealProps) {
  const reduceMotion = useReducedMotion();
  const words = useMemo(() => tokenize(children), [children]);
  const useGradient = Boolean(className?.includes("text-gradient-brand"));
  const rowClass = cn(
    "flex flex-wrap gap-x-[0.28em] gap-y-1",
    align === "left" ? "justify-start" : "justify-center",
  );

  if (reduceMotion) {
    return (
      <Tag className={cn(rowClass, className)} style={style}>
        {words.map((word, i) => (
          <span
            key={`${word.text}-${i}`}
            className={cn(
              "inline-block",
              word.className,
              useGradient && "text-gradient-brand",
            )}
            style={useGradient ? undefined : word.style}
          >
            {word.text}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag className={cn("overflow-hidden", className)} style={style}>
      <motion.span
        className={rowClass}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.05,
              delayChildren: delay,
            },
          },
        }}
      >
        {words.map((word, i) => (
          <span
            key={`${word.text}-${i}`}
            className="inline-block overflow-hidden pb-[0.12em] align-bottom leading-[1.15]"
          >
            <motion.span
              className={cn(
                "inline-block origin-bottom will-change-transform",
                word.className,
                useGradient && "text-gradient-brand",
              )}
              style={useGradient ? undefined : word.style}
              variants={wordVariants}
            >
              {word.text}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
