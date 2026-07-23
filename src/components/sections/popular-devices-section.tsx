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
  footer?: string;
  featured?: boolean;
};

const DEVICES: DeviceCard[] = [
  {
    icon: Tv,
    color: "#FF6B2C",
    title: "Firestick and Fire TV",
    description:
      "Compatible Firestick and Fire TV devices can use the official application through the approved installation route supplied after activation.",
    badge: "Official App",
    listIntro: "Firestick offers:",
    list: [
      "Television-based navigation",
      "Remote-control access",
      "Support for compatible streaming applications",
      "Straightforward setup",
      "A compact streaming solution",
    ],
    featured: true,
  },
  {
    icon: MonitorSmartphone,
    color: "#E91E8C",
    title: "Android TV and Google TV",
    description:
      "The official application can be used on compatible Android TV, Google TV and Android streaming devices.",
    badge: "Official App",
    listIntro: "Supported hardware may include:",
    list: [
      "Android Smart TVs",
      "Google TV devices",
      "Android boxes",
      "NVIDIA Shield",
      "Chromecast with Google TV",
      "Compatible Formuler models",
    ],
    featured: true,
  },
  {
    icon: Smartphone,
    color: "#7B2FFF",
    title: "Android Phones and Tablets",
    description:
      "The official app can be installed on compatible Android smartphones and tablets using the approved download information provided after activation.",
    badge: "Official App",
  },
  {
    icon: Monitor,
    color: "#2563EB",
    title: "Samsung and LG Smart TVs",
    description:
      "Samsung and LG televisions normally use a third-party IPTV player from the television's application store. Player availability depends on the television model, software version and region.",
    badge: "Alternative Player",
  },
  {
    icon: Apple,
    color: "#E91E8C",
    title: "Apple TV, iPhone and iPad",
    description:
      "Apple devices can access the service through a compatible IPTV application available from the Apple App Store. The official Android application cannot be installed directly on Apple TV or iOS.",
    badge: "Alternative Player",
  },
  {
    icon: Laptop,
    color: "#FF6B2C",
    title: "Windows and Mac",
    description: "Compatible IPTV applications are available for:",
    badge: "Alternative Player",
    list: [
      "Windows PCs",
      "Windows laptops",
      "Mac computers",
      "MacBook devices",
    ],
    footer:
      "Use a trusted application source and avoid downloading unknown software.",
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
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Watch Sky Glass IPTV on{" "}
            <span className="text-gradient-brand">Popular Devices</span>
          </h2>
          <div className="mt-4 space-y-2 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:space-y-3 sm:text-base sm:leading-[1.8]">
            <p>
              One of the main advantages of IPTV is the ability to access
              entertainment on different internet-connected devices.
            </p>
            <p>
              The installation method depends on the operating system.
            </p>
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
                  "group relative flex flex-col overflow-hidden rounded-[1px] bg-white p-5 shadow-[var(--card-shadow)] card-hover-lift hover:-translate-y-1 hover:shadow-[var(--card-shadow-hover)] sm:p-8",
                  device.featured && "ring-1 ring-inset ring-[#E91E8C]/20"
                )}
                style={{
                  "--card-shadow": `0 4px 20px rgba(11, 14, 44, 0.04), 0 8px 24px ${device.color}1A`,
                  "--card-shadow-hover": `0 8px 30px rgba(11, 14, 44, 0.08), 0 12px 40px ${device.color}33`,
                } as React.CSSProperties}
              >
                <div className="relative z-10 flex h-full">
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2.5">
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] sm:h-12 sm:w-12 sm:rounded-[1px]"
                        style={{ color: device.color, backgroundColor: `${device.color}15` }}
                      >
                        <Icon className="h-4 w-4 sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden />
                      </span>
                      <span
                        className={cn(
                          "rounded-[1px] px-2 py-0.5 text-[10px] font-semibold tracking-wide sm:rounded-[1px] sm:px-2.5 sm:py-1 sm:text-[11px]",
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

                    {device.listIntro && (
                      <p className="mt-2.5 text-[12px] font-semibold text-[#0B0E2C] sm:mt-5 sm:text-[14px]">
                        {device.listIntro}
                      </p>
                    )}

                    {device.list && (
                      <ul
                        className={cn(
                          "mt-2 space-y-2.5 sm:mt-3 sm:space-y-3",
                          !device.listIntro &&
                            "mt-2.5 border-t border-[#0B0E2C]/8 pt-3 sm:mt-5 sm:pt-5"
                        )}
                      >
                        {device.list.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-[13px] leading-snug text-[#0B0E2C] sm:gap-3 sm:text-[14px]"
                          >
                            <span
                              className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full sm:mt-1"
                              style={{ backgroundColor: `${device.color}1A` }}
                              aria-hidden
                            >
                              <Check
                                className="h-2.5 w-2.5"
                                style={{ color: device.color }}
                                strokeWidth={3}
                              />
                            </span>
                            <span className="min-w-0">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {device.footer && (
                      <p className="mt-2.5 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-5 sm:text-[15px] sm:leading-[1.75]">
                        {device.footer}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-6 flex justify-center sm:mt-12">
          <Link
            href="/installation-guide"
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-[1px] bg-gradient-brand px-6 py-2.5 text-[13px] font-semibold text-white transition-opacity duration-150 hover:opacity-90 sm:min-h-[48px] sm:w-auto sm:py-3 sm:text-[14px]"
          >
            <span className="sm:hidden">View Installation Guide</span>
            <span className="hidden sm:inline">
              View the Sky Glass IPTV Installation Guide
            </span>
            <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
