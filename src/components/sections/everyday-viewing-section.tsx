import {
  LayoutGrid,
  CalendarDays,
  History,
  MonitorPlay,
  Search,
  Check,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Feature = {
  icon: LucideIcon;
  color: string;
  title: string;
  body: string[];
  list?: readonly string[];
  listIntro?: string;
};

const FEATURES: Feature[] = [
  {
    icon: LayoutGrid,
    color: "#FF6B2C",
    title: "Organised Categories",
    body: [
      "Live television, sports, movies and television series are arranged into clear sections, making available content easier to browse.",
    ],
  },
  {
    icon: CalendarDays,
    color: "#E91E8C",
    title: "Electronic Programme Guide",
    body: [
      "The Electronic Programme Guide displays available channel schedules and programme information in a familiar television-guide format.",
      "EPG availability depends on the selected channel, application and content source.",
    ],
  },
  {
    icon: History,
    color: "#7B2FFF",
    title: "Catch-Up Support",
    body: [
      "Where available, Catch-Up functionality provides access to selected programmes after their original broadcast time.",
      "Not every channel or programme supports Catch-Up.",
    ],
  },
  {
    icon: MonitorPlay,
    color: "#2563EB",
    title: "High-Quality Playback",
    body: [
      "Actual playback quality depends on the content source, application, device, display and internet connection.",
    ],
    listIntro: "Selected content may be available in:",
    list: ["SD", "HD", "Full HD", "4K"],
  },
  {
    icon: Search,
    color: "#E91E8C",
    title: "Search and Favourites",
    body: [
      "Compatible applications may allow viewers to search for content and save frequently watched channels or categories for quicker access.",
    ],
  },
];

export function EverydayViewingSection() {
  return (
    <section
      id="everyday-viewing"
      className="relative border-t border-[#0B0E2C]/10 bg-white"
    >
      <Container className="py-6 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E91E8C] sm:text-[12px]">
            Everyday Experience
          </p>
          <h2 className="mt-1.5 text-[20px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-4xl sm:leading-[1.12] lg:text-[42px]">
            Designed for Simple{" "}
            <span className="text-gradient-brand">Everyday Viewing</span>
          </h2>
          <div className="mt-3 space-y-1.5 text-[13px] leading-[1.55] text-[#5C607A] sm:mt-6 sm:space-y-3 sm:text-base sm:leading-[1.8]">
            <p>
              A good IPTV experience should be straightforward to navigate and
              easy to use.
            </p>
            <p>
              Sky Glass IPTV is designed to help viewers access entertainment
              without unnecessary technical complexity.
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-2.5 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-6">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            const isLastOdd =
              FEATURES.length % 2 === 1 && index === FEATURES.length - 1;

            return (
              <article
                key={feature.title}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-[8px] border border-[#0B0E2C]/10 bg-white p-3 shadow-[var(--card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0B0E2C]/20 hover:shadow-[var(--card-shadow-hover)] sm:p-8",
                  index < 3
                    ? "lg:col-span-2"
                    : isLastOdd
                      ? "md:col-span-2 lg:col-span-3"
                      : "lg:col-span-3"
                )}
                style={{
                  "--card-shadow": `0 4px 20px rgba(11, 14, 44, 0.04), 0 8px 24px ${feature.color}1A`,
                  "--card-shadow-hover": `0 8px 30px rgba(11, 14, 44, 0.08), 0 12px 40px ${feature.color}33`,
                } as React.CSSProperties}
              >
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center gap-2.5 sm:gap-4">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-[#0B0E2C]/5 sm:h-12 sm:w-12 sm:rounded-[12px]"
                      style={{ color: feature.color, backgroundColor: `${feature.color}15` }}
                    >
                      <Icon className="h-4 w-4 sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden />
                    </span>
                    <h3 className="text-[15px] font-bold tracking-tight text-[#0B0E2C] sm:text-xl">
                      {feature.title}
                    </h3>
                  </div>

                  {feature.listIntro && (
                    <p className="mt-2.5 text-[12px] font-semibold text-[#0B0E2C] sm:mt-5 sm:text-[14px]">
                      {feature.listIntro}
                    </p>
                  )}

                  {feature.list && (
                    <ul className="mt-2 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2.5">
                      {feature.list.map((item) => (
                        <li
                          key={item}
                          className="inline-flex items-center gap-1.5 rounded-[6px] border border-[#0B0E2C]/10 bg-[#0B0E2C]/[0.02] px-2 py-1 text-[11px] font-semibold text-[#0B0E2C] sm:gap-2 sm:rounded-[8px] sm:px-3.5 sm:py-2 sm:text-[13px]"
                        >
                          <Check
                            className="h-3 w-3 sm:h-3.5 sm:w-3.5"
                            style={{ color: feature.color }}
                            strokeWidth={3}
                            aria-hidden
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-2.5 space-y-1.5 text-[12px] leading-[1.5] text-[#5C607A] sm:mt-5 sm:space-y-2.5 sm:text-[15px] sm:leading-[1.75]">
                    {feature.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
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
