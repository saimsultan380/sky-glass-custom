import type { ReactNode } from "react";
import Link from "next/link";
import {
  CheckCircle2,
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

const POST = getBlogPost("iptv-sky-glass-subscription-packages-deals-prices-uk")!;

const PACKAGE_ROWS = [
  {
    name: "Sky Glass IPTV 1 Month",
    duration: "1 Month",
    price: "£12",
  },
  {
    name: "Sky Glass IPTV 3 Months",
    duration: "3 Months",
    price: "£20",
  },
  {
    name: "Sky Glass IPTV 6 Months",
    duration: "6 Months",
    price: "£30",
  },
  {
    name: "Sky Glass IPTV 12 Months",
    duration: "12 Months",
    price: "£45",
  },
] as const;

const PRICE_COMPARE_ROWS = [
  { plan: "1 Month", full: "£12", monthly: "£12.00" },
  { plan: "3 Months", full: "£20", monthly: "£6.67" },
  { plan: "6 Months", full: "£30", monthly: "£5.00" },
  { plan: "12 Months", full: "£45", monthly: "£3.75" },
] as const;

const DEAL_ROWS = [
  {
    deal: "1 Month – £12",
    offers: "Short subscription period",
    suited: "New users and short-term viewing",
  },
  {
    deal: "3 Months – £20",
    offers: "Three months of access",
    suited: "Viewers wanting a moderate commitment",
  },
  {
    deal: "6 Months – £30",
    offers: "Six months of access",
    suited: "Regular viewers",
  },
  {
    deal: "12 Months – £45",
    offers: "Full year of access",
    suited: "Viewers comfortable with a longer plan",
  },
] as const;

const CONTENT_FEATURES = [
  {
    title: "Live TV channels",
    body: "Browse available live television channels through a compatible IPTV application. Categories may include general entertainment, news, lifestyle, family programming, and international content. The exact channel list can change, so check any important channel with support before subscribing.",
    color: "#FF6B2C",
  },
  {
    title: "Sports programming",
    body: "Sports programming may be available where included in the selected package. If you follow a particular sport, competition, or live event, confirm its availability before ordering.",
    color: "#E91E8C",
  },
  {
    title: "Movies and films",
    body: "Browse films across different genres in the on-demand movie category. Depending on the current catalogue, you may find action, comedy, drama, thriller, family, and other entertainment.",
    color: "#7B2FFF",
  },
  {
    title: "TV series",
    body: "The on-demand series section provides access to available television programmes and episodes through your package, rather than relying only on scheduled live broadcasts.",
    color: "#2563EB",
  },
  {
    title: "News and documentaries",
    body: "News and documentary categories may also be available for viewers who want a mixture of general entertainment and informational programming.",
    color: "#FF6B2C",
  },
  {
    title: "Family and international entertainment",
    body: "Family and international entertainment categories give different household members more options to explore through the same compatible application.",
    color: "#E91E8C",
  },
  {
    title: "Electronic Programme Guide",
    body: "An EPG displays programme names and schedules for supported channels. Availability depends on the channel, data source, and compatible player.",
    color: "#7B2FFF",
  },
] as const;

const TRIAL_CHECKS = [
  "Whether your device is compatible.",
  "Whether the application loads correctly.",
  "How the channel categories are organised.",
  "Whether the available content meets your requirements.",
  "How smoothly the streams play on your connection.",
  "Whether the picture quality meets your expectations.",
  "Whether the EPG works on supported channels.",
  "How easy it is to browse the application.",
] as const;

const DEVICE_ROWS = [
  { device: "Amazon Firestick", setup: "Compatible IPTV application" },
  { device: "Fire TV Cube", setup: "Compatible IPTV application" },
  { device: "Android TV", setup: "Supported Android application" },
  { device: "Google TV", setup: "Compatible IPTV application" },
  { device: "Android TV Box", setup: "Supported IPTV application" },
  { device: "Samsung Smart TV", setup: "Compatible third-party IPTV player" },
  { device: "LG Smart TV", setup: "Compatible third-party IPTV player" },
  { device: "Sony Smart TV", setup: "Compatible player, depending on model" },
  { device: "Hisense Smart TV", setup: "Compatible player, depending on model" },
  { device: "iPhone and iPad", setup: "Supported iOS IPTV player" },
  { device: "Apple TV", setup: "Compatible tvOS IPTV player" },
  { device: "Windows PC", setup: "Supported desktop IPTV player" },
  { device: "Mac and MacBook", setup: "Compatible desktop IPTV player" },
] as const;

const GET_STARTED_STEPS = [
  {
    title: "Choose your device",
    body: "Decide where you want to watch — Firestick, Android TV, Smart TV, Apple TV, smartphone, tablet, or computer. Check that your device supports a compatible IPTV application.",
  },
  {
    title: "Request a trial or choose a package",
    body: "If you are new to the service, request the 24-hour trial first. Otherwise, compare the available subscription periods and select Standard or Premium after confirming current features and price.",
  },
  {
    title: "Confirm the subscription details",
    body: "Before paying, check the complete price, duration, package type, simultaneous connections, available content, and any separate IPTV player fee.",
  },
  {
    title: "Receive your account information",
    body: "Once your trial or subscription is confirmed, support provides the login or playlist information needed for your device.",
  },
  {
    title: "Install the compatible IPTV player",
    body: "Follow the installation instructions for your device. For Firestick and Android, use the supplied app guide. For Samsung, LG, Apple, and other platforms, choose an appropriate compatible player.",
  },
  {
    title: "Sign in and test the service",
    body: "Enter your account details carefully, allow the playlist to load, open a few channels, and check playback and programme information where supported.",
  },
] as const;

const VS_SKY_ROWS = [
  {
    comparison: "Service provider",
    official: "Official Sky",
    iptv: "Independent IPTV service",
  },
  {
    comparison: "Viewing method",
    official: "Depends on the official Sky package",
    iptv: "Internet connection and compatible player",
  },
  {
    comparison: "Equipment",
    official: "Depends on the selected Sky service",
    iptv: "Supported streaming device",
  },
  {
    comparison: "Subscription options",
    official: "Official Sky packages and terms",
    iptv: "Standard and Premium options",
  },
  {
    comparison: "Content",
    official: "Depends on the official package",
    iptv: "Depends on current IPTV package availability",
  },
  {
    comparison: "Pricing",
    official: "Set by Sky",
    iptv: "Published IPTV subscription prices",
  },
] as const;

const CHOOSE_TIPS = [
  {
    title: "Consider your budget",
    body: "If you want to spend less upfront, the one-month or three-month package may be more suitable. If you have already tested the service, compare the six and twelve-month prices.",
  },
  {
    title: "Check the content you want",
    body: "Do not choose a package only because it advertises a large selection. Check the actual availability of the channels, sports, movies, and programmes you regularly watch.",
  },
  {
    title: "Think about subscription duration",
    body: "Some viewers prefer renewing every month, while others want access for six or twelve months. Choose a duration that matches how you plan to use the service.",
  },
  {
    title: "Check simultaneous connections",
    body: "The published Standard package includes one account with one simultaneous stream. If several people need to watch at the same time, ask about multi-connection options before ordering.",
  },
  {
    title: "Test your device first",
    body: "A trial can help you confirm that your device and internet connection work with the service before purchasing a longer subscription.",
  },
] as const;

const FAQS: FaqItem[] = [
  {
    id: "cost",
    q: "How much does a Sky Glass IPTV subscription cost?",
    a: "The published Standard prices are £12 for one month, £20 for three months, £30 for six months, and £45 for twelve months. These are the full amounts for the selected periods.",
  },
  {
    id: "latest-prices",
    q: "What are the latest Sky Glass package prices?",
    a: "The published Standard package prices for one account are £12, £20, £30, and £45 for one, three, six, and twelve months respectively. Confirm current prices before ordering.",
  },
  {
    id: "trial",
    q: "Does Sky Glass IPTV offer a 24-hour trial?",
    a: "Yes. A 24-hour trial is available so you can check device compatibility, application performance, channel navigation, and the available content before choosing a paid subscription.",
  },
  {
    id: "cheapest",
    q: "Which Sky Glass IPTV package is the cheapest?",
    a: "The one-month Standard subscription has the lowest upfront cost at £12. The twelve-month Standard package has the lowest monthly equivalent at £3.75, based on its full £45 price.",
  },
  {
    id: "twelve-month",
    q: "Is the Sky Glass IPTV twelve-month package worth considering?",
    a: "It may suit viewers who have already tested the service and want a longer subscription period. The published Standard price is £45 for the full year.",
  },
  {
    id: "standard-premium",
    q: "Does Sky Glass IPTV offer Standard and Premium packages?",
    a: "Yes. Standard and Premium options are available. Ask support for the latest Premium price and the specific differences between the two packages before upgrading.",
  },
  {
    id: "firestick",
    q: "Can I use Sky Glass IPTV on Firestick?",
    a: "Yes, compatible Firestick and Fire TV devices are supported. Follow the installation instructions supplied for your device and enter the account information after activation.",
  },
  {
    id: "multiple-devices",
    q: "Can I use the same Sky Glass IPTV subscription on multiple devices?",
    a: "The published Standard package includes one simultaneous stream. If you want to watch on multiple screens at the same time, confirm the available connection options and pricing with support.",
  },
  {
    id: "vs-sky",
    q: "Is Sky Glass IPTV the same as a Sky UK subscription?",
    a: "No. Sky Glass IPTV is an independent IPTV service. It is not an official Sky UK subscription and is not affiliated with Sky UK Limited or the official Sky Glass television product.",
  },
  {
    id: "player-included",
    q: "Does the Sky Glass IPTV subscription include the IPTV player?",
    a: "The subscription provides account access and setup information for a compatible player. Some third-party applications may charge their own activation or licence fee separately.",
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

export function BlogSubscriptionPackagesArticle() {
  return (
    <article className="relative bg-transparent pt-4 sm:pt-8 lg:pt-10">
      <Container className="pb-10 sm:pb-16 lg:pb-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#5C607A] sm:text-[13px]">
            Packages &amp; pricing
          </p>
          <h1 className="mt-2 text-[26px] font-bold leading-[1.18] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-[38px] sm:leading-[1.12] lg:text-[42px]">
            Sky Glass Subscription: IPTV Sky Glass Deals, Packages &amp; Prices
            in the{" "}
            <span className="text-gradient-brand">UK</span>
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
              Choosing a Sky Glass IPTV subscription starts with understanding
              what you get, how much you pay, and which subscription period
              suits your viewing habits. Some viewers prefer a shorter package
              to test the service, while others want a longer subscription so
              they do not have to renew every month.
            </p>
            <p>
              Sky Glass IPTV offers different subscription durations, with
              Standard and Premium options available. You can choose between
              one, three, six, and twelve-month Standard packages, depending on
              how long you want access. There is also a 24-hour trial available
              if you want to check the service before making a payment.
            </p>
            <p>
              Whether you are searching for a Sky Glass subscription, comparing
              Sky Glass deals, or checking the latest Sky Glass package prices,
              this guide explains the available options, package features, and
              things to consider before choosing a plan.
            </p>
          </Prose>

          <section className="space-y-4">
            <SectionTitle>
              What Is a Sky Glass IPTV{" "}
              <span className="text-gradient-brand">Subscription?</span>
            </SectionTitle>
            <div className="glass-card p-5 sm:p-6">
              <Prose>
                <p>
                  A Sky Glass IPTV subscription provides access to the live
                  television and on-demand categories available through your
                  selected package.
                </p>
                <p>
                  Instead of relying on a traditional satellite dish, the
                  service uses an internet connection and a compatible IPTV
                  application. Once your account is activated, you receive the
                  login or playlist details required to configure your device.
                </p>
                <p>
                  Depending on the selected package and current content
                  availability, you can explore categories such as live
                  television channels, sports programming where included, movies
                  and films, television series, news and documentaries, family
                  entertainment, international programming, and an Electronic
                  Programme Guide (EPG) where supported.
                </p>
                <p>
                  You should check the availability of any particular channel,
                  sports event, or programme before ordering. Content can
                  change, and the exact selection may differ between packages.
                </p>
              </Prose>
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Sky Glass IPTV Subscription{" "}
              <span className="text-gradient-brand">Packages</span>
            </SectionTitle>
            <Prose>
              <p>
                The Sky Glass IPTV package options are designed for viewers who
                want to choose their subscription according to duration and
                viewing requirements.
              </p>
              <p>
                You can select a Standard package or ask about the available
                Premium option. The subscription duration determines how long
                your account remains active.
              </p>
              <p>
                Here is an overview of the published Standard subscription
                prices for one account.
              </p>
            </Prose>
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[420px] text-left">
                  <thead>
                    <tr className="border-b border-[#0B0E2C]/10 bg-[rgba(11,14,44,0.02)]">
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Subscription package
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Duration
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Total price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {PACKAGE_ROWS.map((row) => (
                      <tr
                        key={row.name}
                        className="border-b border-[#0B0E2C]/8 last:border-b-0"
                      >
                        <td className="px-4 py-3 text-[13px] font-semibold text-[#0B0E2C] sm:px-5 sm:text-[14px]">
                          {row.name}
                        </td>
                        <td className="px-4 py-3 text-[13px] text-[#5C607A] sm:px-5 sm:text-[14px]">
                          {row.duration}
                        </td>
                        <td className="px-4 py-3 text-[13px] font-bold text-gradient-brand sm:px-5 sm:text-[14px]">
                          {row.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <Prose>
              <p>
                These are the full amounts for the selected subscription
                periods, not monthly instalments.
              </p>
              <p>
                The published Standard package includes one account with one
                simultaneous stream. If you need more than one person to watch
                at the same time, confirm the available multi-connection options
                and prices before ordering.
              </p>
            </Prose>

            <div className="space-y-4">
              {[
                {
                  title: "1. Sky Glass IPTV 1 Month Subscription",
                  body: "A one-month Sky Glass IPTV subscription is suitable for someone who wants a shorter commitment. It can be a useful starting point if you are new to the service, have recently changed your streaming device, or want to check how the available content works with your internet connection. The published Standard price is £12 for the full month.",
                },
                {
                  title: "2. Sky Glass IPTV 3 Month Subscription",
                  body: "The three-month package provides a longer subscription period without requiring a full six or twelve-month commitment. The published Standard price is £20 for three months. This option may suit viewers who have already tested the service and want to continue using it for a few months.",
                },
                {
                  title: "3. Sky Glass IPTV 6 Month Subscription",
                  body: "The six-month Sky Glass IPTV package is another option for regular viewers. It provides access for half a year, so you do not need to arrange a renewal every month. The published Standard price is £30 for the complete six-month period.",
                },
                {
                  title: "4. Sky Glass IPTV 12 Month Subscription",
                  body: "The twelve-month package is intended for viewers who prefer a longer subscription. The published Standard price is £45 for the full year — an equivalent of £3.75 per month when divided across twelve months. You pay the complete subscription price upfront rather than making twelve monthly payments.",
                },
              ].map((item) => (
                <div key={item.title} className="glass-card p-5 sm:p-6">
                  <h3 className="text-[16px] font-bold text-[#0B0E2C] sm:text-[18px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.7] text-[#5C607A] sm:text-[15px] sm:leading-[1.8]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Sky Glass Package Prices: How Much Does It{" "}
              <span className="text-gradient-brand">Cost?</span>
            </SectionTitle>
            <Prose>
              <p>
                One of the most important things to check before ordering is the
                complete subscription cost. The Sky Glass package prices depend
                on the selected duration and package type.
              </p>
              <p className="font-medium text-[#0B0E2C]">
                Standard subscription price comparison
              </p>
            </Prose>
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[360px] text-left">
                  <thead>
                    <tr className="border-b border-[#0B0E2C]/10 bg-[rgba(11,14,44,0.02)]">
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Plan
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Full price
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Monthly equivalent
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRICE_COMPARE_ROWS.map((row) => (
                      <tr
                        key={row.plan}
                        className="border-b border-[#0B0E2C]/8 last:border-b-0"
                      >
                        <td className="px-4 py-3 text-[13px] font-semibold text-[#0B0E2C] sm:px-5 sm:text-[14px]">
                          {row.plan}
                        </td>
                        <td className="px-4 py-3 text-[13px] font-bold text-gradient-brand sm:px-5 sm:text-[14px]">
                          {row.full}
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
            <Prose>
              <p>
                The monthly equivalent is shown only to help compare the total
                cost. It does not mean that you pay monthly.
              </p>
              <p>
                The twelve-month Standard subscription has the lowest monthly
                equivalent among these listed options. However, the right choice
                depends on how long you want access and whether you have already
                tested the service.
              </p>
            </Prose>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Are Premium Package Prices{" "}
              <span className="text-gradient-brand">Different?</span>
            </SectionTitle>
            <div className="glass-card p-5 sm:p-6">
              <Prose>
                <p>
                  Sky Glass IPTV also provides a Premium option. The Premium
                  package is intended for viewers who want to compare the
                  broader content selection or additional features available
                  with that option.
                </p>
                <p>
                  You should not assume that every channel or feature is
                  automatically included. Ask support for the current Premium
                  price and a clear explanation of how it differs from Standard
                  before making a payment.
                </p>
              </Prose>
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Sky Glass IPTV Deals: Which Subscription Offers Better{" "}
              <span className="text-gradient-brand">Value?</span>
            </SectionTitle>
            <Prose>
              <p>
                When looking for Sky Glass deals, it is worth comparing the
                complete subscription cost instead of looking only at the
                monthly equivalent. A shorter subscription requires less money
                upfront, while a longer package can offer a lower equivalent
                monthly cost.
              </p>
            </Prose>
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[480px] text-left">
                  <thead>
                    <tr className="border-b border-[#0B0E2C]/10 bg-[rgba(11,14,44,0.02)]">
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Sky Glass IPTV deal
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        What it offers
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Suitable for
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {DEAL_ROWS.map((row) => (
                      <tr
                        key={row.deal}
                        className="border-b border-[#0B0E2C]/8 last:border-b-0"
                      >
                        <td className="px-4 py-3 text-[13px] font-semibold text-[#0B0E2C] sm:px-5 sm:text-[14px]">
                          {row.deal}
                        </td>
                        <td className="px-4 py-3 text-[13px] text-[#5C607A] sm:px-5 sm:text-[14px]">
                          {row.offers}
                        </td>
                        <td className="px-4 py-3 text-[13px] text-[#5C607A] sm:px-5 sm:text-[14px]">
                          {row.suited}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <Prose>
              <p>
                The twelve-month package has the lowest monthly equivalent, but
                it also requires the highest upfront payment. The three-month
                package may be a more practical choice if you want to try the
                service for longer without committing to a full year.
              </p>
              <p>
                There is also a 24-hour trial available. You can use it to test
                compatibility and performance before choosing a paid package.
                Always confirm the current prices and terms before ordering, as
                offers and package details can change.
              </p>
            </Prose>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              What Is Included in a Sky Glass IPTV{" "}
              <span className="text-gradient-brand">Package?</span>
            </SectionTitle>
            <Prose>
              <p>
                The package you select determines your subscription period and
                the available service options. The published Standard package
                includes access to available live television and on-demand
                categories.
              </p>
            </Prose>
            <div className="space-y-3">
              {CONTENT_FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="glass-card flex gap-3 p-4 sm:gap-4 sm:p-5"
                >
                  <span
                    className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ backgroundColor: feature.color }}
                    aria-hidden
                  />
                  <div>
                    <h3 className="text-[15px] font-bold text-[#0B0E2C] sm:text-[16px]">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-[14px] leading-[1.7] text-[#5C607A] sm:text-[15px]">
                      {feature.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Sky Glass IPTV 24-Hour Trial: Test Before You{" "}
              <span className="text-gradient-brand">Subscribe</span>
            </SectionTitle>
            <Prose>
              <p>
                If you are not sure which package to choose, start by requesting
                the available 24-hour trial. A trial gives you an opportunity to
                check the service using your own device and internet connection
                before purchasing a longer subscription.
              </p>
            </Prose>
            <div className="glass-card p-5 sm:p-6">
              <p className="text-[14px] font-semibold text-[#0B0E2C] sm:text-[15px]">
                During the trial, you can check:
              </p>
              <ul className="mt-3 space-y-2.5">
                {TRIAL_CHECKS.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[14px] leading-[1.65] text-[#5C607A] sm:text-[15px]">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#7B2FFF]"
                      strokeWidth={2}
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Prose>
              <p>
                It is better to test the service during the hours when you
                normally watch television. Remember that trial access may not
                include every category or feature available with a full paid
                subscription. Ask support about any differences before ordering.
              </p>
            </Prose>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Which Devices Support Sky Glass{" "}
              <span className="text-gradient-brand">IPTV?</span>
            </SectionTitle>
            <Prose>
              <p>
                You do not necessarily need a new television to use an IPTV
                subscription. Sky Glass IPTV supports different device
                categories through its official application on compatible
                Firestick and Android devices, as well as alternative compatible
                players on other platforms.
              </p>
            </Prose>
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[360px] text-left">
                  <thead>
                    <tr className="border-b border-[#0B0E2C]/10 bg-[rgba(11,14,44,0.02)]">
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Device
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Setup option
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {DEVICE_ROWS.map((row) => (
                      <tr
                        key={row.device}
                        className="border-b border-[#0B0E2C]/8 last:border-b-0"
                      >
                        <td className="px-4 py-3 text-[13px] font-semibold text-[#0B0E2C] sm:px-5 sm:text-[14px]">
                          {row.device}
                        </td>
                        <td className="px-4 py-3 text-[13px] text-[#5C607A] sm:px-5 sm:text-[14px]">
                          {row.setup}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <Prose>
              <p>
                The correct application depends on your device model, operating
                system, and region. Some third-party IPTV players may charge a
                separate activation or licence fee. This cost is not necessarily
                included in your IPTV subscription.
              </p>
            </Prose>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              How to Get a Sky Glass IPTV{" "}
              <span className="text-gradient-brand">Subscription?</span>
            </SectionTitle>
            <Prose>
              <p>
                Getting started is straightforward. You need a compatible
                device, an internet connection, and the account details supplied
                after your trial or subscription is confirmed.
              </p>
            </Prose>
            <div className="space-y-3">
              {GET_STARTED_STEPS.map((step, index) => (
                <div
                  key={step.title}
                  className="glass-card flex gap-3 p-4 sm:gap-4 sm:p-5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-[13px] font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-bold text-[#0B0E2C] sm:text-[16px]">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-[14px] leading-[1.7] text-[#5C607A] sm:text-[15px]">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Sky Glass Subscription vs Sky UK Subscription: What Should You{" "}
              <span className="text-gradient-brand">Know?</span>
            </SectionTitle>
            <div className="glass-card flex gap-3 border border-[rgba(255,107,44,0.25)] bg-[rgba(255,107,44,0.04)] p-4 sm:gap-4 sm:p-5">
              <ShieldAlert
                className="mt-0.5 h-5 w-5 shrink-0 text-[#FF6B2C]"
                strokeWidth={2}
                aria-hidden
              />
              <p className="text-[14px] leading-[1.7] text-[#5C607A] sm:text-[15px]">
                Sky Glass IPTV is an independent IPTV service. It is not
                affiliated with, endorsed by, or officially connected to Sky UK
                Limited or the official Sky Glass television product.
              </p>
            </div>
            <Prose>
              <p>
                People searching for a Sky Glass subscription or a Sky UK
                subscription may be looking for different types of television
                services. A traditional Sky UK subscription refers to television
                packages and services offered through the official Sky brand.
                Sky Glass is also the name of an official Sky television
                product.
              </p>
              <p>
                Sky Glass IPTV, however, is the name of an independent IPTV
                service. It provides access to available content through an
                internet connection and compatible IPTV applications. The two
                should not be treated as the same product or subscription.
              </p>
            </Prose>
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] text-left">
                  <thead>
                    <tr className="border-b border-[#0B0E2C]/10 bg-[rgba(11,14,44,0.02)]">
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Comparison
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Official Sky subscription
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Sky Glass IPTV
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {VS_SKY_ROWS.map((row) => (
                      <tr
                        key={row.comparison}
                        className="border-b border-[#0B0E2C]/8 last:border-b-0"
                      >
                        <td className="px-4 py-3 text-[13px] font-semibold text-[#0B0E2C] sm:px-5 sm:text-[14px]">
                          {row.comparison}
                        </td>
                        <td className="px-4 py-3 text-[13px] text-[#5C607A] sm:px-5 sm:text-[14px]">
                          {row.official}
                        </td>
                        <td className="px-4 py-3 text-[13px] text-[#5C607A] sm:px-5 sm:text-[14px]">
                          {row.iptv}
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
              How to Choose the Right Sky Glass{" "}
              <span className="text-gradient-brand">Package?</span>
            </SectionTitle>
            <div className="space-y-3">
              {CHOOSE_TIPS.map((tip) => (
                <div key={tip.title} className="glass-card p-4 sm:p-5">
                  <h3 className="text-[15px] font-bold text-[#0B0E2C] sm:text-[16px]">
                    {tip.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-[1.7] text-[#5C607A] sm:text-[15px]">
                    {tip.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Frequently Asked Questions About Sky Glass IPTV{" "}
              <span className="text-gradient-brand">Subscription</span>
            </SectionTitle>
            <FaqAccordionList faqs={FAQS} />
          </section>

          <section className="space-y-5">
            <SectionTitle>
              <span className="text-gradient-brand">Conclusion</span>
            </SectionTitle>
            <div className="glass-card p-5 sm:p-6">
              <Prose>
                <p>
                  Choosing a Sky Glass IPTV subscription is easier when you
                  understand the available packages, total prices, and
                  subscription periods before ordering.
                </p>
                <p>
                  The published Standard options include one month for £12,
                  three months for £20, six months for £30, and twelve months
                  for £45. You can also request a 24-hour trial to test your
                  device and connection before selecting a longer package.
                </p>
                <p>
                  If you are comparing Sky Glass deals or checking Sky Glass
                  package prices, look beyond the headline amount. Check the
                  content you want, the number of simultaneous connections,
                  device compatibility, and any separate player costs.
                </p>
              </Prose>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={siteRoutes.plans}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[20px] bg-gradient-brand px-5 py-3 text-center text-[14px] font-semibold text-white sm:px-6"
              >
                <Tag className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                View subscription plans
              </Link>
              <a
                href={whatsappFreeTrialUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="border-gradient-brand inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[20px] px-5 py-3 text-center text-[14px] font-semibold sm:px-6"
              >
                <Headphones
                  className="h-4 w-4 shrink-0 text-[#7B2FFF]"
                  strokeWidth={2}
                  aria-hidden
                />
                <span className="text-gradient-brand">Request 24-hour trial</span>
              </a>
              <a
                href={whatsappUrl(
                  "Ask about Sky Glass IPTV subscription packages and prices",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[20px] border border-[#0B0E2C]/12 px-5 py-3 text-center text-[14px] font-semibold text-[#0B0E2C] sm:px-6"
              >
                Ask about packages
              </a>
            </div>
          </section>
        </div>
      </Container>
    </article>
  );
}
