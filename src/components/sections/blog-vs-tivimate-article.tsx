import type { ReactNode } from "react";
import Link from "next/link";
import { CheckCircle2, Headphones, ListChecks, MonitorPlay } from "lucide-react";
import { Container } from "@/components/layout/container";
import { BlogCoverImage } from "@/components/sections/blog-cover-image";
import {
  FaqAccordionList,
  type FaqItem,
} from "@/components/sections/faq-section";
import { getBlogPost } from "@/lib/blog";
import { siteRoutes } from "@/lib/routes";
import { whatsappUrl } from "@/lib/site";

const POST = getBlogPost("sky-glass-iptv-vs-tivimate")!;

const COMPARE_ROWS = [
  {
    feature: "Main purpose",
    skyGlass: "Provider-branded or customised IPTV interface",
    tivimate: "Independent IPTV media player",
  },
  {
    feature: "Content included",
    skyGlass: "Depends on the associated service or subscription",
    tivimate: "No channels or content included",
  },
  {
    feature: "Setup",
    skyGlass: "Follow the provider’s instructions",
    tivimate: "Add a supported playlist or compatible account",
  },
  {
    feature: "Interface",
    skyGlass: "Depends on the supplied app",
    tivimate: "Highly customisable TV interface",
  },
  {
    feature: "Playlist management",
    skyGlass: "Depends on the app version",
    tivimate: "Supports multiple playlists",
  },
  {
    feature: "Electronic programme guide",
    skyGlass: "Depends on provider and app support",
    tivimate: "Supports EPG data",
  },
  {
    feature: "Favourites and search",
    skyGlass: "Depends on available features",
    tivimate: "Both supported",
  },
  {
    feature: "Advanced viewing features",
    skyGlass: "Varies by app and service",
    tivimate:
      "Features include multiview and recording, subject to compatibility",
  },
  {
    feature: "Device compatibility",
    skyGlass: "Verify with the provider",
    tivimate: "Designed for Android TV devices",
  },
  {
    feature: "Best suited to",
    skyGlass: "Users wanting the provider’s recommended setup",
    tivimate: "Users wanting more control over playlist organisation",
  },
] as const;

const SKY_GLASS_REASONS = [
  {
    title: "A provider-recommended setup",
    body: "If your provider supplies specific installation instructions for its Sky Glass IPTV app, following those instructions can reduce confusion. You can ask support which app version, login method, and device are supported. This is especially useful if you are new to IPTV and would rather follow one documented setup than configure a separate player yourself.",
  },
  {
    title: "A familiar interface",
    body: "Some users prefer a provider-branded interface because it may resemble the layout they already use. The actual appearance and available options depend on the specific app version, so check the version supplied to you rather than assuming every Sky Glass IPTV app looks or behaves the same way.",
  },
  {
    title: "Easier provider-specific troubleshooting",
    body: "When you use the recommended app, the provider may be better placed to guide you through installation and account configuration. That does not guarantee every problem will be easier to fix — it simply gives you a clear starting point for login details, account status, or playback help.",
  },
  {
    title: "A potentially simpler choice for beginners",
    body: "If you mainly want to open your service and watch content, you may not need the advanced playlist controls offered by TiviMate. Before choosing, confirm that the provider’s recommended app works with your device and that your subscription includes the content you expect.",
  },
] as const;

