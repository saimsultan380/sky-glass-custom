import { Tv, Wifi, Smartphone } from "lucide-react";
import { Container } from "@/components/layout/container";

const HIGHLIGHTS = [
  {
    icon: Wifi,
    label: "Internet-based television service",
    color: "#FF6B2C",
  },
  {
    icon: Tv,
    label: "Live channels and on-demand entertainment",
    color: "#E91E8C",
  },
  {
    icon: Smartphone,
    label: "Television, streaming device, phone, tablet or computer",
    color: "#2563EB",
  },
] as const;

export function SmarterIptvExperienceSection() {
  return (
    <section
      id="smarter-iptv-experience"
      className="relative border-t border-[#0B0E2C]/10 bg-transparent"
    >
      <Container className="px-5 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="grid items-start gap-4 sm:gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-20">
          <div className="lg:sticky lg:top-28">
            <h2 className="max-w-md text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
              What Is{" "}
              <span className="text-gradient-brand">Sky Glass IPTV?</span>
            </h2>

            <ul className="mt-8 hidden gap-5 sm:grid">
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="flex items-center gap-3">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[20px]"
                      style={{
                        color: item.color,
                        backgroundColor: `${item.color}15`,
                      }}
                    >
                      <Icon
                        className="h-4 w-4"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                    </span>
                    <span className="text-sm font-medium text-[#0B0E2C]">
                      {item.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            className="group relative max-w-2xl overflow-hidden glass-card card-hover-lift p-5 hover:-translate-y-1 sm:p-8">
            <div className="relative z-10 space-y-2.5 text-[14px] leading-[1.6] text-[#5C607A] sm:space-y-5 sm:text-base sm:leading-[1.8]">
              <p>
                Sky Glass IPTV is an independent internet-based television
                service. It brings available live channels and on-demand
                entertainment into a compatible IPTV application, allowing you
                to browse from a supported television, streaming device, phone,
                tablet or computer.
              </p>
              <p>
                You need an active trial or subscription, a suitable application
                and a reliable internet connection. After activation, you receive
                the account information needed to configure your chosen device.
              </p>
              <p>
                The service is independent of Sky UK Limited, Sky Group and the
                official Sky Glass television product.
              </p>

              <ul className="mt-1 grid gap-3.5 border-t border-[#0B0E2C]/10 pt-4 sm:hidden">
                {HIGHLIGHTS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label} className="flex items-center gap-3">
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[20px]"
                        style={{
                          color: item.color,
                          backgroundColor: `${item.color}15`,
                        }}
                      >
                        <Icon
                          className="h-4 w-4"
                          strokeWidth={1.75}
                          aria-hidden
                        />
                      </span>
                      <span className="text-[14px] font-medium text-[#0B0E2C]">
                        {item.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
