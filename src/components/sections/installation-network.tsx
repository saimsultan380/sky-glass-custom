import { Gauge, Check } from "lucide-react";
import { Container } from "@/components/layout/container";

const PERFORMANCE_FACTORS = [
  "Broadband speed",
  "Home-network stability",
  "Wi-Fi signal strength",
  "Device capability",
  "Application performance",
  "Selected stream quality",
  "Content source",
];

const RECOMMENDATIONS = [
  "Use a stable broadband connection.",
  "Connect TVs and streaming boxes via Ethernet.",
  "Keep Wi-Fi devices close to the router.",
  "Avoid large downloads while streaming.",
  "Restart the router if playback is unstable.",
  "Use a stream quality suitable for your connection.",
  "Keep your IPTV application updated.",
  "Keep your device software updated.",
  "Close unnecessary background applications.",
];

export function InstallationNetwork() {
  return (
    <section
      id="internet-connection"
      className="relative border-t border-[#0B0E2C]/10 bg-white"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#E91E8C]">
            Network Setup
          </p>
          <h2 className="mt-3 text-[28px] font-bold leading-[1.15] tracking-tight text-[#0B0E2C] sm:text-4xl sm:leading-[1.12] lg:text-[42px]">
            Recommended{" "}
            <span className="text-gradient-brand">Internet Connection</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="group relative flex flex-col overflow-hidden rounded-[8px] border border-[#0B0E2C]/10 bg-white p-6 shadow-[0_4px_20px_rgba(11,14,44,0.04),0_8px_24px_rgba(255,107,44,0.08)] sm:p-8">
            <div className="relative z-10 flex h-full flex-col">
              <h3 className="text-lg font-bold text-[#0B0E2C]">
                Quality Factors
              </h3>
              <p className="mt-2 text-sm text-[#5C607A]">
                Streaming quality depends on:
              </p>
              <ul className="mt-5 space-y-3">
                {PERFORMANCE_FACTORS.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-[14px] font-medium text-[#0B0E2C]"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF6B2C]/10 text-[#FF6B2C]">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="min-w-0">
            <h3 className="text-lg font-bold text-[#0B0E2C] sm:text-xl">
              Better Performance Tips
            </h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {RECOMMENDATIONS.map((tip, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-[8px] border border-[#0B0E2C]/10 bg-white p-4 transition-all duration-300 hover:border-[#7B2FFF]/30 hover:bg-[#7B2FFF]/5"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7B2FFF]/10 text-[11px] font-bold text-[#7B2FFF]">
                    {idx + 1}
                  </span>
                  <p className="text-[13px] leading-snug text-[#5C607A]">
                    {tip}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-start gap-3 rounded-[8px] border border-[#2563EB]/20 bg-[#2563EB]/5 p-5">
              <Gauge className="h-5 w-5 shrink-0 text-[#2563EB]" />
              <p className="text-[14px] leading-relaxed text-[#0B0E2C]">
                HD, Full HD and 4K streams require progressively stronger and
                more stable internet performance.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
