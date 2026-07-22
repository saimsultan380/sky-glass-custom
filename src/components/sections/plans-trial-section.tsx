import Link from "next/link";
import {
  Clock,
  Headphones,
  Check,
  Smartphone,
  AppWindow,
  LayoutGrid,
  Film,
  Wifi,
  MonitorPlay,
  CalendarDays,
  Hand,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import type { LucideIcon } from "lucide-react";

const EVALUATE_ITEMS: { label: string; icon: LucideIcon; color: string }[] = [
  { label: "Compatibility with your device", icon: Smartphone, color: "#FF6B2C" },
  { label: "IPTV application performance", icon: AppWindow, color: "#E91E8C" },
  { label: "Channel and category navigation", icon: LayoutGrid, color: "#7B2FFF" },
  { label: "Available entertainment sections", icon: Film, color: "#2563EB" },
  { label: "General streaming stability", icon: Wifi, color: "#FF6B2C" },
  { label: "Available picture quality", icon: MonitorPlay, color: "#E91E8C" },
  { label: "Electronic Programme Guide functionality", icon: CalendarDays, color: "#7B2FFF" },
  { label: "Ease of use", icon: Hand, color: "#2563EB" },
];

export function PlansTrialSection() {
  return (
    <section
      id="plans-trial"
      className="relative border-t border-[#0B0E2C]/10 bg-white"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14 xl:gap-16">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#E91E8C]">
              Try Before You Commit
            </p>
            <h2 className="mt-3 max-w-lg text-[28px] font-bold leading-[1.15] tracking-tight text-[#0B0E2C] sm:text-4xl sm:leading-[1.12] lg:text-[42px]">
              Try Sky Glass IPTV Before Choosing a{" "}
              <span className="text-gradient-brand">Longer Plan</span>
            </h2>

            <div className="mt-5 space-y-4 text-[15px] leading-[1.75] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-[1.8]">
              <p>
                A 24-hour trial gives you an opportunity to evaluate the
                service before purchasing a longer subscription.
              </p>
              <p>
                Trial access may not include every feature or category
                available with a complete paid subscription.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
              <Link
                href="/contact-us"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[8px] bg-gradient-brand px-5 py-3 text-[14px] font-semibold text-white transition-opacity duration-150 hover:opacity-90 sm:w-auto sm:px-6"
              >
                <Clock className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                Request Your 24-Hour Trial
              </Link>
              <Link
                href="/contact-us"
                className="border-gradient-brand inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[8px] px-5 py-3 text-[14px] font-semibold text-[#0B0E2C] transition-opacity duration-150 hover:opacity-80 sm:w-auto sm:px-6"
              >
                <Headphones
                  className="h-4 w-4 shrink-0 text-[#E91E8C]"
                  strokeWidth={2}
                  aria-hidden
                />
                Contact Setup Support
              </Link>
            </div>
          </div>

          <div className="rounded-[8px] border border-[#0B0E2C]/10 bg-white p-6 shadow-[0_4px_20px_rgba(11,14,44,0.04),0_8px_24px_rgba(233,30,140,0.10)] sm:p-8">
            <p className="text-sm font-semibold text-[#0B0E2C]">
              During the trial, you can check:
            </p>

            <ul className="mt-5 space-y-3">
              {EVALUATE_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.label}
                    className="flex items-center gap-3 rounded-[8px] border border-[#0B0E2C]/8 px-3.5 py-3"
                  >
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px]"
                      style={{
                        backgroundColor: `${item.color}14`,
                        color: item.color,
                      }}
                    >
                      <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                    </span>
                    <span className="flex-1 text-[14px] font-medium text-[#0B0E2C] sm:text-[15px]">
                      {item.label}
                    </span>
                    <Check
                      className="h-4 w-4 shrink-0"
                      style={{ color: item.color }}
                      strokeWidth={2.25}
                      aria-hidden
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
