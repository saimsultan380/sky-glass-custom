import {
  Tv,
  Trophy,
  Clapperboard,
  CalendarDays,
  History,
  MonitorPlay,
  Check,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import type { LucideIcon } from "lucide-react";

type IncludedItem = {
  icon: LucideIcon;
  color: string;
  title: string;
  body: string[];
  listIntro?: string;
  list?: readonly string[];
};

const ITEMS: IncludedItem[] = [
  {
    icon: Tv,
    color: "#FF6B2C",
    title: "Live Television",
    body: [],
    listIntro: "Browse available television categories including:",
    list: [
      "Entertainment",
      "News",
      "Lifestyle",
      "Documentary",
      "Family programming",
      "International programming",
    ],
  },
  {
    icon: Trophy,
    color: "#E91E8C",
    title: "Live Sports",
    body: [
      "Access available sports channels covering football, cricket, motorsport, combat sports and other events.",
      "Sports availability depends on the selected package, broadcasting schedules, event rights and content availability.",
    ],
  },
  {
    icon: Clapperboard,
    color: "#7B2FFF",
    title: "Movies and Television Series",
    body: [
      "Explore available movies and series organised into clear categories.",
      "This makes it easier to discover entertainment without moving between several separate platforms.",
    ],
  },
  {
    icon: CalendarDays,
    color: "#2563EB",
    title: "Electronic Programme Guide",
    body: [
      "The Electronic Programme Guide displays available channel schedules and programme information in an organised format.",
    ],
  },
  {
    icon: History,
    color: "#E91E8C",
    title: "Catch-Up Television",
    body: [
      "Where supported, Catch-Up functionality allows viewers to access selected programmes after their original broadcast time.",
    ],
  },
  {
    icon: MonitorPlay,
    color: "#FF6B2C",
    title: "High-Quality Streaming",
    body: ["Content may be available in SD, HD, Full HD or 4K."],
    listIntro: "Actual playback quality depends on:",
    list: [
      "Content source",
      "Selected stream",
      "Device capability",
      "IPTV application",
      "Display resolution",
      "Internet performance",
    ],
  },
];

export function PlansIncludedSection() {
  return (
    <section
      id="whats-included"
      className="relative border-t border-[#0B0E2C]/10 bg-white"
    >
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            What Is Included with{" "}
            <span className="text-gradient-brand">Sky Glass IPTV?</span>
          </h2>
          <p className="mt-4 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-[1.8]">
            A Sky Glass IPTV subscription brings different types of available
            entertainment together through one compatible IPTV application.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-2">
          {ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="group relative flex flex-col overflow-hidden rounded-[1px] bg-white p-5 shadow-[var(--card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--card-shadow-hover)] sm:p-8"
                style={
                  {
                    "--card-shadow": `0 4px 20px rgba(11, 14, 44, 0.04), 0 8px 24px ${item.color}1A`,
                    "--card-shadow-hover": `0 8px 30px rgba(11, 14, 44, 0.08), 0 12px 40px ${item.color}33`,
                  } as React.CSSProperties
                }
              >
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center gap-2.5 sm:gap-4">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] sm:h-12 sm:w-12 sm:rounded-[1px]"
                      style={{
                        color: item.color,
                        backgroundColor: `${item.color}15`,
                      }}
                    >
                      <Icon className="h-4 w-4 sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden />
                    </span>
                    <h3 className="text-base font-bold tracking-tight text-[#0B0E2C] sm:text-xl">
                      {item.title}
                    </h3>
                  </div>

                  <div className="mt-3 space-y-2 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-4 sm:space-y-3 sm:text-[15px] sm:leading-[1.75]">
                    {item.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}

                    {item.listIntro && (
                      <p className="font-semibold text-[#0B0E2C]">
                        {item.listIntro}
                      </p>
                    )}

                    {item.list && (
                      <ul className="grid grid-cols-1 gap-x-4 gap-y-2.5 pt-1 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-3">
                        {item.list.map((entry) => (
                          <li
                            key={entry}
                            className="flex items-start gap-2.5 text-[13px] leading-snug text-[#0B0E2C] sm:gap-3 sm:text-[14px]"
                          >
                            <span
                              className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full sm:mt-1"
                              style={{ backgroundColor: `${item.color}1A` }}
                              aria-hidden
                            >
                              <Check
                                className="h-2.5 w-2.5"
                                style={{ color: item.color }}
                                strokeWidth={3}
                              />
                            </span>
                            <span className="min-w-0">{entry}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
