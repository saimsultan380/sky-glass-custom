import { Info } from "lucide-react";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type OverviewRow = {
  device: string;
  method: string;
};

const OVERVIEW_ROWS: OverviewRow[] = [
  { device: "Compatible Firestick and Fire TV", method: "Service’s official app" },
  { device: "Compatible Android TV and Google TV", method: "Service’s official Android app" },
  { device: "Compatible Android phones and tablets", method: "Service’s official Android app" },
  { device: "Samsung Smart TV", method: "Supported Samsung-platform player" },
  { device: "LG Smart TV", method: "Supported LG-platform player" },
  { device: "Apple TV", method: "Compatible tvOS player" },
  { device: "iPhone and iPad", method: "Compatible iOS player" },
  { device: "Windows", method: "Supported Windows player" },
  { device: "Mac", method: "Supported macOS player" },
];

export function InstallationOverview() {
  return (
    <section
      id="installation-overview"
      className="relative border-t border-[#0B0E2C]/10 bg-transparent"
    >
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Choose Your{" "}
            <span className="text-gradient-brand">Device</span>
          </h2>
        </div>

        <div className="mt-5 sm:mt-12">
          <div className="overflow-hidden glass-card">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-[#0B0E2C]/10 bg-[rgba(11,14,44,0.02)]">
                    <th className="px-3 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:py-4 sm:text-[13px]">
                      Platform
                    </th>
                    <th className="px-3 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:py-4 sm:text-[13px]">
                      Application approach
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {OVERVIEW_ROWS.map((row, idx) => (
                    <tr
                      key={row.device}
                      className={cn(
                        "border-b border-[#0B0E2C]/8 last:border-b-0",
                        idx % 2 === 1 && "bg-[rgba(11,14,44,0.01)]"
                      )}
                    >
                      <td className="px-3 py-2.5 text-[14px] font-semibold text-[#0B0E2C] sm:px-5 sm:py-4 sm:text-[14px]">
                        {row.device}
                      </td>
                      <td className="px-3 py-2.5 text-[14px] text-[#5C607A] sm:px-5 sm:py-4 sm:text-[14px]">
                        {row.method}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-3 flex items-start gap-2 text-[14px] text-[#5C607A] sm:mt-5 sm:text-[13px]">
            <Info
              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#7B2FFF] sm:h-4 sm:w-4"
              strokeWidth={2}
            />
            Availability depends on the model, operating system and region.
          </p>
        </div>
      </Container>
    </section>
  );
}
