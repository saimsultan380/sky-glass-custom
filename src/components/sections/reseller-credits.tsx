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
    <section className="bg-white py-16 sm:py-24 lg:py-32 border-b border-[#0B0E2C]/10">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-[#0B0E2C] sm:text-4xl sm:leading-[1.12] lg:text-[42px]">
              Understanding the <span className="text-gradient-brand">Reseller Credit System</span>
            </h2>
            <p className="mt-6 text-[15px] leading-[1.75] text-[#5C607A] sm:text-base">
              Reseller credits are used to create or renew eligible customer subscriptions through the panel. When a customer purchases a subscription from you, the required number of credits is deducted from your reseller balance.
            </p>
            <p className="mt-4 text-[15px] leading-[1.75] text-[#5C607A] sm:text-base">
              Different subscription durations may require different credit amounts. For example, a shorter subscription may use fewer credits than a longer subscription. Exact credit requirements should be displayed within the reseller panel or package information.
            </p>
            <div className="mt-8 rounded-[8px] bg-[#F5F5F7] p-6 border-l-4 border-[#7B2FFF]">
              <p className="text-[15px] font-medium text-[#0B0E2C]">
                Monitor your credit balance regularly so customer activations and renewals can be completed without interruption.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="rounded-[8px] border border-[#0B0E2C]/10 bg-white p-8 shadow-[0_8px_30px_rgba(11,14,44,0.04)] sm:p-10">
              <h3 className="text-2xl font-bold text-[#0B0E2C]">
                Benefits of Reseller Credits
              </h3>
              
              <ul className="mt-8 space-y-5">
                {creditBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-4">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-white">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-[16px] leading-relaxed text-[#0B0E2C]">{benefit}</span>
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
