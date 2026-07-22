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
      description: "Create a clear website explaining available plans, supported devices, setup process, customer support options, renewal process, and relevant terms and policies.",
    },
    {
      title: "Offer Clear Subscription Choices",
      description: "Avoid presenting too many confusing packages. Use simple durations and clearly explain what each option includes.",
    },
    {
      title: "Provide Installation Guidance",
      description: "Many customers need help installing compatible IPTV applications. Clear setup instructions can reduce support requests and improve the customer experience.",
    },
    {
      title: "Respond to Customers Promptly",
      description: "Professional communication can help build trust and encourage renewals.",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32 border-b border-[#0B0E2C]/10">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Column: Branding */}
          <div>
            <h2 className="text-2xl font-bold leading-[1.15] tracking-tight text-[#0B0E2C] sm:text-3xl lg:text-[32px]">
              Create Your Own <span className="text-gradient-brand">Customer-Facing Brand</span>
            </h2>
            <p className="mt-6 text-[15px] leading-[1.75] text-[#5C607A] sm:text-base">
              The reseller panel manages subscription creation, but you can build your own customer-facing identity around your business. Depending on the reseller arrangement, you may be able to use your own:
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              {brandElements.map((element) => (
                <div key={element} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-[#7B2FFF]" />
                  <span className="text-[16px] font-medium text-[#0B0E2C]">{element}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4 rounded-[8px] bg-[#F5F5F7] p-6 text-sm leading-relaxed text-[#5C607A]">
              <p>
                A clear brand helps customers recognise your service and separates your business from competing resellers.
              </p>
              <p>
                Do not mislead customers about service ownership, content rights or official relationships with third-party broadcasters. Resellers are responsible for ensuring their marketing and business activities comply with applicable laws, advertising standards and platform rules.
              </p>
            </div>
          </div>

          {/* Right Column: Growth Tips */}
          <div>
            <h2 className="text-2xl font-bold leading-[1.15] tracking-tight text-[#0B0E2C] sm:text-3xl lg:text-[32px]">
              Grow Your <span className="text-gradient-brand">IPTV Reseller Business</span>
            </h2>
            <p className="mt-6 text-[15px] leading-[1.75] text-[#5C607A] sm:text-base">
              A reseller panel provides management tools, but long-term growth depends on how effectively you market and support your service.
            </p>

            <div className="mt-8 space-y-6">
              {growthTips.map((tip) => (
                <div key={tip.title} className="rounded-[8px] border border-[#0B0E2C]/10 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-bold text-[#0B0E2C]">{tip.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#5C607A]">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
