import Link from "next/link";
import { ArrowRight, Tv, Wifi, Smartphone, Check } from "lucide-react";
import { Container } from "@/components/layout/container";

const HIGHLIGHTS = [
  {
    icon: Wifi,
    label: "Internet-based viewing",
    color: "#FF6B2C",
  },
  {
    icon: Tv,
    label: "Live TV, sports & more",
    color: "#E91E8C",
  },
  {
    icon: Smartphone,
    label: "Watch on any room or device",
    color: "#2563EB",
  },
] as const;

const CATEGORIES = [
  { label: "Live television", color: "#FF6B2C" },
  { label: "Sports channels", color: "#E91E8C" },
  { label: "Movies", color: "#7B2FFF" },
  { label: "Television series", color: "#2563EB" },
  { label: "News", color: "#FF6B2C" },
  { label: "Documentaries", color: "#E91E8C" },
  { label: "Family entertainment", color: "#7B2FFF" },
  { label: "International programming", color: "#2563EB" },
] as const;

export function SmarterIptvExperienceSection() {
  return (
    <section
      id="smarter-iptv-experience"
      className="relative border-t border-[#0B0E2C]/10 bg-white"
    >
      <Container className="px-5 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="grid items-start gap-4 sm:gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-20">
          <div className="lg:sticky lg:top-28">
            <h2 className="max-w-md text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
              A Smarter{" "}
              <span className="text-gradient-brand">IPTV</span>
              {" "}
              Experience for UK Viewers
            </h2>

            <ul className="mt-8 hidden gap-5 sm:grid">
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="flex items-center gap-3">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[1px]"
                      style={{
                        color: item.color,
                        backgroundColor: `${item.color}15`,
                      }}
                    >
                      <Icon
                        className="h-4 w-4"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                    </span>
                    <span className="text-sm font-medium text-[#0B0E2C]">
                      {item.label}
                    </span>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/subscription-plans/"
              className="mt-8 hidden min-h-[48px] items-center justify-center gap-2 rounded-[1px] bg-gradient-brand px-6 py-3 text-[14px] font-semibold text-white transition-opacity duration-150 hover:opacity-90 sm:inline-flex"
            >
              Explore Available Plans
              <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
            </Link>
          </div>

          <div
            className="group relative max-w-2xl overflow-hidden rounded-[1px] bg-white p-5 shadow-[var(--card-shadow)] card-hover-lift hover:-translate-y-1 hover:shadow-[var(--card-shadow-hover)] sm:p-8"
            style={
              {
                "--card-shadow":
                  "0 4px 20px rgba(11, 14, 44, 0.04), 0 8px 24px rgba(255, 107, 44, 0.10)",
                "--card-shadow-hover":
                  "0 8px 30px rgba(11, 14, 44, 0.08), 0 12px 40px rgba(255, 107, 44, 0.20)",
              } as React.CSSProperties
            }
          >
            <div className="relative z-10 space-y-2.5 text-[14px] leading-[1.6] text-[#5C607A] sm:space-y-5 sm:text-base sm:leading-[1.8]">
              <p>
                The way people watch television has changed. Many households no
                longer rely on one television, one room or a fixed schedule. They
                want to move between devices, browse content at a convenient time
                and keep their entertainment in one place.
              </p>
              <p>Sky Glass IPTV is designed around that kind of flexibility.</p>
              <p>
                The service uses an internet connection and a compatible
                application to provide access across supported devices. You can
                watch on a television at home, use a Firestick in another room or
                open a compatible player on a mobile device when you are away from
                your main screen.
              </p>

              <div>
                <p className="text-[14px] font-semibold text-[#0B0E2C] sm:text-base">
                  Available categories may include:
                </p>
                <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:mt-4 sm:grid-cols-2 sm:gap-y-3">
                  {CATEGORIES.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-start gap-2.5 text-[13px] font-medium leading-snug text-[#0B0E2C] sm:gap-3 sm:text-[14px]"
                    >
                      <span
                        className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full sm:h-5 sm:w-5"
                        style={{ backgroundColor: `${item.color}1A` }}
                        aria-hidden
                      >
                        <Check
                          className="h-2.5 w-2.5 sm:h-3 sm:w-3"
                          style={{ color: item.color }}
                          strokeWidth={3}
                        />
                      </span>
                      <span className="min-w-0">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p>
                Content is arranged into clear sections, helping you move between
                categories without searching through several unrelated
                applications.
              </p>
              <p>
                This approach can be useful for experienced IPTV users as well as
                people trying internet-based television for the first time. The
                setup process is straightforward, and support is available when
                you need help choosing an application or entering your account
                information.
              </p>

              <ul className="mt-1 grid gap-3.5 border-t border-[#0B0E2C]/10 pt-4 sm:hidden">
                {HIGHLIGHTS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label} className="flex items-center gap-3">
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[1px]"
                        style={{
                          color: item.color,
                          backgroundColor: `${item.color}15`,
                        }}
                      >
                        <Icon
                          className="h-4 w-4"
                          strokeWidth={1.75}
                          aria-hidden
                        />
                      </span>
                      <span className="text-[14px] font-medium text-[#0B0E2C]">
                        {item.label}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <Link
                href="/subscription-plans/"
                className="mt-3 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-[1px] bg-gradient-brand px-6 py-2.5 text-[13px] font-semibold text-white transition-opacity duration-150 hover:opacity-90 sm:hidden"
              >
                Explore Available Plans
                <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
