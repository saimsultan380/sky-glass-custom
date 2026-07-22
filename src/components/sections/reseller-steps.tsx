import { Container } from "@/components/layout/container";
import Link from "next/link";
import { Package, KeyRound, UserPlus, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Select a Reseller Package",
    description: "Choose a reseller package based on starting budget, expected customer volume, required credit balance and business goals.",
    icon: Package,
    color: "#FF6B2C",
  },
  {
    number: "02",
    title: "Receive Panel Access",
    description: "After your reseller account has been activated, you receive the information required to access your private dashboard.",
    icon: KeyRound,
    color: "#E91E8C",
  },
  {
    number: "03",
    title: "Create Customer Subscriptions",
    description: "Use your reseller credits to create customer accounts and select the appropriate subscription duration.",
    icon: UserPlus,
    color: "#7B2FFF",
  },
  {
    number: "04",
    title: "Sell and Grow Your Business",
    description: "Promote your service through appropriate marketing channels, support your customers and purchase additional credits as demand increases.",
    icon: Rocket,
    color: "#2563EB",
  },
];

export function ResellerSteps() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32 border-b border-[#0B0E2C]/10">
      <Container>
        <div className="text-center">
          <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-[#0B0E2C] sm:text-4xl sm:leading-[1.12] lg:text-[42px]">
            How the Sky Glass IPTV <span className="text-gradient-brand">Reseller Programme Works</span>
          </h2>
        </div>

        {/* Desktop Timeline (Hidden on mobile) */}
        <div className="mt-20 hidden lg:block">
          <div className="relative grid grid-cols-4 gap-8">
            {/* Connecting Line */}
            <div className="absolute left-[12.5%] right-[12.5%] top-[40px] h-[2px] bg-gradient-to-r from-[#FF6B2C] via-[#E91E8C] to-[#2563EB] opacity-20" />
            
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative flex flex-col items-center text-center">
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

        {/* Mobile/Tablet Stacked Cards (Hidden on desktop) */}
        <div className="mt-12 grid gap-6 lg:hidden">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.number}
                className="relative flex flex-col gap-6 overflow-hidden rounded-[8px] border border-[#0B0E2C]/10 bg-white p-6 shadow-[var(--card-shadow)] sm:flex-row sm:items-center sm:p-8"
                style={{
                  "--card-shadow": `0 4px 20px rgba(11, 14, 44, 0.04), 0 8px 24px ${step.color}1A`,
                } as React.CSSProperties}
              >
                <div 
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[8px] border border-[#0B0E2C]/10 bg-white shadow-sm sm:h-20 sm:w-20"
                  style={{ color: step.color }}
                >
                  <Icon className="h-8 w-8 sm:h-10 sm:w-10" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0B0E2C] text-[11px] font-bold text-white">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-bold text-[#0B0E2C]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-base leading-relaxed text-[#5C607A]">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact-us"
            className="inline-flex min-h-[56px] items-center justify-center rounded-[10px] bg-gradient-brand px-8 py-3 text-[16px] font-bold text-white transition-opacity hover:opacity-90"
          >
            Start Your Reseller Application
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
