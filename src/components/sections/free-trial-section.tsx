import {
  Clock,
  Check,
  Smartphone,
  LayoutGrid,
  Wifi,
  MonitorPlay,
  CalendarDays,
  Hand,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import type { LucideIcon } from "lucide-react";
import { whatsappFreeTrialUrl } from "@/lib/site";

const EVALUATE_ITEMS: { label: string; icon: LucideIcon; color: string }[] = [
  { label: "Whether your device and player work together.", icon: Smartphone, color: "#FF6B2C" },
  { label: "How easily you can find the categories you want.", icon: LayoutGrid, color: "#E91E8C" },
  { label: "Playback during your usual viewing hours.", icon: Wifi, color: "#7B2FFF" },
  { label: "Picture quality on your screen.", icon: MonitorPlay, color: "#2563EB" },
  { label: "Programme-guide information where available.", icon: CalendarDays, color: "#FF6B2C" },
  { label: "Whether the interface feels comfortable to use.", icon: Hand, color: "#E91E8C" },
];

export function FreeTrialSection() {
  return (
    <section
      id="free-trial"
      className="relative border-t border-[#0B0E2C]/10 bg-transparent"
    >
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="grid items-start gap-4 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14 xl:gap-16">
          <div>
            <h2 className="max-w-lg text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
              Make Your 24-Hour Trial{" "}
              <span className="text-gradient-brand">Useful</span>
            </h2>

            <div className="mt-4 space-y-2 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:space-y-4 sm:text-base sm:leading-[1.8]">
              <p>
                Test the service in the conditions you expect to use regularly.
                Use your normal device, application and home connection.
              </p>
              <p>During the trial, check:</p>
              <p>Trial access may differ from a full paid package.</p>
            </div>

            <div className="mt-4 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:items-start sm:gap-4">
              <div className="flex w-full flex-col items-stretch gap-1.5 sm:w-auto">
                <a
                  href={whatsappFreeTrialUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-[20px] bg-gradient-brand px-5 py-2.5 text-[13px] font-semibold text-white transition-opacity duration-150 hover:opacity-90 sm:min-h-[48px] sm:w-auto sm:px-6 sm:py-3 sm:text-[14px]"
                >
                  <Clock className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                  Request Your 24-Hour Trial
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card p-5 sm:p-8">
            <p className="text-[12px] font-semibold text-[#0B0E2C] sm:text-sm">
              During the trial, check:
            </p>

            <ul className="mt-3 space-y-1.5 sm:mt-5 sm:space-y-3">
              {EVALUATE_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.label}
                    className="flex items-center gap-2.5 rounded-[20px] px-3 py-2.5 sm:gap-3 sm:px-3.5 sm:py-3"
                  >
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[20px] sm:h-9 sm:w-9 sm:rounded-[20px]"
                      style={{
                        backgroundColor: `${item.color}14`,
                        color: item.color,
                      }}
                    >
                      <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={1.75} aria-hidden />
                    </span>
                    <span className="flex-1 text-[14px] font-medium text-[#0B0E2C] sm:text-[15px]">
                      {item.label}
                    </span>
                    <Check
                      className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
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
