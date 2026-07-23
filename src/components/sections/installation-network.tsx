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
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Recommended{" "}
            <span className="text-gradient-brand">Internet Connection</span>
          </h2>
        </div>

        <div className="mt-5 grid gap-4 sm:mt-12 sm:gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="rounded-[1px] bg-white p-5 shadow-[0_4px_20px_rgba(11,14,44,0.04),0_8px_24px_rgba(255,107,44,0.08)] sm:p-8">
            <h3 className="text-[15px] font-bold text-[#0B0E2C] sm:text-lg">
              Quality Factors
            </h3>
            <p className="mt-1.5 text-[14px] text-[#5C607A] sm:mt-2 sm:text-sm">
              Streaming quality depends on:
            </p>
            <ul className="mt-3 space-y-2.5 sm:mt-5 sm:space-y-3">
              {PERFORMANCE_FACTORS.map((item) => (
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
            <h3 className="text-base font-bold text-[#0B0E2C] sm:text-xl">
              Better Performance Tips
            </h3>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-6 sm:gap-3">
              {RECOMMENDATIONS.map((tip, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-1.5 rounded-[1px] bg-[#F5F5F7] p-2.5 transition-colors duration-200 hover:bg-[#7B2FFF]/8 sm:gap-3 sm:p-4"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#7B2FFF]/10 text-[10px] font-bold text-[#7B2FFF] sm:mt-0 sm:h-6 sm:w-6 sm:text-[11px]">
                    {idx + 1}
                  </span>
                  <p className="min-w-0 text-[11px] leading-snug text-[#5C607A] sm:text-[13px] sm:leading-snug">
                    {tip}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-start gap-2.5 rounded-[1px] border border-[#2563EB]/20 bg-[#2563EB]/5 p-3 sm:mt-8 sm:gap-3 sm:p-5">
              <Gauge className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB] sm:mt-0 sm:h-5 sm:w-5" />
              <p className="text-[12px] leading-[1.5] text-[#0B0E2C] sm:text-[14px] sm:leading-relaxed">
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
