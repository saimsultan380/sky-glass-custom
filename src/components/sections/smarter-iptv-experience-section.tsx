import Link from "next/link";
import { ArrowRight, Tv, Wifi, Smartphone } from "lucide-react";
import { Container } from "@/components/layout/container";

const HIGHLIGHTS = [
  {
    icon: Wifi,
    label: "Internet-based viewing",
    color: "#FF6B2C",
  },
  {
    icon: Tv,
    label: "Live TV, sports & more",
    color: "#E91E8C",
  },
  {
    icon: Smartphone,
    label: "Watch on any room or device",
    color: "#2563EB",
  },
] as const;

export function SmarterIptvExperienceSection() {
  return (
    <section
      id="smarter-iptv-experience"
      className="relative border-t border-[#0B0E2C]/10 bg-white"
    >
      <Container className="px-5 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="grid items-start gap-4 sm:gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-20">
          <div className="lg:sticky lg:top-28">

            <h2 className="max-w-md text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
              A Smarter{" "}
              <span className="text-gradient-brand">IPTV</span> Experience for
              UK Viewers
            </h2>

            <ul className="mt-8 hidden gap-5 sm:grid">
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="flex items-center gap-3">
                    <Icon
                      className="h-5 w-5 shrink-0"
                      style={{ color: item.color }}
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    <span className="text-sm font-medium text-[#0B0E2C]">
                      {item.label}
                    </span>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/subscription-plans"
              className="mt-8 hidden min-h-[48px] items-center justify-center gap-2 rounded-[1px] bg-gradient-brand px-6 py-3 text-[14px] font-semibold text-white transition-opacity duration-150 hover:opacity-90 sm:inline-flex"
            >
              Discover Sky Glass IPTV Plans
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
            </Link>
          </div>

          <div className="max-w-2xl space-y-2.5 text-[14px] leading-[1.6] text-[#5C607A] sm:space-y-5 sm:text-base sm:leading-[1.8]">
            <p>
              Sky Glass IPTV is designed for viewers who want greater
              flexibility over how and where they access their favourite
              entertainment.
            </p>
            <p>
              Instead of relying on one television, one room or a fixed viewing
              schedule, IPTV uses an internet connection and a compatible
              application to provide access across supported devices.
            </p>
            <p>
              Viewers can explore available live television, sports, movies,
              television series, news, documentaries and family entertainment
              through one organised interface. This makes it easier to move
              between different categories without constantly changing platforms
              or devices.
            </p>
            <p>
              Whether you prefer watching on a large Smart TV at home, using a
              Firestick in another room or accessing entertainment on a
              smartphone or tablet, Sky Glass IPTV provides a convenient
              experience designed around modern viewing habits.
            </p>
            <p>
              The service is suitable for experienced IPTV users as well as
              viewers trying internet-based television for the first time.
            </p>

            <ul className="mt-1 grid gap-3.5 border-t border-[#0B0E2C]/10 pt-4 sm:hidden">
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="flex items-center gap-3">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px]"
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

            <Link
              href="/subscription-plans"
              className="mt-3 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-[1px] bg-gradient-brand px-6 py-2.5 text-[13px] font-semibold text-white transition-opacity duration-150 hover:opacity-90 sm:hidden"
            >
              Discover Sky Glass IPTV Plans
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
