"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const HIDDEN = "scroll-reveal-hidden";
const VISIBLE = "scroll-reveal-visible";
const EASE = "cubic-bezier(0.21, 0.47, 0.32, 0.98)";

function classStr(el: Element) {
  const c = (el as HTMLElement).className;
  return typeof c === "string" ? c : "";
}

function isCardLike(el: HTMLElement) {
  const c = classStr(el);
  return (
    /rounded/.test(c) ||
    /shadow/.test(c) ||
    /group/.test(c) ||
    el.tagName === "ARTICLE"
  );
}

function hasShadow(el: HTMLElement) {
  return /shadow/.test(classStr(el)) || el.tagName === "ARTICLE";
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

    // Skip if an ancestor is already a reveal target (avoid nested double-fade)
    for (const s of seen) {
      if (s !== el && s.contains(el)) return;
    }

    // Prefer this element over any previously queued descendants
    for (const s of [...seen]) {
      if (s !== el && el.contains(s)) {
        seen.delete(s);
        const ci = cards.indexOf(s);
        if (ci >= 0) cards.splice(ci, 1);
        const ti = texts.indexOf(s);
        if (ti >= 0) texts.splice(ti, 1);
      }
    }

    seen.add(el);
    list.push(el);
  };

  sections.forEach((section) => {
    section.querySelectorAll(".grid").forEach((grid) => {
      Array.from(grid.children).forEach((child) => {
        if (!(child instanceof HTMLElement)) return;
        const nested = child.querySelector(".grid");
        if (nested) {
          // Content panels / cards that wrap inner grids still need to reveal
          if (hasShadow(child) || isCardLike(child)) add(cards, child);
          return;
        }
        add(cards, child);
      });
    });

    section.querySelectorAll("article").forEach((el) => add(cards, el));

    // FAQ / stacked cards — include single shadowed panels too
    section.querySelectorAll('[class*="space-y-"]').forEach((stack) => {
      const kids = Array.from(stack.children).filter(
        (child): child is HTMLElement =>
          child instanceof HTMLElement && isCardLike(child),
      );
      if (kids.length >= 1) kids.forEach((kid) => add(cards, kid));
    });

    // Comparison / overview tables
    section.querySelectorAll("table").forEach((table) => {
      const wrap =
        table.closest<HTMLElement>(
          ".overflow-hidden, .overflow-x-auto, [class*='rounded']",
        ) ?? table;
      add(cards, wrap instanceof HTMLElement ? wrap : table);
    });

    // Standalone shadowed panels (forms, callouts, device content shells)
    section.querySelectorAll("div").forEach((el) => {
      if (!(el instanceof HTMLElement)) return;
      if (!hasShadow(el)) return;
      if (el.closest("header, footer, nav, [data-hero]")) return;
      add(cards, el);
    });

    section.querySelectorAll("h2, h3").forEach((heading) => {
      if (!(heading instanceof HTMLElement)) return;
      if (cards.some((card) => card.contains(heading))) return;
      add(texts, heading);
    });

    // Intro / supporting copy outside cards
    section.querySelectorAll("p").forEach((p) => {
      if (!(p instanceof HTMLElement)) return;
      if (cards.some((card) => card.contains(p))) return;
      if (p.closest("form, button, a, li, label")) return;
      const parent = p.parentElement;
      if (!parent) return;
      const pc = classStr(parent);
      const self = classStr(p);
      if (/max-w-/.test(pc) || /space-y-/.test(pc) || /max-w-/.test(self)) {
        add(texts, p);
      }
    });
  });

  return [...texts, ...cards];
}

function applyStagger(el: HTMLElement) {
  const parent = el.parentElement;
  if (!parent) return;
  const siblings = Array.from(parent.children).filter(
    (child) =>
      child.classList.contains(HIDDEN) || child.classList.contains(VISIBLE),
  );
  const index = Math.max(0, siblings.indexOf(el));
  el.style.transitionDelay = `${Math.min(index, 10) * 55}ms`;
}

function prepareElement(el: HTMLElement) {
  el.style.transition = [
    `opacity 0.55s ${EASE}`,
    `transform 0.55s ${EASE}`,
  ].join(", ");
  el.style.willChange = "opacity, transform";

  const rect = el.getBoundingClientRect();
  const inView = rect.top < window.innerHeight * 0.92 && rect.bottom > 40;

  el.classList.remove(HIDDEN, VISIBLE);
  el.classList.add(inView ? VISIBLE : HIDDEN);
  applyStagger(el);
}

function clearElement(el: HTMLElement) {
  el.classList.remove(HIDDEN, VISIBLE);
  el.style.transition = "";
  el.style.transitionDelay = "";
  el.style.willChange = "";
}

export function AutoScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const root = document.querySelector("main") ?? document.body;
    const tracked = new Set<HTMLElement>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (!tracked.has(el)) return;
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

    const sync = () => {
      // Drop detached nodes
      for (const el of [...tracked]) {
        if (!el.isConnected) {
          observer.unobserve(el);
          clearElement(el);
          tracked.delete(el);
        }
      }

      const targets = collectTargets(root);
      for (const el of targets) {
        if (tracked.has(el)) continue;
        tracked.add(el);
        prepareElement(el);
        observer.observe(el);
      }
    };

    sync();

    let timer: ReturnType<typeof setTimeout> | undefined;
    const mo = new MutationObserver(() => {
      clearTimeout(timer);
      timer = setTimeout(sync, 80);
    });

    mo.observe(root, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      mo.disconnect();
      observer.disconnect();
      for (const el of tracked) clearElement(el);
      tracked.clear();
    };
  }, [pathname]);

  return null;
}
