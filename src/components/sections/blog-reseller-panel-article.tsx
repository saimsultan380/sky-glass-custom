import type { ReactNode } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Headphones,
  ShieldAlert,
  Wallet,
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

const POST = getBlogPost("sky-glass-iptv-reseller-panel")!;

const CREDIT_ROWS = [
  { duration: "1 Month", credits: "1 Credit" },
  { duration: "3 Months", credits: "3 Credits" },
  { duration: "6 Months", credits: "6 Credits" },
  { duration: "12 Months", credits: "12 Credits" },
] as const;

const COMBO_ROWS = [
  { type: "1 Month", accounts: "120", total: "120" },
  { type: "3 Months", accounts: "40", total: "120" },
  { type: "6 Months", accounts: "20", total: "120" },
  { type: "12 Months", accounts: "10", total: "120" },
] as const;

const FEATURES = [
  {
    title: "Create customer accounts",
    body: "Create eligible customer accounts for the subscription options available to your reseller account. Select the supported duration, create the account, then provide login information and setup instructions for a compatible IPTV player.",
    color: "#FF6B2C",
  },
  {
    title: "Credit balance management",
    body: "Check your available balance before creating or renewing customer subscriptions. Always check the credit deduction before confirming an account, especially when managing several customers.",
    color: "#E91E8C",
  },
  {
    title: "Subscription status and expiry dates",
    body: "Review account status and expiry dates to identify which customers are active and which subscriptions may need renewal. Use this to organise records and contact customers before expiry.",
    color: "#7B2FFF",
  },
  {
    title: "Customer renewals",
    body: "Locate an existing account, check its status, and apply the appropriate extension using available credits. Confirm the updated expiry date and new subscription period with your customer.",
    color: "#2563EB",
  },
  {
    title: "Centralised account management",
    body: "Review account information and available credits in one place. Keep track of activations, renewals, and expiry dates without searching through old conversations.",
    color: "#FF6B2C",
  },
] as const;

const WHY_CHOOSE = [
  {
    title: "Manage multiple customers",
    body: "Manage eligible customer subscriptions through one dashboard instead of creating and tracking every account manually.",
  },
  {
    title: "Offer different subscription durations",
    body: "The published credit structure supports one, three, six, and twelve-month durations for customers who prefer shorter or longer periods.",
  },
  {
    title: "Organise renewals",
    body: "Checking expiry dates helps you manage renewal requests and keep customer records up to date.",
  },
  {
    title: "Control your credit usage",
    body: "The credit balance helps you monitor your available subscription allocation before accepting new orders.",
  },
  {
    title: "Build direct customer relationships",
    body: "Handle customer enquiries, explain available packages, and provide first-line assistance according to your agreement.",
  },
] as const;

const START_STEPS = [
  {
    title: "Contact the reseller team",
    body: "Explain that you want to become a reseller. Ask about reseller access, panel options, credit pricing, and opening requirements. Say whether you are starting from scratch or already have customers.",
  },
  {
    title: "Confirm the minimum credit requirement",
    body: "The published minimum purchase is 120 credits. Ask for the current wholesale price and whether any other charges or conditions apply before paying.",
  },
  {
    title: "Understand the credit system",
    body: "Confirm how credits are deducted for each duration and whether the same conversion applies to every account type and connection option available to your panel.",
  },
  {
    title: "Receive your reseller panel access",
    body: "Once the arrangement and payment are confirmed, ask for login instructions, balance checks, account creation steps, and renewal guidance.",
  },
  {
    title: "Test the account creation process",
    body: "Learn how to create a subscription, find account status, check expiry dates, and confirm duration. Test customer setup instructions on a compatible device.",
  },
  {
    title: "Start managing customer orders",
    body: "Handle eligible subscription requests and keep records of subscription period, amount charged, activation date, and expiry date for each customer.",
  },
] as const;

