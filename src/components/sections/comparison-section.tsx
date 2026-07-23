import { Check, Minus } from "lucide-react";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type CellTone = "positive" | "neutral" | "limited";

type ComparisonRow = {
  feature: string;
  skyGlass: string;
  traditional: string;
  skyTone: CellTone;
  traditionalTone: CellTone;
};

const ROWS: ComparisonRow[] = [
  {
    feature: "Internet-based viewing",
    skyGlass: "Yes",
    traditional: "Not always",
    skyTone: "positive",
    traditionalTone: "limited",
  },
  {
    feature: "Live television",
    skyGlass: "Available",
    traditional: "Available",
    skyTone: "positive",
    traditionalTone: "positive",
  },
  {
    feature: "Movies and series",
    skyGlass: "Available",
    traditional: "Package dependent",
    skyTone: "positive",
    traditionalTone: "limited",
  },
  {
    feature: "Firestick and Android support",
    skyGlass: "Supported",
    traditional: "Often limited",
    skyTone: "positive",
    traditionalTone: "limited",
  },
  {
    feature: "Smart TV compatibility",
    skyGlass: "Supported",
    traditional: "Provider dependent",
    skyTone: "positive",
    traditionalTone: "limited",
  },
  {
    feature: "Mobile viewing",
    skyGlass: "Supported",
    traditional: "Often restricted",
    skyTone: "positive",
    traditionalTone: "limited",
  },
  {
    feature: "Flexible plan durations",
    skyGlass: "Available",
    traditional: "Frequently contract based",
    skyTone: "positive",
    traditionalTone: "limited",
  },
  {
    feature: "On-demand categories",
    skyGlass: "Available",
    traditional: "Package dependent",
    skyTone: "positive",
    traditionalTone: "limited",
  },
  {
    feature: "Satellite dish required",
    skyGlass: "No",
    traditional: "Sometimes",
    skyTone: "positive",
    traditionalTone: "limited",
  },
  {
    feature: "Setup guidance",
    skyGlass: "Available",
    traditional: "Provider dependent",
    skyTone: "positive",
    traditionalTone: "limited",
  },
];

function CellValue({
  value,
  tone,
  emphasize,
}: {
  value: string;
  tone: CellTone;
  emphasize?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-[13px] leading-snug sm:text-[14px]",
        emphasize ? "font-semibold text-[#0B0E2C]" : "font-medium text-[#5C607A]",
        tone === "positive" && emphasize && "text-[#0B0E2C]",
        tone === "limited" && !emphasize && "text-[#5C607A]"
      )}
    >
      {tone === "positive" && emphasize ? (
        <Check
          className="h-3.5 w-3.5 shrink-0 text-[#7B2FFF]"
          strokeWidth={2.25}
          aria-hidden
        />
      ) : tone === "limited" && !emphasize ? (
        <Minus
          className="h-3.5 w-3.5 shrink-0 text-[#5C607A]/50"
          strokeWidth={2}
          aria-hidden
        />
      ) : null}
      {value}
    </span>
  );
}

export function ComparisonSection() {
  return (
    <section
      id="iptv-vs-traditional-tv"
      className="relative border-t border-[#0B0E2C]/10 bg-white"
    >
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Sky Glass IPTV Compared with{" "}
            <span className="text-gradient-brand">Traditional Television</span>
          </h2>
        </div>

        <div className="mt-5 overflow-hidden rounded-[1px] sm:mt-12">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[#0B0E2C]/10">
                  <th className="bg-white px-3 py-2.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#5C607A] sm:px-6 sm:py-5 sm:text-[14px]">
                    Feature
                  </th>
                  <th className="relative bg-white px-3 py-2.5 sm:px-6 sm:py-5">
                    <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-brand" aria-hidden />
                    <span className="text-[12px] font-bold text-[#0B0E2C] sm:text-[15px]">
                      Sky Glass IPTV
                    </span>
                  </th>
                  <th className="bg-white px-3 py-2.5 text-[12px] font-semibold text-[#5C607A] sm:px-6 sm:py-5 sm:text-[15px]">
                    Traditional Television
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
                      className="px-3 py-2.5 text-[12px] font-semibold text-[#0B0E2C] sm:px-6 sm:py-4 sm:text-[14px]"
                    >
                      {row.feature}
                    </th>
                    <td className="px-3 py-2.5 sm:px-6 sm:py-4">
                      <div className="-mx-2 rounded-[1px] px-2 py-0.5 sm:-mx-3 sm:px-3 sm:py-1">
                        <CellValue
                          value={row.skyGlass}
                          tone={row.skyTone}
                          emphasize
                        />
                      </div>
                    </td>
                    <td className="px-3 py-2.5 sm:px-6 sm:py-4">
                      <CellValue
                        value={row.traditional}
                        tone={row.traditionalTone}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mx-auto mt-4 max-w-2xl text-center text-[14px] leading-[1.55] text-[#5C607A] sm:mt-10 sm:text-[15px] sm:leading-[1.75]">
          The right option depends on your viewing preferences, device
          requirements, budget and internet connection.
        </p>
      </Container>
    </section>
  );
}
