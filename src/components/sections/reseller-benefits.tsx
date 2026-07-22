import { Container } from "@/components/layout/container";
import { Users, CreditCard, Tag, Zap, TrendingUp, HeadphonesIcon } from "lucide-react";

const benefits = [
  {
    title: "Simple Customer Management",
    description: "Create and organise customer subscriptions from one central panel. This reduces the need to manage account details across multiple documents or platforms.",
    icon: Users,
    color: "#7B2FFF",
  },
  {
    title: "Flexible Credit System",
    description: "Purchase reseller credits according to your business requirements and use them when activating or renewing eligible customer subscriptions.",
    icon: CreditCard,
    color: "#E91E8C",
  },
  {
    title: "Control Your Retail Pricing",
    description: "Set your own customer-facing prices based on target audience, operating costs, marketing expenses, support requirements and preferred profit margin.",
    icon: Tag,
    color: "#FF6B2C",
  },
  {
    title: "Quick Subscription Activation",
    description: "Activate available subscriptions directly from the reseller dashboard without waiting for every request to be processed manually.",
    icon: Zap,
    color: "#2563EB",
  },
  {
    title: "Business Growth Potential",
    description: "Start with a smaller reseller package and purchase additional credits as your customer base expands.",
    icon: TrendingUp,
    color: "#7B2FFF",
  },
  {
    title: "Dedicated Reseller Assistance",
    description: "Receive guidance for panel access, credit usage, customer-account creation, subscription durations, eligible renewals and common panel questions.",
    icon: HeadphonesIcon,
    color: "#E91E8C",
  },
];

export function ResellerBenefits() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32 border-b border-[#0B0E2C]/10">
      <Container>
        <div className="text-center">
          <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-[#0B0E2C] sm:text-4xl sm:leading-[1.12] lg:text-[42px]">
            Why Become a Sky Glass <span className="text-gradient-brand">IPTV Reseller?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.75] text-[#5C607A] sm:text-base">
            Starting as a reseller can provide a flexible way to build a digital service business without creating a complete subscription-management system from the beginning.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article
                key={benefit.title}
                className="group relative flex flex-col overflow-hidden rounded-[8px] border border-[#0B0E2C]/10 bg-white p-6 shadow-[var(--card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0B0E2C]/20 hover:shadow-[var(--card-shadow-hover)] sm:p-8"
                style={{
                  "--card-shadow": `0 4px 20px rgba(11, 14, 44, 0.04), 0 8px 24px ${benefit.color}1A`,
                  "--card-shadow-hover": `0 8px 30px rgba(11, 14, 44, 0.08), 0 12px 40px ${benefit.color}33`,
                } as React.CSSProperties}
              >
                <div className="relative z-10 flex flex-1 flex-col h-full">
                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[8px] border border-[#0B0E2C]/10 bg-white shadow-sm"
                      style={{ color: benefit.color }}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0B0E2C]">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="mt-6 flex-1 text-[15px] leading-relaxed text-[#5C607A]">
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
