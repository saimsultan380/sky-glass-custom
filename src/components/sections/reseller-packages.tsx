import { Container } from "@/components/layout/container";
import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const packages = [
  {
    name: "Starter Reseller Package",
    description: "Suitable for individuals testing the reseller business model or working with a smaller number of customers.",
    recommendedFor: [
      "New resellers",
      "Small customer bases",
      "Part-time online businesses",
      "Testing local demand",
    ],
    price: "Contact Us",
    credits: "Flexible allocation",
    expiry: "No expiry on active credits",
    trials: "Included",
    ctaText: "Choose Starter Package",
    ctaLink: "/contact-us",
    popular: false,
  },
  {
    name: "Professional Reseller Package",
    description: "Designed for active resellers who expect regular customer registrations and renewals.",
    recommendedFor: [
      "Growing reseller businesses",
      "Digital marketers",
      "Online service providers",
      "Existing customer communities",
    ],
    price: "Contact Us",
    credits: "Volume allocation",
    expiry: "No expiry on active credits",
    trials: "Included",
    ctaText: "Choose Professional Package",
    ctaLink: "/contact-us",
    popular: true,
  },
  {
    name: "Enterprise Reseller Package",
    description: "Suitable for experienced resellers and larger operations requiring a higher credit balance.",
    recommendedFor: [
      "Established resellers",
      "Agencies",
      "High-volume customer management",
      "Businesses with multiple sales channels",
    ],
    price: "Contact Team",
    credits: "Custom allocation",
    support: "Priority or dedicated support",
    ctaText: "Discuss Enterprise Options",
    ctaLink: "/contact-us",
    popular: false,
  },
];

export function ResellerPackages() {
  return (
    <section id="packages" className="bg-white py-16 sm:py-24 lg:py-32 border-b border-[#0B0E2C]/10">
      <Container>
        <div className="text-center">
          <h2 className="text-[28px] font-bold leading-[1.15] tracking-tight text-[#0B0E2C] sm:text-4xl sm:leading-[1.12] lg:text-[42px]">
            Flexible Sky Glass IPTV <span className="text-gradient-brand">Reseller Packages</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.75] text-[#5C607A] sm:text-base">
            Different businesses require different starting points. The Sky Glass IPTV Reseller programme can be organised into packages based on credit quantity, support requirements and expected customer volume.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={cn(
                "relative flex flex-col rounded-[8px] bg-white p-8 shadow-[0_8px_30px_rgba(11,14,44,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(11,14,44,0.08)]",
                pkg.popular ? "border-2 border-[#7B2FFF]" : "border border-[#0B0E2C]/10"
              )}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="rounded-full bg-gradient-brand px-4 py-1 text-[13px] font-bold uppercase tracking-wide text-white shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#0B0E2C]">{pkg.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5C607A]">
                  {pkg.description}
                </p>
              </div>

              <div className="mb-8 flex items-baseline gap-2">
                <span className="text-3xl font-bold tracking-tight text-[#0B0E2C]">
                  {pkg.price}
                </span>
              </div>

              <div className="mb-8 flex-1 space-y-6">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#0B0E2C]">Recommended For:</h4>
                  <ul className="mt-4 space-y-3">
                    {pkg.recommendedFor.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#7B2FFF]" />
                        <span className="text-sm text-[#5C607A]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 rounded-xl bg-[#F5F5F7] p-4 text-sm text-[#0B0E2C]">
                  <div className="flex justify-between border-b border-[#0B0E2C]/10 pb-2">
                    <span className="text-[#5C607A]">Credits:</span>
                    <span className="font-medium">{pkg.credits}</span>
                  </div>
                  {pkg.expiry && (
                    <div className="flex justify-between border-b border-[#0B0E2C]/10 pb-2">
                      <span className="text-[#5C607A]">Credit Expiry:</span>
                      <span className="font-medium">{pkg.expiry}</span>
                    </div>
                  )}
                  {pkg.trials && (
                    <div className="flex justify-between border-b border-[#0B0E2C]/10 pb-2">
                      <span className="text-[#5C607A]">Trial Accounts:</span>
                      <span className="font-medium">{pkg.trials}</span>
                    </div>
                  )}
                  {pkg.support && (
                    <div className="flex justify-between">
                      <span className="text-[#5C607A]">Support:</span>
                      <span className="font-medium">{pkg.support}</span>
                    </div>
                  )}
                </div>
              </div>

              <Link
                href={pkg.ctaLink}
                className={cn(
                  "mt-auto flex min-h-[48px] items-center justify-center rounded-[10px] px-4 py-2.5 text-[14px] font-bold transition-all sm:min-h-[56px] sm:text-[15px]",
                  pkg.popular
                    ? "bg-gradient-brand text-white hover:opacity-90"
                    : "bg-[#F5F5F7] text-[#0B0E2C] hover:bg-[#0B0E2C]/5"
                )}
              >
                {pkg.ctaText}
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
