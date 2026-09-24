import Link from "next/link";
import {
  ArrowRight,
  Tv,
  MonitorSmartphone,
  Smartphone,
  Monitor,
  Apple,
  Laptop,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteRoutes } from "@/lib/routes";

type DeviceCard = {
  icon: LucideIcon;
  color: string;
  title: string;
  description: string;
  badge: "Official App" | "Alternative Player";
  featured?: boolean;
};

const DEVICES: DeviceCard[] = [
  {
    icon: Tv,
    color: "#FF6B2C",
    title: "Compatible Firestick and Fire TV devices",
    description: "Service’s official application",
    badge: "Official App",
    featured: true,
  },
  {
    icon: MonitorSmartphone,
    color: "#E91E8C",
    title: "Compatible Android TV and Google TV devices",
    description: "Service’s official application",
    badge: "Official App",
    featured: true,
  },
  {
    icon: Smartphone,
    color: "#7B2FFF",
    title: "Compatible Android phones and tablets",
    description: "Service’s official application",
    badge: "Official App",
  },
  {
    icon: Monitor,
    color: "#2563EB",
    title: "Samsung and LG Smart TVs",
    description: "Supported third-party player",
    badge: "Alternative Player",
  },
  {
    icon: Apple,
    color: "#E91E8C",
    title: "Apple TV, iPhone and iPad",
    description: "Compatible Apple-platform player",
    badge: "Alternative Player",
  },
  {
    icon: Laptop,
    color: "#FF6B2C",
    title: "Windows and Mac computers",
    description: "Compatible desktop player",
    badge: "Alternative Player",
  },
];

export function PopularDevicesSection() {
  return (
    <section
      id="popular-devices"
      className="relative border-t border-[#0B0E2C]/10 bg-transparent"
    >
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Watch on a Device That{" "}
            <span className="text-gradient-brand">Suits You</span>
          </h2>
          <div className="mt-4 space-y-2 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:space-y-3 sm:text-base sm:leading-[1.8]">
            <p>The application you need depends on your device’s operating system.</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-2">
          {DEVICES.map((device) => {
            const Icon = device.icon;
            const isOfficial = device.badge === "Official App";

            return (
              <article
                key={device.title}
                className={cn(
                  "group relative flex flex-col overflow-hidden glass-card card-hover-lift p-5 hover:-translate-y-1 sm:p-8",
                  device.featured && "ring-1 ring-inset ring-[#E91E8C]/20"
                )}>
                <div className="relative z-10 flex h-full">
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2.5">
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[20px] sm:h-12 sm:w-12 sm:rounded-[20px]"
                        style={{ color: device.color, backgroundColor: `${device.color}15` }}
                      >
                        <Icon className="h-4 w-4 sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden />
                      </span>
                      <span
                        className={cn(
                          "rounded-[20px] px-2 py-0.5 text-[10px] font-semibold tracking-wide sm:rounded-[20px] sm:px-2.5 sm:py-1 sm:text-[11px]",
                          isOfficial
                            ? "bg-gradient-brand text-white"
                            : "bg-[#0B0E2C]/5 text-[#5C607A]"
                        )}
                      >
                        {device.badge}
                      </span>
                    </div>

                    <h3 className="mt-2.5 text-base font-bold tracking-tight text-[#0B0E2C] sm:mt-5 sm:text-xl">
                      {device.title}
                    </h3>

                    <p className="mt-2 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-3 sm:text-[15px] sm:leading-[1.75]">
                      {device.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-[14px] leading-[1.55] text-[#5C607A] sm:mt-10 sm:text-[15px] sm:leading-[1.75]">
          Check your model before installing. Player availability can vary by
          software version and region, and some third-party applications charge
          separately.
        </p>

        <div className="mt-6 flex justify-center sm:mt-12">
          <Link
            href={siteRoutes.installation}
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-[20px] bg-gradient-brand px-6 py-2.5 text-[13px] font-semibold text-white transition-opacity duration-150 hover:opacity-90 sm:min-h-[48px] sm:w-auto sm:py-3 sm:text-[14px]"
          >
            View the Installation Guide
            <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
