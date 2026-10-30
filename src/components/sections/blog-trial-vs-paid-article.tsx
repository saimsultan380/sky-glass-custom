import type { ReactNode } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Clock3,
  Headphones,
  ShieldAlert,
  Tag,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { BlogCoverImage } from "@/components/sections/blog-cover-image";
import {
  FaqAccordionList,
  type FaqItem,
} from "@/components/sections/faq-section";
import { getBlogPost } from "@/lib/blog";
import { siteRoutes } from "@/lib/routes";
import { whatsappFreeTrialUrl, whatsappUrl } from "@/lib/site";

const POST = getBlogPost("sky-glass-iptv-trial-vs-paid-subscription")!;

const COMPARE_ROWS = [
  {
    feature: "Access period",
    trial: "24 hours",
    paid: "Selected paid duration",
  },
  {
    feature: "Payment",
    trial: "Free trial, according to the current offer",
    paid: "Paid upfront",
  },
  {
    feature: "Device testing",
    trial: "Yes",
    paid: "Yes",
  },
  {
    feature: "Internet performance testing",
    trial: "Yes",
    paid: "Yes",
  },
  {
    feature: "Channel and category browsing",
    trial: "Available trial content",
    paid: "Content available under the selected package",
  },
  {
    feature: "Movies and series",
    trial: "Check trial availability",
    paid: "Available catalogue, depending on the package",
  },
  {
    feature: "Full package access",
    trial: "May differ from paid access",
    paid: "Depends on the selected plan",
  },
  {
    feature: "Best for",
    trial: "Testing before buying",
    paid: "Continuing access for a longer period",
  },
] as const;

const TRIAL_CHECKS = [
  "Whether the compatible IPTV player works on your device.",
  "Whether you can navigate the available channel categories.",
  "Whether streams play smoothly on your internet connection.",
  "Whether the programme guide works where available.",
  "Whether the interface is easy for you to use.",
  "Whether the available content meets your requirements.",
] as const;

const PAID_CHECKS = [
  "The subscription duration and total price.",
  "The channels or categories you want to watch.",
  "Compatibility with your device and IPTV player.",
  "The number of simultaneous connections included.",
  "Whether the player requires a separate licence.",
  "How to contact support if your login or playlist does not work.",
] as const;

const PRICE_ROWS = [
  { plan: "1 month", total: "£12", monthly: "£12.00" },
  { plan: "3 months", total: "£20", monthly: "£6.67" },
  { plan: "6 months", total: "£30", monthly: "£5.00" },
  { plan: "12 months", total: "£45", monthly: "£3.75" },
] as const;

const PLAN_CHOICES = [
  {
    title: "1-month plan",
    body: "A shorter paid option if you prefer a limited initial commitment.",
    color: "#FF6B2C",
  },
  {
    title: "3-month plan",
    body: "A middle option if you want to use the service for longer without paying for a full year.",
    color: "#E91E8C",
  },
  {
    title: "6-month plan",
    body: "A longer subscription for regular viewers who want to arrange renewals less frequently.",
    color: "#7B2FFF",
  },
  {
    title: "12-month plan",
    body: "Suitable if you have tested the service, are satisfied with your setup and prefer a longer subscription period.",
    color: "#2563EB",
  },
] as const;

const START_STEPS = [
  {
    title: "Check your device",
    body: "Confirm whether your Firestick, Android TV, Smart TV or other device supports a compatible IPTV player.",
  },
  {
    title: "Request the trial",
    body: "Visit the Sky Glass IPTV website and follow the current trial request instructions.",
  },
  {
    title: "Receive your details",
    body: "Follow the instructions provided by support to access the trial.",
  },
  {
    title: "Set up your player",
    body: "Enter the supplied account or playlist details using the appropriate login method.",
  },
  {
    title: "Test the service",
    body: "Browse the available categories and check playback on your usual internet connection.",
  },
  {
    title: "Choose a plan",
    body: "If the service meets your needs, compare the paid subscription options before ordering.",
  },
] as const;

