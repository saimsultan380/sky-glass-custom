import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  KeyRound,
  Download,
  PlayCircle,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import type { LucideIcon } from "lucide-react";

const STEPS: {
  step: string;
  icon: LucideIcon;
  color: string;
  title: string;
  body: string[];
}[] = [
  {
    step: "01",
    icon: ClipboardList,
    color: "#FF6B2C",
    title: "Request a Trial or Select a Plan",
    body: [
      "Begin with a 24-hour trial or choose the subscription option that best matches your viewing requirements.",
    ],
  },
  {
    step: "02",
    icon: KeyRound,
    color: "#E91E8C",
    title: "Receive Your Activation Information",
    body: [
      "After confirmation, you receive the account or configuration details required for your selected device and application.",
    ],
  },
  {
    step: "03",
    icon: Download,
    color: "#7B2FFF",
    title: "Install the Correct Application",
    body: [
      "Install the official Sky Glass IPTV app on compatible Android and Firestick devices.",
      "For another platform, choose a supported alternative IPTV player from the relevant application store.",
    ],
  },
  {
    step: "04",
    icon: PlayCircle,
    color: "#2563EB",
    title: "Sign In and Start Exploring",
    body: [
      "Enter the supplied information, allow the available categories to load and begin exploring live television and on-demand entertainment.",
    ],
  },
];

export function FourSimpleStepsSection() {
  return (
    <section
      id="four-simple-steps"
      className="relative border-t border-[#0B0E2C]/10 bg-white"
    >
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#E91E8C]">
            Getting Started
          </p>
          <h2 className="mt-2 text-[22px] font-bold leading-[1.15] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-4xl sm:leading-[1.12] lg:text-[42px]">
            Start Watching in{" "}
            <span className="text-gradient-brand">Four Simple Steps</span>
          </h2>
          <p className="mt-4 text-[14px] leading-[1.7] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-[1.8]">
            Getting started with Sky Glass IPTV does not require advanced
            technical knowledge.
          </p>
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
                        style={{ backgroundColor: `${item.color}14`, color: item.color }}
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
                    <div className="mt-3 space-y-2 text-[14px] leading-[1.7] text-[#5C607A]">
                      {item.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Mobile / tablet: stacked cards */}
        <ol className="mt-8 grid gap-3 sm:mt-12 sm:gap-5 lg:hidden">
          {STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.step}
                className="group relative flex flex-col overflow-hidden rounded-[8px] border border-[#0B0E2C]/10 bg-white p-4 shadow-[var(--card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0B0E2C]/20 hover:shadow-[var(--card-shadow-hover)] sm:p-8"
                style={{
                  "--card-shadow": `0 4px 20px rgba(11, 14, 44, 0.04), 0 8px 24px ${item.color}1A`,
                  "--card-shadow-hover": `0 8px 30px rgba(11, 14, 44, 0.08), 0 12px 40px ${item.color}33`,
                } as React.CSSProperties}
              >
                <div className="relative z-10 flex gap-3 sm:gap-4">
                  <span className="accent-line-brand" aria-hidden />
                  <div className="flex min-w-0 flex-1 items-start gap-3 sm:gap-5">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-[#0B0E2C]/5 sm:h-12 sm:w-12"
                      style={{ color: item.color, backgroundColor: `${item.color}15` }}
                    >
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden />
                    </span>
                    <div className="min-w-0 flex-1">
                      <span className="text-[12px] font-bold tracking-[0.14em] text-gradient-brand">
                        STEP {item.step}
                      </span>
                      <h3 className="mt-1 text-lg font-bold tracking-tight text-[#0B0E2C] sm:mt-1.5 sm:text-xl">
                        {item.title}
                      </h3>
                      <div className="mt-2.5 space-y-2 text-[13px] leading-[1.65] text-[#5C607A] sm:mt-3 sm:text-[15px] sm:leading-[1.75]">
                        {item.body.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-8 flex justify-center sm:mt-12">
          <Link
            href="/contact-us"
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[10px] bg-gradient-brand px-6 py-3 text-[14px] font-semibold text-white transition-opacity duration-150 hover:opacity-90 sm:w-auto"
          >
            Start Your Sky Glass IPTV Trial
            <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