const PRICING_ROWS = [
  { detail: "Minimum panel requirement", info: "120 credits" },
  { detail: "One-month subscription", info: "1 credit" },
  { detail: "Three-month subscription", info: "3 credits" },
  { detail: "Six-month subscription", info: "6 credits" },
  { detail: "Twelve-month subscription", info: "12 credits" },
  { detail: "Unused credit expiry", info: "No time limit" },
  { detail: "Wholesale credit price", info: "Confirm with reseller support" },
  { detail: "Additional credit purchases", info: "Confirm current top-up terms" },
] as const;

const PROFIT_ROWS = [
  { description: "Customer pays", amount: "£10" },
  { description: "Wholesale subscription cost", amount: "£6" },
  { description: "Gross margin", amount: "£4" },
] as const;

const CHECK_BEFORE = [
  {
    check: "Content authorisation",
    why: "Confirm that the provider has the necessary rights to supply the content",
  },
  {
    check: "Minimum credit purchase",
    why: "Understand the initial investment",
  },
  {
    check: "Credit conversion",
    why: "Know how many credits each subscription uses",
  },
  {
    check: "Credit expiry",
    why: "Confirm what happens to unused credits",
  },
  {
    check: "Panel features",
    why: "Check which account management tools are included",
  },
  {
    check: "Connection limits",
    why: "Understand how many simultaneous connections are permitted",
  },
  {
    check: "Trial availability",
    why: "Confirm whether trial accounts are supported and any applicable limits",
  },
  {
    check: "Wholesale pricing",
    why: "Calculate your actual cost per subscription",
  },
  {
    check: "Refund policy",
    why: "Understand the conditions for refunds and cancellations",
  },
  {
    check: "Technical support",
    why: "Know which issues the provider handles",
  },
  {
    check: "Customer data",
    why: "Understand how customer information is protected",
  },
  {
    check: "Termination terms",
    why: "Check what happens if the reseller agreement ends",
  },
] as const;

const COMPARE_ROWS = [
  {
    feature: "Main purpose",
    regular: "Personal viewing",
    reseller: "Customer account management",
  },
  {
    feature: "Account type",
    regular: "Viewing account",
    reseller: "Reseller account",
  },
  {
    feature: "Customer accounts",
    regular: "Not normally included",
    reseller: "Supported account creation",
  },
  {
    feature: "Credit balance",
    regular: "Not applicable",
    reseller: "Available",
  },
  {
    feature: "Subscription renewals",
    regular: "Renew your own account",
    reseller: "Manage eligible customer renewals",
  },
  {
    feature: "Expiry management",
    regular: "Your own subscription",
    reseller: "Customer account expiry records",
  },
  {
    feature: "Business use",
    regular: "Not the main purpose",
    reseller: "Subject to reseller agreement",
  },
  {
    feature: "Customer support",
    regular: "Receive support",
    reseller: "Provide first-line customer assistance as agreed",
  },
] as const;

const TIPS = [
  "Keep secure customer records of references, durations, payment status, activation dates, and expiry dates — never store passwords or full playlist URLs insecurely.",
  "Explain subscription period, connections, devices, and players clearly. Avoid promising features or channels that have not been confirmed.",
  "Track your credits regularly so you do not accept an order without enough balance for activation.",
  "Prepare clear setup instructions for supported devices that match the actual application and device version.",
  "Handle renewals properly: confirm duration and payment before applying an extension.",
  "Protect customer information and use secure communication channels.",
  "Provide honest support. Do not promise uninterrupted service or guaranteed availability.",
] as const;

