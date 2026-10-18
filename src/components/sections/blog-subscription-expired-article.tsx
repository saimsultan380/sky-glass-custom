import type { ReactNode } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Headphones,
  RefreshCw,
  ShieldAlert,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { BlogCoverImage } from "@/components/sections/blog-cover-image";
import {
  FaqAccordionList,
  type FaqItem,
} from "@/components/sections/faq-section";
import { getBlogPost } from "@/lib/blog";
import { siteRoutes } from "@/lib/routes";
import { whatsappUrl } from "@/lib/site";

const POST = getBlogPost("sky-glass-iptv-subscription-expired")!;

const EXPIRY_CHECKS = [
  {
    title: "Check your expiry date",
    body: "Review your account details or previous renewal confirmation.",
  },
  {
    title: "Review your payment",
    body: "Check whether your latest payment was completed.",
  },
  {
    title: "Read the error message",
    body: "An expiry message differs from a connection or playback error.",
  },
  {
    title: "Test multiple channels",
    body: "If only one channel fails, the problem may be limited to that stream.",
  },
  {
    title: "Contact support",
    body: "Ask the provider to confirm your account status before paying again.",
  },
] as const;

const RENEW_STEPS = [
  {
    title: "Contact support",
    body: "Explain that your subscription has expired or stopped working.",
  },
  {
    title: "Identify your account",
    body: "Provide the requested account details privately.",
  },
  {
    title: "Choose your package",
    body: "Select Standard or Premium and your preferred duration.",
  },
  {
    title: "Confirm the price",
    body: "Check the total cost, package features, and device connection allowance.",
  },
  {
    title: "Complete the renewal",
    body: "Follow the payment instructions confirmed by support.",
  },
  {
    title: "Test your service",
    body: "Once renewal is confirmed, reopen the app and check several channels.",
  },
] as const;

const PRICE_ROWS = [
  { duration: "1 month", standard: "£12", premium: "£15" },
  { duration: "3 months", standard: "£20", premium: "£25" },
  { duration: "6 months", standard: "£30", premium: "£40" },
  { duration: "12 months", standard: "£45", premium: "£60" },
] as const;

const YEARLY_REASONS = [
  "Fewer renewal reminders: You do not need to repeat the renewal process every three or six months.",
  "Predictable overall cost: You know the total price for the selected subscription term before paying.",
  "Convenience for regular viewers: A yearly plan can suit households that expect to continue using the service.",
  "A lower monthly equivalent: Based on the listed prices, Standard at £45 works out to £3.75 per month, while Premium at £60 works out to £5 per month.",
  "A choice of packages: You can select Standard for your essential viewing needs or consider Premium if its additional features matter to you.",
  "Less frequent account administration: With a longer subscription period, you can spend less time managing renewals.",
] as const;

const EXPIRED_CAUSES = [
  {
    title: "Expired plan",
    body: "Check your account’s end date and renewal options.",
    color: "#FF6B2C",
  },
  {
    title: "Delayed renewal update",
    body: "If you have paid, ask support to verify the transaction.",
    color: "#E91E8C",
  },
  {
    title: "Incorrect login details",
    body: "Check your username and password for typing errors.",
    color: "#7B2FFF",
  },
  {
    title: "Connection limit",
    body: "Check whether you have reached your package’s permitted device connections.",
    color: "#2563EB",
  },
  {
    title: "Temporary service issue",
    body: "If your account is active, the problem may be related to the app or service.",
    color: "#FF6B2C",
  },
] as const;

const AFTER_RENEWAL_FIXES = [
  {
    title: "IPTV login not working",
    body: "Check your username and password. Remove accidental spaces or typing errors. Ask support to verify your account status.",
    color: "#FF6B2C",
  },
  {
    title: "App stuck on loading",
    body: "Close and reopen the app. Check your internet connection. Restart your device if the problem continues.",
    color: "#E91E8C",
  },
  {
    title: "IPTV channels not loading",
    body: "Test several channels. Check your account status and internet connection. Contact support if all channels remain unavailable.",
    color: "#7B2FFF",
  },
  {
    title: "IPTV buffering",
    body: "Move closer to your Wi-Fi router. Pause other downloads or streaming activity. Test another supported device or connection.",
    color: "#2563EB",
  },
  {
    title: "App keeps closing",
    body: "Restart your device. Check for available app or system updates. Ask support for installation guidance before reinstalling.",
    color: "#FF6B2C",
  },
] as const;

