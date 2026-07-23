import {
  ClipboardList,
  ShoppingCart,
  KeyRound,
  PlayCircle,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import type { LucideIcon } from "lucide-react";

const STEPS: {
  step: string;
  icon: LucideIcon;
  color: string;
  title: string;
  body: string;
}[] = [
  {
    step: "01",
    icon: ClipboardList,
    color: "#FF6B2C",
    title: "Select a Subscription",
    body: "Choose between the Standard and Premium plans and select your preferred duration and connection option.",
  },
  {
    step: "02",
    icon: ShoppingCart,
    color: "#E91E8C",
    title: "Complete Your Order",
    body: "Provide the information required to process and activate your subscription.",
  },
  {
    step: "03",
    icon: KeyRound,
    color: "#7B2FFF",
    title: "Receive Your Setup Details",
    body: "After confirmation, you receive the login or configuration information required for your selected IPTV application.",
  },
  {
    step: "04",
    icon: PlayCircle,
    color: "#2563EB",
    title: "Install and Start Streaming",
    body: "Install the correct application, enter your supplied details and allow the available categories to load.",
  },
];

export function PlansFourStepsSection() {
  return (
    <section
      id="subscription-steps"
      className="relative border-t border-[#0B0E2C]/10 bg-white"
    >
      <Container className="py-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E91E8C] sm:text-[12px]">
            How It Works
          </p>
          <h2 className="mt-1.5 text-[20px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-4xl sm:leading-[1.12] lg:text-[42px]">
            Start Your Subscription in{" "}
            <span className="text-gradient-brand">Four Steps</span>
          </h2>
        </div>

        {/* Desktop: connected horizontal steps */}
        <div className="relative mt-12 hidden lg:mt-16 lg:block">
          <div
            className="absolute left-[12%] right-[12%] top-[52px] h-[2px] bg-gradient-brand opacity-30"
            aria-hidden
          />
          <ol className="grid grid-cols-4 gap-6">
            {STEPS.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.step} className="relative flex flex-col">
                  <div className="flex flex-col items-center text-center">
                    <span className="relative z-[1] flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#0B0E2C]/10 bg-white">
                      <span
                        className="flex h-14 w-14 items-center justify-center rounded-full"
                        style={{
                          backgroundColor: `${item.color}14`,
                          color: item.color,
                        }}
                      >
                        <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                      </span>
                    </span>
                    <span className="mt-4 text-[13px] font-bold tracking-[0.14em] text-gradient-brand">
                      STEP {item.step}
                    </span>
                    <h3 className="mt-2 text-[17px] font-bold leading-snug tracking-tight text-[#0B0E2C]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-[1.7] text-[#5C607A]">
                      {item.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Mobile / tablet: stacked cards */}
        <ol className="mt-5 grid gap-2.5 sm:mt-12 sm:gap-5 lg:hidden">
          {STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.step}
                className="group relative flex flex-col overflow-hidden rounded-[8px] border border-[#0B0E2C]/10 bg-white p-3 shadow-[var(--card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0B0E2C]/20 hover:shadow-[var(--card-shadow-hover)] sm:p-8"
                style={
                  {
                    "--card-shadow": `0 4px 20px rgba(11, 14, 44, 0.04), 0 8px 24px ${item.color}1A`,
                    "--card-shadow-hover": `0 8px 30px rgba(11, 14, 44, 0.08), 0 12px 40px ${item.color}33`,
                  } as React.CSSProperties
                }
              >
                <div className="relative z-10 flex gap-2.5 sm:gap-4">
                  <span className="accent-line-brand hidden sm:block" aria-hidden />
                  <div className="flex min-w-0 flex-1 items-start gap-2.5 sm:gap-5">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-[#0B0E2C]/5 sm:h-12 sm:w-12 sm:rounded-[8px]"
                      style={{
                        color: item.color,
                        backgroundColor: `${item.color}15`,
                      }}
                    >
                      <Icon className="h-4 w-4 sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden />
                    </span>
                    <div className="min-w-0 flex-1">
                      <span className="text-[11px] font-bold tracking-[0.14em] text-gradient-brand sm:text-[12px]">
                        STEP {item.step}
                      </span>
                      <h3 className="mt-0.5 text-[15px] font-bold tracking-tight text-[#0B0E2C] sm:mt-1.5 sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-[12px] leading-[1.5] text-[#5C607A] sm:mt-3 sm:text-[15px] sm:leading-[1.75]">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
