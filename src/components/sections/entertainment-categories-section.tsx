import {
  Tv,
  Trophy,
  Film,
  Clapperboard,
  Newspaper,
  Users,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import type { LucideIcon } from "lucide-react";

type Category = {
  icon: LucideIcon;
  color: string;
  title: string;
  body: string[];
};

const CATEGORIES: Category[] = [
  {
    icon: Tv,
    color: "#FF6B2C",
    title: "Live Television",
    body: [
      "Browse available general entertainment, lifestyle, news, documentary, family and international channels. Channel organisation depends on your application and package.",
    ],
  },
  {
    icon: Trophy,
    color: "#E91E8C",
    title: "Sports",
    body: [
      "Explore available sports programming covering interests such as football, cricket, motorsport and combat sports. Coverage varies with the package, broadcasting schedule, region and event availability.",
      "If a particular competition matters to you, ask about it before subscribing.",
    ],
  },
  {
    icon: Film,
    color: "#7B2FFF",
    title: "Movies",
    body: [
      "Choose from available films across action, drama, comedy, thriller, documentary, family and international cinema categories.",
    ],
  },
  {
    icon: Clapperboard,
    color: "#2563EB",
    title: "Television Series",
    body: [
      "Browse available series and select an episode when you want to watch. The library can change according to your package and content availability.",
    ],
  },
  {
    icon: Newspaper,
    color: "#E91E8C",
    title: "News and Documentaries",
    body: [
      "Find available programming covering current affairs, history, science, nature, technology, travel and culture.",
    ],
  },
  {
    icon: Users,
    color: "#FF6B2C",
    title: "Family and International Viewing",
    body: [
      "Explore available family programmes and international entertainment. Check age suitability and use your player’s parental controls where supported.",
    ],
  },
];

export function EntertainmentCategoriesSection() {
  return (
    <section
      id="entertainment-categories"
      className="relative border-t border-[#0B0E2C]/10 bg-transparent"
    >
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="grid items-start gap-4 sm:gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 xl:gap-20">
          <div className="lg:sticky lg:top-28">
            <h2 className="max-w-md text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
              Explore the{" "}
              <span className="text-gradient-brand">Entertainment Categories</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-6">
            {CATEGORIES.map((category) => {
              const Icon = category.icon;
              return (
                <article
                  key={category.title}
                  className="group relative flex flex-col overflow-hidden glass-card card-hover-lift p-5 hover:-translate-y-1 sm:p-8">
                  <div className="relative z-10 flex gap-2.5 sm:gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2.5 sm:gap-4">
                        <span
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[20px] sm:h-12 sm:w-12 sm:rounded-[20px]"
                          style={{ color: category.color, backgroundColor: `${category.color}15` }}
                        >
                          <Icon className="h-4 w-4 sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden />
                        </span>
                        <h3 className="text-base font-bold tracking-tight text-[#0B0E2C] sm:text-xl">
                          {category.title}
                        </h3>
                      </div>

                      <div className="mt-3 space-y-2 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-5 sm:space-y-3 sm:text-[15px] sm:leading-[1.75]">
                        {category.body.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
