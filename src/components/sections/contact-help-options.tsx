import { Container } from "@/components/layout/container";
import {
  MessageCircle,
  Monitor,
  PlayCircle,
  RefreshCw,
  Users,
} from "lucide-react";

const helpOptions = [
  {
    title: "Trial or subscription",
    description:
      "Share your device, preferred duration, simultaneous connection needs and any content you want checked.",
    icon: MessageCircle,
    color: "#7B2FFF",
  },
  {
    title: "Installation",
    description:
      "Include your exact device model, player name and the step where you got stuck.",
    icon: Monitor,
    color: "#2563EB",
  },
  {
    title: "Login or playback",
    description:
      "Provide the error message, whether the problem affects one stream or several, and what you have already tried.",
    icon: PlayCircle,
    color: "#FF6B2C",
  },
  {
    title: "Renewal",
    description:
      "Give enough information to identify your account and tell us which duration you want to discuss.",
    icon: RefreshCw,
    color: "#E91E8C",
  },
  {
    title: "Reseller panel",
    description:
      "Ask about the current price and terms for the minimum 120-credit starting purchase.",
    icon: Users,
    color: "#7B2FFF",
  },
];

export function ContactHelpOptions() {
  return (
    <section className="border-b border-[#0B0E2C]/10 bg-transparent py-10 sm:py-16 lg:py-24">
      <Container>
        <div className="text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            How can we{" "}
            <span className="text-gradient-brand">help?</span>
          </h2>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2">
          {helpOptions.map((option) => {
            const Icon = option.icon;

            return (
              <article
                key={option.title}
                className="group relative flex flex-col overflow-hidden glass-card card-hover-lift p-5 hover:-translate-y-1 sm:p-8"
              >
                <div className="relative z-10 flex h-full flex-1 flex-col">
                  <div className="flex items-center gap-2.5 sm:gap-4">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[20px] glass-card sm:h-14 sm:w-14"
                      style={{ color: option.color }}
                    >
                      <Icon className="h-4 w-4 sm:h-7 sm:w-7" />
                    </div>
                    <h3 className="text-[15px] font-bold text-[#0B0E2C] sm:text-2xl">
                      {option.title}
                    </h3>
                  </div>

                  <p className="mt-2.5 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-relaxed">
                    {option.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
