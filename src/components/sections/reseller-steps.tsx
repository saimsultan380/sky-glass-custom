import { Container } from "@/components/layout/container";
import Link from "next/link";
import { Package, KeyRound, UserPlus, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Select a Reseller Package",
    description:
      "Choose a package based on starting budget, expected customer volume, required credit balance and business goals.",
    icon: Package,
    color: "#FF6B2C",
  },
  {
    number: "02",
    title: "Receive Panel Access",
    description:
      "After your account has been activated, you receive the information required to access your private dashboard.",
    icon: KeyRound,
    color: "#E91E8C",
  },
  {
    number: "03",
    title: "Create Customer Subscriptions",
    description:
      "Use your credits to create customer accounts and select the appropriate subscription duration.",
    icon: UserPlus,
    color: "#7B2FFF",
  },
  {
    number: "04",
    title: "Sell and Grow Your Business",
    description:
      "Promote your service through appropriate marketing channels, support your customers and purchase additional credits as demand increases.",
    icon: Rocket,
    color: "#2563EB",
  },
];

export function ResellerSteps() {
  return (
    <section className="border-b border-[#0B0E2C]/10 bg-white py-10 sm:py-16 lg:py-24">
      <Container>
        <div className="text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            How the{" "}
            <span className="text-gradient-brand">Reseller Programme Works</span>
          </h2>
        </div>

        {/* Desktop Timeline */}
        <div className="mt-20 hidden lg:block">
          <div className="relative grid grid-cols-4 gap-8">
            <div className="absolute left-[12.5%] right-[12.5%] top-[40px] h-[2px] bg-gradient-to-r from-[#FF6B2C] via-[#E91E8C] to-[#2563EB] opacity-20" />

            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="relative flex flex-col items-center text-center"
                >
                  <div
                    className="relative z-10 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-white shadow-[0_8px_30px_rgba(11,14,44,0.08)]"
                    style={{ color: step.color }}
                  >
                    <Icon className="h-8 w-8" />
                    <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#0B0E2C] text-[13px] font-bold text-white">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="mt-8 text-xl font-bold text-[#0B0E2C]">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-[#5C607A]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / tablet stacked cards */}
        <div className="mt-6 grid gap-4 sm:mt-12 sm:gap-6 lg:hidden">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative flex flex-col gap-3 overflow-hidden rounded-[1px] bg-white p-5 shadow-[var(--card-shadow)] sm:flex-row sm:items-center sm:gap-6 sm:p-8"
                style={
                  {
                    "--card-shadow": `0 4px 20px rgba(11, 14, 44, 0.04), 0 8px 24px ${step.color}1A`,
                  } as React.CSSProperties
                }
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] bg-white shadow-sm sm:h-20 sm:w-20 sm:rounded-[1px]"
                  style={{ color: step.color }}
                >
                  <Icon className="h-4 w-4 sm:h-10 sm:w-10" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0B0E2C] text-[10px] font-bold text-white sm:h-6 sm:w-6 sm:text-[11px]">
                      {step.number}
                    </span>
                    <h3 className="text-base font-bold text-[#0B0E2C] sm:text-xl">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-1.5 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-3 sm:text-base sm:leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-5 text-center sm:mt-16">
          <Link
            href="/contact-us"
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[1px] bg-gradient-brand px-8 py-2.5 text-[14px] font-bold text-white transition-opacity hover:opacity-90 sm:min-h-[56px] sm:w-auto sm:py-3 sm:text-[16px]"
          >
            Start Your Reseller Application
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