const FAQS: FaqItem[] = [
  {
    id: "trial-free",
    q: "Is the Sky Glass IPTV trial free?",
    a: "The website currently advertises a 24-hour trial. Check the trial page and confirm any eligibility requirements before requesting access.",
  },
  {
    id: "trial-length",
    q: "How long does the Sky Glass IPTV trial last?",
    a: "The advertised trial period is 24 hours. Confirm when access begins and when it expires with support.",
  },
  {
    id: "same-as-paid",
    q: "Is the trial the same as a full subscription?",
    a: "Not necessarily. The trial allows you to test the service, but its content and features may differ from the paid package. Ask support about any specific channel or feature you need.",
  },
  {
    id: "firestick",
    q: "Can I use the trial on Firestick?",
    a: "You can test the service on a supported Firestick or Fire TV device using a compatible player. Confirm the correct installation method before requesting your trial.",
  },
  {
    id: "expires",
    q: "What happens when my IPTV trial expires?",
    a: "Your trial access ends according to its terms. If you want to continue, compare the available paid plans and follow the ordering instructions on the subscription page.",
  },
  {
    id: "best-value",
    q: "Which Sky Glass IPTV subscription offers the best value?",
    a: "Based on the currently listed Standard prices, the 12-month plan has the lowest monthly equivalent at £3.75. Choose it only if the service, content, and device compatibility meet your needs.",
  },
  {
    id: "player-fee",
    q: "Do I need to buy a separate IPTV player?",
    a: "It depends on the application you choose. Some players may be available without an additional charge, while others require a separate licence. Confirm this before paying.",
  },
  {
    id: "renew",
    q: "Can I renew my subscription after the trial or paid period ends?",
    a: "You can contact support to check the current options. If you have already purchased a subscription, provide your existing order details when asking about renewal.",
  },
];

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-[22px] font-bold leading-[1.25] tracking-tight text-[#0B0E2C] sm:text-[28px] sm:leading-[1.2]">
      {children}
    </h2>
  );
}

function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-3 text-[14px] leading-[1.7] text-[#5C607A] sm:space-y-4 sm:text-[15px] sm:leading-[1.8]">
      {children}
    </div>
  );
}

