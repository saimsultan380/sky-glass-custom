import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type ComparisonRow = {
  duration: string;
  standard: string;
  premium: string;
};

const ROWS: ComparisonRow[] = [
  { duration: "3 months", standard: "£20", premium: "£25" },
  { duration: "6 months", standard: "£30", premium: "£35" },
  { duration: "12 months", standard: "£45", premium: "£55" },
  { duration: "24 months", standard: "£70", premium: "£90" },
];

export function PlansComparisonSection() {
  return (
    <section
      id="compare-plans"
      className="relative border-t border-[#0B0E2C]/10 bg-transparent"
    >
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Compare{" "}
            <span className="text-gradient-brand">Subscription Prices</span>
          </h2>
        </div>

        <div className="mt-5 overflow-hidden glass-card sm:mt-12">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[#0B0E2C]/10">
                  <th className="bg-transparent px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#5C607A] sm:px-6 sm:py-5 sm:text-[14px]">
                    Duration
                  </th>
                  <th className="relative bg-transparent px-4 py-3 sm:px-6 sm:py-5">
                    <div
                      className="absolute inset-x-0 top-0 h-[3px] bg-[#7B2FFF]"
                      aria-hidden
                    />
                    <span className="text-[14px] font-bold text-[#0B0E2C] sm:text-[15px]">
                      Standard plan
                    </span>
                  </th>
                  <th className="relative bg-transparent px-4 py-3 sm:px-6 sm:py-5">
                    <div
                      className="absolute inset-x-0 top-0 h-[3px] bg-gradient-brand"
                      aria-hidden
                    />
                    <span className="text-[14px] font-bold text-[#0B0E2C] sm:text-[15px]">
                      Premium plan
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, index) => (
                  <tr
                    key={row.duration}
                    className={cn(
                      "border-b border-[#0B0E2C]/8 last:border-b-0",
                      index % 2 === 1 && "bg-[rgba(11,14,44,0.02)]"
                    )}
                  >
                    <th
                      scope="row"
                      className="px-4 py-3 text-[13px] font-semibold text-[#0B0E2C] sm:px-6 sm:py-4 sm:text-[14px]"
                    >
                      {row.duration}
                    </th>
                    <td className="px-4 py-3 text-[13px] font-semibold text-[#0B0E2C] sm:px-6 sm:py-4 sm:text-[14px]">
                      {row.standard}
                    </td>
                    <td className="px-4 py-3 text-[13px] font-semibold text-[#0B0E2C] sm:px-6 sm:py-4 sm:text-[14px]">
                      {row.premium}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mx-auto mt-4 max-w-2xl space-y-1.5 text-center text-[14px] leading-[1.55] text-[#5C607A] sm:mt-10 sm:space-y-2 sm:text-[15px] sm:leading-[1.75]">
          <p>Prices shown are for the full stated subscription period.</p>
          <p>
            A shorter duration means a smaller initial commitment. A longer
            duration has a lower average cost per month, but choose it only
            after checking that the service meets your needs.
          </p>
        </div>
      </Container>
    </section>
  );
}
