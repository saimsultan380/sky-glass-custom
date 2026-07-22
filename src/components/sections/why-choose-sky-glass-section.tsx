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
  "Firestick and Fire TV devices",
  "Android TV and Google TV",
  "Android smartphones and tablets",
  "Samsung and LG Smart TVs",
  "Apple TV",
  "iPhone and iPad",
  "Windows PCs and laptops",
  "Mac and MacBook devices",
] as const;

const SETUP_HELP = [
  "Selecting a suitable application",
  "Installing the official app",
  "Entering subscription information",
  "Activating a third-party IPTV player",
  "Resolving common login or setup difficulties",
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
    icon: Monitor,
    color: "#7B2FFF",
    title: "Popular Device Support",
    body: ["Use Sky Glass IPTV on supported devices:"],
    list: DEVICES,
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    icon: Zap,
    color: "#FF6B2C",
    title: "Quick Activation",
    body: [
      "Once your trial or subscription has been confirmed, you receive the account information and installation guidance required for your preferred device.",
      "Activation times may vary depending on the order details, selected package and support availability.",
    ],
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    icon: CalendarRange,
    color: "#E91E8C",
    title: "Flexible Subscription Options",
    body: [
      "Choose from different subscription durations based on your viewing requirements and budget.",
      "Shorter plans provide greater flexibility, while longer subscriptions may offer stronger overall value.",
    ],
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    icon: LifeBuoy,
    color: "#FF6B2C",
    title: "Setup Assistance",
    body: ["Installation guidance is available for viewers who need help with:"],
    list: SETUP_HELP,
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    icon: Clapperboard,
    color: "#2563EB",
    title: "Live and On-Demand Entertainment",
    body: [
      "Explore available live television alongside movies, television series and other on-demand categories through one compatible application.",
      "Content availability varies according to the selected package, content source and broadcasting schedule.",
    ],
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    icon: Download,
    color: "#E91E8C",
    title: "Easy Installation",
    body: [
      "The official Sky Glass IPTV application is available for compatible Android and Firestick devices.",
      "Alternative IPTV player applications can be used on supported Smart TVs, Apple devices, Windows computers and Mac devices.",
    ],
    className: "md:col-span-1 lg:col-span-1",
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
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#E91E8C]">
            Why Choose Us
          </p>
          <h2 className="mt-2 text-[22px] font-bold leading-[1.15] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-4xl sm:leading-[1.12] lg:text-[42px]">
            Why UK Viewers Choose{" "}
            <span className="text-gradient-brand">Sky Glass IPTV</span>
          </h2>
          <div className="mt-4 space-y-2.5 text-[14px] leading-[1.7] text-[#5C607A] sm:mt-6 sm:space-y-3 sm:text-base sm:leading-[1.8]">
            <p>
              Choosing an IPTV service involves more than comparing content
              numbers. Device compatibility, plan clarity, navigation,
              activation, playback performance and customer support all
              contribute to the overall experience.
            </p>
            <p>
              For viewers comparing the best IPTV services in the UK, practical
              features and reliable assistance are more valuable than
              exaggerated or unclear claims. Sky Glass IPTV focuses on the
              features viewers need when setting up and using an IPTV
              subscription.
            </p>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="mt-8 grid gap-3 sm:mt-16 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-6">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            const isWide = feature.className?.includes("col-span-2");

            return (
              <article
                key={feature.title}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-[8px] border border-[#0B0E2C]/10 bg-white p-4 shadow-[var(--card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0B0E2C]/20 hover:shadow-[var(--card-shadow-hover)] sm:p-8",
                  feature.className
                )}
                style={{
                  "--card-shadow": `0 4px 20px rgba(11, 14, 44, 0.04), 0 8px 24px ${feature.color}1A`,
                  "--card-shadow-hover": `0 8px 30px rgba(11, 14, 44, 0.08), 0 12px 40px ${feature.color}33`,
                } as React.CSSProperties}
              >
                <div className="relative z-10 flex">
                  <div
                    className={cn(
                      "flex min-w-0 flex-1 flex-col gap-4 sm:gap-6",
                      isWide && "md:flex-row md:items-start md:justify-between md:gap-10"
                    )}
                  >
                    <div className={cn("flex flex-col", isWide && "md:w-[45%] lg:w-[50%]")}>
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-[#0B0E2C]/5 sm:h-12 sm:w-12"
                        style={{ color: feature.color, backgroundColor: `${feature.color}15` }}
                      >
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden />
                      </span>
                      <h3 className="mt-4 text-lg font-bold tracking-tight text-[#0B0E2C] sm:mt-5 sm:text-xl">
                        {feature.title}
                      </h3>
                      <div className="mt-2.5 space-y-2.5 text-[13px] leading-[1.65] text-[#5C607A] sm:mt-3 sm:space-y-3 sm:text-[15px] sm:leading-[1.75]">
                        {feature.body.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>

                    {feature.list && (
                      <div className={cn("flex flex-col", isWide && "md:w-[55%] lg:w-[50%]")}>
                        <ul
                          className={cn(
                            "grid gap-x-4 gap-y-3",
                            isWide ? "sm:grid-cols-2" : "grid-cols-1"
                          )}
                        >
                          {feature.list.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-[14px] leading-snug text-[#0B0E2C]"
                            >
                              <span
                                className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                                style={{ backgroundColor: `${feature.color}1A` }}
                                aria-hidden
                              >
                                <Check
                                  className="h-2.5 w-2.5"
                                  style={{ color: feature.color }}
                                  strokeWidth={3}
                                />
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[12px] bg-gradient-brand px-8 py-3 text-[15px] font-semibold text-white transition-opacity duration-150 hover:opacity-90 sm:w-auto"
          >
            View the Sky Glass IPTV Installation Guide
            <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
