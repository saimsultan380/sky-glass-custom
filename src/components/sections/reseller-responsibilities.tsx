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
    "Accessing the panel",
    "Understanding credits",
    "Creating customer accounts",
    "Selecting subscription durations",
    "Renewing eligible accounts",
    "Resolving basic panel issues",
    "Purchasing additional credits",
    "Understanding available packages",
  ];

  return (
    <section className="border-b border-[#0B0E2C]/10 bg-white py-10 sm:py-16 lg:py-24">
      <Container>
        <div className="grid gap-3 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Responsibilities */}
          <div className="rounded-[1px] bg-white p-5 shadow-[0_8px_30px_rgba(11,14,44,0.04)] sm:p-10">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-[1px] bg-[#FF6B2C]/10 text-[#FF6B2C] sm:mb-6 sm:h-14 sm:w-14">
              <AlertTriangle className="h-4 w-4 sm:h-7 sm:w-7" />
            </div>
            <h2 className="text-[26px] font-bold text-[#0B0E2C] sm:text-[32px] lg:text-[34px]">
              Reseller Responsibilities
            </h2>
            <p className="mt-2 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-4 sm:text-base sm:leading-relaxed">
              The panel provides account-management
              tools, but each reseller remains responsible for operating their
              own customer-facing business. Responsibilities may include:
            </p>

            <ul className="mt-3 space-y-1.5 sm:mt-8 sm:space-y-4">
              {responsibilities.map((item) => (
                <li key={item} className="flex items-start gap-2 sm:gap-3">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#FF6B2C] sm:h-5 sm:w-5" />
                  <span className="text-[13px] leading-snug text-[#0B0E2C] sm:text-[15px] sm:leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-3 rounded-[1px] bg-[#F5F5F7] p-5 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-8 sm:p-5 sm:text-sm sm:leading-relaxed">
              Understanding these responsibilities before joining helps create a
              more professional and sustainable reseller operation.
            </div>
          </div>

          {/* Support */}
          <div className="rounded-[1px] bg-white p-5 shadow-[0_8px_30px_rgba(11,14,44,0.04)] sm:p-10">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-[1px] bg-[#2563EB]/10 text-[#2563EB] sm:mb-6 sm:h-14 sm:w-14">
              <LifeBuoy className="h-4 w-4 sm:h-7 sm:w-7" />
            </div>
            <h2 className="text-[26px] font-bold text-[#0B0E2C] sm:text-[32px] lg:text-[34px]">
              Support for Sky Glass IPTV Resellers
            </h2>
            <p className="mt-2 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-4 sm:text-base sm:leading-relaxed">
              Support is available for questions related to:
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-8 sm:gap-4">
              {supportTopics.map((topic) => (
                <div
                  key={topic}
                  className="flex items-center gap-2.5 rounded-[1px] bg-[#F5F5F7] p-3 sm:gap-3 sm:rounded-[1px] sm:p-3"
                >
                  <Check className="h-3.5 w-3.5 shrink-0 text-[#2563EB] sm:h-4 sm:w-4" />
                  <span className="text-[13px] font-medium leading-snug text-[#0B0E2C] sm:text-[14px]">
                    {topic}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-3 space-y-1.5 rounded-[1px] bg-[#F5F5F7] p-4 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-8 sm:space-y-4 sm:p-5 sm:text-[15px] sm:leading-relaxed">
              <p>
                Resellers should provide first-line support to their own
                customers.
              </p>
              <p>
                Issues that cannot be resolved through normal setup guidance may
                then be escalated through the appropriate support
                channel.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
