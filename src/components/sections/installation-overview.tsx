import { Check, Info } from "lucide-react";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

const DEVICES_LIST = [
  "Amazon Fire TV Stick",
  "Fire TV devices",
  "Android TV",
  "Google TV",
  "Android streaming boxes",
  "Android smartphones",
  "Android tablets",
  "NVIDIA Shield",
  "Chromecast with Google TV",
  "Compatible Formuler devices",
] as const;

type OverviewRow = {
  device: string;
  method: string;
};

const OVERVIEW_ROWS: OverviewRow[] = [
  {
    device: "Firestick and Fire TV",
    method: "Official app using the supplied installation method",
  },
  { device: "Android TV and Google TV", method: "Official Android app" },
  { device: "Android phones and tablets", method: "Official Android app" },
  {
    device: "Samsung Smart TV",
    method: "Compatible player from Samsung App Store",
  },
  {
    device: "LG Smart TV",
    method: "Compatible player from LG Content Store",
  },
  {
    device: "Other Smart TVs",
    method:
      "Official app or alternative player, depending on operating system",
  },
  { device: "Apple TV", method: "Compatible tvOS IPTV player" },
  { device: "iPhone and iPad", method: "Compatible iOS IPTV player" },
  { device: "Windows", method: "Compatible Windows IPTV player" },
  { device: "Mac", method: "Compatible macOS IPTV player" },
];

export function InstallationOverview() {
  return (
    <section
      id="installation-overview"
      className="relative border-t border-[#0B0E2C]/10 bg-white"
    >
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Install Sky Glass IPTV on Your{" "}
            <span className="text-gradient-brand">Preferred Device</span>
          </h2>
          <div className="mt-3 space-y-2 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:space-y-3 sm:text-base sm:leading-[1.8]">
            <p>
              Sky Glass IPTV works across a wide range of internet-connected
              devices.
            </p>
            <p>
              Firestick and Android users can install the official Sky Glass
              IPTV application using the recommended installation method. Other
              devices can access the service through a compatible IPTV player.
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:mt-12 sm:gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="rounded-[1px] bg-white p-5 shadow-[0_4px_20px_rgba(11,14,44,0.04),0_8px_24px_rgba(255,107,44,0.10)] sm:p-8">
            <h3 className="text-[15px] font-bold text-[#0B0E2C] sm:text-lg">
              Official App Support
            </h3>
            <p className="mt-1.5 text-[14px] text-[#5C607A] sm:mt-2 sm:text-sm">
              Available for these popular platforms:
            </p>
            <ul className="mt-3 space-y-2.5 sm:mt-5 sm:space-y-3">
              {DEVICES_LIST.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[14px] font-medium leading-snug text-[#0B0E2C] sm:gap-3 sm:text-[14px]"
                >
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#FF6B2C]/10 text-[#FF6B2C] sm:h-5 sm:w-5">
                    <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3" strokeWidth={3} />
                  </span>
                  <span className="min-w-0">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className="flex items-center gap-2 text-base font-bold text-[#0B0E2C] sm:text-xl">
              Device Setup Overview
            </h3>
            <div className="mt-3 overflow-hidden rounded-[1px] sm:mt-6">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-[#0B0E2C]/10 bg-[rgba(11,14,44,0.02)]">
                      <th className="px-3 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:py-4 sm:text-[13px]">
                        Device
                      </th>
                      <th className="px-3 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:py-4 sm:text-[13px]">
                        Setup Method
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
              Application availability may vary depending on the device model,
              operating system, application store and region.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
