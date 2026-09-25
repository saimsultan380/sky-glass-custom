import Link from "next/link";
import {
  ArrowRight,
  Tv,
  MonitorSmartphone,
  Monitor,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import type { LucideIcon } from "lucide-react";
import { siteRoutes } from "@/lib/routes";

type DeviceCard = {
  icon: LucideIcon;
  color: string;
  title: string;
  description: string;
};

const DEVICES: DeviceCard[] = [
  {
    icon: Tv,
    color: "#FF6B2C",
    title: "Firestick & Fire TV",
    description: "Official application on compatible Amazon streaming devices.",
  },
  {
    icon: MonitorSmartphone,
    color: "#E91E8C",
    title: "Android & Google TV",
    description: "Official application on compatible Android streaming platforms.",
  },
  {
    icon: Monitor,
    color: "#2563EB",
    title: "Smart TV, Apple & desktop",
    description: "Supported third-party players where the official app is unavailable.",
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
          <p className="mt-4 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-[1.8]">
            The player you need depends on your device. Use the installation
            guide for model-specific steps.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-5">
          {DEVICES.map((device) => {
            const Icon = device.icon;
            return (
              <article
                key={device.title}
                className="group relative flex flex-col overflow-hidden glass-card card-hover-lift p-5 hover:-translate-y-1 sm:p-6"
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-[20px] sm:h-12 sm:w-12"
                  style={{
                    color: device.color,
                    backgroundColor: `${device.color}15`,
                  }}
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="mt-3 text-base font-bold tracking-tight text-[#0B0E2C] sm:mt-4 sm:text-lg">
                  {device.title}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.55] text-[#5C607A] sm:text-[14px]">
                  {device.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-6 flex justify-center sm:mt-10">
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
