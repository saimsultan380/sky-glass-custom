import { Container } from "@/components/layout/container";
import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const packages = [
  {
    name: "Starter Package",
    description:
      "Suitable for individuals testing the reseller business model or working with a smaller number of customers.",
    recommendedFor: [
      "New resellers",
      "Small customer bases",
      "Part-time online businesses",
      "Testing local demand",
    ],
    price: "TBC",
    credits: "TBC",
    expiry: "TBC",
    trials: "TBC",
    ctaText: "Choose Starter Package",
    ctaLink: "/contact-us/",
    popular: false,
  },
  {
    name: "Professional Package",
    description:
      "Designed for active resellers who expect regular customer registrations and renewals.",
    recommendedFor: [
      "Growing reseller businesses",
      "Digital marketers",
      "Online service providers",
      "Existing customer communities",
    ],
    price: "TBC",
    credits: "TBC",
    expiry: "TBC",
    trials: "TBC",
    ctaText: "Choose Professional Package",
    ctaLink: "/contact-us/",
    popular: true,
  },
  {
    name: "Enterprise Package",
    description:
      "Suitable for experienced resellers and larger operations requiring a higher credit balance.",
    recommendedFor: [
      "Established resellers",
      "Agencies",
      "High-volume customer management",
      "Businesses with multiple sales channels",
    ],
    price: "Contact the Reseller Team",
    credits: "TBC",
    support: "Priority or dedicated support, where offered",
    ctaText: "Discuss Enterprise Options",
    ctaLink: "/contact-us/",
    popular: false,
  },
];

export function ResellerPackages() {
  return (
    <section
      id="packages"
      className="border-b border-[#0B0E2C]/10 bg-white py-10 sm:py-16 lg:py-24"
    >
      <Container>
        <div className="text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Flexible Sky Glass IPTV{" "}
            <span className="text-gradient-brand">Reseller Packages</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-[1.6] text-[#5C607A] sm:mt-4 sm:text-base sm:leading-[1.75]">
            Different businesses require different starting points. The Sky
            Glass IPTV Reseller programme can be organised into packages based
            on credit quantity, support requirements and expected customer
            volume.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-16 sm:gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={cn(
                "relative flex flex-col rounded-[1px] bg-white p-5 shadow-[0_8px_30px_rgba(11,14,44,0.04)] card-hover-lift hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(11,14,44,0.08)] sm:p-8",
                pkg.popular
                  ? "border-2 border-[#7B2FFF]"
                  : "border border-transparent"
              )}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-0 right-0 flex justify-center sm:-top-4">
                  <span className="rounded-full bg-gradient-brand px-3 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm sm:px-4 sm:py-1 sm:text-[13px]">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-3 sm:mb-6">
                <h3 className="text-[15px] font-bold text-[#0B0E2C] sm:text-2xl">
                  {pkg.name}
                </h3>
                <p className="mt-1.5 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-3 sm:text-sm sm:leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              <div className="mb-3 flex items-baseline gap-2 sm:mb-8">
                <span className="text-[20px] font-bold tracking-tight text-[#0B0E2C] sm:text-3xl">
                  {pkg.price === "TBC" ? "TBC" : pkg.price}
                </span>
              </div>

              <div className="mb-4 flex-1 space-y-3 sm:mb-8 sm:space-y-6">
                <div>
                  <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#0B0E2C] sm:text-sm">
                    Recommended For:
                  </h4>
                  <ul className="mt-2 space-y-1.5 sm:mt-4 sm:space-y-3">
                    {pkg.recommendedFor.map((item) => (
                      <li key={item} className="flex items-start gap-2 sm:gap-3">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#7B2FFF] sm:h-4 sm:w-4" />
                        <span className="text-[14px] text-[#5C607A] sm:text-sm">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 rounded-[1px] bg-[#F5F5F7] p-4 text-[14px] text-[#0B0E2C] sm:space-y-3 sm:rounded-[1px] sm:p-4 sm:text-sm">
                  <div className="flex justify-between border-b border-[#0B0E2C]/10 pb-1.5 sm:pb-2">
                    <span className="text-[#5C607A]">Credits:</span>
                    <span className="font-medium">{pkg.credits}</span>
                  </div>
                  {pkg.expiry && (
                    <div className="flex justify-between border-b border-[#0B0E2C]/10 pb-1.5 sm:pb-2">
                      <span className="text-[#5C607A]">Credit Expiry:</span>
                      <span className="font-medium">{pkg.expiry}</span>
                    </div>
                  )}
                  {pkg.trials && (
                    <div className="flex justify-between border-b border-[#0B0E2C]/10 pb-1.5 sm:pb-2">
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
                  "mt-auto flex min-h-[40px] items-center justify-center rounded-[1px] px-4 py-2 text-[13px] font-bold transition-all sm:min-h-[56px] sm:py-2.5 sm:text-[15px]",
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
