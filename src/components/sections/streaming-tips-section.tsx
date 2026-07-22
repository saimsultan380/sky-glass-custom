import {
  Wifi,
  Cable,
  Router,
  Download,
  RefreshCw,
  Sparkles,
  AppWindow,
  Gauge,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import type { LucideIcon } from "lucide-react";

const TIPS: { icon: LucideIcon; color: string; title: string }[] = [
  {
    icon: Wifi,
    color: "#FF6B2C",
    title: "Use a reliable broadband connection.",
  },
  {
    icon: Cable,
    color: "#E91E8C",
    title: "Connect your main television or streaming box through Ethernet where possible.",
  },
  {
    icon: Router,
    color: "#7B2FFF",
    title: "Keep Wi-Fi devices close to the router.",
  },
  {
    icon: Download,
    color: "#2563EB",
    title: "Avoid large downloads while watching.",
  },
  {
    icon: RefreshCw,
    color: "#FF6B2C",
    title: "Restart the application and router if performance becomes unstable.",
  },
  {
    icon: Sparkles,
    color: "#E91E8C",
    title: "Keep your device and IPTV application updated.",
  },
  {
    icon: AppWindow,
    color: "#7B2FFF",
    title: "Close unnecessary background applications.",
  },
  {
    icon: Gauge,
    color: "#2563EB",
    title: "Select a suitable stream quality for your connection.",
  },
];

export function StreamingTipsSection() {
  return (
    <section
      id="streaming-tips"
      className="relative border-t border-[#0B0E2C]/10 bg-white"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#E91E8C]">
            Streaming Tips
          </p>
          <h2 className="mt-3 text-[28px] font-bold leading-[1.15] tracking-tight text-[#0B0E2C] sm:text-4xl sm:leading-[1.12] lg:text-[42px]">
            Tips for a Better{" "}
            <span className="text-gradient-brand">Streaming Experience</span>
          </h2>
          <p className="mt-5 text-[15px] leading-[1.75] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-[1.8]">
            Playback quality depends on several factors, including your
            broadband connection, home network, device and selected stream.
          </p>
        </div>

        <div className="mt-10 sm:mt-12">
          <p className="mb-5 text-center text-sm font-semibold text-[#0B0E2C] sm:mb-6">
            For better results:
          </p>

          <ol className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {TIPS.map((tip, index) => {
              const Icon = tip.icon;
              const number = String(index + 1).padStart(2, "0");

              return (
                <li
                  key={tip.title}
                  className="group relative flex flex-col overflow-hidden rounded-[8px] border border-[#0B0E2C]/10 bg-white p-6 shadow-[var(--card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0B0E2C]/20 hover:shadow-[var(--card-shadow-hover)] sm:p-8"
                  style={{
                    "--card-shadow": `0 4px 20px rgba(11, 14, 44, 0.04), 0 8px 24px ${tip.color}1A`,
                    "--card-shadow-hover": `0 8px 30px rgba(11, 14, 44, 0.08), 0 12px 40px ${tip.color}33`,
                  } as React.CSSProperties}
                >
                  <div className="relative z-10 flex h-full gap-4">
                    <span className="accent-line-brand" aria-hidden />
                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex items-center justify-between gap-3">
                        <span
                          className="flex h-12 w-12 items-center justify-center rounded-[12px] border border-[#0B0E2C]/5"
                          style={{ color: tip.color, backgroundColor: `${tip.color}15` }}
                        >
                          <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                        </span>
                        <span
                          className="text-[14px] font-bold tracking-wide text-gradient-brand"
                          aria-hidden
                        >
                          {number}
                        </span>
                      </div>
                      <p className="mt-5 text-[15px] font-medium leading-[1.6] text-[#0B0E2C] sm:text-[16px]">
                        {tip.title}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-[14px] leading-[1.7] text-[#5C607A] sm:mt-10 sm:text-[15px] sm:leading-[1.75]">
          Higher-resolution content generally requires a faster and more stable
          connection than standard-definition streams.
        </p>
      </Container>
    </section>
  );
}
