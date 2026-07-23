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
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="grid items-start gap-4 sm:gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 xl:gap-16">
          <div className="lg:sticky lg:top-28">
            <h2 className="max-w-md text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
              Why Choose a{" "}
              <span className="text-gradient-brand">Sky Glass IPTV Plan?</span>
            </h2>
            <p className="mt-4 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-[1.8]">
              Sky Glass IPTV is designed for UK viewers looking for greater
              flexibility and broad device compatibility.
            </p>
            <p className="mt-2 text-[14px] font-semibold text-[#0B0E2C] sm:mt-4 sm:text-sm">
              Key subscription benefits include:
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2 sm:gap-5">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <li
                  key={benefit.label}
                  className="group relative flex items-center gap-3 overflow-hidden rounded-[1px] bg-white p-5 shadow-[var(--card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--card-shadow-hover)] sm:gap-4 sm:p-6"
                  style={
                    {
                      "--card-shadow": `0 4px 20px rgba(11, 14, 44, 0.04), 0 8px 24px ${benefit.color}1A`,
                      "--card-shadow-hover": `0 8px 30px rgba(11, 14, 44, 0.08), 0 12px 40px ${benefit.color}33`,
                    } as React.CSSProperties
                  }
                >
                  <div className="relative z-10 flex w-full items-stretch gap-3 sm:gap-4">
                    <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] sm:h-12 sm:w-12 sm:rounded-[1px]"
                        style={{
                          color: benefit.color,
                          backgroundColor: `${benefit.color}15`,
                        }}
                      >
                        <Icon className="h-4 w-4 sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden />
                      </span>
                      <span className="min-w-0 flex-1 text-[14px] font-semibold leading-snug text-[#0B0E2C] sm:text-[16px]">
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
