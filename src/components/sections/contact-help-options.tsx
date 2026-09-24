import { Container } from "@/components/layout/container";
import { Clock, MessageCircle, Monitor, RefreshCw, Wrench, Users } from "lucide-react";

const helpOptions = [
  {
    title: "Request a Trial",
    description:
      "Tell us the device you plan to use. A 24-hour trial allows you to assess compatibility, navigation and playback before choosing a subscription.",
    icon: Clock,
    color: "#FF6B2C",
  },
  {
    title: "Ask About Subscription Plans",
    description:
      "Get help comparing Standard and Premium, subscription lengths and connection requirements.",
    icon: MessageCircle,
    color: "#7B2FFF",
  },
  {
    title: "Complete Your Installation",
    description:
      "Ask about an appropriate player, account configuration or a problem during setup.",
    icon: Monitor,
    color: "#2563EB",
  },
  {
    title: "Discuss a Renewal or Upgrade",
    description:
      "Provide enough information for the team to identify your account and explain the change you want to discuss.",
    icon: RefreshCw,
    color: "#E91E8C",
  },
  {
    title: "Report a Playback Problem",
    description:
      "Describe what happens, when it started and whether it affects one stream or the wider application.",
    icon: Wrench,
    color: "#FF6B2C",
  },
  {
    title: "Make a Reseller Enquiry",
    description:
      "Tell us about your expected customer volume and the package information you need.",
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
            How Can We{" "}
            <span className="text-gradient-brand">Help?</span>
          </h2>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2">
          {helpOptions.map((option) => {
            const Icon = option.icon;

            return (
              <article
                key={option.title}
                className="group relative flex flex-col overflow-hidden glass-card card-hover-lift p-5 hover:-translate-y-1 sm:p-8">
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
