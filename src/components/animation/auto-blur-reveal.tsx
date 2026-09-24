"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { animate, inView } from "motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const AMOUNT = 0.14;
const MARGIN = "0px 0px -40px 0px";

type RevealKind = "text" | "card";

const PRESETS: Record<
  RevealKind,
  { y: number; blur: number; duration: number }
> = {
  text: { y: 22, blur: 8, duration: 0.62 },
  card: { y: 20, blur: 10, duration: 0.56 },
};

function classStr(el: Element) {
  const c = (el as HTMLElement).className;
  return typeof c === "string" ? c : "";
}

function isCardLike(el: HTMLElement) {
  const c = classStr(el);
  return (
    /rounded/.test(c) ||
    /shadow/.test(c) ||
    /glass-card/.test(c) ||
    /group/.test(c) ||
    el.tagName === "ARTICLE"
  );
}

function hasShadow(el: HTMLElement) {
  return (
    /shadow/.test(classStr(el)) ||
    /glass-card/.test(classStr(el)) ||
    el.tagName === "ARTICLE"
  );
}

type Target = { el: HTMLElement; kind: RevealKind };

function collectTargets(root: ParentNode): Target[] {
  const sections = root.querySelectorAll("section:not([data-hero])");
  const cards: HTMLElement[] = [];
  const texts: HTMLElement[] = [];
  const seen = new Set<HTMLElement>();

  const add = (list: HTMLElement[], el: Element | null | undefined) => {
    if (!(el instanceof HTMLElement)) return;
    if (seen.has(el)) return;
    if (el.closest("header, footer, nav, [data-hero]")) return;

    for (const s of seen) {
      if (s !== el && s.contains(el)) return;
    }

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
          if (hasShadow(child) || isCardLike(child)) add(cards, child);
          return;
        }
        add(cards, child);
      });
    });

    section.querySelectorAll("article").forEach((el) => add(cards, el));

    section.querySelectorAll('[class*="space-y-"]').forEach((stack) => {
      const kids = Array.from(stack.children).filter(
        (child): child is HTMLElement =>
          child instanceof HTMLElement && isCardLike(child),
      );
      if (kids.length >= 1) kids.forEach((kid) => add(cards, kid));
    });

    section.querySelectorAll("table").forEach((table) => {
      const wrap =
        table.closest<HTMLElement>(
          ".overflow-hidden, .overflow-x-auto, [class*='rounded']",
        ) ?? table;
      add(cards, wrap instanceof HTMLElement ? wrap : table);
    });

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

  return [
    ...texts.map((el) => ({ el, kind: "text" as const })),
    ...cards.map((el) => ({ el, kind: "card" as const })),
  ];
}

function siblingIndex(el: HTMLElement) {
  const parent = el.parentElement;
  if (!parent) return 0;
  const siblings = Array.from(parent.children).filter(
    (child) => child instanceof HTMLElement && child.dataset.blurReveal === "1",
  );
  return Math.max(0, siblings.indexOf(el));
}

function prepare(el: HTMLElement, kind: RevealKind) {
  const preset = PRESETS[kind];
  el.dataset.blurReveal = "1";
  el.style.opacity = "0";
  el.style.transform = `translate3d(0, ${preset.y}px, 0)`;
  el.style.filter = `blur(${preset.blur}px)`;
  el.style.willChange = "opacity, transform, filter";
}

function clear(el: HTMLElement) {
  delete el.dataset.blurReveal;
  el.style.opacity = "";
  el.style.transform = "";
  el.style.filter = "";
  el.style.willChange = "";
  el.style.transition = "";
}

/**
 * Sitewide scroll blur-reveals for section text + cards (excludes heroes).
 * Plays once; respects prefers-reduced-motion.
 */
export function AutoBlurReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const root = document.querySelector("main") ?? document.body;
    const tracked = new Set<HTMLElement>();
    const stoppers: Array<() => void> = [];

    const arm = (target: Target) => {
      const { el, kind } = target;
      if (tracked.has(el)) return;
      if (el.dataset.blurRevealed === "1") return;
      tracked.add(el);
      prepare(el, kind);

      const preset = PRESETS[kind];
      const stagger =
        kind === "card" ? Math.min(siblingIndex(el), 10) * 0.06 : 0;

      const stop = inView(
        el,
        () => {
          animate(
            el,
            {
              opacity: 1,
              transform: "translate3d(0, 0, 0)",
              filter: "blur(0px)",
            },
            {
              duration: preset.duration,
              delay: stagger,
              ease: EASE,
            },
          ).then(() => {
            el.style.willChange = "auto";
            el.dataset.blurRevealed = "1";
          });
          // Returning nothing (non-function) unobserves after first enter
        },
        { amount: AMOUNT, margin: MARGIN },
      );

      stoppers.push(stop);
    };

    const sync = () => {
      for (const el of [...tracked]) {
        if (!el.isConnected) {
          clear(el);
          tracked.delete(el);
        }
      }

      for (const target of collectTargets(root)) {
        arm(target);
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
      stoppers.forEach((stop) => stop());
      for (const el of tracked) clear(el);
      tracked.clear();
    };
  }, [pathname]);

  return null;
}
