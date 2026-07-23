import Link from "next/link";
import {
  ArrowRight,
  Tv,
  MonitorSmartphone,
  Smartphone,
  Monitor,
  Apple,
  TabletSmartphone,
  Laptop,
  BadgeCheck,
  AppWindow,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import type { LucideIcon } from "lucide-react";

const PLATFORMS: { label: string; icon: LucideIcon; color: string }[] = [
  { label: "Firestick and Fire TV", icon: Tv, color: "#FF6B2C" },
  { label: "Android TV and Google TV", icon: MonitorSmartphone, color: "#E91E8C" },
  { label: "Android smartphones and tablets", icon: Smartphone, color: "#7B2FFF" },
  { label: "Samsung and LG Smart TVs", icon: Monitor, color: "#2563EB" },
  { label: "Selected Sony, Philips, Hisense and TCL televisions", icon: Tv, color: "#FF6B2C" },
  { label: "Apple TV", icon: Apple, color: "#E91E8C" },
  { label: "iPhone and iPad", icon: TabletSmartphone, color: "#7B2FFF" },
  { label: "Windows PCs and laptops", icon: Laptop, color: "#2563EB" },
  { label: "Mac and MacBook devices", icon: Laptop, color: "#E91E8C" },
];

export function PlansDevicesSection() {
  return (
    <section
      id="compatible-devices"
      className="relative border-t border-[#0B0E2C]/10 bg-white"
    >
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Compatible with{" "}
            <span className="text-gradient-brand">Popular Devices</span>
          </h2>
          <p className="mt-4 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-[1.8]">
            Sky Glass IPTV can be configured on many commonly used
            internet-connected devices.
          </p>
        </div>

        <ul className="mt-6 grid grid-cols-1 gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {PLATFORMS.map((platform) => {
            const Icon = platform.icon;
            return (
              <li
                key={platform.label}
                className="group relative flex items-center gap-3 overflow-hidden rounded-[1px] bg-white p-5 shadow-[var(--card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--card-shadow-hover)] sm:gap-4 sm:p-5"
                style={
                  {
                    "--card-shadow": `0 4px 20px rgba(11, 14, 44, 0.04), 0 8px 24px ${platform.color}1A`,
                    "--card-shadow-hover": `0 8px 30px rgba(11, 14, 44, 0.08), 0 12px 40px ${platform.color}33`,
                  } as React.CSSProperties
                }
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] sm:h-11 sm:w-11"
                  style={{
                    color: platform.color,
                    backgroundColor: `${platform.color}15`,
                  }}
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <span className="min-w-0 flex-1 text-[14px] font-semibold leading-snug text-[#0B0E2C] sm:text-[15px]">
                  {platform.label}
                </span>
              </li>
            );
          })}
        </ul>

        <div className="mx-auto mt-6 grid max-w-3xl gap-4 sm:mt-10 sm:gap-4 sm:grid-cols-2">
          <div className="flex items-start gap-2.5 rounded-[1px] p-5 sm:gap-3 sm:p-5">
            <BadgeCheck
              className="mt-0.5 h-4 w-4 shrink-0 text-[#7B2FFF] sm:h-5 sm:w-5"
              strokeWidth={1.75}
              aria-hidden
            />
            <p className="text-[14px] leading-[1.55] text-[#5C607A] sm:text-[14px] sm:leading-[1.7]">
              The official application is available for compatible Firestick
              and Android devices.
            </p>
          </div>
          <div className="flex items-start gap-2.5 rounded-[1px] p-5 sm:gap-3 sm:p-5">
            <AppWindow
              className="mt-0.5 h-4 w-4 shrink-0 text-[#E91E8C] sm:h-5 sm:w-5"
              strokeWidth={1.75}
              aria-hidden
            />
            <p className="text-[14px] leading-[1.55] text-[#5C607A] sm:text-[14px] sm:leading-[1.7]">
              Other platforms use supported alternative IPTV players.
            </p>
          </div>
        </div>

        <div className="mt-5 flex justify-center sm:mt-12">
          <Link
            href="/installation-guide"
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-[1px] bg-gradient-brand px-6 py-2.5 text-[13px] font-semibold text-white transition-opacity duration-150 hover:opacity-90 sm:min-h-[48px] sm:w-auto sm:py-3 sm:text-[14px]"
          >
            View the Installation Guide
            <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
