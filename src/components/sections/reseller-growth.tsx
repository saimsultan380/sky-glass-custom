import { Container } from "@/components/layout/container";
import { Check } from "lucide-react";

export function ResellerGrowth() {
  const brandElements = [
    "Business name",
    "Website",
    "Logo",
    "Customer pricing",
    "Support channels",
    "Social media pages",
    "Marketing materials",
    "Sales process",
  ];

  const growthTips = [
    {
      title: "Build a Professional Website",
      description:
        "Create a clear website explaining available plans, supported devices, setup process, customer support options, renewal process, and relevant terms and policies.",
    },
    {
      title: "Offer Clear Subscription Choices",
      description:
        "Avoid presenting too many confusing packages. Use simple durations and clearly explain what each option includes.",
    },
    {
      title: "Provide Installation Guidance",
      description:
        "Many customers need help installing compatible IPTV applications. Clear setup instructions can reduce support requests and improve the customer experience.",
    },
    {
      title: "Respond to Customers Promptly",
      description:
        "Professional communication can help build trust and encourage renewals.",
    },
  ];

  return (
    <section className="border-b border-[#0B0E2C]/10 bg-white py-10 sm:py-16 lg:py-24">
      <Container>
        <div className="grid gap-6 sm:gap-16 lg:grid-cols-2">
          {/* Left Column: Branding */}
          <div>
            <h2 className="text-[20px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[32px] sm:leading-[1.15] lg:text-[34px]">
              Create Your Own{" "}
              <span className="text-gradient-brand">Customer-Facing Brand</span>
            </h2>
            <p className="mt-4 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-[1.75]">
              The reseller panel manages subscription creation, but you can
              build your own customer-facing identity around your business.
              Depending on the reseller arrangement, you may be able to use your
              own:
            </p>

            <div className="mt-3 grid grid-cols-2 gap-x-2.5 gap-y-1.5 sm:mt-8 sm:gap-4">
              {brandElements.map((element) => (
                <div key={element} className="flex items-center gap-2 sm:gap-3">
                  <Check className="h-3.5 w-3.5 shrink-0 text-[#7B2FFF] sm:h-5 sm:w-5" />
                  <span className="text-[14px] font-medium text-[#0B0E2C] sm:text-[16px]">
                    {element}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-3 space-y-1.5 rounded-[1px] bg-[#F5F5F7] p-5 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-8 sm:space-y-4 sm:p-6 sm:text-sm sm:leading-relaxed">
              <p>
                A clear brand helps customers recognise your service and
                separates your business from competing resellers.
              </p>
              <p>
                Do not mislead customers about service ownership, content rights
                or official relationships with third-party broadcasters.
                Resellers are responsible for ensuring their marketing and
                business activities comply with applicable laws, advertising
                standards and platform rules.
              </p>
            </div>
          </div>

          {/* Right Column: Growth Tips */}
          <div>
            <h2 className="text-[20px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[32px] sm:leading-[1.15] lg:text-[34px]">
              Grow Your{" "}
              <span className="text-gradient-brand">IPTV Reseller Business</span>
            </h2>
            <p className="mt-4 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-[1.75]">
              A reseller panel provides management tools, but long-term growth
              depends on how effectively you market and support your service.
            </p>

            <div className="mt-3 space-y-2 sm:mt-8 sm:space-y-6">
              {growthTips.map((tip) => (
                <div
                  key={tip.title}
                  className="rounded-[1px] bg-white p-5 shadow-sm sm:p-5"
                >
                  <h3 className="text-[14px] font-bold text-[#0B0E2C] sm:text-lg">
                    {tip.title}
                  </h3>
                  <p className="mt-1 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-2 sm:text-[15px] sm:leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
