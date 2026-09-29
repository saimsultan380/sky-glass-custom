import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

const CREDIT_ROWS = [
  { duration: "1 month", credits: "1 credit" },
  { duration: "12 months", credits: "12 credits" },
];

export function ResellerCredits() {
  return (
    <section className="border-b border-[#0B0E2C]/10 bg-transparent py-10 sm:py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            How the Credit System{" "}
            <span className="text-gradient-brand">Works</span>
          </h2>

          <div className="mt-5 sm:mt-10">
            <div className="overflow-hidden glass-card">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[320px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-[#0B0E2C]/10 bg-[rgba(11,14,44,0.02)]">
                      <th className="px-3 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:py-4 sm:text-[13px]">
                        Subscription time
                      </th>
                      <th className="px-3 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:py-4 sm:text-[13px]">
                        Credits required
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {CREDIT_ROWS.map((row, idx) => (
                      <tr
                        key={row.duration}
                        className={cn(
                          "border-b border-[#0B0E2C]/8 last:border-b-0",
                          idx % 2 === 1 && "bg-[rgba(11,14,44,0.01)]"
                        )}
                      >
                        <td className="px-3 py-2.5 text-[14px] font-semibold text-[#0B0E2C] sm:px-5 sm:py-4 sm:text-[14px]">
                          {row.duration}
                        </td>
                        <td className="px-3 py-2.5 text-[14px] text-[#5C607A] sm:px-5 sm:py-4 sm:text-[14px]">
                          {row.credits}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <p className="mt-4 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-[1.75]">
            One credit provides one month of subscription time. The credit
            balance itself does not expire. Check the account type and any
            connection requirements in the panel before activating a customer.
          </p>
          <p className="mt-2 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-4 sm:text-base sm:leading-[1.75]">
            A minimum of 120 credits is required to create a reseller panel.
            Ask the reseller team for the current price of those credits and the
            full panel terms before purchasing.
          </p>
        </div>
      </Container>
    </section>
  );
}