const FAQS: FaqItem[] = [
  {
    id: "what-is",
    q: "What is a Sky Glass IPTV reseller panel?",
    a: "It is a management platform that allows approved resellers to create eligible customer subscriptions, check credit balances, review account status, and organise renewals.",
  },
  {
    id: "credits-needed",
    q: "How many credits do I need to open a Sky Glass IPTV reseller panel?",
    a: "The published minimum purchase is 120 credits. Contact the reseller team to confirm the current wholesale price and complete terms.",
  },
  {
    id: "expire",
    q: "Do Sky Glass IPTV reseller credits expire?",
    a: "The published reseller information states that unused credits do not have a time limit. Customer subscriptions created using those credits have their own expiry dates.",
  },
  {
    id: "twelve",
    q: "How many credits are needed for a twelve-month IPTV subscription?",
    a: "Under the published standard credit structure, a twelve-month subscription requires 12 credits. Confirm the account type and connection requirements before activation.",
  },
  {
    id: "top-up",
    q: "Can I purchase more IPTV reseller credits later?",
    a: "You can contact the reseller team to ask about additional credit purchases, current top-up prices, and the applicable terms.",
  },
  {
    id: "retail-prices",
    q: "Can I set my own IPTV reseller prices in the UK?",
    a: "Your retail pricing depends on the reseller agreement. Confirm any pricing restrictions or conditions in writing before advertising your packages.",
  },
  {
    id: "vs-subscription",
    q: "Is an IPTV reseller panel the same as an IPTV subscription?",
    a: "No. A reseller panel is used to manage customer accounts and credits. A regular IPTV subscription is used for personal viewing.",
  },
  {
    id: "beginners",
    q: "Can beginners start an IPTV reseller business?",
    a: "Beginners can explore reseller arrangements, but they should first understand the credit system, wholesale costs, customer support responsibilities, and applicable legal requirements.",
  },
  {
    id: "profit",
    q: "Does the Sky Glass IPTV reseller panel guarantee profit?",
    a: "No. A reseller panel provides account management tools, not guaranteed income. Your results depend on customer demand, wholesale costs, retail pricing, operating expenses, and compliance.",
  },
  {
    id: "get-access",
    q: "How can I get Sky Glass IPTV reseller access?",
    a: "Contact the Sky Glass IPTV reseller team, request the current programme details, confirm the 120-credit minimum and wholesale pricing, and review the agreement before purchasing.",
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

export function BlogResellerPanelArticle() {
  return (
    <article className="relative bg-transparent pt-4 sm:pt-8 lg:pt-10">
      <Container className="pb-10 sm:pb-16 lg:pb-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#5C607A] sm:text-[13px]">
            Reseller guide
          </p>
          <h1 className="mt-2 text-[26px] font-bold leading-[1.18] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-[38px] sm:leading-[1.12] lg:text-[42px]">
            Sky Glass IPTV Reseller Panel: Become IPTV Reseller UK &amp; Start
            an{" "}
            <span className="text-gradient-brand">IPTV Reseller Business</span>
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
              If you are looking for a Sky Glass IPTV reseller panel, you may
              want to offer IPTV subscriptions to your own customers without
              managing the streaming technology yourself. An IPTV reseller panel
              provides a central place to create customer accounts, manage
              subscription periods, check available credits, and organise
              renewals.
            </p>
            <p>
              For anyone planning to enter the IPTV market in the UK, choosing
              the right reseller IPTV panel is an important first step. You need
              to understand how the credit system works, what account management
              options are available, how much you need to invest, and what
              responsibilities you will have towards your customers.
            </p>
            <p>
              The Sky Glass IPTV reseller panel is designed around a
              credit-based system. The minimum purchase required to create a
              reseller panel is 120 credits. Each credit represents one month of
              subscription time under the published credit structure, and unused
              credits do not expire.
            </p>
            <p>
              Here is how the panel works, what you should know before joining,
              and how to get started with an IPTV reseller business.
            </p>
          </Prose>

          <section className="space-y-4">
            <SectionTitle>
              What Is a Sky Glass IPTV{" "}
              <span className="text-gradient-brand">Reseller Panel?</span>
            </SectionTitle>
            <div className="glass-card p-5 sm:p-6">
              <Prose>
                <p>
                  A Sky Glass IPTV reseller panel is a management platform that
                  allows approved resellers to create and manage eligible
                  customer subscriptions.
                </p>
                <p>
                  Instead of handling every subscription request manually, you
                  use the reseller dashboard to manage routine account
                  activities. You can check your available credits, create
                  customer accounts, review subscription status, and organise
                  renewals.
                </p>
                <p>
                  An IPTV reseller panel is different from a normal IPTV viewing
                  account. Your reseller login gives you access to account
                  management features, while your customers receive their own
                  subscription details for watching through a compatible IPTV
                  player.
                </p>
              </Prose>
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              How Does the IPTV Reseller Panel{" "}
              <span className="text-gradient-brand">Work?</span>
            </SectionTitle>
            <Prose>
              <p>
                The Sky Glass IPTV reseller system uses credits to manage
                customer subscriptions. You purchase a credit balance and use
                those credits when creating eligible customer accounts or
                extending existing subscriptions.
              </p>
              <p>
                Under the published standard credit structure, one credit
                represents one month of subscription time.
              </p>
            </Prose>
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[360px] text-left">
                  <thead>
                    <tr className="border-b border-[#0B0E2C]/10 bg-[rgba(11,14,44,0.02)]">
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Customer subscription
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Credits required
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {CREDIT_ROWS.map((row) => (
                      <tr
                        key={row.duration}
                        className="border-b border-[#0B0E2C]/8 last:border-b-0"
                      >
                        <td className="px-4 py-3 text-[13px] font-semibold text-[#0B0E2C] sm:px-5 sm:text-[14px]">
                          {row.duration}
                        </td>
                        <td className="px-4 py-3 text-[13px] font-bold text-gradient-brand sm:px-5 sm:text-[14px]">
                          {row.credits}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-[14px] leading-[1.65] text-[#5C607A] sm:text-[15px]">
              For example, if you have 120 credits available, you could use them
              for different combinations of subscription durations.
            </p>
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[420px] text-left">
                  <thead>
                    <tr className="border-b border-[#0B0E2C]/10 bg-[rgba(11,14,44,0.02)]">
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Subscription type
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Number of accounts
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Total credits
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMBO_ROWS.map((row) => (
                      <tr
                        key={row.type}
                        className="border-b border-[#0B0E2C]/8 last:border-b-0"
                      >
                        <td className="px-4 py-3 text-[13px] font-semibold text-[#0B0E2C] sm:px-5 sm:text-[14px]">
                          {row.type}
                        </td>
                        <td className="px-4 py-3 text-[13px] text-[#5C607A] sm:px-5 sm:text-[14px]">
                          {row.accounts}
                        </td>
                        <td className="px-4 py-3 text-[13px] font-bold text-gradient-brand sm:px-5 sm:text-[14px]">
                          {row.total}
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
                Your unused reseller credits do not expire under the published
                terms, but once credits are used to activate a customer
                subscription, that customer’s access has its own expiry date.
                Check the account type and connection requirements in your panel
                before activating a subscription.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Sky Glass IPTV Reseller Panel{" "}
              <span className="text-gradient-brand">Features</span>
            </SectionTitle>
            <div className="space-y-3 sm:space-y-4">
              {FEATURES.map((item, index) => (
                <div
                  key={item.title}
                  className="glass-card flex gap-3.5 p-4 sm:gap-5 sm:p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(123,47,255,0.12)] text-[13px] font-bold text-[#7B2FFF] sm:h-10 sm:w-10 sm:text-[14px]">
                    {index + 1}
                  </span>
                  <div className="min-w-0">
                    <span
                      className="mb-2 block h-1 w-10 rounded-full"
                      style={{ backgroundColor: item.color }}
                      aria-hidden
                    />
                    <h3 className="text-[15px] font-bold text-[#0B0E2C] sm:text-[16px]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-[1.65] text-[#5C607A] sm:text-[14px]">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Why Choose a Reseller IPTV Panel for the{" "}
              <span className="text-gradient-brand">UK Market?</span>
            </SectionTitle>
            <Prose>
              <p>
                The UK has customers with different viewing preferences,
                devices, and subscription requirements. A reseller panel can
                help with account management, but it does not remove your
                responsibility for customer service.
              </p>
            </Prose>
            <ul className="space-y-2.5">
              {WHY_CHOOSE.map((item) => (
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
          </section>

          <section className="space-y-4">
            <SectionTitle>
              How to Become a Sky Glass IPTV{" "}
              <span className="text-gradient-brand">Reseller?</span>
            </SectionTitle>
            <p className="text-[14px] leading-[1.65] text-[#5C607A] sm:text-[15px]">
              Getting started involves more than purchasing credits. Understand
              the panel, confirm commercial terms, and know how customer
              accounts will be managed before promoting subscriptions.
            </p>
            <div className="space-y-3 sm:space-y-4">
              {START_STEPS.map((step, index) => (
                <div
                  key={step.title}
                  className="glass-card flex gap-3.5 p-4 sm:gap-5 sm:p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(233,30,140,0.12)] text-[13px] font-bold text-[#E91E8C] sm:h-10 sm:w-10 sm:text-[14px]">
                    {index + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[15px] font-bold text-[#0B0E2C] sm:text-[16px]">
                      Step {index + 1}. {step.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-[1.65] text-[#5C607A] sm:text-[14px]">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              IPTV Reseller Panel Pricing: How Much Do You Need to{" "}
              <span className="text-gradient-brand">Start?</span>
            </SectionTitle>
            <Prose>
              <p>
                The Sky Glass IPTV{" "}
                <Link
                  href={siteRoutes.reseller}
                  className="font-semibold text-[#0B0E2C] underline-offset-2 hover:underline"
                >
                  reseller page
                </Link>{" "}
                states that a minimum purchase of 120 credits is required.
                Wholesale price is not listed as a fixed public amount — contact
                the reseller team for the current quotation.
              </p>
            </Prose>
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[420px] text-left">
                  <thead>
                    <tr className="border-b border-[#0B0E2C]/10 bg-[rgba(11,14,44,0.02)]">
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Pricing detail
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Published information
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRICING_ROWS.map((row) => (
                      <tr
                        key={row.detail}
                        className="border-b border-[#0B0E2C]/8 last:border-b-0"
                      >
                        <td className="px-4 py-3 text-[13px] font-semibold text-[#0B0E2C] sm:px-5 sm:text-[14px]">
                          {row.detail}
                        </td>
                        <td className="px-4 py-3 text-[13px] text-[#5C607A] sm:px-5 sm:text-[14px]">
                          {row.info}
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
              How to Calculate Your IPTV Reseller{" "}
              <span className="text-gradient-brand">Profit?</span>
            </SectionTitle>
            <Prose>
              <p>
                Your revenue is what customers pay. Your profit is what remains
                after wholesale costs and operating expenses. These example
                figures are illustrative only — not actual Sky Glass IPTV
                reseller prices.
              </p>
            </Prose>
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[320px] text-left">
                  <thead>
                    <tr className="border-b border-[#0B0E2C]/10 bg-[rgba(11,14,44,0.02)]">
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Description
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Example amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {PROFIT_ROWS.map((row) => (
                      <tr
                        key={row.description}
                        className="border-b border-[#0B0E2C]/8 last:border-b-0"
                      >
                        <td className="px-4 py-3 text-[13px] font-semibold text-[#0B0E2C] sm:px-5 sm:text-[14px]">
                          {row.description}
                        </td>
                        <td className="px-4 py-3 text-[13px] font-bold text-gradient-brand sm:px-5 sm:text-[14px]">
                          {row.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-[13px] leading-[1.65] text-[#5C607A] sm:text-[14px]">
              No reseller panel can guarantee a particular income. Results
              depend on demand, pricing, service quality, costs, and how you
              manage the business.
            </p>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              What Should You Check Before Buying an IPTV{" "}
              <span className="text-gradient-brand">Reseller Panel?</span>
            </SectionTitle>
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[480px] text-left">
                  <thead>
                    <tr className="border-b border-[#0B0E2C]/10 bg-[rgba(11,14,44,0.02)]">
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        What to check
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Why it matters
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {CHECK_BEFORE.map((row) => (
                      <tr
                        key={row.check}
                        className="border-b border-[#0B0E2C]/8 last:border-b-0"
                      >
                        <td className="px-4 py-3 text-[13px] font-semibold text-[#0B0E2C] sm:px-5 sm:text-[14px]">
                          {row.check}
                        </td>
                        <td className="px-4 py-3 text-[13px] text-[#5C607A] sm:px-5 sm:text-[14px]">
                          {row.why}
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
                Content rights deserve particular attention. Request written
                confirmation that the service and content are properly
                authorised for the relevant markets. Do not assume panel access
                automatically gives permission to distribute every channel or
                programme.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              IPTV Reseller Panel vs Regular IPTV{" "}
              <span className="text-gradient-brand">Subscription</span>
            </SectionTitle>
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-left">
                  <thead>
                    <tr className="border-b border-[#0B0E2C]/10 bg-[rgba(11,14,44,0.02)]">
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Feature
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Regular IPTV subscription
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        IPTV reseller panel
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
                          {row.regular}
                        </td>
                        <td className="px-4 py-3 text-[13px] text-[#5C607A] sm:px-5 sm:text-[14px]">
                          {row.reseller}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-[14px] leading-[1.65] text-[#5C607A] sm:text-[15px]">
              If you only want to watch television, explore a regular
              subscription on the{" "}
              <Link
                href={siteRoutes.plans}
                className="font-semibold text-[#0B0E2C] underline-offset-2 hover:underline"
              >
                plans page
              </Link>
              . If you want to manage customer accounts, ask about reseller
              access.
            </p>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Tips for Managing an IPTV Reseller{" "}
              <span className="text-gradient-brand">Business</span>
            </SectionTitle>
            <ul className="space-y-2.5">
              {TIPS.map((tip) => (
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
              Frequently Asked Questions About Sky Glass IPTV{" "}
              <span className="text-gradient-brand">Reseller Panel</span>
            </SectionTitle>
            <FaqAccordionList faqs={FAQS} defaultOpenId="what-is" />
          </section>

          <section className="space-y-4">
            <SectionTitle>
              <span className="text-gradient-brand">Conclusion</span>
            </SectionTitle>
            <div className="glass-card space-y-3 p-5 sm:space-y-4 sm:p-6">
              <Prose>
                <p>
                  An IPTV reseller panel can make it easier to manage customer
                  subscriptions, credits, and renewals through one central
                  dashboard. If you are considering the Sky Glass IPTV reseller
                  option, start by understanding the credit system and
                  confirming the current commercial terms.
                </p>
                <p>
                  The published programme requires a minimum purchase of 120
                  credits, with one credit representing one month of
                  subscription time under the standard structure. Unused credits
                  do not expire, while customer subscriptions have their own
                  expiry dates.
                </p>
                <p>
                  Before joining, confirm the wholesale price, account options,
                  connection limits, panel features, support arrangements,
                  refund conditions, and content authorisation. Once these
                  details are clear, you can decide whether the reseller
                  arrangement fits your business plans.
                </p>
              </Prose>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={siteRoutes.reseller}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[20px] bg-gradient-brand px-5 py-3 text-center text-[14px] font-semibold text-white sm:px-6"
              >
                <Wallet className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                View reseller page
              </Link>
              <a
                href={whatsappUrl(
                  "Ask about Sky Glass IPTV reseller panel and 120 credits",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="border-gradient-brand inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[20px] px-5 py-3 text-center text-[14px] font-semibold sm:px-6"
              >
                <Headphones
                  className="h-4 w-4 shrink-0 text-[#7B2FFF]"
                  strokeWidth={2}
                  aria-hidden
                />
                <span className="text-gradient-brand">Ask about reseller access</span>
              </a>
            </div>
          </section>
        </div>
      </Container>
    </article>
  );
}
