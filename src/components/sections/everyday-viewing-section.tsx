import {
  CalendarDays,
  History,
  MonitorPlay,
  Search,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Feature = {
  icon: LucideIcon;
  color: string;
  title: string;
  body: string[];
};

const FEATURES: Feature[] = [
  {
    icon: CalendarDays,
    color: "#E91E8C",
    title: "Programme Information",
    body: [
      "An Electronic Programme Guide can show schedules and programme details for supported channels. The information available depends on the channel, source and player.",
    ],
  },
  {
    icon: History,
    color: "#7B2FFF",
    title: "Catch-Up Viewing",
    body: [
      "Selected programmes may remain accessible after their original broadcast. Catch-Up is available only where the channel, package and application support it.",
    ],
  },
  {
    icon: Search,
    color: "#E91E8C",
    title: "Search and Favourites",
    body: [
      "Compatible players may let you search the available library or save frequently watched channels, making them easier to find next time.",
    ],
  },
  {
    icon: MonitorPlay,
    color: "#2563EB",
    title: "Picture Quality",
    body: [
      "Selected streams may offer SD, HD, Full HD or 4K. The result on your screen depends on the source, device, display, application and connection.",
    ],
  },
];

export function EverydayViewingSection() {
  return (
    <section
      id="everyday-viewing"
      className="relative border-t border-[#0B0E2C]/10 bg-transparent"
    >
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Features That Help with{" "}
            <span className="text-gradient-brand">Everyday Viewing</span>
          </h2>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-2">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className={cn(
                  "group relative flex flex-col overflow-hidden glass-card card-hover-lift p-5 hover:-translate-y-1 sm:p-8",
                  index < 2 ? "lg:col-span-1" : "lg:col-span-1"
                )}>
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-center gap-2.5 sm:gap-4">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[20px] sm:h-12 sm:w-12 sm:rounded-[20px]"
                      style={{ color: feature.color, backgroundColor: `${feature.color}15` }}
                    >
                      <Icon className="h-4 w-4 sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden />
                    </span>
                    <h3 className="text-base font-bold tracking-tight text-[#0B0E2C] sm:text-xl">
                      {feature.title}
                    </h3>
                  </div>

                  <div className="mt-3 space-y-2 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-5 sm:space-y-2.5 sm:text-[15px] sm:leading-[1.75]">
                    {feature.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
