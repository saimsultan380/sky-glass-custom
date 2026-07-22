import {
  Clock,
  CalendarRange,
  Zap,
  Smartphone,
  AppWindow,
  Clapperboard,
  Trophy,
  CalendarDays,
  MonitorPlay,
  LifeBuoy,
  Check,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import type { LucideIcon } from "lucide-react";

const BENEFITS: { icon: LucideIcon; color: string; label: string }[] = [
  {
    icon: Clock,
    color: "#FF6B2C",
    label: "A 24-hour trial option",
  },
  {
    icon: CalendarRange,
    color: "#E91E8C",
    label: "Flexible subscription durations",
  },
  {
    icon: Zap,
    color: "#7B2FFF",
    label: "Quick activation",
  },
  {
    icon: Smartphone,
    color: "#2563EB",
    label: "Official application for compatible Android and Firestick devices",
  },
  {
    icon: AppWindow,
    color: "#FF6B2C",
    label: "Alternative applications for other supported platforms",
  },
  {
    icon: Clapperboard,
    color: "#E91E8C",
    label: "Live and on-demand entertainment",
  },
  {
    icon: Trophy,
    color: "#7B2FFF",
    label: "Sports coverage where available",
  },
  {
    icon: CalendarDays,
    color: "#2563EB",
    label: "Electronic Programme Guide support",
  },
  {
    icon: MonitorPlay,
    color: "#E91E8C",
    label: "HD, Full HD and 4K options where available",
  },
  {
    icon: LifeBuoy,
    color: "#FF6B2C",
    label: "Installation and setup assistance",
  },
];

export function KeyBenefitsSection() {
  return (
    <section
      id="key-benefits"
      className="relative border-t border-[#0B0E2C]/10 bg-white"
    >
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="grid items-start gap-6 sm:gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 xl:gap-16">
          <div className="lg:sticky lg:top-28">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#E91E8C]">
              Key Benefits
            </p>
            <h2 className="mt-2 max-w-md text-[22px] font-bold leading-[1.15] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-4xl sm:leading-[1.12] lg:text-[42px]">
              Why Viewers Choose{" "}
              <span className="text-gradient-brand">Sky Glass IPTV</span>
            </h2>
            <p className="mt-4 text-[14px] leading-[1.7] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-[1.8]">
              Sky Glass IPTV combines flexibility, device compatibility and
              straightforward setup for viewers across the UK.
            </p>
            <p className="mt-3 text-[13px] font-semibold text-[#0B0E2C] sm:mt-4 sm:text-sm">
              Key benefits include:
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2 sm:gap-5">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <li
                  key={benefit.label}
                  className="group relative flex items-center gap-3 overflow-hidden rounded-[8px] border border-[#0B0E2C]/10 bg-white p-3.5 shadow-[var(--card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0B0E2C]/20 hover:shadow-[var(--card-shadow-hover)] sm:gap-4 sm:p-6"
                  style={{
                    "--card-shadow": `0 4px 20px rgba(11, 14, 44, 0.04), 0 8px 24px ${benefit.color}1A`,
                    "--card-shadow-hover": `0 8px 30px rgba(11, 14, 44, 0.08), 0 12px 40px ${benefit.color}33`,
                  } as React.CSSProperties}
                >
                  <div className="relative z-10 flex w-full items-stretch gap-3 sm:gap-4">
                    <span className="accent-line-brand" aria-hidden />
                    <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-[#0B0E2C]/5 sm:h-12 sm:w-12"
                        style={{ color: benefit.color, backgroundColor: `${benefit.color}15` }}
                      >
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden />
                      </span>
                      <span className="min-w-0 flex-1 text-[13px] font-semibold leading-snug text-[#0B0E2C] sm:text-[16px]">
                        {benefit.label}
                      </span>
                      <Check
                        className="h-4 w-4 shrink-0 sm:h-5 sm:w-5"
                        style={{ color: benefit.color }}
                        strokeWidth={3}
                        aria-hidden
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
