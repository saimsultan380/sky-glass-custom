import Link from "next/link";
import { ArrowRight, Check, Sparkles, Shield } from "lucide-react";
import { Container } from "@/components/layout/container";

const STANDARD_FEATURES = [
  "Available live television",
  "Sports channels where included",
  "Movies and series",
  "Electronic Programme Guide support",
  "Popular device compatibility",
  "Installation instructions",
  "Customer assistance",
  "Quick activation",
] as const;

const PREMIUM_FEATURES = [
  "Expanded live television access",
  "Broader sports availability",
  "A larger movie and series library",
  "EPG",
  "Catch-Up where available",
  "HD, Full HD and 4K where supported",
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
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Sky Glass IPTV{" "}
            <span className="text-gradient-brand">Subscription Plans</span>
          </h2>
          <p className="mt-4 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-[1.8]">
            Sky Glass IPTV offers a choice of subscription options for viewers
            who want to select a plan based on duration, required features and
            number of connections.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-12 sm:gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
          {/* Standard */}
          <article
            className="group relative flex flex-col overflow-hidden rounded-[1px] bg-white p-5 shadow-[var(--card-shadow)] card-hover-lift hover:-translate-y-1 hover:shadow-[var(--card-shadow-hover)] sm:rounded-[1px] sm:p-8"
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
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] sm:h-12 sm:w-12 sm:rounded-[1px]"
                  style={{
                    color: STANDARD_COLOR,
                    backgroundColor: `${STANDARD_COLOR}15`,
                  }}
                >
                  <Shield className="h-4 w-4 sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="text-base font-bold tracking-tight text-[#0B0E2C] sm:text-2xl">
                  Standard Sky Glass IPTV Plan
                </h3>
              </div>

              <p className="mt-3 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-5 sm:text-[15px] sm:leading-[1.75]">
                The Standard plan is intended for viewers who want
                straightforward access to available live television and on-demand
                categories.
              </p>

              <p className="mt-2.5 text-[12px] font-semibold text-[#0B0E2C] sm:mt-5 sm:text-[14px]">
                The plan may include:
              </p>

              <ul className="mt-2.5 flex-1 space-y-2.5 sm:mt-4 sm:space-y-3">
                {STANDARD_FEATURES.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-[13px] leading-snug text-[#0B0E2C] sm:gap-3 sm:text-[14px]"
                  >
                    <span
                      className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full sm:mt-1"
                      style={{ backgroundColor: `${STANDARD_COLOR}1A` }}
                      aria-hidden
                    >
                      <Check
                        className="h-2.5 w-2.5"
                        style={{ color: STANDARD_COLOR }}
                        strokeWidth={3}
                      />
                    </span>
                    <span className="min-w-0">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/subscription-plans"
                className="border-gradient-brand mt-4 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-[1px] px-6 py-2.5 text-[13px] font-semibold text-[#0B0E2C] transition-opacity duration-150 hover:opacity-80 sm:mt-8 sm:min-h-[48px] sm:py-3 sm:text-[14px]"
              >
                View Standard Plan
                <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
              </Link>
            </div>
          </article>

          {/* Premium */}
          <article
            className="group relative flex flex-col overflow-hidden rounded-[1px] bg-white p-5 shadow-[var(--card-shadow)] card-hover-lift hover:-translate-y-1 hover:shadow-[var(--card-shadow-hover)] sm:rounded-[1px] sm:p-8"
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
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] sm:h-12 sm:w-12 sm:rounded-[1px]"
                  style={{
                    color: PREMIUM_COLOR,
                    backgroundColor: `${PREMIUM_COLOR}15`,
                  }}
                >
                  <Sparkles className="h-4 w-4 sm:h-6 sm:w-6" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="text-base font-bold tracking-tight text-[#0B0E2C] sm:text-2xl">
                  Premium Sky Glass IPTV Plan
                </h3>
              </div>

              <p className="mt-3 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-5 sm:text-[15px] sm:leading-[1.75]">
                The Premium plan is intended for viewers who want broader
                entertainment access and additional viewing features.
              </p>

              <p className="mt-2.5 text-[12px] font-semibold text-[#0B0E2C] sm:mt-5 sm:text-[14px]">
                The plan may include:
              </p>

              <ul className="mt-2.5 flex-1 space-y-2.5 sm:mt-4 sm:space-y-3">
                {PREMIUM_FEATURES.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-[13px] leading-snug text-[#0B0E2C] sm:gap-3 sm:text-[14px]"
                  >
                    <span
                      className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full sm:mt-1"
                      style={{ backgroundColor: `${PREMIUM_COLOR}1A` }}
                      aria-hidden
                    >
                      <Check
                        className="h-2.5 w-2.5"
                        style={{ color: PREMIUM_COLOR }}
                        strokeWidth={3}
                      />
                    </span>
                    <span className="min-w-0">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/subscription-plans"
                className="mt-4 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-[1px] bg-gradient-brand px-6 py-2.5 text-[13px] font-semibold text-white transition-opacity duration-150 hover:opacity-90 sm:mt-8 sm:min-h-[48px] sm:py-3 sm:text-[14px]"
              >
                View Premium Plan
                <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
              </Link>
            </div>
          </article>
        </div>

        <p className="mx-auto mt-4 max-w-2xl text-center text-[14px] leading-[1.55] text-[#5C607A] sm:mt-10 sm:text-[15px]">
          The dedicated plans page should clearly display prices in GBP,
          subscription durations, number of connections, simultaneous-viewing
          rules, trial availability, activation times, renewal details and
          Standard and Premium differences on the{" "}
          <Link
            href="/subscription-plans"
            className="font-semibold text-[#7B2FFF] transition-opacity hover:opacity-75"
          >
            Compare Sky Glass IPTV Subscription Plans
          </Link>{" "}
          page.
        </p>
      </Container>
    </section>
  );
}
