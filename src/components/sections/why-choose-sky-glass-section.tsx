import Link from "next/link";
import {
  ArrowRight,
  Clapperboard,
  CalendarRange,
  KeyRound,
  LifeBuoy,
  Clock,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteRoutes } from "@/lib/routes";

type Feature = {
  icon: LucideIcon;
  color: string;
  title: string;
  body: string[];
  className?: string;
};

const FEATURES: Feature[] = [
  {
    icon: Clapperboard,
    color: "#2563EB",
    title: "Live and On-Demand Entertainment",
    body: [
      "Your selected package provides access to available entertainment categories, including live television, sports, movies and series. You can move between live programming and on-demand viewing within a supported player.",
    ],
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    icon: CalendarRange,
    color: "#E91E8C",
    title: "A Choice of Subscription Lengths",
    body: [
      "Choose a 3, 6, 12 or 24-month subscription. Compare Standard and Premium before deciding which package and duration meet your needs.",
    ],
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    icon: KeyRound,
    color: "#FF6B2C",
    title: "Account Details for Your Application",
    body: [
      "Once your trial or order is confirmed, you receive the relevant login or configuration information. The details supplied depend on the application and device you use.",
    ],
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    icon: LifeBuoy,
    color: "#7B2FFF",
    title: "Guidance for Getting Started",
    body: [
      "Installation assistance is available if you need help choosing a player, entering your account details or checking device compatibility.",
    ],
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    icon: Clock,
    color: "#FF6B2C",
    title: "An Opportunity to Test Before Choosing",
    body: [
      "The 24-hour trial lets you assess the service using your normal screen and internet connection. Check the categories, navigation and playback that matter to you.",
    ],
    className: "md:col-span-1 lg:col-span-1",
  },
];

export function WhyChooseSkyGlassSection() {
  return (
    <section
      id="why-choose-sky-glass"
      className="relative border-t border-[#0B0E2C]/10 bg-transparent"
    >
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            What We Provide — and What{" "}
            <span className="text-gradient-brand">You Receive</span>
          </h2>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-6">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            const isWide = feature.className?.includes("col-span-2");

            return (
              <article
                key={feature.title}
                className={cn(
                  "group relative flex flex-col overflow-hidden glass-card card-hover-lift p-5 hover:-translate-y-1 sm:p-8",
                  feature.className
                )}>
                <div className="relative z-10 flex">
                  <div
                    className={cn(
                      "flex min-w-0 flex-1 flex-col gap-3 sm:gap-6",
                      isWide &&
                        "md:flex-row md:items-start md:justify-between md:gap-10"
                    )}
                  >
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2.5 sm:block">
                        <span
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[20px] sm:h-12 sm:w-12 sm:rounded-[20px]"
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
                        {feature.body.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-6 flex justify-center sm:mt-12">
          <Link
            href={siteRoutes.plans}
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-[20px] bg-gradient-brand px-8 py-2.5 text-[14px] font-semibold text-white transition-opacity duration-150 hover:opacity-90 sm:min-h-[48px] sm:w-auto sm:py-3 sm:text-[15px]"
          >
            Explore Available Plans
            <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
