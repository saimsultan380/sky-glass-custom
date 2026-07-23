import { Container } from "@/components/layout/container";
import { Check } from "lucide-react";

export function ResellerIntro() {
  const panelFeatures = [
    "Create customer accounts",
    "Select subscription durations",
    "Manage available credits",
    "Review active subscriptions",
    "Monitor account expiry information",
    "Complete eligible renewals",
  ];

  const targetAudience = [
    "Existing IPTV resellers",
    "Online retailers",
    "Website owners",
    "Digital marketing agencies",
    "Social media marketers",
    "Technology service providers",
    "Electronics and Smart TV retailers",
    "Entrepreneurs building a subscription-based business",
  ];

  return (
    <section className="border-b border-[#0B0E2C]/10 bg-white py-10 sm:py-16 lg:py-24">
      <Container>
        <div className="grid gap-5 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div>
            <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
              Build Your IPTV Reseller{" "}
              <span className="text-gradient-brand">Business in the UK</span>
            </h2>
            <p className="mt-4 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-[1.75]">
              The Sky Glass IPTV Reseller programme is designed for
              entrepreneurs, digital marketers, retailers and existing IPTV
              resellers who want a straightforward way to manage customer
              subscriptions.
            </p>
            <p className="mt-2 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-4 sm:text-base sm:leading-[1.75]">
              Instead of processing every account manually, the reseller panel
              brings the main management tools together in one central
              dashboard. Depending on the available panel features, you can:
            </p>

            <ul className="mt-3 space-y-2.5 sm:mt-8 sm:space-y-4">
              {panelFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 sm:gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7B2FFF]/10 sm:mt-1 sm:h-6 sm:w-6">
                    <Check className="h-3 w-3 text-[#7B2FFF] sm:h-4 sm:w-4" />
                  </span>
                  <span className="min-w-0 text-[13px] leading-snug text-[#0B0E2C] sm:text-[15px] sm:leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-8 sm:text-base sm:leading-[1.75]">
              The programme allows you to set your own retail prices and develop
              a business model suited to your audience. You remain responsible
              for customer acquisition, customer payments and day-to-day
              customer relationships, while the reseller panel helps simplify
              account management.
            </p>
          </div>

          {/* Right Column */}
          <div>
            <div className="rounded-[1px] bg-white p-5 shadow-[0_8px_30px_rgba(11,14,44,0.04)] sm:p-10">
              <h3 className="text-[15px] font-bold text-[#0B0E2C] sm:text-2xl">
                Who Can Become a Sky Glass IPTV Reseller?
              </h3>
              <p className="mt-2 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-4 sm:text-[15px] sm:leading-relaxed">
                The reseller programme can support different types of
                entrepreneurs and digital businesses. It may be suitable for:
              </p>

              <ul className="mt-3 space-y-2.5 sm:mt-8 sm:space-y-4">
                {targetAudience.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 sm:gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E91E8C]/10 sm:mt-1 sm:h-6 sm:w-6">
                      <Check className="h-3 w-3 text-[#E91E8C] sm:h-4 sm:w-4" />
                    </span>
                    <span className="min-w-0 text-[13px] leading-snug text-[#0B0E2C] sm:text-[15px] sm:leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-3 rounded-[1px] bg-[#F5F5F7] p-5 sm:mt-8 sm:p-6">
                <p className="text-[14px] leading-[1.55] text-[#5C607A] sm:text-sm sm:leading-relaxed">
                  Previous reseller experience is helpful but not essential. New
                  resellers should understand customer service, online marketing
                  and basic device setup before launching.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