const QUICK_TABLE = [
  {
    problem: "Subscription expired",
    cause: "Plan ended or status issue",
    fix: "Check expiry date and contact support",
  },
  {
    problem: "Login rejected",
    cause: "Incorrect credentials",
    fix: "Verify your account details",
  },
  {
    problem: "Channels not loading",
    cause: "Network or account issue",
    fix: "Test multiple channels",
  },
  {
    problem: "Buffering",
    cause: "Wi-Fi or stream issue",
    fix: "Improve connection",
  },
  {
    problem: "App crashing",
    cause: "App or device issue",
    fix: "Restart and check updates",
  },
  {
    problem: "Paid but still expired",
    cause: "Renewal not reflected",
    fix: "Contact support before paying again",
  },
] as const;

const AVOID_TIPS = [
  "Set an expiry reminder: Add the date to your calendar.",
  "Keep payment confirmation: Save your order reference until access is restored.",
  "Check your account first: Confirm whether renewal is actually required.",
  "Review your subscription duration: Choose a term that suits your budget and viewing habits.",
  "Store login details securely: Keep your account information accessible without sharing it publicly.",
] as const;

const FAQS: FaqItem[] = [
  {
    id: "renew",
    q: "How do I renew my Sky Glass IPTV subscription?",
    a: "Contact support through the official website, identify your existing account, choose a package and duration, and confirm the current price and payment instructions.",
  },
  {
    id: "why-expired",
    q: "Why does my IPTV app say my subscription has expired?",
    a: "Your plan may have ended, or your account may not reflect a recent renewal. Check your expiry date and ask support to verify your account.",
  },
  {
    id: "reinstall",
    q: "Do I need to reinstall the IPTV app after renewing?",
    a: "Not necessarily. If the app is installed and working correctly, you may only need your account renewal to be applied. Reinstall it only if troubleshooting indicates that it is necessary.",
  },
  {
    id: "existing",
    q: "Can I renew my existing Sky Glass IPTV account?",
    a: "Contact support and ask whether your current account can be extended. Confirm whether your existing login details can remain unchanged.",
  },
  {
    id: "yearly-cheaper",
    q: "Is the 12-month Sky Glass IPTV subscription cheaper?",
    a: "The listed plans show Standard at £45 and Premium at £60 for 12 months. These equal £3.75 and £5 per month, respectively, when averaged over the full term. Confirm current pricing before ordering.",
  },
  {
    id: "standard-premium",
    q: "Should I choose Standard or Premium?",
    a: "Choose Standard if its available features meet your needs. Consider Premium if you want its additional selection. Verify the current package differences before paying.",
  },
  {
    id: "paid-still-expired",
    q: "What if I paid but my subscription still shows as expired?",
    a: "Keep your payment confirmation and contact support. Ask them to verify the transaction and account status before making another payment.",
  },
  {
    id: "durations",
    q: "What subscription durations are available?",
    a: "Plans are listed for 1, 3, 6 and 12 months on both Standard and Premium. Confirm current prices and terms before ordering.",
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

export function BlogSubscriptionExpiredArticle() {
  return (
    <article className="relative bg-transparent pt-4 sm:pt-8 lg:pt-10">
      <Container className="pb-10 sm:pb-16 lg:pb-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#5C607A] sm:text-[13px]">
            Account &amp; renewal
          </p>
          <h1 className="mt-2 text-[26px] font-bold leading-[1.18] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-[38px] sm:leading-[1.12] lg:text-[42px]">
            Sky Glass IPTV Subscription Expired?{" "}
            <span className="text-gradient-brand">Here&apos;s What to Do</span>
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
            />
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-3xl space-y-10 sm:mt-12 sm:space-y-14">
          <Prose>
            <p>
              Has your Sky Glass IPTV subscription expired, or has your app
              suddenly stopped playing channels? Before paying for another
              subscription or reinstalling the app, check your account status.
              The problem could be an expired plan, an account that has not
              updated after renewal, incorrect login details, or a temporary
              connection issue.
            </p>
            <p>
              If your subscription has genuinely ended, contact Sky Glass IPTV
              support to confirm the renewal options for your existing account.
              You can compare Standard and Premium packages and choose a
              subscription duration that suits your viewing habits.
            </p>
            <p>
              For regular viewers who have already tested the service and are
              happy with it, a 12-month IPTV subscription may offer a convenient
              way to manage renewals while keeping the average monthly cost
              predictable. Before paying, confirm the current price, package
              features, and connection allowance.
            </p>
          </Prose>

          <section className="space-y-4">
            <SectionTitle>
              How to Check Whether Your Sky Glass IPTV Subscription Has{" "}
              <span className="text-gradient-brand">Expired</span>
            </SectionTitle>
            <p className="text-[14px] leading-[1.65] text-[#5C607A] sm:text-[15px]">
              An IPTV subscription-expired message does not always mean your
              account has definitely reached its end date. Follow these quick
              checks before ordering a renewal.
            </p>
            <ul className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
              {EXPIRY_CHECKS.map((item) => (
                <li
                  key={item.title}
                  className="glass-card flex items-start gap-2.5 p-3.5 sm:p-4"
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#7B2FFF]"
                    strokeWidth={2}
                    aria-hidden
                  />
                  <div>
                    <p className="text-[13px] font-bold text-[#0B0E2C] sm:text-[14px]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[13px] leading-snug text-[#5C607A] sm:text-[14px]">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="glass-card flex items-start gap-3 p-4 ring-1 ring-[#FF6B2C]/20 sm:p-5">
              <ShieldAlert
                className="mt-0.5 h-5 w-5 shrink-0 text-[#FF6B2C]"
                strokeWidth={2}
                aria-hidden
              />
              <p className="text-[13px] leading-[1.65] text-[#5C607A] sm:text-[14px]">
                If your subscription has expired, renewal may restore access. If
                you have already paid, ask support to verify the transaction
                before making another payment.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              How to Renew Your Sky Glass IPTV{" "}
              <span className="text-gradient-brand">Subscription</span>
            </SectionTitle>
            <Prose>
              <p>
                If your subscription has expired, contact the support team
                through the official{" "}
                <Link
                  href={siteRoutes.contact}
                  className="font-semibold text-[#0B0E2C] underline-offset-2 hover:underline"
                >
                  Sky Glass IPTV contact page
                </Link>
                .
              </p>
            </Prose>
            <div className="space-y-3 sm:space-y-4">
              {RENEW_STEPS.map((step, index) => (
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
            <div className="glass-card p-5 sm:p-6">
              <Prose>
                <p>
                  You should not normally need to reinstall an otherwise working
                  IPTV app simply because your subscription has expired. The app
                  and subscription are separate, and installing the player does
                  not automatically reactivate your account.
                </p>
                <p>
                  If you are an existing customer, ask whether your current
                  account can be renewed rather than creating a new one.
                </p>
              </Prose>
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Sky Glass IPTV Subscription Packages and{" "}
              <span className="text-gradient-brand">Prices</span>
            </SectionTitle>
            <p className="text-[14px] leading-[1.65] text-[#5C607A] sm:text-[15px]">
              The{" "}
              <Link
                href={siteRoutes.plans}
                className="font-semibold text-[#0B0E2C] underline-offset-2 hover:underline"
              >
                Sky Glass IPTV plans page
              </Link>{" "}
              lists Standard and Premium subscriptions with different durations.
              Confirm current pricing before ordering.
            </p>
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[420px] text-left">
                  <thead>
                    <tr className="border-b border-[#0B0E2C]/10 bg-[rgba(11,14,44,0.02)]">
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Subscription duration
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Standard
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Premium
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRICE_ROWS.map((row) => (
                      <tr
                        key={row.duration}
                        className="border-b border-[#0B0E2C]/8 last:border-b-0"
                      >
                        <td className="px-4 py-3 text-[13px] font-semibold text-[#0B0E2C] sm:px-5 sm:text-[14px]">
                          {row.duration}
                        </td>
                        <td className="px-4 py-3 text-[13px] font-bold text-gradient-brand sm:px-5 sm:text-[14px]">
                          {row.standard}
                        </td>
                        <td className="px-4 py-3 text-[13px] font-bold text-gradient-brand sm:px-5 sm:text-[14px]">
                          {row.premium}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Standard vs Premium: Which Should You{" "}
              <span className="text-gradient-brand">Choose?</span>
            </SectionTitle>
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              <div className="glass-card p-5 sm:p-6">
                <h3 className="text-[16px] font-bold text-[#0B0E2C]">
                  Standard
                </h3>
                <p className="mt-2 text-[13px] leading-[1.65] text-[#5C607A] sm:text-[14px]">
                  May suit viewers whose needs are covered by the package’s
                  available live TV, films, series, and other included features.
                </p>
              </div>
              <div className="glass-card p-5 sm:p-6">
                <h3 className="text-[16px] font-bold text-[#0B0E2C]">
                  Premium
                </h3>
                <p className="mt-2 text-[13px] leading-[1.65] text-[#5C607A] sm:text-[14px]">
                  May be more appropriate for customers who want the broader
                  selection and additional features listed for that package.
                </p>
              </div>
            </div>
            <div className="glass-card p-5 sm:p-6">
              <p className="text-[13px] font-semibold text-[#0B0E2C] sm:text-[14px]">
                Before renewing, consider:
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  "Which channels and content categories you actually use.",
                  "Whether the available features meet your viewing needs.",
                  "Whether you need additional simultaneous connections.",
                  "Whether the price difference justifies the extra features for you.",
                ].map((item) => (
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
                Always confirm the current package details and content
                availability before paying.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Why Consider a 12-Month IPTV{" "}
              <span className="text-gradient-brand">Subscription?</span>
            </SectionTitle>
            <Prose>
              <p>
                If you regularly use Sky Glass IPTV and are satisfied with your
                experience, a yearly subscription may be a convenient option.
                Rather than renewing every few months, you can choose a longer
                term and plan your next renewal in advance.
              </p>
            </Prose>
            <ul className="space-y-2.5">
              {YEARLY_REASONS.map((item) => (
                <li
                  key={item}
                  className="glass-card flex items-start gap-2.5 p-3.5 sm:p-4"
                >
                  <RefreshCw
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#7B2FFF]"
                    strokeWidth={2}
                    aria-hidden
                  />
                  <span className="text-[13px] leading-snug text-[#5C607A] sm:text-[14px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Is a Yearly IPTV Subscription Right for{" "}
              <span className="text-gradient-brand">You?</span>
            </SectionTitle>
            <div className="glass-card p-5 sm:p-6">
              <Prose>
                <p>
                  A 12-month plan may be suitable if you have already tested the
                  service, confirmed device compatibility, and expect to use it
                  regularly.
                </p>
                <p>
                  However, a longer subscription requires a larger upfront
                  payment. If you are new to the service, unsure about
                  compatibility or experiencing playback problems, consider a
                  shorter plan or an available trial before committing to a full
                  year.
                </p>
                <p>
                  The best approach: compare the available subscription plans,
                  check the current prices and select the duration that matches
                  your needs and budget.
                </p>
              </Prose>
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Why Does Sky Glass IPTV Say Subscription{" "}
              <span className="text-gradient-brand">Expired?</span>
            </SectionTitle>
            <p className="text-[14px] leading-[1.65] text-[#5C607A] sm:text-[15px]">
              An expired-subscription message can have several causes. Do not
              buy another subscription or delete the app until you have checked
              the account status.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {EXPIRED_CAUSES.map((item) => (
                <div key={item.title} className="glass-card flex flex-col p-4 sm:p-5">
                  <span
                    className="h-1 w-10 rounded-full"
                    style={{ backgroundColor: item.color }}
                    aria-hidden
                  />
                  <h3 className="mt-3 text-[15px] font-bold text-[#0B0E2C] sm:text-[16px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.65] text-[#5C607A] sm:text-[14px]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Sky Glass IPTV Not Working After Renewal?{" "}
              <span className="text-gradient-brand">Try These Fixes</span>
            </SectionTitle>
            <p className="text-[14px] leading-[1.65] text-[#5C607A] sm:text-[15px]">
              If your payment has been confirmed but the service still does not
              work, try these quick fixes.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {AFTER_RENEWAL_FIXES.map((item) => (
                <div key={item.title} className="glass-card flex flex-col p-4 sm:p-5">
                  <span
                    className="h-1 w-10 rounded-full"
                    style={{ backgroundColor: item.color }}
                    aria-hidden
                  />
                  <h3 className="mt-3 text-[15px] font-bold text-[#0B0E2C] sm:text-[16px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.65] text-[#5C607A] sm:text-[14px]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Quick IPTV{" "}
              <span className="text-gradient-brand">Troubleshooting Table</span>
            </SectionTitle>
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-left">
                  <thead>
                    <tr className="border-b border-[#0B0E2C]/10 bg-[rgba(11,14,44,0.02)]">
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Problem
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Possible cause
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Quick fix
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {QUICK_TABLE.map((row) => (
                      <tr
                        key={row.problem}
                        className="border-b border-[#0B0E2C]/8 last:border-b-0"
                      >
                        <td className="px-4 py-3 text-[13px] font-semibold text-[#0B0E2C] sm:px-5 sm:text-[14px]">
                          {row.problem}
                        </td>
                        <td className="px-4 py-3 text-[13px] text-[#5C607A] sm:px-5 sm:text-[14px]">
                          {row.cause}
                        </td>
                        <td className="px-4 py-3 text-[13px] text-[#5C607A] sm:px-5 sm:text-[14px]">
                          {row.fix}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              How to Avoid IPTV Subscription{" "}
              <span className="text-gradient-brand">Interruptions</span>
            </SectionTitle>
            <p className="text-[14px] leading-[1.65] text-[#5C607A] sm:text-[15px]">
              A few simple habits can help you manage future renewals. If you
              already use Sky Glass IPTV regularly, reviewing the yearly plans
              before your subscription ends can help you avoid a last-minute
              renewal decision.
            </p>
            <ul className="space-y-2.5">
              {AVOID_TIPS.map((tip) => (
                <li
                  key={tip}
                  className="glass-card flex items-start gap-2.5 p-3.5 sm:p-4"
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#E91E8C]"
                    strokeWidth={2}
                    aria-hidden
                  />
                  <span className="text-[13px] leading-snug text-[#5C607A] sm:text-[14px]">
                    {tip}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-5 border-t border-[#0B0E2C]/10 pt-10 sm:pt-12">
            <SectionTitle>
              Frequently Asked{" "}
              <span className="text-gradient-brand">Questions</span>
            </SectionTitle>
            <FaqAccordionList faqs={FAQS} defaultOpenId="renew" />
          </section>

          <section className="space-y-4">
            <SectionTitle>
              <span className="text-gradient-brand">Conclusion</span>
            </SectionTitle>
            <div className="glass-card space-y-3 p-5 sm:space-y-4 sm:p-6">
              <Prose>
                <p>
                  If your Sky Glass IPTV subscription has expired, check your
                  account status before purchasing another plan. If you have
                  already paid, ask support to verify your transaction. For
                  login errors, buffering, or missing channels, troubleshoot the
                  underlying issue instead of assuming your subscription has
                  ended.
                </p>
                <p>
                  If you are a regular viewer who is happy with the service,
                  compare the 12-month Standard and Premium plans to find the
                  option that best matches your viewing needs and budget.
                </p>
                <p>
                  Visit the Sky Glass IPTV subscription plans page to compare
                  available options, or contact Sky Glass IPTV support to ask
                  about renewing your existing account.
                </p>
              </Prose>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={siteRoutes.plans}
                className="inline-flex min-h-[48px] items-center justify-center rounded-[20px] bg-gradient-brand px-5 py-3 text-center text-[14px] font-semibold text-white sm:px-6"
              >
                Compare subscription plans
              </Link>
              <a
                href={whatsappUrl("Renew my Sky Glass IPTV subscription")}
                target="_blank"
                rel="noopener noreferrer"
                className="border-gradient-brand inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[20px] px-5 py-3 text-center text-[14px] font-semibold sm:px-6"
              >
                <Headphones
                  className="h-4 w-4 shrink-0 text-[#7B2FFF]"
                  strokeWidth={2}
                  aria-hidden
                />
                <span className="text-gradient-brand">Ask about renewal</span>
              </a>
            </div>
          </section>
        </div>
      </Container>
    </article>
  );
}
