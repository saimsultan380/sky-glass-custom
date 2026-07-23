import Link from "next/link";
import {
  Clock,
  CalendarDays,
  Wrench,
  Zap,
  Monitor,
} from "lucide-react";
import { Container } from "@/components/layout/container";

const TRUST_ITEMS = [
  { label: "Simple Setup", icon: Wrench, color: "#FF6B2C" },
  { label: "Quick Activation", icon: Zap, color: "#7B2FFF" },
  { label: "Popular Devices Supported", icon: Monitor, color: "#2563EB" },
] as const;

export function HomepageCtaSection() {
  return (
    <section
      id="get-started"
      className="relative border-t border-[#0B0E2C]/10 bg-white py-10 sm:py-16 lg:py-24"
    >
      <Container>
        <div className="mx-auto max-w-5xl rounded-[1px] bg-[#F8FAFC] px-5 py-8 text-center sm:rounded-[1px] sm:px-10 sm:py-16">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Start Your{" "}
            <span className="text-gradient-brand">Sky Glass IPTV</span>{" "}
            Experience
          </h2>

          <div className="mx-auto mt-3 max-w-3xl space-y-2 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:space-y-4 sm:text-base sm:leading-[1.8]">
            <p>
              Enjoy available live television, sports, movies and popular series
              through a flexible service designed for modern streaming devices.
            </p>
            <p>
              Begin with a 24-hour trial, confirm compatibility with your
              preferred device and choose the Sky Glass IPTV subscription that
              best matches your viewing habits.
            </p>
          </div>

          <div className="mt-4 flex flex-col items-stretch justify-center gap-2.5 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/contact-us"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[1px] bg-gradient-brand px-6 py-2.5 text-[13px] font-semibold text-white transition-opacity duration-150 hover:opacity-90 sm:min-h-[48px] sm:py-3 sm:text-[14px]"
            >
              <Clock className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
              Start Your 24-Hour Free Trial
            </Link>
            <Link
              href="/subscription-plans"
              className="border-gradient-brand inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[1px] bg-white px-6 py-2.5 text-[13px] font-semibold text-[#0B0E2C] transition-opacity duration-150 hover:opacity-80 sm:min-h-[48px] sm:py-3 sm:text-[14px]"
            >
              <CalendarDays
                className="h-4 w-4 shrink-0 text-[#E91E8C]"
                strokeWidth={2}
                aria-hidden
              />
              View Sky Glass IPTV Plans
            </Link>
          </div>

          <div className="mx-auto mt-5 max-w-3xl sm:mt-12">
            <ul className="grid grid-cols-3 divide-x divide-[#0B0E2C]/10 overflow-hidden rounded-[1px] bg-white">
              {TRUST_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.label}
                    className="flex flex-col items-center justify-center gap-1 px-1.5 py-2.5 text-center sm:flex-row sm:gap-2.5 sm:px-5 sm:py-5 sm:text-left"
                  >
                    <Icon
                      className="h-3.5 w-3.5 shrink-0 sm:h-5 sm:w-5"
                      style={{ color: item.color }}
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    <span className="text-[11px] font-semibold leading-tight text-[#0B0E2C] sm:text-[15px]">
                      {item.label}
                    </span>
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
