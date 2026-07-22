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
    <section className="bg-white py-16 sm:py-24 lg:py-32 border-b border-[#0B0E2C]/10">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div>
            <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-[#0B0E2C] sm:text-4xl sm:leading-[1.12] lg:text-[42px]">
              Build Your IPTV Reseller <span className="text-gradient-brand">Business in the UK</span>
            </h2>
            <p className="mt-6 text-[15px] leading-[1.75] text-[#5C607A] sm:text-base">
              The Sky Glass IPTV Reseller programme is designed for entrepreneurs, digital marketers, retailers and existing IPTV resellers who want a straightforward way to manage customer subscriptions.
            </p>
            <p className="mt-4 text-[15px] leading-[1.75] text-[#5C607A] sm:text-base">
              Instead of processing every account manually, the reseller panel brings the main management tools together in one central dashboard. Depending on the available panel features, you can:
            </p>
            
            <ul className="mt-8 space-y-4">
              {panelFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7B2FFF]/10">
                    <Check className="h-4 w-4 text-[#7B2FFF]" />
                  </span>
                  <span className="text-[15px] leading-relaxed text-[#0B0E2C]">{feature}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-[15px] leading-[1.75] text-[#5C607A] sm:text-base">
              The programme allows you to set your own retail prices and develop a business model suited to your audience. You remain responsible for customer acquisition, customer payments and day-to-day customer relationships, while the reseller panel helps simplify account management.
            </p>
          </div>

          {/* Right Column */}
          <div>
            <div className="rounded-[8px] border border-[#0B0E2C]/10 bg-white p-8 shadow-[0_8px_30px_rgba(11,14,44,0.04)] sm:p-10">
              <h3 className="text-2xl font-bold text-[#0B0E2C]">
                Who Can Become a Sky Glass IPTV Reseller?
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[#5C607A]">
                The reseller programme can support different types of entrepreneurs and digital businesses. It may be suitable for:
              </p>
              
              <ul className="mt-8 space-y-4">
                {targetAudience.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E91E8C]/10">
                      <Check className="h-4 w-4 text-[#E91E8C]" />
                    </span>
                    <span className="text-[15px] leading-relaxed text-[#0B0E2C]">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-[8px] bg-[#F5F5F7] p-6">
                <p className="text-sm leading-relaxed text-[#5C607A]">
                  Previous reseller experience is helpful but not essential. New resellers should understand customer service, online marketing and basic device setup before launching.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
