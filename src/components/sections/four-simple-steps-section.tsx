import {
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
      "Tell us which device you intend to use and whether you want trial access or a subscription.",
    ],
  },
  {
    step: "02",
    icon: KeyRound,
    color: "#E91E8C",
    title: "Receive Your Account Information",
    body: [
      "After confirmation, you receive the details needed to configure the appropriate application.",
    ],
  },
  {
    step: "03",
    icon: Download,
    color: "#7B2FFF",
    title: "Complete Your Device Setup",
    body: [
      "Follow the installation instructions for your device, then enter the supplied information carefully.",
    ],
  },
  {
    step: "04",
    icon: PlayCircle,
    color: "#2563EB",
    title: "Browse and Test Playback",
    body: [
      "Allow the available categories to load. Open a few streams and check navigation, sound and picture quality.",
    ],
  },
];

export function FourSimpleStepsSection() {
  return (
    <section
      id="four-simple-steps"
      className="relative border-t border-[#0B0E2C]/10 bg-transparent"
    >
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            How to{" "}
            <span className="text-gradient-brand">Get Started</span>
          </h2>
        </div>

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
                    <span className="relative z-[1] flex h-[72px] w-[72px] items-center justify-center rounded-full glass-card">
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

        <ol className="mt-6 grid gap-4 sm:mt-12 sm:gap-5 lg:hidden">
          {STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.step}
                className="group relative flex flex-col overflow-hidden glass-card card-hover-lift p-5 hover:-translate-y-1 sm:p-8">
                <div className="relative z-10 flex gap-2.5 sm:gap-4">
                  <div className="flex min-w-0 flex-1 items-start gap-2.5 sm:gap-5">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[20px] sm:h-12 sm:w-12 sm:rounded-[20px]"
                      style={{ color: item.color, backgroundColor: `${item.color}15` }}
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
                      <div className="mt-1.5 space-y-1.5 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-3 sm:text-[15px] sm:leading-[1.75]">
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
      </Container>
    </section>
  );
}
