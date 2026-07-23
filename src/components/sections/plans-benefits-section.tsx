import {
  CalendarRange,
  Layers,
  Clock,
  Zap,
  Clapperboard,
  Trophy,
  Monitor,
  CalendarDays,
  MonitorPlay,
  LifeBuoy,
  Check,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import type { LucideIcon } from "lucide-react";

const BENEFITS: { icon: LucideIcon; color: string; label: string }[] = [
  { icon: CalendarRange, color: "#FF6B2C", label: "Flexible plan durations" },
  { icon: Layers, color: "#E91E8C", label: "Standard and Premium options" },
  { icon: Clock, color: "#7B2FFF", label: "24-hour trial availability" },
  { icon: Zap, color: "#2563EB", label: "Quick account activation" },
  { icon: Clapperboard, color: "#FF6B2C", label: "Available live and on-demand entertainment" },
  { icon: Trophy, color: "#E91E8C", label: "Sports coverage where available" },
  { icon: Monitor, color: "#7B2FFF", label: "Support for popular devices" },
  { icon: CalendarDays, color: "#2563EB", label: "EPG and Catch-Up functionality" },
  { icon: MonitorPlay, color: "#E91E8C", label: "HD, Full HD and 4K options where available" },
  { icon: LifeBuoy, color: "#FF6B2C", label: "Installation and setup assistance" },
];

export function PlansBenefitsSection() {
  return (
    <section
      id="plan-benefits"
      className="relative border-t border-[#0B0E2C]/10 bg-white"
    >
      <Container className="py-6 sm:py-20 lg:py-24">
        <div className="grid items-start gap-4 sm:gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 xl:gap-16">
          <div className="lg:sticky lg:top-28">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E91E8C] sm:text-[12px]">
              Key Benefits
            </p>
            <h2 className="mt-1.5 max-w-md text-[20px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-4xl sm:leading-[1.12] lg:text-[42px]">
              Why Choose a{" "}
              <span className="text-gradient-brand">Sky Glass IPTV Plan?</span>
            </h2>
            <p className="mt-3 text-[13px] leading-[1.55] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-[1.8]">
              Sky Glass IPTV is designed for UK viewers looking for greater
              flexibility and broad device compatibility.
            </p>
            <p className="mt-2 text-[12px] font-semibold text-[#0B0E2C] sm:mt-4 sm:text-sm">
              Key subscription benefits include:
            </p>
          </div>

          <ul className="grid gap-2 sm:grid-cols-2 sm:gap-5">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <li
                  key={benefit.label}
                  className="group relative flex items-center gap-2.5 overflow-hidden rounded-[8px] border border-[#0B0E2C]/10 bg-white p-2.5 shadow-[var(--card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0B0E2C]/20 hover:shadow-[var(--card-shadow-hover)] sm:gap-4 sm:p-6"
                  style={
                    {
                      "--card-shadow": `0 4px 20px rgba(11, 14, 44, 0.04), 0 8px 24px ${benefit.color}1A`,
                      "--card-shadow-hover": `0 8px 30px rgba(11, 14, 44, 0.08), 0 12px 40px ${benefit.color}33`,
                    } as React.CSSProperties
                  }
                >
                  <div className="relative z-10 flex w-full items-stretch gap-2.5 sm:gap-4">
                    <span className="accent-line-brand hidden sm:block" aria-hidden />
                    <div className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-4">
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] border border-[#0B0E2C]/5 sm:h-12 sm:w-12 sm:rounded-[8px]"
                        style={{
                          color: benefit.color,
                          backgroundColor: `${benefit.color}15`,
                        }}
                      >
                        <Icon className="h-3.5 w-3.5 sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden />
                      </span>
                      <span className="min-w-0 flex-1 text-[12px] font-semibold leading-snug text-[#0B0E2C] sm:text-[16px]">
                        {benefit.label}
                      </span>
                      <Check
                        className="h-3.5 w-3.5 shrink-0 sm:h-5 sm:w-5"
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
