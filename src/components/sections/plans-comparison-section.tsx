import { Check } from "lucide-react";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type ComparisonRow = {
  feature: string;
  standard: string;
  premium: string;
};

const ROWS: ComparisonRow[] = [
  { feature: "Live television", standard: "Included", premium: "Expanded access" },
  { feature: "Sports content", standard: "Where available", premium: "Broader availability" },
  { feature: "Movies and series", standard: "Included", premium: "Expanded library" },
  { feature: "Electronic Programme Guide", standard: "Included", premium: "Included" },
  { feature: "Catch-Up support", standard: "Selected content", premium: "Where available" },
  { feature: "HD and Full HD", standard: "Supported", premium: "Supported" },
  { feature: "4K content", standard: "Where available", premium: "Where available" },
  { feature: "Device compatibility", standard: "Popular devices", premium: "Popular devices" },
  { feature: "Setup guidance", standard: "Included", premium: "Included" },
  { feature: "Activation", standard: "Quick activation", premium: "Quick activation" },
  { feature: "Connections", standard: "[ADD]", premium: "[ADD]" },
  { feature: "Trial availability", standard: "Available", premium: "Available" },
];

function CellValue({ value, color }: { value: string; color: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold leading-snug text-[#0B0E2C] sm:text-[14px]">
      <Check
        className="h-3.5 w-3.5 shrink-0"
        style={{ color }}
        strokeWidth={2.25}
        aria-hidden
      />
      {value}
    </span>
  );
}

export function PlansComparisonSection() {
  return (
    <section
      id="compare-plans"
      className="relative border-t border-[#0B0E2C]/10 bg-white"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#E91E8C]">
            Side by Side
          </p>
          <h2 className="mt-3 text-[28px] font-bold leading-[1.15] tracking-tight text-[#0B0E2C] sm:text-4xl sm:leading-[1.12] lg:text-[42px]">
            Compare{" "}
            <span className="text-gradient-brand">Standard and Premium</span>{" "}
            Plans
          </h2>
        </div>

        <div className="mt-10 overflow-hidden rounded-[8px] border border-[#0B0E2C]/10 sm:mt-12">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[#0B0E2C]/10">
                  <th className="bg-white px-4 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#5C607A] sm:px-6 sm:py-5 sm:text-[14px]">
                    Feature
                  </th>
                  <th className="relative bg-white px-4 py-4 sm:px-6 sm:py-5">
                    <div
                      className="absolute inset-x-0 top-0 h-[3px] bg-[#7B2FFF]"
                      aria-hidden
                    />
                    <span className="text-[13px] font-bold text-[#0B0E2C] sm:text-[15px]">
                      Standard Plan
                    </span>
                  </th>
                  <th className="relative bg-white px-4 py-4 sm:px-6 sm:py-5">
                    <div
                      className="absolute inset-x-0 top-0 h-[3px] bg-gradient-brand"
                      aria-hidden
                    />
                    <span className="text-[13px] font-bold text-[#0B0E2C] sm:text-[15px]">
                      Premium Plan
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={cn(
                      "border-b border-[#0B0E2C]/8 last:border-b-0",
                      index % 2 === 1 && "bg-[rgba(11,14,44,0.02)]"
                    )}
                  >
                    <th
                      scope="row"
                      className="px-4 py-3.5 text-[13px] font-semibold text-[#0B0E2C] sm:px-6 sm:py-4 sm:text-[14px]"
                    >
                      {row.feature}
                    </th>
                    <td className="px-4 py-3.5 sm:px-6 sm:py-4">
                      <CellValue value={row.standard} color="#7B2FFF" />
                    </td>
                    <td className="px-4 py-3.5 sm:px-6 sm:py-4">
                      <CellValue value={row.premium} color="#E91E8C" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-2xl space-y-2 text-center text-[14px] leading-[1.7] text-[#5C607A] sm:mt-10 sm:text-[15px] sm:leading-[1.75]">
          <p>
            The best plan depends on the type of content you watch, your
            preferred devices, required connections and the features you need.
          </p>
          <p>Review the complete package information before placing an order.</p>
        </div>
      </Container>
    </section>
  );
}