const TIVIMATE_REASONS = [
  {
    title: "Playlist management",
    body: "TiviMate supports multiple playlists, allowing users to organise and switch between compatible sources in the same application. This can be useful if you legitimately use more than one compatible playlist and prefer to manage them through a single interface.",
  },
  {
    title: "A customisable electronic programme guide",
    body: "TiviMate offers an electronic programme guide (EPG) for browsing programme schedules. It also supports features such as search and favourites. The quality of the guide still depends on the programme data supplied by your source — missing listings will not necessarily be fixed by changing players.",
  },
  {
    title: "Advanced viewing features",
    body: "Depending on the setup, TiviMate supports multiview, recording and catch-up functionality. These features can appeal to users who want more than basic channel playback. However, availability depends on the source, device, and relevant feature support.",
  },
  {
    title: "More control over the interface",
    body: "TiviMate is designed for television screens and remote-control navigation, with options to customise the viewing experience. It is not optimised for phones and tablets. If you enjoy organising channel groups, favourites and playlists, that level of control may be a major advantage.",
  },
  {
    title: "Understand the cost before you choose",
    body: "TiviMate offers a free application with paid upgrades. Its paid subscription or premium purchase unlocks player features and does not provide an IPTV content subscription. Check the current terms and price in the official app listing before purchasing.",
  },
] as const;

const TIVIMATE_CHECKS = [
  {
    title: "Check your login details",
    body: "Verify your username and password. Check the server address or playlist URL supplied by your provider. Look for typing errors or accidental spaces.",
  },
  {
    title: "Confirm the connection method",
    body: "Ask your provider which connection method it supports. TiviMate supports M3U playlists, Xtream Codes, and Stalker Portal, but your provider must offer compatible credentials.",
  },
  {
    title: "Check whether your account is active",
    body: "Confirm that your subscription is active and that you are using the correct account details. If your credentials are rejected, ask the provider to verify the account.",
  },
  {
    title: "Check device compatibility",
    body: "TiviMate is designed primarily for Android TV. If you are using a different operating system or device type, verify compatibility before troubleshooting further.",
  },
  {
    title: "Test the provider’s recommended player",
    body: "If the same credentials fail in TiviMate, ask your provider whether the service is intended to work with TiviMate or requires its own application. Avoid repeatedly purchasing subscriptions or reinstalling apps until you understand the cause.",
  },
] as const;

const CHOOSE_SKY = [
  "It is the application recommended by your IPTV provider.",
  "You prefer to follow provider-specific setup instructions.",
  "You do not need extensive playlist customisation.",
  "You want to contact your provider for help with the supported app.",
] as const;

const CHOOSE_TIVIMATE = [
  "Your device is compatible with Android TV applications.",
  "Your provider confirms that its connection method is supported.",
  "You want playlist management and EPG customisation.",
  "You want to use supported features such as favourites, search and multiview.",
] as const;

