import { Container } from "@/components/layout/container";
import { Users, CreditCard, Tag, Zap, TrendingUp, HeadphonesIcon } from "lucide-react";

const benefits = [
  {
    title: "Simple Customer Management",
    description:
      "Create and organise customer subscriptions from one central panel. This reduces the need to manage account details across multiple documents or platforms.",
    icon: Users,
    color: "#7B2FFF",
  },
  {
    title: "Flexible Credit System",
    description:
      "Purchase credits according to your business requirements and use them when activating or renewing eligible customer subscriptions.",
    icon: CreditCard,
    color: "#E91E8C",
  },
  {
    title: "Control Your Retail Pricing",
    description:
      "Set your own customer-facing prices based on target audience, operating costs, marketing expenses, support requirements and preferred profit margin.",
    icon: Tag,
    color: "#FF6B2C",
  },
  {
    title: "Quick Subscription Activation",
    description:
      "Activate available subscriptions directly from the dashboard without waiting for every request to be processed manually.",
    icon: Zap,
    color: "#2563EB",
  },
  {
    title: "Business Growth Potential",
    description:
      "Start with a smaller package and purchase additional credits as your customer base expands.",
    icon: TrendingUp,
    color: "#7B2FFF",
  },
  {
    title: "Dedicated Assistance",
    description:
      "Receive guidance for panel access, credit usage, customer-account creation, subscription durations, eligible renewals and common panel questions.",
    icon: HeadphonesIcon,
    color: "#E91E8C",
  },
];

export function ResellerBenefits() {
  return (
    <section className="border-b border-[#0B0E2C]/10 bg-white py-10 sm:py-16 lg:py-24">
      <Container>
        <div className="text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Why Become a Sky Glass{" "}
            <span className="text-gradient-brand">IPTV Reseller?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-[1.6] text-[#5C607A] sm:mt-4 sm:text-base sm:leading-[1.75]">
            Starting as a reseller can provide a flexible way to build a digital
            service business without creating a complete subscription-management
            system from the beginning.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article
                key={benefit.title}
                className="group relative flex flex-col overflow-hidden rounded-[1px] bg-white p-5 shadow-[var(--card-shadow)] card-hover-lift hover:-translate-y-1 hover:shadow-[var(--card-shadow-hover)] sm:p-8"
                style={
                  {
                    "--card-shadow": `0 4px 20px rgba(11, 14, 44, 0.04), 0 8px 24px ${benefit.color}1A`,
                    "--card-shadow-hover": `0 8px 30px rgba(11, 14, 44, 0.08), 0 12px 40px ${benefit.color}33`,
                  } as React.CSSProperties
                }
              >
                <div className="relative z-10 flex h-full flex-1 flex-col">
                  <div className="flex items-center gap-2.5 sm:gap-4">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] bg-white shadow-sm sm:h-14 sm:w-14 sm:rounded-[1px]"
                      style={{ color: benefit.color }}
                    >
                      <Icon className="h-4 w-4 sm:h-7 sm:w-7" />
                    </div>
                    <h3 className="text-base font-bold text-[#0B0E2C] sm:text-xl">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="mt-2.5 flex-1 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-6 sm:text-[15px] sm:leading-relaxed">
                    {benefit.description}
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
