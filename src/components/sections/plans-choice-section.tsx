import Link from "next/link";
import {
  CalendarRange,
  Link2,
  Monitor,
  SlidersHorizontal,
  Eye,
  Wallet,
  Clock,
  Check,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import type { LucideIcon } from "lucide-react";

const FACTORS: { label: string; icon: LucideIcon; color: string }[] = [
  { label: "Preferred duration", icon: CalendarRange, color: "#FF6B2C" },
  { label: "Number of connections", icon: Link2, color: "#E91E8C" },
  { label: "Supported devices", icon: Monitor, color: "#7B2FFF" },
  { label: "Required features", icon: SlidersHorizontal, color: "#2563EB" },
  { label: "Viewing preferences", icon: Eye, color: "#FF6B2C" },
  { label: "Available budget", icon: Wallet, color: "#E91E8C" },
];

export function PlansChoiceSection() {
  return (
    <section
      id="choose-plan"
      className="relative border-t border-[#0B0E2C]/10 bg-white"
    >
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="grid items-start gap-4 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14 xl:gap-16">
          <div>
            <h2 className="max-w-lg text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
              Choose the Right{" "}
              <span className="text-gradient-brand">
                Sky Glass IPTV Subscription
              </span>
            </h2>

            <div className="mt-4 space-y-2 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:space-y-4 sm:text-base sm:leading-[1.8]">
              <p>Every viewer has different entertainment preferences.</p>
              <p>
                Some mainly follow live television and sports, while others
                prefer movies, television series and on-demand content.
              </p>
              <p>
                Shorter subscriptions provide greater flexibility, while longer
                plans may offer better overall value.
              </p>
              <p>
                Before purchasing a longer subscription, you can request a
                24-hour trial to test compatibility, navigation and general
                playback performance.
              </p>
            </div>

            <Link
              href="/contact-us/"
              className="mt-4 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-[1px] bg-gradient-brand px-6 py-2.5 text-[13px] font-semibold text-white transition-opacity duration-150 hover:opacity-90 sm:mt-8 sm:min-h-[48px] sm:w-auto sm:py-3 sm:text-[14px]"
            >
              <Clock className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
              Request a 24-Hour Trial
            </Link>
          </div>

          <div className="rounded-[1px] bg-white p-5 shadow-[0_4px_20px_rgba(11,14,44,0.04),0_8px_24px_rgba(123,47,255,0.10)] sm:p-8">
            <p className="text-[14px] font-semibold text-[#0B0E2C] sm:text-sm">
              Sky Glass IPTV offers flexible subscription options that allow UK
              viewers to choose a plan according to:
            </p>

            <ul className="mt-3 space-y-1.5 sm:mt-5 sm:space-y-3">
              {FACTORS.map((factor) => {
                const Icon = factor.icon;
                return (
                  <li
                    key={factor.label}
                    className="flex items-center gap-2 rounded-[1px] px-3 py-2.5 sm:gap-3 sm:px-3.5 sm:py-3"
                  >
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] sm:h-10 sm:w-10 sm:rounded-[1px]"
                      style={{
                        backgroundColor: `${factor.color}14`,
                        color: factor.color,
                      }}
                    >
                      <Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" strokeWidth={1.75} aria-hidden />
                    </span>
                    <span className="flex-1 text-[14px] font-medium text-[#0B0E2C] sm:text-[15px]">
                      {factor.label}
                    </span>
                    <Check
                      className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
                      style={{ color: factor.color }}
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
