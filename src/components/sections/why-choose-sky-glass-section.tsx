import Link from "next/link";
import {
  ArrowRight,
  Zap,
  CalendarRange,
  Monitor,
  Clapperboard,
  Download,
  LifeBuoy,
  Check,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const DEVICES = [
  "Firestick and Fire TV",
  "Android TV and Google TV",
  "Android smartphones and tablets",
  "Samsung Smart TVs",
  "LG Smart TVs",
  "Apple TV",
  "iPhone and iPad",
  "Windows PCs and laptops",
  "Mac and MacBook devices",
] as const;

const ACTIVATION_INFO = [
  "Username and password",
  "Server information",
  "Playlist details",
  "Application instructions",
  "Device activation guidance",
] as const;

const SETUP_HELP = [
  "Choosing a suitable application",
  "Installing the official app",
  "Entering subscription details",
  "Activating a third-party player",
  "Resolving login problems",
  "Checking device compatibility",
] as const;

type Feature = {
  icon: LucideIcon;
  color: string;
  title: string;
  body: string[];
  list?: readonly string[];
  className?: string;
};

const FEATURES: Feature[] = [
  {
    icon: Zap,
    color: "#FF6B2C",
    title: "Quick Activation",
    body: [
      "Once your trial or subscription has been confirmed, you receive the information needed to configure your selected device.",
      "This may include:",
      "Activation times can vary according to the selected package, order details and support availability.",
    ],
    list: ACTIVATION_INFO,
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    icon: CalendarRange,
    color: "#E91E8C",
    title: "Flexible Subscription Options",
    body: [
      "Different viewers need different levels of commitment.",
      "A shorter subscription may suit someone who wants flexibility, while a longer plan may provide better overall value for regular viewing.",
      "Available durations should be displayed clearly on the Subscription Plans page, together with prices in GBP, connection limits and included features.",
    ],
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    icon: Monitor,
    color: "#7B2FFF",
    title: "Support for Popular Devices",
    body: [
      "The service can be configured on many commonly used streaming platforms, including:",
      "Application availability depends on the device model, operating system and region.",
    ],
    list: DEVICES,
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    icon: Clapperboard,
    color: "#2563EB",
    title: "Live and On-Demand Viewing",
    body: [
      "Available live television can be accessed alongside movies, television series and other on-demand categories through one compatible application.",
      "The exact content available depends on the selected package, source and broadcasting schedule.",
    ],
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    icon: Download,
    color: "#E91E8C",
    title: "Straightforward Installation",
    body: [
      "The official Sky Glass IPTV application is available for compatible Firestick and Android devices.",
      "Other supported platforms normally use an alternative IPTV player downloaded from the relevant application store.",
    ],
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    icon: LifeBuoy,
    color: "#FF6B2C",
    title: "Setup Assistance",
    body: ["Support is available for viewers who need help with:"],
    list: SETUP_HELP,
    className: "md:col-span-2 lg:col-span-2",
  },
];

export function WhyChooseSkyGlassSection() {
  return (
    <section
      id="why-choose-sky-glass"
      className="relative border-t border-[#0B0E2C]/10 bg-white"
    >
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Why Viewers Choose{" "}
            <span className="text-gradient-brand">Sky Glass IPTV</span>
          </h2>
          <div className="mt-4 space-y-2 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:space-y-3 sm:text-base sm:leading-[1.8]">
            <p>
              Choosing an IPTV service involves more than checking how many
              channels or titles are advertised. A good experience also depends
              on device support, plan clarity, easy navigation, reliable account
              access and useful customer assistance.
            </p>
            <p>
              Sky Glass IPTV focuses on the practical parts of everyday viewing.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-6">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            const isWide = feature.className?.includes("col-span-2");
            const listIntroIndex = feature.list
              ? feature.body.findIndex((p) => p.endsWith(":"))
              : -1;
            const listIntro =
              listIntroIndex >= 0 ? feature.body[listIntroIndex] : undefined;
            const bodyBefore =
              listIntroIndex >= 0
                ? feature.body.slice(0, listIntroIndex)
                : feature.body;
            const bodyAfter =
              listIntroIndex >= 0
                ? feature.body.slice(listIntroIndex + 1)
                : [];

            return (
              <article
                key={feature.title}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-[1px] bg-white p-5 shadow-[var(--card-shadow)] card-hover-lift hover:-translate-y-1 hover:shadow-[var(--card-shadow-hover)] sm:p-8",
                  feature.className
                )}
                style={
                  {
                    "--card-shadow": `0 4px 20px rgba(11, 14, 44, 0.04), 0 8px 24px ${feature.color}1A`,
                    "--card-shadow-hover": `0 8px 30px rgba(11, 14, 44, 0.08), 0 12px 40px ${feature.color}33`,
                  } as React.CSSProperties
                }
              >
                <div className="relative z-10 flex">
                  <div
                    className={cn(
                      "flex min-w-0 flex-1 flex-col gap-3 sm:gap-6",
                      isWide &&
                        "md:flex-row md:items-start md:justify-between md:gap-10"
                    )}
                  >
                    <div
                      className={cn(
                        "flex flex-col",
                        isWide && "md:w-[45%] lg:w-[50%]"
                      )}
                    >
                      <div className="flex items-center gap-2.5 sm:block">
                        <span
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] sm:h-12 sm:w-12 sm:rounded-[1px]"
                          style={{
                            color: feature.color,
                            backgroundColor: `${feature.color}15`,
                          }}
                        >
                          <Icon
                            className="h-4 w-4 sm:h-6 sm:w-6"
                            strokeWidth={1.75}
                            aria-hidden
                          />
                        </span>
                        <h3 className="text-base font-bold tracking-tight text-[#0B0E2C] sm:mt-5 sm:text-xl">
                          {feature.title}
                        </h3>
                      </div>
                      <div className="mt-2.5 space-y-2 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-3 sm:space-y-3 sm:text-[15px] sm:leading-[1.75]">
                        {bodyBefore.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                        {listIntro && (
                          <p className="font-semibold text-[#0B0E2C]">
                            {listIntro}
                          </p>
                        )}
                      </div>
                    </div>

                    {feature.list && (
                      <div
                        className={cn(
                          "flex flex-col",
                          isWide && "md:w-[55%] lg:w-[50%]"
                        )}
                      >
                        <ul
                          className={cn(
                            "grid gap-x-4 gap-y-2.5 sm:gap-x-5 sm:gap-y-3",
                            isWide
                              ? "grid-cols-1 sm:grid-cols-2"
                              : "grid-cols-1"
                          )}
                        >
                          {feature.list.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-[13px] leading-snug text-[#0B0E2C] sm:gap-3 sm:text-[14px]"
                            >
                              <span
                                className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full sm:mt-1"
                                style={{
                                  backgroundColor: `${feature.color}1A`,
                                }}
                                aria-hidden
                              >
                                <Check
                                  className="h-2.5 w-2.5"
                                  style={{ color: feature.color }}
                                  strokeWidth={3}
                                />
                              </span>
                              <span className="min-w-0">{item}</span>
                            </li>
                          ))}
                        </ul>
                        {bodyAfter.length > 0 && (
                          <div className="mt-3 space-y-2 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-4 sm:space-y-3 sm:text-[15px] sm:leading-[1.75]">
                            {bodyAfter.map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                          </div>
                        )}
                      </div>
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
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-[1px] bg-gradient-brand px-8 py-2.5 text-[14px] font-semibold text-white transition-opacity duration-150 hover:opacity-90 sm:min-h-[48px] sm:w-auto sm:py-3 sm:text-[15px]"
          >
            View the Installation Guide
            <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
