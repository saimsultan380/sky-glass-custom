import { Wifi, Cable, RefreshCw } from "lucide-react";
import { Container } from "@/components/layout/container";
import type { LucideIcon } from "lucide-react";

const TIPS: { icon: LucideIcon; color: string; title: string }[] = [
  {
    icon: Wifi,
    color: "#FF6B2C",
    title:
      "A stable home network helps your device maintain playback. Where practical, use Ethernet for a television or streaming box. For Wi-Fi, choose a position with a strong signal.",
  },
  {
    icon: Cable,
    color: "#E91E8C",
    title:
      "Keep your device and application updated, close unnecessary background applications and avoid large downloads while testing performance.",
  },
  {
    icon: RefreshCw,
    color: "#7B2FFF",
    title:
      "If playback pauses, try another stream before changing settings. This helps establish whether the issue affects one source or the wider connection.",
  },
];

export function StreamingTipsSection() {
  return (
    <section
      id="streaming-tips"
      className="relative border-t border-[#0B0E2C]/10 bg-transparent"
    >
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Prepare Your Connection for{" "}
            <span className="text-gradient-brand">Viewing</span>
          </h2>
        </div>

        <div className="mt-5 sm:mt-12">
          <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {TIPS.map((tip, index) => {
              const Icon = tip.icon;
              const number = String(index + 1).padStart(2, "0");

              return (
                <li
                  key={tip.title}
                  className="group relative flex flex-col overflow-hidden glass-card card-hover-lift p-5 hover:-translate-y-1 sm:p-8">
                  <div className="relative z-10 flex h-full gap-2 sm:gap-4">
                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className="flex h-10 w-10 items-center justify-center rounded-[20px] sm:h-12 sm:w-12 sm:rounded-[20px]"
                          style={{ color: tip.color, backgroundColor: `${tip.color}15` }}
                        >
                          <Icon className="h-3.5 w-3.5 sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden />
                        </span>
                        <span
                          className="text-[11px] font-bold tracking-wide text-gradient-brand sm:text-[14px]"
                          aria-hidden
                        >
                          {number}
                        </span>
                      </div>
                      <p className="mt-2.5 text-[14px] font-medium leading-[1.45] text-[#0B0E2C] sm:mt-5 sm:text-[16px] sm:leading-[1.6]">
                        {tip.title}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
