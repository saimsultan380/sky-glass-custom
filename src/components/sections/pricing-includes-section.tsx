import Link from "next/link";
import { Check, Minus } from "lucide-react";
import { Container } from "@/components/layout/container";
import { siteRoutes } from "@/lib/routes";

type CompareRow = {
  label: string;
  standard: boolean | string;
  premium: boolean | string;
};

const ROWS: CompareRow[] = [
  {
    label: "Available live television",
    standard: true,
    premium: "Expanded access",
  },
  {
    label: "Sports and event coverage",
    standard: "Where included",
    premium: "Broader coverage where available",
  },
  {
    label: "Movies and series library",
    standard: true,
    premium: "Larger library",
  },
  {
    label: "Electronic Programme Guide",
    standard: true,
    premium: true,
  },
  {
    label: "Catch-Up where available",
    standard: false,
    premium: true,
  },
  {
    label: "HD / Full HD / 4K options",
    standard: "Where supported",
    premium: "Where supported",
  },
  {
    label: "Setup assistance",
    standard: true,
    premium: true,
  },
  {
    label: "Simultaneous connections",
    standard: "Chosen device count",
    premium: "Chosen device count",
  },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <Check className="mx-auto h-4 w-4 text-[#7B2FFF]" strokeWidth={2.5} aria-label="Included" />
    );
  }
  if (value === false) {
    return (
      <Minus className="mx-auto h-4 w-4 text-[#5C607A]/50" strokeWidth={2} aria-label="Not included" />
    );
  }
  return (
    <span className="text-[12px] font-medium leading-snug text-[#0B0E2C] sm:text-[13px]">
      {value}
    </span>
  );
}

export function PricingIncludesSection() {
  return (
    <section
      id="what-price-includes"
      className="relative border-t border-[#0B0E2C]/10 bg-transparent"
    >
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            What the Price{" "}
            <span className="text-gradient-brand">Includes</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-[1.6] text-[#5C607A] sm:mt-5 sm:text-base sm:leading-[1.75]">
            A compact Standard versus Premium comparison. Device setup steps
            live on the{" "}
            <Link
              href={siteRoutes.installation}
              className="font-semibold text-[#0B0E2C] underline-offset-2 hover:underline"
            >
              installation guide
            </Link>
            .
          </p>
        </div>

        <div className="mx-auto mt-6 max-w-4xl overflow-hidden glass-card sm:mt-10">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[#0B0E2C]/10">
                  <th className="px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#5C607A] sm:px-6 sm:py-4">
                    Feature
                  </th>
                  <th className="px-4 py-3 text-center text-[13px] font-bold text-[#0B0E2C] sm:px-6 sm:py-4 sm:text-[14px]">
                    Standard
                  </th>
                  <th className="px-4 py-3 text-center text-[13px] font-bold text-[#0B0E2C] sm:px-6 sm:py-4 sm:text-[14px]">
                    Premium
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, index) => (
                  <tr
                    key={row.label}
                    className={
                      index % 2 === 1
                        ? "border-b border-[#0B0E2C]/8 bg-[rgba(11,14,44,0.02)] last:border-b-0"
                        : "border-b border-[#0B0E2C]/8 last:border-b-0"
                    }
                  >
                    <th
                      scope="row"
                      className="px-4 py-3 text-[13px] font-semibold text-[#0B0E2C] sm:px-6 sm:py-3.5 sm:text-[14px]"
                    >
                      {row.label}
                    </th>
                    <td className="px-4 py-3 text-center sm:px-6">
                      <CellValue value={row.standard} />
                    </td>
                    <td className="px-4 py-3 text-center sm:px-6">
                      <CellValue value={row.premium} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="border-t border-[#0B0E2C]/10 px-4 py-3 text-[12px] leading-[1.55] text-[#5C607A] sm:px-6 sm:text-[13px]">
            Trial access may not include every category or connection allowance
            available with a paid plan. Confirm the allowance that applies to
            your trial when you request it.
          </p>
        </div>
      </Container>
    </section>
  );
}
