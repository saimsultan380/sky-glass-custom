import Link from "next/link";
import {
  ArrowRight,
  Tv,
  Trophy,
  Film,
  Clapperboard,
  Newspaper,
  Users,
  Check,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import type { LucideIcon } from "lucide-react";

type Category = {
  icon: LucideIcon;
  color: string;
  title: string;
  body: string[];
  tags?: readonly string[];
  tagsIntro?: string;
};

const CATEGORIES: Category[] = [
  {
    icon: Tv,
    color: "#FF6B2C",
    title: "Live Television",
    body: [
      "Browse available live television across entertainment, lifestyle, news, documentary, family and international categories.",
      "The organised interface makes it easier to locate channels and move between different types of programming.",
    ],
  },
  {
    icon: Trophy,
    color: "#E91E8C",
    title: "Live Sports",
    body: [
      "Follow available football, cricket, motorsport, combat sports and other sporting events through supported sports channels.",
      "Sports availability depends on the selected package, broadcasting schedule, event rights and content source.",
    ],
  },
  {
    icon: Film,
    color: "#7B2FFF",
    title: "Movies",
    body: [
      "Movies are organised into categories to make browsing and discovery easier.",
    ],
    tagsIntro: "Explore an available movie library covering categories such as:",
    tags: [
      "Action",
      "Drama",
      "Comedy",
      "Thriller",
      "Documentary",
      "Family entertainment",
      "International cinema",
    ],
  },
  {
    icon: Clapperboard,
    color: "#2563EB",
    title: "Television Series",
    body: [
      "Watch available television programmes and series across a range of genres.",
      "On-demand access allows viewers to select what they want to watch without depending entirely on a fixed television schedule.",
    ],
  },
  {
    icon: Newspaper,
    color: "#E91E8C",
    title: "News and Documentaries",
    body: [],
    tagsIntro:
      "Stay informed through available news programming and discover documentary content covering areas such as:",
    tags: [
      "History",
      "Science",
      "Nature",
      "Technology",
      "Current affairs",
      "Travel and culture",
    ],
  },
  {
    icon: Users,
    color: "#FF6B2C",
    title: "Family Entertainment",
    body: [
      "Explore available programmes suitable for different household members, including family viewing and children’s entertainment where included with the selected package.",
    ],
  },
];

export function EntertainmentCategoriesSection() {
  return (
    <section
      id="entertainment-categories"
      className="relative border-t border-[#0B0E2C]/10 bg-white"
    >
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="grid items-start gap-4 sm:gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 xl:gap-20">
          <div className="lg:sticky lg:top-28">
            <h2 className="max-w-md text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
              Entertainment for Every Type of{" "}
              <span className="text-gradient-brand">Viewer</span>
            </h2>
            <div className="mt-4 space-y-2 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-5 sm:space-y-4 sm:text-base sm:leading-[1.8]">
              <p>Different viewers have different entertainment preferences.</p>
              <p>
                Some follow live sports throughout the week, while others prefer
                films, television series, documentaries, news or family
                entertainment.
              </p>
              <p>
                Sky Glass IPTV brings a broad range of available viewing
                categories together in one place.
              </p>
            </div>

            <Link
              href="/subscription-plans"
              className="mt-8 hidden min-h-[48px] items-center justify-center gap-2 rounded-[1px] bg-gradient-brand px-6 py-3 text-[14px] font-semibold text-white transition-opacity duration-150 hover:opacity-90 sm:inline-flex"
            >
              Explore Sky Glass IPTV Entertainment
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
            </Link>
          </div>

          <div className="grid gap-4 sm:gap-6">
            {CATEGORIES.map((category) => {
              const Icon = category.icon;
              return (
                <article
                  key={category.title}
                  className="group relative flex flex-col overflow-hidden rounded-[1px] bg-white p-5 shadow-[var(--card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--card-shadow-hover)] sm:p-8"
                  style={{
                    "--card-shadow": `0 4px 20px rgba(11, 14, 44, 0.04), 0 8px 24px ${category.color}1A`,
                    "--card-shadow-hover": `0 8px 30px rgba(11, 14, 44, 0.08), 0 12px 40px ${category.color}33`,
                  } as React.CSSProperties}
                >
                  <div className="relative z-10 flex gap-2.5 sm:gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2.5 sm:gap-4">
                        <span
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] sm:h-12 sm:w-12 sm:rounded-[1px]"
                          style={{ color: category.color, backgroundColor: `${category.color}15` }}
                        >
                          <Icon className="h-4 w-4 sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden />
                        </span>
                        <h3 className="text-base font-bold tracking-tight text-[#0B0E2C] sm:text-xl">
                          {category.title}
                        </h3>
                      </div>

                      <div className="mt-3 space-y-2 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-5 sm:space-y-3 sm:text-[15px] sm:leading-[1.75]">
                        {category.tagsIntro && <p>{category.tagsIntro}</p>}

                        {category.tags && (
                          <ul className="mt-2 grid grid-cols-1 gap-x-4 gap-y-2.5 sm:mt-4 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-3 lg:grid-cols-3">
                            {category.tags.map((tag) => (
                              <li
                                key={tag}
                                className="flex items-start gap-2.5 text-[13px] leading-snug text-[#0B0E2C] sm:gap-3 sm:text-[14px]"
                              >
                                <span
                                  className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full sm:mt-1"
                                  style={{ backgroundColor: `${category.color}1A` }}
                                  aria-hidden
                                >
                                  <Check
                                    className="h-2.5 w-2.5"
                                    style={{ color: category.color }}
                                    strokeWidth={3}
                                  />
                                </span>
                                <span className="min-w-0">{tag}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {category.body.length > 0 && (
                          <div className="mt-2 space-y-1.5 sm:mt-4 sm:space-y-3">
                            {category.body.map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <Link
            href="/subscription-plans"
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-[1px] bg-gradient-brand px-6 py-2.5 text-[13px] font-semibold text-white transition-opacity duration-150 hover:opacity-90 sm:hidden"
          >
            Explore Sky Glass IPTV Entertainment
            <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}