export function BlogTrialVsPaidArticle() {
  return (
    <article className="relative bg-transparent pt-4 sm:pt-8 lg:pt-10">
      <Container className="pb-10 sm:pb-16 lg:pb-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#5C607A] sm:text-[13px]">
            Trial &amp; plans
          </p>
          <h1 className="mt-2 text-[26px] font-bold leading-[1.18] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-[38px] sm:leading-[1.12] lg:text-[42px]">
            Sky Glass IPTV Trial vs Full Paid Subscription: What Is the{" "}
            <span className="text-gradient-brand">Difference?</span>
          </h1>
          <p className="mt-3 text-[14px] leading-[1.65] text-[#5C607A] sm:mt-4 sm:text-base sm:leading-[1.75]">
            {POST.description}
          </p>

          <div className="mt-6 overflow-hidden rounded-[20px] sm:mt-8">
            <BlogCoverImage
              src={POST.image}
              alt={POST.imageAlt ?? POST.title}
              priority
              className="rounded-[20px]"
              label="Cover image placeholder"
            />
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-3xl space-y-10 sm:mt-12 sm:space-y-14">
          <Prose>
            <p>
              Not sure whether to try Sky Glass IPTV before buying a full
              subscription? A 24-hour trial lets you test the service on your
              own device and internet connection before choosing a paid plan. A
              full subscription gives you access for the selected period, with
              the exact package features depending on the plan you choose.
            </p>
            <p>
              The main difference between a Sky Glass IPTV trial and a full
              subscription is the access period, payment, and potentially the
              available content. If you are considering a yearly IPTV
              subscription, testing your device and the features you need first
              can help you make a more informed decision.
            </p>
          </Prose>

          <section className="space-y-4">
            <SectionTitle>
              Sky Glass IPTV Trial vs Full Subscription:{" "}
              <span className="text-gradient-brand">Quick Comparison</span>
            </SectionTitle>
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-left">
                  <thead>
                    <tr className="border-b border-[#0B0E2C]/10 bg-[rgba(11,14,44,0.02)]">
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Features
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        24-hour trial
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Full subscription
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARE_ROWS.map((row) => (
                      <tr
                        key={row.feature}
                        className="border-b border-[#0B0E2C]/8 last:border-b-0"
                      >
                        <td className="px-4 py-3 text-[13px] font-semibold text-[#0B0E2C] sm:px-5 sm:text-[14px]">
                          {row.feature}
                        </td>
                        <td className="px-4 py-3 text-[13px] text-[#5C607A] sm:px-5 sm:text-[14px]">
                          {row.trial}
                        </td>
                        <td className="px-4 py-3 text-[13px] text-[#5C607A] sm:px-5 sm:text-[14px]">
                          {row.paid}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="glass-card flex items-start gap-3 p-4 ring-1 ring-[#FF6B2C]/20 sm:p-5">
              <ShieldAlert
                className="mt-0.5 h-5 w-5 shrink-0 text-[#FF6B2C]"
                strokeWidth={2}
                aria-hidden
              />
              <p className="text-[13px] leading-[1.65] text-[#5C607A] sm:text-[14px]">
                Trial access may not include every channel, movie, feature or
                category available with a paid package. Confirm any specific
                requirements with support before purchasing.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              What Is a Sky Glass IPTV{" "}
              <span className="text-gradient-brand">Free Trial?</span>
            </SectionTitle>
            <div className="glass-card p-5 sm:p-6">
              <Prose>
                <p>
                  The Sky Glass IPTV free trial gives you an opportunity to test
                  the service before committing to a paid subscription. The
                  current offer listed on the website is for 24 hours.
                </p>
                <p>
                  Instead of choosing a subscription based only on its
                  advertised features, you can test the setup with your own
                  device and connection.
                </p>
              </Prose>
              <p className="mt-4 text-[13px] font-semibold text-[#0B0E2C] sm:text-[14px]">
                During your trial, check:
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2 sm:gap-2.5">
                {TRIAL_CHECKS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 rounded-[14px] border border-[#0B0E2C]/8 bg-white/60 px-3 py-2.5"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#7B2FFF]"
                      strokeWidth={2}
                      aria-hidden
                    />
                    <span className="text-[13px] font-medium leading-snug text-[#0B0E2C] sm:text-[14px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[13px] leading-[1.65] text-[#5C607A] sm:text-[14px]">
                For the most useful test, use the same television, Firestick or
                Android device and home internet connection you intend to use
                after subscribing.
              </p>
            </div>

            <a
              href={whatsappFreeTrialUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[20px] bg-gradient-brand px-5 py-3 text-center text-[14px] font-semibold text-white sm:px-6"
            >
              <Clock3 className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
              Request your 24-hour Sky Glass IPTV trial
            </a>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              What Do You Get with a Full Sky Glass IPTV{" "}
              <span className="text-gradient-brand">Subscription?</span>
            </SectionTitle>
            <div className="glass-card p-5 sm:p-6">
              <Prose>
                <p>
                  A full subscription provides access for the duration and under
                  the package terms you purchase. Depending on the selected
                  plan, the service offers available live television, sports
                  programming where included, movies, series and electronic
                  programme guide support where available.
                </p>
                <p>
                  The main benefit of a paid plan is that you can continue using
                  the service beyond the trial period without requesting another
                  trial each day.
                </p>
              </Prose>
              <p className="mt-4 text-[13px] font-semibold text-[#0B0E2C] sm:text-[14px]">
                Before purchasing, confirm the following:
              </p>
              <ul className="mt-3 space-y-2">
                {PAID_CHECKS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[13px] leading-snug text-[#5C607A] sm:text-[14px]"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E91E8C]" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[13px] leading-[1.65] text-[#5C607A] sm:text-[14px]">
                A full subscription does not guarantee that every channel, event
                or title will always be available. Content can change, so check
                with support if a particular programme is important to you.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Sky Glass IPTV Subscription{" "}
              <span className="text-gradient-brand">Prices</span>
            </SectionTitle>
            <p className="text-[14px] leading-[1.65] text-[#5C607A] sm:text-[15px]">
              After testing the trial, you can compare the available paid
              subscription durations.
            </p>
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[420px] text-left">
                  <thead>
                    <tr className="border-b border-[#0B0E2C]/10 bg-[rgba(11,14,44,0.02)]">
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Plan
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Total price
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Approximate monthly equivalent
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRICE_ROWS.map((row) => (
                      <tr
                        key={row.plan}
                        className="border-b border-[#0B0E2C]/8 last:border-b-0"
                      >
                        <td className="px-4 py-3 text-[13px] font-semibold text-[#0B0E2C] sm:px-5 sm:text-[14px]">
                          {row.plan}
                        </td>
                        <td className="px-4 py-3 text-[13px] font-bold text-gradient-brand sm:px-5 sm:text-[14px]">
                          {row.total}
                        </td>
                        <td className="px-4 py-3 text-[13px] text-[#5C607A] sm:px-5 sm:text-[14px]">
                          {row.monthly}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-[13px] leading-[1.65] text-[#5C607A] sm:text-[14px]">
              Prices are based on the Standard plans listed on the website and
              may change. Monthly equivalents are for comparison only. The full
              price is paid upfront.
            </p>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Which Sky Glass IPTV Plan Should You{" "}
              <span className="text-gradient-brand">Choose?</span>
            </SectionTitle>
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {PLAN_CHOICES.map((plan) => (
                <div key={plan.title} className="glass-card flex flex-col p-4 sm:p-5">
                  <span
                    className="h-1 w-10 rounded-full"
                    style={{ backgroundColor: plan.color }}
                    aria-hidden
                  />
                  <h3 className="mt-3 text-[15px] font-bold text-[#0B0E2C] sm:text-[16px]">
                    {plan.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.65] text-[#5C607A] sm:text-[14px]">
                    {plan.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="glass-card p-5 sm:p-6">
              <Prose>
                <p>
                  The 12-month Standard plan works out at approximately £3.75
                  per month, based on its listed £45 total price. This is the
                  lowest monthly equivalent among these four Standard plans,
                  although the full amount must be paid upfront.
                </p>
              </Prose>
            </div>
            <Link
              href={siteRoutes.plans}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[20px] bg-gradient-brand px-5 py-3 text-center text-[14px] font-semibold text-white sm:px-6"
            >
              <Tag className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
              Compare Sky Glass IPTV subscription plans
            </Link>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              How to Get Started with the Sky Glass IPTV{" "}
              <span className="text-gradient-brand">Trial</span>
            </SectionTitle>
            <p className="text-[14px] leading-[1.65] text-[#5C607A] sm:text-[15px]">
              Getting started is straightforward.
            </p>
            <div className="space-y-3 sm:space-y-4">
              {START_STEPS.map((step, index) => (
                <div
                  key={step.title}
                  className="glass-card flex gap-3.5 p-4 sm:gap-5 sm:p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(123,47,255,0.12)] text-[13px] font-bold text-[#7B2FFF] sm:h-10 sm:w-10 sm:text-[14px]">
                    {index + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[15px] font-bold text-[#0B0E2C] sm:text-[16px]">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-[1.65] text-[#5C607A] sm:text-[14px]">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[14px] leading-[1.65] text-[#5C607A] sm:text-[15px]">
              If you encounter an error during setup, check your login details
              and internet connection before assuming your device is
              incompatible. See also our{" "}
              <Link
                href="/iptv-playlist-not-loading/"
                className="font-semibold text-[#0B0E2C] underline-offset-2 hover:underline"
              >
                playlist troubleshooting guide
              </Link>
              .
            </p>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Does the Sky Glass IPTV App Come with the{" "}
              <span className="text-gradient-brand">Subscription?</span>
            </SectionTitle>
            <div className="glass-card p-5 sm:p-6">
              <Prose>
                <p>
                  The subscription and the IPTV player are not necessarily the
                  same thing.
                </p>
                <p>
                  The Sky Glass IPTV app, or another compatible player, is the
                  software used to connect to the service. Your subscription
                  provides account access under the selected plan, while a
                  third-party player may have its own installation or licensing
                  requirements.
                </p>
                <p>
                  Before paying, confirm which application you should use on
                  your device and whether any separate fee applies. The same
                  principle applies when searching for a Sky Glass app IPTV
                  setup, a Sky Glass IPTV player or a Sky Glass TV IPTV
                  solution. Check compatibility with your exact device rather
                  than assuming that every application works on every
                  television.
                </p>
                <p>
                  Sky Glass IPTV is an independent service and is not affiliated
                  with or endorsed by Sky UK Limited or the official Sky Glass
                  television product.
                </p>
              </Prose>
            </div>
          </section>

          <section className="space-y-5 border-t border-[#0B0E2C]/10 pt-10 sm:pt-12">
            <SectionTitle>
              Frequently Asked{" "}
              <span className="text-gradient-brand">Questions</span>
            </SectionTitle>
            <FaqAccordionList faqs={FAQS} defaultOpenId="trial-free" />
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Try Before You Choose Your Sky Glass IPTV{" "}
              <span className="text-gradient-brand">Plan</span>
            </SectionTitle>
            <div className="glass-card space-y-3 p-5 sm:space-y-4 sm:p-6">
              <Prose>
                <p>
                  A 24-hour trial is a useful way to test device compatibility,
                  navigation and streaming performance before committing to a
                  paid subscription. Take time to check the features you
                  actually need and confirm any differences between trial and
                  full access.
                </p>
                <p>
                  If the service suits your requirements, compare the one-month,
                  three-month, six-month and 12-month plans to find a suitable
                  duration.
                </p>
                <p>
                  Ready to get started? Visit the Sky Glass IPTV subscription
                  page to request the available trial and review the current
                  paid plans before making your decision.
                </p>
              </Prose>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappFreeTrialUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[20px] bg-gradient-brand px-5 py-3 text-center text-[14px] font-semibold text-white sm:px-6"
              >
                <Clock3 className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                Request the 24-hour trial
              </a>
              <a
                href={whatsappUrl("Ask about Sky Glass IPTV trial vs paid plans")}
                target="_blank"
                rel="noopener noreferrer"
                className="border-gradient-brand inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[20px] px-5 py-3 text-center text-[14px] font-semibold sm:px-6"
              >
                <Headphones
                  className="h-4 w-4 shrink-0 text-[#7B2FFF]"
                  strokeWidth={2}
                  aria-hidden
                />
                <span className="text-gradient-brand">Ask about plans</span>
              </a>
            </div>
          </section>
        </div>
      </Container>
    </article>
  );
}