const FAQS: FaqItem[] = [
  {
    id: "better",
    q: "Is Sky Glass IPTV better than TiviMate?",
    a: "Neither is automatically better. Sky Glass IPTV may be more convenient if it is your provider’s recommended app, while TiviMate offers extensive playlist and interface controls for compatible setups.",
  },
  {
    id: "provider",
    q: "Is TiviMate an IPTV provider?",
    a: "No. TiviMate is a media player. You must supply your own compatible playlist or service credentials, and any paid upgrade unlocks application features rather than television content.",
  },
  {
    id: "not-working",
    q: "Why does TiviMate not work with my IPTV provider?",
    a: "Possible causes include incorrect credentials, an unsupported connection method, account issues, or device incompatibility. Ask your provider which player and connection formats it supports.",
  },
  {
    id: "free",
    q: "Is TiviMate free?",
    a: "TiviMate offers a free application, with paid upgrades for additional features. Check the official listing for current pricing and purchase terms.",
  },
  {
    id: "firestick",
    q: "Can I use TiviMate on a Firestick?",
    a: "TiviMate is designed for Android TV devices. Check compatibility with your particular Fire TV device and use a verified installation source.",
  },
  {
    id: "buffering",
    q: "Will switching players fix buffering?",
    a: "Not necessarily. Buffering may result from network conditions, device performance, the content source, or the player itself. Test your connection and multiple streams before switching applications.",
  },
  {
    id: "both",
    q: "Can I use the same IPTV subscription in both players?",
    a: "Sometimes, but not always. The provider must support the relevant connection method and permit the intended usage. Confirm compatibility and any account or device limits before configuring another player.",
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

export function BlogVsTivimateArticle() {
  return (
    <article className="relative bg-transparent pt-4 sm:pt-8 lg:pt-10">
      <Container className="pb-10 sm:pb-16 lg:pb-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#5C607A] sm:text-[13px]">
            Player comparison
          </p>
          <h1 className="mt-2 text-[26px] font-bold leading-[1.18] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-[38px] sm:leading-[1.12] lg:text-[42px]">
            Sky Glass IPTV vs TiviMate: Which Player Is Better for{" "}
            <span className="text-gradient-brand">Your Setup?</span>
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
              Choosing between Sky Glass IPTV and TiviMate depends on your IPTV
              provider, streaming device, and the features you want. If you
              prefer a familiar interface and an app recommended by your
              provider, Sky Glass IPTV may be the more convenient option. If you
              want greater control over playlists, the TV guide, and the viewing
              interface, TiviMate is worth considering, provided it supports
              your setup.
            </p>
            <p>
              A key point is that an IPTV player and an IPTV subscription are
              not the same thing. TiviMate is a media player that requires you
              to add your own playlist or compatible service credentials. Paying
              for TiviMate Premium unlocks application features, not television
              channels or an IPTV subscription.
            </p>
            <p>
              If you have seen reports that TiviMate does not work with a
              particular IPTV provider, do not assume that the app is
              universally incompatible. The issue may relate to the provider’s
              connection method, playlist details, or device configuration.
              Let’s compare the two options and explain how to choose the right
              one.
            </p>
          </Prose>

          <section className="space-y-4">
            <SectionTitle>
              What Is the Difference Between Sky Glass IPTV and{" "}
              <span className="text-gradient-brand">TiviMate?</span>
            </SectionTitle>
            <div className="glass-card p-5 sm:p-6">
              <Prose>
                <p>
                  Sky Glass IPTV, as discussed in IPTV player communities, can
                  refer to a provider-branded or customised player interface.
                  The precise app and its features depend on the version
                  supplied by the provider. TiviMate is a separately developed
                  IPTV player designed primarily for Android TV devices.
                </p>
                <p>The main difference is how each fits into your existing setup.</p>
              </Prose>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
              <div className="glass-card p-4 sm:p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(233,30,140,0.1)] text-[#E91E8C]">
                  <MonitorPlay className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="mt-3 text-[15px] font-bold text-[#0B0E2C]">
                  Sky Glass IPTV
                </h3>
                <p className="mt-2 text-[13px] leading-[1.65] text-[#5C607A] sm:text-[14px]">
                  May offer a provider-recommended viewing interface and a setup
                  process tailored to that service.
                </p>
              </div>
              <div className="glass-card p-4 sm:p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(123,47,255,0.1)] text-[#7B2FFF]">
                  <ListChecks className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="mt-3 text-[15px] font-bold text-[#0B0E2C]">
                  TiviMate
                </h3>
                <p className="mt-2 text-[13px] leading-[1.65] text-[#5C607A] sm:text-[14px]">
                  Offers playlist management, a customisable TV guide,
                  favourites, search, and other playback-management features.
                </p>
              </div>
              <div className="glass-card p-4 sm:p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(37,99,235,0.1)] text-[#2563EB]">
                  <CheckCircle2 className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="mt-3 text-[15px] font-bold text-[#0B0E2C]">
                  Your IPTV provider
                </h3>
                <p className="mt-2 text-[13px] leading-[1.65] text-[#5C607A] sm:text-[14px]">
                  Supplies the subscription or playlist access, where applicable.
                  It determines which content and credentials you receive.
                </p>
              </div>
            </div>
            <p className="text-[14px] leading-[1.65] text-[#5C607A] sm:text-[15px]">
              TiviMate officially supports common playlist and connection
              formats, including M3U, Xtream Codes and Stalker Portal. However,
              your provider must supply compatible details, and not every
              service will work with every player.
            </p>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Sky Glass IPTV vs TiviMate:{" "}
              <span className="text-gradient-brand">Quick Comparison</span>
            </SectionTitle>
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] text-left">
                  <thead>
                    <tr className="border-b border-[#0B0E2C]/10 bg-[rgba(11,14,44,0.02)]">
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Feature
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Sky Glass IPTV
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        TiviMate
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
                          {row.skyGlass}
                        </td>
                        <td className="px-4 py-3 text-[13px] text-[#5C607A] sm:px-5 sm:text-[14px]">
                          {row.tivimate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-[13px] leading-[1.65] text-[#5C607A] sm:text-[14px]">
              TiviMate’s features are documented by its official website and
              Google Play listing. Features such as recording and catch-up may
              depend on the playlist, provider and device, so their availability
              should not be assumed for every account.
            </p>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Why Some Users Prefer{" "}
              <span className="text-gradient-brand">Sky Glass IPTV</span>
            </SectionTitle>
            <p className="text-[14px] leading-[1.65] text-[#5C607A] sm:text-[15px]">
              Sky Glass IPTV may be the better starting point if it is the
              player your provider recommends for its service.
            </p>
            <div className="space-y-3 sm:space-y-4">
              {SKY_GLASS_REASONS.map((item, index) => (
                <div
                  key={item.title}
                  className="glass-card flex gap-3.5 p-4 sm:gap-5 sm:p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(233,30,140,0.12)] text-[13px] font-bold text-[#E91E8C] sm:h-10 sm:w-10 sm:text-[14px]">
                    {index + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[15px] font-bold text-[#0B0E2C] sm:text-[16px]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-[1.65] text-[#5C607A] sm:text-[14px] sm:leading-[1.75]">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Why TiviMate Is Popular With{" "}
              <span className="text-gradient-brand">IPTV Users</span>
            </SectionTitle>
            <p className="text-[14px] leading-[1.65] text-[#5C607A] sm:text-[15px]">
              TiviMate is worth considering if you want more control over how
              your playlists are organised and displayed.
            </p>
            <div className="space-y-3 sm:space-y-4">
              {TIVIMATE_REASONS.map((item, index) => (
                <div
                  key={item.title}
                  className="glass-card flex gap-3.5 p-4 sm:gap-5 sm:p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(123,47,255,0.12)] text-[13px] font-bold text-[#7B2FFF] sm:h-10 sm:w-10 sm:text-[14px]">
                    {index + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[15px] font-bold text-[#0B0E2C] sm:text-[16px]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-[1.65] text-[#5C607A] sm:text-[14px] sm:leading-[1.75]">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              TiviMate Not Working With Your IPTV Provider?{" "}
              <span className="text-gradient-brand">Here’s What to Check</span>
            </SectionTitle>
            <Prose>
              <p>
                This is one of the most important parts of the comparison. Some
                users reported that TiviMate did not work with their provider and
                asked about free alternatives. If TiviMate is not connecting, try
                these checks before switching apps.
              </p>
            </Prose>
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {TIVIMATE_CHECKS.map((item, index) => (
                <div key={item.title} className="glass-card flex flex-col p-4 sm:p-5">
                  <span className="text-[12px] font-bold tracking-[0.08em] text-gradient-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-[15px] font-bold text-[#0B0E2C] sm:text-[16px]">
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
              Does TiviMate Work Better Than Sky Glass IPTV on{" "}
              <span className="text-gradient-brand">Firestick?</span>
            </SectionTitle>
            <div className="glass-card p-5 sm:p-6">
              <Prose>
                <p>
                  There is no universal winner. The result depends on the exact
                  app, provider, and device setup.
                </p>
                <p>
                  TiviMate is designed for Android TV devices and may be
                  suitable for a compatible Fire TV setup. However, you should
                  confirm that the version you install is compatible with your
                  device and that your provider supports the required connection
                  method.
                </p>
                <p>Consider these points:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Choose TiviMate if you want playlist organisation, a
                    customisable EPG and supported advanced features.
                  </li>
                  <li>
                    Choose the provider-recommended Sky Glass IPTV app if you
                    want to follow the provider’s specific setup instructions.
                  </li>
                  <li>
                    If TiviMate fails to connect, verify the credentials and
                    supported connection method before concluding that the
                    player is at fault.
                  </li>
                  <li>
                    If an app is not available through your device’s official
                    store, check the provider’s current instructions and verify
                    the application’s source before installing it.
                  </li>
                </ul>
                <p>
                  Neither player can guarantee smooth playback. Internet
                  quality, device performance, playlist quality, and service
                  availability all affect the viewing experience. See also our{" "}
                  <Link
                    href="/sky-glass-iptv-keeps-buffering/"
                    className="font-semibold text-[#0B0E2C] underline-offset-2 hover:underline"
                  >
                    buffering fixes guide
                  </Link>
                  .
                </p>
              </Prose>
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Which IPTV Player Should You{" "}
              <span className="text-gradient-brand">Choose?</span>
            </SectionTitle>
            <p className="text-[14px] leading-[1.65] text-[#5C607A] sm:text-[15px]">
              Your best option depends on what matters most to you. If you are
              unsure, first confirm compatibility with your provider. There is
              little benefit in paying for a player or subscription before
              establishing that your existing setup will work.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              <div className="glass-card p-5 sm:p-6">
                <h3 className="text-[16px] font-bold text-[#0B0E2C]">
                  Choose Sky Glass IPTV if:
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {CHOOSE_SKY.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[13px] leading-snug text-[#5C607A] sm:text-[14px]"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#E91E8C]"
                        strokeWidth={2}
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-card p-5 sm:p-6">
                <h3 className="text-[16px] font-bold text-[#0B0E2C]">
                  Choose TiviMate if:
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {CHOOSE_TIVIMATE.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[13px] leading-snug text-[#5C607A] sm:text-[14px]"
                    >
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
            </div>
          </section>

          <section className="space-y-5 border-t border-[#0B0E2C]/10 pt-10 sm:pt-12">
            <SectionTitle>
              Frequently Asked{" "}
              <span className="text-gradient-brand">Questions</span>
            </SectionTitle>
            <FaqAccordionList faqs={FAQS} defaultOpenId="better" />
          </section>

          <section className="space-y-4">
            <SectionTitle>
              <span className="text-gradient-brand">Conclusion</span>
            </SectionTitle>
            <div className="glass-card space-y-3 p-5 sm:space-y-4 sm:p-6">
              <Prose>
                <p>
                  Sky Glass IPTV and TiviMate serve different needs. A
                  provider-recommended app can be the simplest route to getting
                  started, while TiviMate offers more control over playlists and
                  the viewing interface for compatible devices and services.
                </p>
                <p>
                  If TiviMate is not working with your provider, check the
                  credentials, connection method and device compatibility before
                  changing players. If the provider recommends its own app,
                  start there and ask support to confirm the correct setup.
                </p>
                <p>
                  For more information about your available service and setup
                  options, visit the Sky Glass IPTV website and confirm which
                  applications are supported for your account.
                </p>
              </Prose>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={siteRoutes.plans}
                className="inline-flex min-h-[48px] items-center justify-center rounded-[20px] bg-gradient-brand px-5 py-3 text-center text-[14px] font-semibold text-white sm:px-6"
              >
                View Sky Glass IPTV plans
              </Link>
              <a
                href={whatsappUrl("Help choosing Sky Glass IPTV or TiviMate")}
                target="_blank"
                rel="noopener noreferrer"
                className="border-gradient-brand inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[20px] px-5 py-3 text-center text-[14px] font-semibold sm:px-6"
              >
                <Headphones
                  className="h-4 w-4 shrink-0 text-[#7B2FFF]"
                  strokeWidth={2}
                  aria-hidden
                />
                <span className="text-gradient-brand">Ask which player to use</span>
              </a>
            </div>
          </section>
        </div>
      </Container>
    </article>
  );
}
