import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";
import { whatsappUrl } from "@/lib/site";

const packages = [
  {
    name: "Starter Package",
    description:
      "For individuals beginning with a smaller customer base or assessing demand before expanding.",
    note: "Ask the team to confirm the package price, included credits, credit expiry and trial-account terms.",
    ctaText: "Discuss Reseller Options",
    popular: false,
  },
  {
    name: "Professional Package",
    description:
      "For active resellers expecting regular orders and renewals.",
    note: "Discuss your anticipated volume so you can review the available credit allocation and package conditions.",
    ctaText: "Discuss Reseller Options",
    popular: true,
  },
  {
    name: "Enterprise Package",
    description:
      "For established operations with larger requirements.",
    note: "Contact the reseller team to discuss credit volume and any support arrangements available for your account.",
    ctaText: "Discuss Reseller Options",
    popular: false,
  },
];

export function ResellerPackages() {
  return (
    <section
      id="packages"
      className="border-b border-[#0B0E2C]/10 bg-transparent py-10 sm:py-16 lg:py-24"
    >
      <Container>
        <div className="text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Available{" "}
            <span className="text-gradient-brand">Reseller Packages</span>
          </h2>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-16 sm:gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={cn(
                "relative flex flex-col glass-card card-hover-lift p-5 hover:-translate-y-1 sm:p-8",
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

              <p className="mb-6 flex-1 text-[14px] leading-[1.55] text-[#5C607A] sm:mb-8 sm:text-sm sm:leading-relaxed">
                {pkg.note}
              </p>

              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "mt-auto flex min-h-[40px] items-center justify-center rounded-[20px] px-4 py-2 text-[13px] font-bold transition-all sm:min-h-[56px] sm:py-2.5 sm:text-[15px]",
                  pkg.popular
                    ? "bg-gradient-brand text-white hover:opacity-90"
                    : "glass-card text-[#0B0E2C] hover:opacity-90"
                )}
              >
                {pkg.ctaText}
              </a>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-[14px] leading-[1.6] text-[#5C607A] sm:mt-10 sm:text-base">
          Package prices and credit terms must be confirmed before purchase.
        </p>
      </Container>
    </section>
  );
}
