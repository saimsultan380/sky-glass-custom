import Link from "next/link";
import {
  ArrowRight,
  Tv,
  MonitorSmartphone,
  Smartphone,
  Monitor,
  Apple,
  Laptop,
  Check,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type DeviceCard = {
  icon: LucideIcon;
  color: string;
  title: string;
  description: string;
  badge: "Official App" | "Alternative Player";
  listIntro?: string;
  list?: readonly string[];
  featured?: boolean;
};

const DEVICES: DeviceCard[] = [
  {
    icon: Tv,
    color: "#FF6B2C",
    title: "Firestick and Fire TV Devices",
    description:
      "Install the official application on compatible Amazon Firestick and Fire TV devices using the supplied installation method.",
    badge: "Official App",
    listIntro: "Firestick provides:",
    list: [
      "A simple television interface",
      "Remote-control navigation",
      "Support for compatible streaming applications",
      "Straightforward installation",
      "Convenient access from a television",
    ],
    featured: true,
  },
  {
    icon: MonitorSmartphone,
    color: "#E91E8C",
    title: "Android TV and Google TV",
    description:
      "The official application is available for supported Android TV, Google TV and Android streaming boxes.",
    badge: "Official App",
    listIntro: "Compatible platforms may include:",
    list: [
      "Selected Android televisions",
      "Google TV devices",
      "Android streaming boxes",
      "NVIDIA Shield",
      "Chromecast with Google TV",
      "Compatible Formuler devices",
    ],
    featured: true,
  },
  {
    icon: Smartphone,
    color: "#7B2FFF",
    title: "Android Smartphones and Tablets",
    description:
      "Install the official Sky Glass IPTV application on compatible Android phones and tablets using the approved download information supplied after activation.",
    badge: "Official App",
  },
  {
    icon: Monitor,
    color: "#2563EB",
    title: "Samsung and LG Smart TVs",
    description:
      "Samsung and LG televisions normally use an alternative IPTV player downloaded from the television’s application store.",
    badge: "Alternative Player",
    listIntro: "Player availability depends on:",
    list: [
      "Television model",
      "Operating system",
      "Application store",
      "Country or region",
    ],
  },
  {
    icon: Apple,
    color: "#E91E8C",
    title: "Apple TV, iPhone and iPad",
    description:
      "Apple devices can access the service through a compatible IPTV application available from the Apple App Store.",
    badge: "Alternative Player",
  },
  {
    icon: Laptop,
    color: "#FF6B2C",
    title: "Windows and Mac",
    description: "Use a compatible IPTV player on:",
    badge: "Alternative Player",
    list: [
      "Windows PCs",
      "Windows laptops",
      "Mac computers",
      "MacBook devices",
      "Compatible desktop systems",
    ],
  },
];

export function PopularDevicesSection() {
  return (
    <section
      id="popular-devices"
      className="relative border-t border-[#0B0E2C]/10 bg-white"
    >
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#E91E8C]">
            Device Compatibility
          </p>
          <h2 className="mt-2 text-[22px] font-bold leading-[1.15] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-4xl sm:leading-[1.12] lg:text-[42px]">
            Watch Sky Glass IPTV on{" "}
            <span className="text-gradient-brand">Popular Devices</span>
          </h2>
          <div className="mt-4 space-y-2.5 text-[14px] leading-[1.7] text-[#5C607A] sm:mt-6 sm:space-y-3 sm:text-base sm:leading-[1.8]">
            <p>
              One of the main advantages of IPTV is the ability to access
              entertainment on different internet-connected devices.
            </p>
            <p>
              The official Sky Glass IPTV application is available for
              compatible Firestick and Android platforms. Other supported
              devices can use alternative IPTV player applications.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:mt-14 sm:gap-6 md:grid-cols-2">
          {DEVICES.map((device) => {
            const Icon = device.icon;
            const isOfficial = device.badge === "Official App";

            return (
              <article
                key={device.title}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-[8px] border border-[#0B0E2C]/10 bg-white p-4 shadow-[var(--card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0B0E2C]/20 hover:shadow-[var(--card-shadow-hover)] sm:p-8",
                  device.featured && "ring-1 ring-inset ring-[#E91E8C]/20"
                )}
                style={{
                  "--card-shadow": `0 4px 20px rgba(11, 14, 44, 0.04), 0 8px 24px ${device.color}1A`,
                  "--card-shadow-hover": `0 8px 30px rgba(11, 14, 44, 0.08), 0 12px 40px ${device.color}33`,
                } as React.CSSProperties}
              >
                <div className="relative z-10 flex h-full">
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-[#0B0E2C]/5 sm:h-12 sm:w-12"
                        style={{ color: device.color, backgroundColor: `${device.color}15` }}
                      >
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden />
                      </span>
                      <span
                        className={cn(
                          "rounded-[8px] px-2.5 py-1 text-[11px] font-semibold tracking-wide",
                          isOfficial
                            ? "bg-gradient-brand text-white"
                            : "border border-[#0B0E2C]/12 text-[#5C607A]"
                        )}
                      >
                        {device.badge}
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-bold tracking-tight text-[#0B0E2C] sm:mt-5 sm:text-xl">
                      {device.title}
                    </h3>

                    <p className="mt-2.5 text-[13px] leading-[1.65] text-[#5C607A] sm:mt-3 sm:text-[15px] sm:leading-[1.75]">
                      {device.description}
                    </p>

                    {device.listIntro && (
                      <p className="mt-4 text-[13px] font-semibold text-[#0B0E2C] sm:mt-5 sm:text-[14px]">
                        {device.listIntro}
                      </p>
                    )}

                    {device.list && (
                      <ul
                        className={cn(
                          "mt-2.5 space-y-2 sm:mt-3 sm:space-y-2.5",
                          !device.listIntro &&
                            "mt-4 border-t border-[#0B0E2C]/8 pt-4 sm:mt-5 sm:pt-5"
                        )}
                      >
                        {device.list.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-[13px] leading-snug text-[#0B0E2C] sm:text-[14px]"
                          >
                            <span
                              className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                              style={{ backgroundColor: `${device.color}1A` }}
                              aria-hidden
                            >
                              <Check
                                className="h-2.5 w-2.5"
                                style={{ color: device.color }}
                                strokeWidth={3}
                              />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center sm:mt-12">
          <Link
            href="/installation-guide"
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[10px] bg-gradient-brand px-6 py-3 text-[14px] font-semibold text-white transition-opacity duration-150 hover:opacity-90 sm:w-auto"
          >
            View the Sky Glass IPTV Installation Guide
            <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
