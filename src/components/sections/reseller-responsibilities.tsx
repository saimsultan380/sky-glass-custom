import { Container } from "@/components/layout/container";
import { AlertTriangle, LifeBuoy, Check } from "lucide-react";

export function ResellerResponsibilities() {
  const responsibilities = [
    "Finding and communicating with customers",
    "Setting retail prices",
    "Processing customer payments",
    "Providing first-line customer support",
    "Keeping customer information organised",
    "Monitoring subscription expiry dates",
    "Following consumer and advertising rules",
    "Using only lawful and authorised marketing materials",
    "Avoiding unsupported content or performance claims",
    "Protecting customer information",
    "Maintaining accurate business records",
  ];

  const supportTopics = [
    "Accessing the reseller panel",
    "Understanding reseller credits",
    "Creating customer accounts",
    "Selecting subscription durations",
    "Renewing eligible accounts",
    "Resolving basic panel issues",
    "Purchasing additional reseller credits",
    "Understanding available packages",
  ];

  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32 border-b border-[#0B0E2C]/10">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Responsibilities */}
          <div className="rounded-[8px] border border-[#0B0E2C]/10 bg-white p-8 shadow-[0_8px_30px_rgba(11,14,44,0.04)] sm:p-10">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-[8px] bg-[#FF6B2C]/10 text-[#FF6B2C]">
              <AlertTriangle className="h-7 w-7" />
            </div>
            <h2 className="text-2xl font-bold text-[#0B0E2C] sm:text-3xl lg:text-[32px]">
              Reseller Responsibilities
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5C607A]">
              The Sky Glass IPTV Reseller Panel provides account-management tools, but each reseller remains responsible for operating their own customer-facing business. Responsibilities may include:
            </p>
            
            <ul className="mt-8 space-y-4">
              {responsibilities.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#FF6B2C]" />
                  <span className="text-[15px] leading-relaxed text-[#0B0E2C]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-[8px] bg-[#F5F5F7] p-5 text-sm leading-relaxed text-[#5C607A]">
              Understanding these responsibilities before joining helps create a more professional and sustainable reseller operation.
            </div>
          </div>

          {/* Support */}
          <div className="rounded-[8px] border border-[#0B0E2C]/10 bg-white p-8 shadow-[0_8px_30px_rgba(11,14,44,0.04)] sm:p-10">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-[8px] bg-[#2563EB]/10 text-[#2563EB]">
              <LifeBuoy className="h-7 w-7" />
            </div>
            <h2 className="text-2xl font-bold text-[#0B0E2C] sm:text-3xl lg:text-[32px]">
              Support for Sky Glass IPTV Resellers
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5C607A]">
              Reseller support is available for questions related to:
            </p>
            
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {supportTopics.map((topic) => (
                <div key={topic} className="flex items-center gap-3 rounded-lg border border-[#0B0E2C]/5 bg-[#F5F5F7] p-3">
                  <Check className="h-4 w-4 shrink-0 text-[#2563EB]" />
                  <span className="text-[14px] font-medium text-[#0B0E2C]">{topic}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4 rounded-[8px] border-l-4 border-[#2563EB] bg-[#F5F5F7] p-5 text-[15px] leading-relaxed text-[#5C607A]">
              <p>
                Resellers should provide first-line support to their own customers.
              </p>
              <p>
                Issues that cannot be resolved through normal setup guidance may then be escalated through the appropriate reseller support channel.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
