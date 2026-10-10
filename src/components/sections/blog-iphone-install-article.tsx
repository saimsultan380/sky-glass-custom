import type { ReactNode } from "react";
import Link from "next/link";
import {
  Headphones,
  KeyRound,
  Smartphone,
  Tablet,
  Tv,
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

const POST = getBlogPost("how-to-install-sky-glass-iptv-on-iphone")!;

const MEANINGS = [
  "An IPTV service with a Sky Glass-style interface",
  "A branded IPTV application",
  "A Sky Glass IPTV player",
  "An IPTV subscription that works through another player",
  "The actual Sky Glass television service",
] as const;

const PROVIDER_CHECK = [
  "A specific IPTV player",
  "An M3U playlist",
  "Xtream Codes",
  "A username and password",
  "A server or portal address",
  "A provider-specific application",
] as const;

const INSTALL_STEPS = [
  {
    title: "Check your IPTV provider",
    body: "Before downloading anything, check your IPTV subscription information. Your provider may tell you to use a specific IPTV player, an M3U playlist, Xtream Codes, a username and password, a server or portal address, or a provider-specific application. Do not assume that an app used on your Firestick will also work on iPhone — Firestick and iPhone apps are built for different operating systems.",
  },
  {
    title: "Open the App Store",
    body: "Open the App Store on your iPhone. Tap Search and enter the exact name of the IPTV player recommended by your provider. Apple shows information such as the developer, compatibility, ratings, privacy information, and supported devices on an app’s App Store page. If your provider has a genuine iOS version of its Sky Glass IPTV app, search for that exact application.",
  },
  {
    title: "Install the compatible player",
    body: "Once you find the correct application, check the developer name before installing it. Tap Get and complete Face ID, Touch ID, or Apple Account authentication if requested. The application will then appear on your iPhone or in the App Library. Avoid downloading an unknown IPA file or configuration profile simply because a website claims it is the “Sky Glass iPhone app.”",
  },
  {
    title: "Add your IPTV account",
    body: "Open the IPTV application after installation. Depending on the player, you may see options such as Xtream Codes API, M3U Playlist, or a provider-specific login screen. Enter the information supplied with your IPTV subscription. If you have an M3U URL, enter the complete URL exactly as provided. For Xtream Codes you may need username, password, and server URL.",
  },
  {
    title: "Allow the playlist to load",
    body: "After submitting your details, give the application some time to load the available content. Depending on your IPTV service, you may see categories such as Live TV, Movies, Series, Catch-up, Favourites, or TV Guide / EPG. An IPTV player itself does not automatically provide channels — it connects to your playlist or provider account.",
  },
] as const;

const NOT_IN_STORE = [
  {
    title: "The app has a different name",
    body: "The IPTV provider may use a generic player or another branded application on iPhone. Ask the provider which iOS player is compatible with your subscription.",
    color: "#FF6B2C",
  },
  {
    title: "The app is not available for iPhone",
    body: "Some IPTV applications are designed specifically for Android, Fire TV, or other platforms. In that case, you will need an iPhone-compatible IPTV player that supports the login method supplied by your provider.",
    color: "#E91E8C",
  },
  {
    title: "The application is region restricted",
    body: "App availability can vary by country or region. Do not change your Apple Account region simply to install an unknown IPTV application. Check with the developer or provider first.",
    color: "#7B2FFF",
  },
] as const;

const FIXES = [
  {
    title: "IPTV app will not install",
    body: "Check that your iPhone meets the app’s compatibility requirements. Apple displays compatibility information on App Store listings. Also check your available storage and iOS version.",
    color: "#FF6B2C",
  },
  {
    title: "IPTV login does not work",
    body: "Check every field carefully. A single incorrect character in the username, password, or server address can prevent the playlist from loading. If the same credentials work on another device but not your iPhone, check that you have selected the correct login method in the iPhone player.",
    color: "#E91E8C",
  },
  {
    title: "Playlist loads but channels do not play",
    body: "Check whether every channel fails or only some, whether the subscription is active, whether the player supports the stream format, whether your provider has an outage, and whether another compatible player can connect. If only one application has the problem, the issue may be with the player rather than your account.",
    color: "#7B2FFF",
  },
  {
    title: "IPTV keeps buffering",
    body: "Test another video application on your iPhone. Restart the IPTV app and iPhone, switch between Wi-Fi and mobile data for testing, move closer to your Wi-Fi router, and check whether other devices are using the connection heavily. Contact your provider if only its streams are affected.",
    color: "#2563EB",
  },
  {
    title: "EPG is not updating",
    body: "If live channels work but the TV guide is empty or outdated, check the EPG settings inside the IPTV player. Some players require the EPG source to be configured separately. If the provider supplies an EPG URL, confirm that it is still active.",
    color: "#FF6B2C",
  },
] as const;

const COMPARE_ROWS = [
  { feature: "Operating system", iphone: "iOS", firestick: "Fire OS" },
  {
    feature: "Normal app source",
    iphone: "App Store",
    firestick: "Amazon Appstore",
  },
  {
    feature: "APK installation",
    iphone: "No",
    firestick: "Possible on supported setups",
  },
  {
    feature: "IPTV player",
    iphone: "iOS-compatible player",
    firestick: "Fire TV-compatible player",
  },
  {
    feature: "M3U support",
    iphone: "Depends on player",
    firestick: "Depends on player",
  },
  {
    feature: "Xtream Codes",
    iphone: "Depends on player",
    firestick: "Depends on player",
  },
  {
    feature: "Provider login",
    iphone: "Usually required",
    firestick: "Usually required",
  },
] as const;

const FAQS: FaqItem[] = [
  {
    id: "install-iphone",
    q: "How do I install Sky Glass IPTV on my iPhone?",
    a: "First check which iOS app or IPTV player your provider supports. Download the compatible app from the App Store, open it, and enter your IPTV username and password, Xtream Codes, or M3U playlist details.",
  },
  {
    id: "can-get",
    q: "Can I get Sky Glass IPTV on an iPhone?",
    a: "Yes, you may be able to use Sky Glass IPTV on an iPhone if your IPTV provider supports iOS. You can either use its dedicated iPhone app or a compatible IPTV player that accepts your subscription details.",
  },
  {
    id: "which-app",
    q: "Which app do I need for Sky Glass IPTV on iPhone?",
    a: "The required app depends on your IPTV provider. Some services provide their own application, while others work through a compatible IPTV player. Ask your provider which iPhone app supports your subscription before installing one.",
  },
  {
    id: "add-player",
    q: "How do I add Sky Glass IPTV to an IPTV player on iPhone?",
    a: "Open your compatible IPTV player and select the appropriate option for your subscription. Depending on the player, you may need to enter Xtream Codes, an M3U playlist URL, or your IPTV username, password, and server details.",
  },
  {
    id: "not-in-store",
    q: "Why can’t I find Sky Glass IPTV in the App Store?",
    a: "The application may use a different name, may not have a dedicated iPhone version, or your provider may expect you to use another IPTV player. Check your provider’s current instructions to find the correct iOS-compatible application.",
  },
  {
    id: "another-iphone",
    q: "Can I use my Sky Glass IPTV subscription on another iPhone?",
    a: "This depends on your IPTV provider’s device policy. Some subscriptions allow multiple supported devices, while others limit how many devices can use an account at the same time. Check your subscription terms before adding another iPhone.",
  },
  {
    id: "not-working",
    q: "Why is Sky Glass IPTV not working on my iPhone?",
    a: "Check your internet connection, IPTV login details, and subscription status first. If the account is active, restart the IPTV app and try another channel. If other channels and apps work normally, contact your IPTV provider to check whether there is a service or playlist problem.",
  },
  {
    id: "channels",
    q: "Why are my Sky Glass IPTV channels not loading?",
    a: "If the IPTV app opens but channels do not load, check your playlist or Xtream Codes details and make sure your subscription is active. Testing another channel can also show whether the problem affects the whole service or only specific streams.",
  },
  {
    id: "buffering",
    q: "Why is Sky Glass IPTV buffering on my iPhone?",
    a: "Buffering can be caused by a weak internet connection, network congestion, the IPTV player, or the stream itself. Test another streaming service, restart the IPTV app, and try a different network if possible. If only IPTV buffers, contact your provider.",
  },
  {
    id: "ipad",
    q: "Can I use Sky Glass IPTV on an iPad?",
    a: "If the IPTV application supports iPadOS, you can use the service on an iPad as well. Check the application’s App Store listing for iPhone and iPad compatibility before installing it.",
  },
  {
    id: "both-devices",
    q: "Can I use the same Sky Glass IPTV account on iPhone and Firestick?",
    a: "Possibly, but it depends on your provider’s device and connection policy. If your subscription permits multiple devices, you may be able to use the same account on both. Some providers restrict simultaneous connections.",
  },
  {
    id: "apk",
    q: "Can I install a Sky Glass IPTV APK on iPhone?",
    a: "No. APK files are designed for Android-based devices and cannot be installed normally on an iPhone. For iPhone, use an iOS-compatible application or IPTV player available through an appropriate distribution method.",
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

export function BlogIphoneInstallArticle() {
  return (
    <article className="relative bg-transparent pt-4 sm:pt-8 lg:pt-10">
      <Container className="pb-10 sm:pb-16 lg:pb-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#5C607A] sm:text-[13px]">
            Installation guide
          </p>
          <h1 className="mt-2 text-[26px] font-bold leading-[1.18] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-[38px] sm:leading-[1.12] lg:text-[42px]">
            How to Install or Get Sky Glass IPTV on{" "}
            <span className="text-gradient-brand">iPhone in 3 Minutes?</span>
          </h1>
          <p className="mt-3 text-[14px] leading-[1.65] text-[#5C607A] sm:mt-4 sm:text-base sm:leading-[1.75]">
            {POST.description}
          </p>

          <div className="mt-6 overflow-hidden rounded-[20px] sm:mt-8">
            <BlogCoverImage
              src={POST.image}
              alt={POST.imageAlt}
              priority
              className="rounded-[20px]"
            />
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-3xl space-y-10 sm:mt-12 sm:space-y-14">
          <Prose>
            <p>
              Want to get Sky Glass IPTV on your iPhone and watch your IPTV
              channels without using a Firestick or another streaming device?
              The setup is straightforward when you have the correct IPTV app
              and login details.
            </p>
            <p>
              Start by checking which Sky Glass IPTV app or IPTV player your
              provider supports on iPhone. If the recommended app is available
              in the App Store, install it, enter your IPTV username and
              password or add your M3U or Xtream Codes details, and wait for
              your channels and content to load.
            </p>
            <p>
              If you cannot find the Sky Glass IPTV app in the App Store, do not
              worry. Your IPTV subscription may work through another compatible
              iPhone IPTV player. This guide explains the easiest ways to get
              Sky Glass IPTV working on iPhone, including how to choose the
              right player, add your subscription, and fix common problems such
              as login errors, missing channels, buffering, and an EPG that does
              not update.
            </p>
          </Prose>

          <section className="space-y-4">
            <SectionTitle>
              Can You Get Sky Glass IPTV on{" "}
              <span className="text-gradient-brand">iPhone?</span>
            </SectionTitle>
            <div className="glass-card p-5 sm:p-6">
              <Prose>
                <p>
                  Yes, you may be able to use a Sky Glass-style IPTV service on
                  an iPhone, but the exact method depends on the application and
                  IPTV provider.
                </p>
                <p>
                  The first thing to check is whether your provider has a
                  dedicated Sky Glass IPTV iPhone app. If it does, search for
                  the application by its exact name in the Apple App Store.
                </p>
                <p>
                  Apple’s normal method for installing iPhone applications is
                  through the App Store. You open the App Store, search for the
                  application, select it, and tap Get to install it.
                </p>
                <p>
                  However, you may not find an app called exactly Sky Glass
                  IPTV. This does not necessarily mean your IPTV service cannot
                  work on iPhone. Your provider may use a separate IPTV player
                  that accepts your subscription details.
                </p>
              </Prose>
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              What Is Sky Glass IPTV on{" "}
              <span className="text-gradient-brand">iPhone?</span>
            </SectionTitle>
            <p className="text-[14px] leading-[1.65] text-[#5C607A] sm:text-[15px]">
              The terminology can be confusing. When people search for Sky Glass
              IPTV, they can be referring to:
            </p>
            <ul className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
              {MEANINGS.map((item) => (
                <li
                  key={item}
                  className="glass-card flex items-start gap-2.5 p-3.5 sm:p-4"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E91E8C]" />
                  <span className="text-[13px] font-medium leading-snug text-[#0B0E2C] sm:text-[14px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="glass-card p-5 sm:p-6">
              <Prose>
                <p>
                  These are not necessarily the same thing. Reddit discussions
                  are useful here because users who have seen the Sky Glass
                  interface on Firestick often describe it as a re-skinned IPTV
                  application rather than the actual Sky Glass TV platform. Some
                  users specifically mention IPTV Smarters or XCIPTV-style
                  applications underneath the branding.
                </p>
                <p>
                  Therefore, if you have a Sky Glass IPTV subscription, ask your
                  provider which iPhone application it supports before
                  installing a random app.
                </p>
              </Prose>
            </div>
          </section>

          <section className="space-y-5">
            <SectionTitle>
              How to Install Sky Glass IPTV on{" "}
              <span className="text-gradient-brand">iPhone</span>
            </SectionTitle>
            <Prose>
              <p>
                The easiest method is to use an iPhone-compatible application
                available through the App Store.
              </p>
            </Prose>

            <div className="glass-card p-4 sm:p-5">
              <p className="text-[13px] font-semibold text-[#0B0E2C] sm:text-[14px]">
                Your provider may tell you to use:
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {PROVIDER_CHECK.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-[14px] border border-[#0B0E2C]/10 bg-white/70 px-3 py-2 text-[12px] font-semibold text-[#0B0E2C] sm:text-[13px]"
                  >
                    <KeyRound
                      className="h-3.5 w-3.5 text-[#7B2FFF]"
                      strokeWidth={2}
                      aria-hidden
                    />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {INSTALL_STEPS.map((step, index) => (
                <div
                  key={step.title}
                  className="glass-card flex gap-3.5 p-4 sm:gap-5 sm:p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(123,47,255,0.12)] text-[13px] font-bold text-[#7B2FFF] sm:h-10 sm:w-10 sm:text-[14px]">
                    {index + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[15px] font-bold text-[#0B0E2C] sm:text-[16px]">
                      Step {index + 1}: {step.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-[1.65] text-[#5C607A] sm:text-[14px] sm:leading-[1.75]">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Can You Install the Sky Glass APK on{" "}
              <span className="text-gradient-brand">iPhone?</span>
            </SectionTitle>
            <div className="glass-card flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:gap-5 sm:p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[rgba(255,107,44,0.12)] text-[#FF6B2C]">
                <Smartphone className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </span>
              <Prose>
                <p>
                  No. An Android APK designed for Firestick or Android devices
                  cannot simply be installed on an iPhone. This is one of the
                  most important differences between Sky Glass IPTV Firestick
                  and Sky Glass IPTV iPhone setups.
                </p>
                <p>
                  If you previously used a Sky Glass APK on a Firestick, do not
                  download the same APK to your iPhone. iOS uses its own
                  application format and security system. Instead, look for an
                  iOS-compatible version of the application or use an IPTV
                  player that supports your subscription.
                </p>
              </Prose>
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              What If Sky Glass IPTV Is Not in the{" "}
              <span className="text-gradient-brand">App Store?</span>
            </SectionTitle>
            <p className="text-[14px] leading-[1.65] text-[#5C607A] sm:text-[15px]">
              If you search for the Sky Glass IPTV app and cannot find the exact
              application, there are several possibilities.
            </p>
            <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
              {NOT_IN_STORE.map((item) => (
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
              Can You Sideload Sky Glass IPTV on{" "}
              <span className="text-gradient-brand">iPhone?</span>
            </SectionTitle>
            <div className="glass-card p-5 sm:p-6">
              <Prose>
                <p>
                  It depends on your location and the way the application is
                  distributed. Apple currently supports alternative app
                  distribution in the European Union, Japan and Brazil, with the
                  exact options varying by region. In the European Union, Apple
                  also supports app installation directly from eligible
                  developer websites.
                </p>
                <p>
                  That does not mean every IPTV APK or IPA found online can be
                  installed safely. If you are outside an eligible region, the
                  normal App Store route remains the practical option.
                </p>
                <p>
                  For most users, the safer approach is straightforward: find a
                  legitimate iOS-compatible IPTV player in the App Store and use
                  the login or playlist details supplied by your IPTV provider.
                </p>
              </Prose>
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Sky Glass IPTV Not Working on iPhone?{" "}
              <span className="text-gradient-brand">Try These Fixes</span>
            </SectionTitle>
            <Prose>
              <p>
                If your Sky Glass IPTV player opens but does not work correctly,
                identify where the problem occurs.
              </p>
            </Prose>
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {FIXES.map((fix) => (
                <div key={fix.title} className="glass-card flex flex-col p-4 sm:p-5">
                  <span
                    className="h-1 w-10 rounded-full"
                    style={{ backgroundColor: fix.color }}
                    aria-hidden
                  />
                  <h3 className="mt-3 text-[15px] font-bold text-[#0B0E2C] sm:text-[16px]">
                    {fix.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[13px] leading-[1.65] text-[#5C607A] sm:text-[14px]">
                    {fix.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Sky Glass IPTV on iPhone vs{" "}
              <span className="text-gradient-brand">Firestick</span>
            </SectionTitle>
            <p className="text-[14px] leading-[1.65] text-[#5C607A] sm:text-[15px]">
              The basic idea is similar, but the installation process is
              different. The biggest mistake is trying to copy the Firestick
              installation method directly onto an iPhone.
            </p>
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] text-left">
                  <thead>
                    <tr className="border-b border-[#0B0E2C]/10 bg-[rgba(11,14,44,0.02)]">
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Feature
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        <span className="inline-flex items-center gap-1.5">
                          <Smartphone className="h-3.5 w-3.5 text-[#E91E8C]" />
                          iPhone
                        </span>
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        <span className="inline-flex items-center gap-1.5">
                          <Tv className="h-3.5 w-3.5 text-[#7B2FFF]" />
                          Firestick
                        </span>
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
                          {row.iphone}
                        </td>
                        <td className="px-4 py-3 text-[13px] text-[#5C607A] sm:px-5 sm:text-[14px]">
                          {row.firestick}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-[14px] leading-[1.65] text-[#5C607A] sm:text-[15px]">
              If you previously installed Sky Glass IPTV on Firestick, you may
              need a different player for your iPhone. See our{" "}
              <Link
                href="/how-to-install-sky-glass-on-firestick/"
                className="font-semibold text-[#0B0E2C] underline-offset-2 hover:underline"
              >
                Firestick install guide
              </Link>{" "}
              if you still need that setup.
            </p>
          </section>

          <section className="space-y-5 border-t border-[#0B0E2C]/10 pt-10 sm:pt-12">
            <SectionTitle>
              Frequently Asked{" "}
              <span className="text-gradient-brand">Questions</span>
            </SectionTitle>
            <FaqAccordionList faqs={FAQS} defaultOpenId="install-iphone" />
          </section>

          <section className="space-y-4">
            <SectionTitle>
              <span className="text-gradient-brand">Conclusion</span>
            </SectionTitle>
            <div className="glass-card space-y-3 p-5 sm:space-y-4 sm:p-6">
              <Prose>
                <p>
                  Getting Sky Glass IPTV on iPhone is straightforward when you
                  have the correct app and IPTV details. Start by checking which
                  iPhone-compatible app or Sky Glass IPTV player your provider
                  recommends, then install it and add your subscription using
                  the provided username and password, M3U playlist, or Xtream
                  Codes details.
                </p>
                <p>
                  If you cannot find the exact Sky Glass IPTV app in the App
                  Store, check with your provider for the recommended iPhone
                  IPTV player. Once your account is added, your available live
                  TV, movies, series, and other content should appear inside the
                  app.
                </p>
                <p>
                  If the setup does not work, check your login details, internet
                  connection, playlist or subscription status first. These
                  simple checks can resolve many common IPTV problems on iPhone.
                </p>
                <p>
                  With the right app and account details, you can enjoy Sky
                  Glass IPTV on your iPhone without needing a Firestick or
                  another streaming device.
                </p>
              </Prose>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={siteRoutes.installation}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[20px] bg-gradient-brand px-5 py-3 text-center text-[14px] font-semibold text-white sm:px-6"
              >
                <Tablet className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                Full installation guide
              </Link>
              <a
                href={whatsappUrl("Help installing Sky Glass IPTV on iPhone")}
                target="_blank"
                rel="noopener noreferrer"
                className="border-gradient-brand inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[20px] px-5 py-3 text-center text-[14px] font-semibold sm:px-6"
              >
                <Headphones
                  className="h-4 w-4 shrink-0 text-[#7B2FFF]"
                  strokeWidth={2}
                  aria-hidden
                />
                <span className="text-gradient-brand">Ask for install help</span>
              </a>
            </div>
          </section>
        </div>
      </Container>
    </article>
  );
}
