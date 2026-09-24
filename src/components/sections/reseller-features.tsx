import { Container } from "@/components/layout/container";
import {
  KeyRound,
  UserPlus,
  Wallet,
  CalendarClock,
  HeadphonesIcon,
} from "lucide-react";

const features = [
  {
    title: "Panel Access",
    description:
      "Receive the login information for your reseller account after activation.",
    icon: KeyRound,
    color: "#7B2FFF",
  },
  {
    title: "Customer Account Tools",
    description:
      "Create available subscription types and select the appropriate duration for each customer.",
    icon: UserPlus,
    color: "#E91E8C",
  },
  {
    title: "Credit Information",
    description:
      "Review your available balance and check the credits required for eligible activations or renewals.",
    icon: Wallet,
    color: "#FF6B2C",
  },
  {
    title: "Subscription Records",
    description:
      "Monitor account status and expiry information so you can organise renewal conversations.",
    icon: CalendarClock,
    color: "#2563EB",
  },
  {
    title: "Reseller Assistance",
    description:
      "Ask for help with panel access, account creation, credit usage and common management questions.",
    icon: HeadphonesIcon,
    color: "#7B2FFF",
  },
];

export function ResellerFeatures() {
  return (
    <section className="border-b border-[#0B0E2C]/10 bg-transparent py-10 sm:py-16 lg:py-24">
      <Container>
        <div className="text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            What You{" "}
            <span className="text-gradient-brand">Receive</span>
          </h2>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group relative flex flex-col overflow-hidden glass-card card-hover-lift p-5 hover:-translate-y-1 sm:p-8">
                <div className="relative z-10 flex h-full flex-1 flex-col">
                  <div className="flex items-center gap-2.5 sm:gap-4">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[20px] glass-card sm:h-14 sm:w-14"
                      style={{ color: feature.color }}
                    >
                      <Icon className="h-4 w-4 sm:h-7 sm:w-7" />
                    </div>
                    <h3 className="text-base font-bold text-[#0B0E2C] sm:text-xl">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="mt-2.5 flex-1 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-6 sm:text-[15px] sm:leading-relaxed">
                    {feature.description}
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
