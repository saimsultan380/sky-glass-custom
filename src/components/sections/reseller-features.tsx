import { Container } from "@/components/layout/container";
import {
  UserPlus,
  Wallet,
  CalendarClock,
  RefreshCw,
} from "lucide-react";

const features = [
  {
    title: "Create Customer Accounts",
    description:
      "Use the panel to create eligible customer accounts for the subscription types available to your panel.",
    icon: UserPlus,
    color: "#E91E8C",
  },
  {
    title: "Check Credit Balance",
    description:
      "Review your available credits before activating or renewing customer subscriptions.",
    icon: Wallet,
    color: "#FF6B2C",
  },
  {
    title: "Account Status & Expiry",
    description:
      "Review account status and expiry dates so you know when renewals may be needed.",
    icon: CalendarClock,
    color: "#2563EB",
  },
  {
    title: "Organise Renewals",
    description:
      "Use panel records to help organise renewals as your customer base grows.",
    icon: RefreshCw,
    color: "#7B2FFF",
  },
];

export function ResellerFeatures() {
  return (
    <section className="border-b border-[#0B0E2C]/10 bg-transparent py-10 sm:py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center sm:text-left">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            What Can I Do in the{" "}
            <span className="text-gradient-brand">Panel?</span>
          </h2>
          <p className="mt-4 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-[1.75]">
            Use the panel to create eligible customer accounts, check your
            credit balance and review account status and expiry dates. It can
            also help you organise renewals as your customer base grows.
          </p>
          <p className="mt-2 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-4 sm:text-base sm:leading-[1.75]">
            You handle your customer relationships, retail pricing and
            payments. Give customers accurate information about their plan,
            device setup, account duration and simultaneous connection
            allowance.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group relative flex flex-col overflow-hidden glass-card card-hover-lift p-5 hover:-translate-y-1 sm:p-8"
              >
                <div className="relative z-10 flex h-full flex-1 flex-col">
                  <div className="flex items-center gap-2.5 sm:gap-4">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[20px] glass-card sm:h-14 sm:w-14"
                      style={{ color: feature.color }}
                    >
                      <Icon className="h-4 w-4 sm:h-7 sm:w-7" />
                    </div>
                    <h3 className="text-base font-bold text-[#0B0E2C] sm:text-lg">
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
