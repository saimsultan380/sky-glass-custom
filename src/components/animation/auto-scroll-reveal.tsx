"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const HIDDEN = "scroll-reveal-hidden";
const VISIBLE = "scroll-reveal-visible";
const EASE = "cubic-bezier(0.21, 0.47, 0.32, 0.98)";

function isCardLike(el: HTMLElement) {
  const c = el.className;
  if (typeof c !== "string") return false;
  return (
    /rounded/.test(c) ||
    /shadow/.test(c) ||
    /group/.test(c) ||
    el.tagName === "ARTICLE"
  );
}

function collectTargets(root: ParentNode): HTMLElement[] {
  const sections = root.querySelectorAll("section:not([data-hero])");
  const cards: HTMLElement[] = [];
  const texts: HTMLElement[] = [];
  const seen = new Set<HTMLElement>();

  const add = (list: HTMLElement[], el: Element | null | undefined) => {
    if (!(el instanceof HTMLElement)) return;
    if (seen.has(el)) return;
    if (el.closest("header, footer, nav, [data-hero]")) return;
    seen.add(el);
    list.push(el);
  };

  sections.forEach((section) => {
    section.querySelectorAll(".grid").forEach((grid) => {
      Array.from(grid.children).forEach((child) => {
        if (!(child instanceof HTMLElement)) return;
        // Prefer leaf grid items so nested tip grids animate per cell
        if (child.querySelector(".grid")) return;
        add(cards, child);
      });
    });

    section.querySelectorAll("article").forEach((el) => add(cards, el));

    // FAQ / stacked card lists
    section.querySelectorAll('[class*="space-y-"]').forEach((stack) => {
      const kids = Array.from(stack.children).filter(
        (child): child is HTMLElement =>
          child instanceof HTMLElement && isCardLike(child),
      );
      if (kids.length >= 2) kids.forEach((kid) => add(cards, kid));
    });

    section.querySelectorAll("h2, h3").forEach((heading) => {
      if (cards.some((card) => card.contains(heading))) return;
      add(texts, heading);
    });

    // Intro / supporting copy outside cards
    section.querySelectorAll("p").forEach((p) => {
      if (!(p instanceof HTMLElement)) return;
      if (cards.some((card) => card.contains(p))) return;
      if (p.closest("form, button, a, li, label, .grid")) return;
      const parent = p.parentElement;
      if (!parent) return;
      const pc = parent.className;
      if (typeof pc !== "string") return;
      if (/max-w-/.test(pc) || /space-y-/.test(pc)) {
        add(texts, p);
      }
    });
  });

  return [...texts, ...cards];
}

function applyStagger(el: HTMLElement) {
  const parent = el.parentElement;
  if (!parent) return;
  const siblings = Array.from(parent.children).filter((child) =>
    child.classList.contains(HIDDEN) || child.classList.contains(VISIBLE),
  );
  const index = Math.max(0, siblings.indexOf(el));
  el.style.transitionDelay = `${Math.min(index, 10) * 55}ms`;
}

export function AutoScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const root = document.querySelector("main") ?? document.body;
    const elements = collectTargets(root);
    if (elements.length === 0) return;

    elements.forEach((el) => {
      el.style.transition = [
        `opacity 0.55s ${EASE}`,
        `transform 0.55s ${EASE}`,
      ].join(", ");
      el.style.willChange = "opacity, transform";

      const rect = el.getBoundingClientRect();
      const inView =
        rect.top < window.innerHeight * 0.92 && rect.bottom > 40;

      el.classList.remove(HIDDEN, VISIBLE);
      el.classList.add(inView ? VISIBLE : HIDDEN);
      applyStagger(el);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add(VISIBLE);
            el.classList.remove(HIDDEN);
          } else {
            el.classList.add(HIDDEN);
            el.classList.remove(VISIBLE);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -6% 0px",
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      elements.forEach((el) => {
        el.classList.remove(HIDDEN, VISIBLE);
        el.style.transition = "";
        el.style.transitionDelay = "";
        el.style.willChange = "";
      });
    };
  }, [pathname]);

  return null;
}
