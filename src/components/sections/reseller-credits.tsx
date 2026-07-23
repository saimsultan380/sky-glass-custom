import { Container } from "@/components/layout/container";
import { Check } from "lucide-react";

export function ResellerCredits() {
  const creditBenefits = [
    "Purchase credits according to demand",
    "Track your available balance",
    "Activate subscriptions when required",
    "Manage eligible renewals from one panel",
    "Scale gradually as your business grows",
    "Avoid paying for unnecessary customer accounts",
  ];

  return (
    <section className="border-b border-[#0B0E2C]/10 bg-white py-10 sm:py-16 lg:py-24">
      <Container>
        <div className="grid gap-5 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
              Understanding the{" "}
              <span className="text-gradient-brand">Credit System</span>
            </h2>
            <p className="mt-4 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-[1.75]">
              Credits are used to create or renew eligible customer
              subscriptions through the panel. When a customer purchases a
              subscription from you, the required number of credits is deducted
              from your balance.
            </p>
            <p className="mt-2 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-4 sm:text-base sm:leading-[1.75]">
              Different subscription durations may require different credit
              amounts. For example, a shorter subscription may use fewer credits
              than a longer subscription. Exact credit requirements should be
              displayed within the panel or package information.
            </p>
            <div className="mt-3 rounded-[1px] bg-[#F5F5F7] p-4 sm:mt-8 sm:p-6">
              <p className="text-[12px] font-medium leading-[1.5] text-[#0B0E2C] sm:text-[15px]">
                Monitor your credit balance regularly so customer activations
                and renewals can be completed without interruption.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="rounded-[1px] bg-white p-5 shadow-[0_8px_30px_rgba(11,14,44,0.04)] sm:p-10">
              <h3 className="text-[15px] font-bold text-[#0B0E2C] sm:text-2xl">
                Benefits of Credits
              </h3>

              <ul className="mt-3 space-y-2.5 sm:mt-8 sm:space-y-5">
                {creditBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 sm:gap-4">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-white sm:mt-1 sm:h-6 sm:w-6">
                      <Check className="h-3 w-3 sm:h-4 sm:w-4" />
                    </span>
                    <span className="min-w-0 text-[13px] leading-snug text-[#0B0E2C] sm:text-[16px] sm:leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
