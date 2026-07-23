import Link from "next/link";
import { ArrowRight, Check, Sparkles, Shield } from "lucide-react";
import { Container } from "@/components/layout/container";

const STANDARD_FEATURES = [
  "Available live television categories",
  "Sports channels where included",
  "Movies and television series",
  "Electronic Programme Guide support",
  "Popular device compatibility",
  "Installation guidance",
  "Customer assistance",
  "Quick activation",
] as const;

const PREMIUM_FEATURES = [
  "Expanded live television access",
  "Available sports and event coverage",
  "A broader movies and series library",
  "Electronic Programme Guide support",
  "Catch-Up functionality where available",
  "HD, Full HD and 4K options where supported",
  "Popular device compatibility",
  "Setup assistance",
  "Quick activation",
] as const;

const STANDARD_COLOR = "#7B2FFF";
const PREMIUM_COLOR = "#E91E8C";

export function SubscriptionPlansOverviewSection() {
  return (
    <section
      id="subscription-plans-overview"
      className="relative border-t border-[#0B0E2C]/10 bg-white"
    >
      <Container className="py-6 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E91E8C] sm:text-[12px]">
            Plans
          </p>
          <h2 className="mt-1.5 text-[20px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-4xl sm:leading-[1.12] lg:text-[42px]">
            Sky Glass IPTV{" "}
            <span className="text-gradient-brand">Subscription Plans</span>
          </h2>
          <p className="mt-3 text-[13px] leading-[1.55] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-[1.8]">
            Sky Glass IPTV offers flexible subscription options for UK viewers
            who want to choose a plan based on their preferred duration,
            connections and entertainment requirements.
          </p>
        </div>

        <div className="mt-5 grid gap-2.5 sm:mt-12 sm:gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
          {/* Standard */}
          <article
            className="group relative flex flex-col overflow-hidden rounded-[16px] border border-[#0B0E2C]/10 bg-white p-3 shadow-[var(--card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0B0E2C]/20 hover:shadow-[var(--card-shadow-hover)] sm:rounded-[24px] sm:p-8"
            style={
              {
                "--card-shadow": `0 4px 20px rgba(11, 14, 44, 0.04), 0 8px 24px ${STANDARD_COLOR}1A`,
                "--card-shadow-hover": `0 8px 30px rgba(11, 14, 44, 0.08), 0 12px 40px ${STANDARD_COLOR}33`,
              } as React.CSSProperties
            }
          >
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center gap-2.5 sm:gap-4">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-[#0B0E2C]/5 sm:h-12 sm:w-12 sm:rounded-[12px]"
                  style={{
                    color: STANDARD_COLOR,
                    backgroundColor: `${STANDARD_COLOR}15`,
                  }}
                >
                  <Shield className="h-4 w-4 sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="text-[15px] font-bold tracking-tight text-[#0B0E2C] sm:text-2xl">
                  Standard Sky Glass IPTV Plan
                </h3>
              </div>

              <p className="mt-2.5 text-[12px] leading-[1.5] text-[#5C607A] sm:mt-5 sm:text-[15px] sm:leading-[1.75]">
                The Standard plan is suitable for viewers looking for
                straightforward access to available live television and on-demand
                entertainment.
              </p>

              <p className="mt-2.5 text-[12px] font-semibold text-[#0B0E2C] sm:mt-5 sm:text-[14px]">
                The plan may include:
              </p>

              <ul className="mt-2 flex-1 space-y-1.5 sm:mt-4 sm:space-y-2.5">
                {STANDARD_FEATURES.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-[12px] leading-snug text-[#0B0E2C] sm:gap-2.5 sm:text-[14px]"
                  >
                    <span
                      className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full sm:mt-1 sm:h-4 sm:w-4"
                      style={{ backgroundColor: `${STANDARD_COLOR}1A` }}
                      aria-hidden
                    >
                      <Check
                        className="h-2 w-2 sm:h-2.5 sm:w-2.5"
                        style={{ color: STANDARD_COLOR }}
                        strokeWidth={3}
                      />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/subscription-plans"
                className="border-gradient-brand mt-4 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-[12px] px-6 py-2.5 text-[13px] font-semibold text-[#0B0E2C] transition-opacity duration-150 hover:opacity-80 sm:mt-8 sm:min-h-[48px] sm:py-3 sm:text-[14px]"
              >
                View Standard Plan
                <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
              </Link>
            </div>
          </article>

          {/* Premium */}
          <article
            className="group relative flex flex-col overflow-hidden rounded-[16px] border border-[#0B0E2C]/10 bg-white p-3 shadow-[var(--card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0B0E2C]/20 hover:shadow-[var(--card-shadow-hover)] sm:rounded-[24px] sm:p-8"
            style={
              {
                "--card-shadow": `0 4px 20px rgba(11, 14, 44, 0.04), 0 8px 24px ${PREMIUM_COLOR}1A`,
                "--card-shadow-hover": `0 8px 30px rgba(11, 14, 44, 0.08), 0 12px 40px ${PREMIUM_COLOR}33`,
              } as React.CSSProperties
            }
          >
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center gap-2.5 sm:gap-4">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-[#0B0E2C]/5 sm:h-12 sm:w-12 sm:rounded-[12px]"
                  style={{
                    color: PREMIUM_COLOR,
                    backgroundColor: `${PREMIUM_COLOR}15`,
                  }}
                >
                  <Sparkles className="h-4 w-4 sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="text-[15px] font-bold tracking-tight text-[#0B0E2C] sm:text-2xl">
                  Premium Sky Glass IPTV Plan
                </h3>
              </div>

              <p className="mt-2.5 text-[12px] leading-[1.5] text-[#5C607A] sm:mt-5 sm:text-[15px] sm:leading-[1.75]">
                The Premium plan is designed for viewers who want broader
                entertainment access and additional viewing options.
              </p>

              <p className="mt-2.5 text-[12px] font-semibold text-[#0B0E2C] sm:mt-5 sm:text-[14px]">
                The plan may include:
              </p>

              <ul className="mt-2 flex-1 space-y-1.5 sm:mt-4 sm:space-y-2.5">
                {PREMIUM_FEATURES.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-[12px] leading-snug text-[#0B0E2C] sm:gap-2.5 sm:text-[14px]"
                  >
                    <span
                      className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full sm:mt-1 sm:h-4 sm:w-4"
                      style={{ backgroundColor: `${PREMIUM_COLOR}1A` }}
                      aria-hidden
                    >
                      <Check
                        className="h-2 w-2 sm:h-2.5 sm:w-2.5"
                        style={{ color: PREMIUM_COLOR }}
                        strokeWidth={3}
                      />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/subscription-plans"
                className="mt-4 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-[12px] bg-gradient-brand px-6 py-2.5 text-[13px] font-semibold text-white transition-opacity duration-150 hover:opacity-90 sm:mt-8 sm:min-h-[48px] sm:py-3 sm:text-[14px]"
              >
                View Premium Plan
                <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
              </Link>
            </div>
          </article>
        </div>

        <p className="mx-auto mt-4 max-w-2xl text-center text-[12px] leading-[1.5] text-[#5C607A] sm:mt-10 sm:text-[15px]">
          Full package details, prices in GBP, available durations and
          connection options can be compared on the dedicated{" "}
          <Link
            href="/subscription-plans"
            className="font-semibold text-[#7B2FFF] transition-opacity hover:opacity-75"
          >
            Subscription Plans
          </Link>{" "}
          page.
        </p>
      </Container>
    </section>
  );
}
