import type { ReactNode } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Headphones,
  KeyRound,
  MonitorPlay,
  ShieldAlert,
  Tv,
  Wifi,
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

const POST = getBlogPost("how-to-install-sky-glass-on-firestick")!;

const NEED_ITEMS = [
  "An Amazon Firestick or compatible Fire TV device",
  "A stable internet connection",
  "The correct Sky Glass IPTV application or installation method",
  "An active IPTV account if the application requires one",
  "Your username and password, if provided by your IPTV service",
  "A compatible IPTV playlist or login method, where required",
] as const;

const INSTALL_STEPS = [
  {
    title: "Connect your Firestick",
    body: "Connect your Firestick to an available HDMI port on your television and make sure it has power. Select the correct HDMI input on your TV, complete the normal Firestick setup, and connect it to your Wi-Fi network. Before installing anything, make sure other streaming apps can connect to the internet — this helps rule out a network problem later.",
  },
  {
    title: "Search for the required IPTV app",
    body: "From the Fire TV home screen, open search and look for the IPTV application supplied or recommended by your provider. If the Sky Glass IPTV app is available through the Amazon Appstore, install the correct application directly. You may not find an app literally called “Sky Glass” — that is normal when the service uses a provider-branded player or a different IPTV app under a Sky Glass-style interface.",
  },
  {
    title: "Use the provider’s installation method",
    body: "If the application is not available through the Amazon Appstore, your provider may give you instructions for sideloading it. Sideloading means installing an app outside the normal Appstore process. Some users use Downloader for this type of install, but the exact steps and source depend on the application. Use only current details from your provider — old codes from random websites or Reddit posts may no longer work.",
  },
] as const;

const SIDELOAD_STEPS = [
  "Install a trusted downloading tool supported by your Firestick.",
  "Open the tool.",
  "Enter the current download address supplied by your provider.",
  "Download the application.",
  "Follow the Fire TV installation prompt.",
  "Open the newly installed application.",
  "Enter your IPTV login details if requested.",
] as const;

const LOGIN_ITEMS = [
  "Username",
  "Password",
  "Server details",
  "M3U playlist",
  "Xtream Codes information",
] as const;

const FIXES = [
  {
    title: "App will not install",
    body: "Check that the application is compatible with your Firestick. If you are sideloading, confirm the installation source is current and came from your provider. Also check available storage and restart the Firestick before trying again.",
    color: "#FF6B2C",
  },
  {
    title: "App keeps loading",
    body: "If the app opens but never reaches the main screen, test another streaming application. If other apps work normally, the problem may be the IPTV application, account, or provider — not your whole internet connection. Restart the app and Firestick, then try again.",
    color: "#E91E8C",
  },
  {
    title: "Login is not working",
    body: "Check the username and password carefully, and watch for extra spaces. If the details are definitely correct but the account is rejected, contact the IPTV provider. A provider-side account or server problem cannot normally be fixed by changing a Firestick setting.",
    color: "#7B2FFF",
  },
  {
    title: "Channels are not loading",
    body: "If the menu opens but live TV or VOD does not load, check whether the problem affects everything or only certain channels. If only particular streams fail, the issue may not be your Firestick. Also check whether your subscription or playlist is still active.",
    color: "#2563EB",
  },
  {
    title: "Buffering",
    body: "Restart the Firestick and router, test another app, check whether other devices are using heavy bandwidth, and move the Firestick away from Wi-Fi interference where practical. If normal streaming apps work while IPTV keeps buffering, contact the provider before assuming the Firestick is faulty.",
    color: "#FF6B2C",
  },
  {
    title: "Works on another TV",
    body: "Some users report a Firestick working on other televisions but failing on a particular display. Check the HDMI connection, power supply, and TV input first. If the same Firestick works elsewhere, the problem may involve that TV, HDMI link, or setup — not the IPTV account itself.",
    color: "#E91E8C",
  },
] as const;

const FAQS: FaqItem[] = [
  {
    id: "install-firestick",
    q: "How do I install Sky Glass IPTV on Firestick?",
    a: "Install the compatible application supplied by your IPTV provider. If it is not available through the Amazon Appstore, follow the provider’s current sideloading instructions and then enter your supplied login details.",
  },
  {
    id: "install-app",
    q: "How do I install the Sky Glass app on Firestick?",
    a: "First, confirm which Sky Glass app you mean. A Sky Glass-style IPTV application is different from the official Sky Glass TV platform. If it is a provider application, use the current installation method supplied by that provider.",
  },
  {
    id: "fire-tv",
    q: "Does Sky Glass IPTV work on Fire TV?",
    a: "It can, provided the particular IPTV application is compatible with your Fire TV device and your provider supports that setup. Compatibility can vary between Fire OS versions and applications.",
  },
  {
    id: "subscription",
    q: "Do I need an IPTV subscription?",
    a: "If the application requires an IPTV account, yes. Installing an IPTV player does not automatically provide a subscription or channel service.",
  },
  {
    id: "appstore",
    q: "Why can’t I find Sky Glass IPTV in the Amazon Appstore?",
    a: "The Sky Glass-style IPTV application may not be distributed through the Amazon Appstore under that name. Your provider may instead supply a different compatible application or sideloading method.",
  },
  {
    id: "login-fail",
    q: "Why is my Sky Glass IPTV login not working?",
    a: "Check your username, password, and any required server or playlist information. If the details are correct but the account still fails, contact your provider to check the account or service.",
  },
  {
    id: "buffering",
    q: "Why is Sky Glass IPTV buffering on Firestick?",
    a: "Check your internet connection, restart the Firestick and router, and test other streaming applications. If the rest of your connection works normally, the issue may be specific to the IPTV service or stream.",
  },
  {
    id: "hdmi",
    q: "Can I use Firestick with a Sky Glass TV?",
    a: "Yes. Connect the Firestick to an HDMI port on the Sky Glass TV and switch to the appropriate HDMI input. The Firestick then operates as the external streaming device.",
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

export function BlogFirestickInstallArticle() {
  return (
    <article className="relative bg-transparent pt-4 sm:pt-8 lg:pt-10">
      <Container className="pb-10 sm:pb-16 lg:pb-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#5C607A] sm:text-[13px]">
            Installation guide
          </p>
          <h1 className="mt-2 text-[26px] font-bold leading-[1.18] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-[38px] sm:leading-[1.12] lg:text-[42px]">
            How to Install Sky Glass IPTV on{" "}
            <span className="text-gradient-brand">Firestick or Fire TV?</span>
          </h1>
          <p className="mt-3 text-[14px] leading-[1.65] text-[#5C607A] sm:mt-4 sm:text-base sm:leading-[1.75]">
            {POST.description}
          </p>

          <div className="mt-6 sm:mt-8 overflow-hidden rounded-[20px]">
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
              If you have searched for how to install Sky Glass on Firestick, you
              may have noticed that the instructions online are not always clear.
              This is mainly because “Sky Glass” can refer to two different
              things.
            </p>
            <p>
              The official Sky Glass TV is a television platform, while the Sky
              Glass IPTV app commonly discussed by Firestick users is generally a
              provider-branded IPTV interface.
            </p>
            <p>
              If you are trying to use Sky Glass IPTV on an Amazon Firestick or
              Fire TV, this guide explains what you need, how the installation
              normally works, how to sign in, and what to do when the app does
              not load properly.
            </p>
          </Prose>

          <section className="space-y-4">
            <SectionTitle>
              Can You Install Sky Glass IPTV on{" "}
              <span className="text-gradient-brand">Firestick?</span>
            </SectionTitle>
            <div className="glass-card p-5 sm:p-6">
              <Prose>
                <p>
                  Yes, if the Sky Glass IPTV app supplied by your IPTV provider
                  is compatible with your Firestick or Fire TV.
                </p>
                <p>
                  There is an important distinction here. You are not installing
                  the operating system of an actual Sky Glass television onto
                  your Firestick. Instead, you are installing an IPTV application
                  or player that may use a Sky Glass-style interface.
                </p>
                <p>
                  This distinction also appears in Reddit discussions. Users
                  asking how to get “Sky Glass” on a Firestick are often told
                  that it is a branded IPTV application provided by an IPTV
                  service.
                </p>
                <p>
                  The actual Sky Glass television platform is different. Sky
                  Community users have explained that Sky Glass is a relatively
                  closed system without a conventional app store, while a
                  third-party device such as a Firestick can be connected through
                  HDMI to run apps that are available on that device.
                </p>
              </Prose>
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              What You Need Before{" "}
              <span className="text-gradient-brand">Installing</span>
            </SectionTitle>
            <p className="text-[14px] leading-[1.65] text-[#5C607A] sm:text-[15px]">
              Before you start, have these things ready:
            </p>
            <ul className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
              {NEED_ITEMS.map((item) => (
                <li
                  key={item}
                  className="glass-card flex items-start gap-2.5 p-3.5 sm:p-4"
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
            <div className="glass-card flex items-start gap-3 p-4 ring-1 ring-[#FF6B2C]/20 sm:p-5">
              <ShieldAlert
                className="mt-0.5 h-5 w-5 shrink-0 text-[#FF6B2C]"
                strokeWidth={2}
                aria-hidden
              />
              <p className="text-[13px] leading-[1.65] text-[#5C607A] sm:text-[14px]">
                The exact installation method can vary because Sky Glass IPTV may
                be a provider-branded application rather than one universal app.
                If you received a code, APK, URL, or other install details from
                your provider, use those. Do not use an old code found on a
                random website or Reddit post — installation details can change.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <SectionTitle>
              How to Download &amp; Install Sky Glass on{" "}
              <span className="text-gradient-brand">Firestick?</span>
            </SectionTitle>
            <Prose>
              <p>
                The first step is to check whether the required app is already
                available through your Fire TV interface.
              </p>
              <p>
                On supported Fire TV devices, apps can be installed through the
                Amazon Appstore. Fire TV uses Fire OS, which supports
                Android-based applications, although compatibility can vary
                between devices and Fire OS versions.
              </p>
            </Prose>

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
              How to Install Using{" "}
              <span className="text-gradient-brand">Sideloading?</span>
            </SectionTitle>
            <Prose>
              <p>
                If your provider has supplied a compatible APK and recommends
                sideloading, the general process is:
              </p>
            </Prose>
            <ol className="glass-card space-y-0 divide-y divide-[#0B0E2C]/8 overflow-hidden p-0">
              {SIDELOAD_STEPS.map((step, index) => (
                <li
                  key={step}
                  className="flex items-start gap-3 px-4 py-3.5 sm:gap-4 sm:px-5 sm:py-4"
                >
                  <span className="mt-0.5 text-[12px] font-bold tracking-[0.08em] text-gradient-brand sm:text-[13px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[13px] font-medium leading-snug text-[#0B0E2C] sm:text-[14px]">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
            <Prose>
              <p>
                Amazon’s own Fire TV documentation confirms that applications can
                be installed outside the Appstore through sideloading. Exact Fire
                TV menus can vary by software version and device, and
                developer-related options can differ between Fire TV versions.
              </p>
              <p>
                For that reason, follow the current instructions for your
                particular Firestick rather than relying on an old step-by-step
                guide.
              </p>
            </Prose>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              How to Log In to{" "}
              <span className="text-gradient-brand">Sky Glass IPTV?</span>
            </SectionTitle>
            <Prose>
              <p>
                Installing the Sky Glass IPTV player is only one part of the
                setup. Your IPTV provider may give you login information such as:
              </p>
            </Prose>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {LOGIN_ITEMS.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-[14px] border border-[#0B0E2C]/10 bg-white/70 px-3 py-2 text-[12px] font-semibold text-[#0B0E2C] sm:text-[13px]"
                >
                  <KeyRound
                    className="h-3.5 w-3.5 text-[#E91E8C]"
                    strokeWidth={2}
                    aria-hidden
                  />
                  {item}
                </span>
              ))}
            </div>
            <div className="glass-card p-5 sm:p-6">
              <Prose>
                <p>
                  The exact login method depends on the application. Some Reddit
                  users who installed a Sky Glass-style IPTV app reported
                  reaching a username and password screen after installation. If
                  your application asks for credentials, use the details supplied
                  by your provider.
                </p>
                <p>
                  Do not assume that an IPTV player automatically includes
                  channels. The player and the IPTV service supplying the content
                  can be separate. Once you have entered the correct information,
                  allow the app a moment to load your live TV, movies, TV shows,
                  or other available sections.
                </p>
              </Prose>
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Sky Glass IPTV Not Working?{" "}
              <span className="text-gradient-brand">Try These Fixes</span>
            </SectionTitle>
            <Prose>
              <p>
                Installation is usually not the only problem. Recent Reddit
                discussions show users reporting buffering, login problems, apps
                failing to load, and Firesticks behaving differently on different
                TVs.
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
              Can You Use a Firestick With a{" "}
              <span className="text-gradient-brand">Sky Glass TV?</span>
            </SectionTitle>
            <div className="glass-card flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:gap-5 sm:p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[rgba(37,99,235,0.1)] text-[#2563EB]">
                <Tv className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </span>
              <Prose>
                <p>
                  Yes. A Firestick can be connected to a Sky Glass television
                  through HDMI and used as a separate external streaming device.
                </p>
                <p>
                  This can be particularly useful because the Sky Glass platform
                  is not an open smart-TV system with a conventional app store.
                  Sky Community discussions specifically mention using
                  third-party devices such as a Firestick to access additional
                  apps.
                </p>
                <p>
                  In this situation, the Firestick handles the application while
                  the Sky Glass television acts as the display. So if your goal
                  is IPTV on a Sky Glass TV via Firestick, you do not necessarily
                  need to install anything directly into the Sky Glass TV itself.
                </p>
              </Prose>
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Sky Glass IPTV vs{" "}
              <span className="text-gradient-brand">Sky Glass IPTV Player</span>
            </SectionTitle>
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              <div className="glass-card p-5 sm:p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(233,30,140,0.1)] text-[#E91E8C]">
                  <Wifi className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="mt-3 text-[16px] font-bold text-[#0B0E2C]">
                  Sky Glass IPTV
                </h3>
                <p className="mt-2 text-[13px] leading-[1.65] text-[#5C607A] sm:text-[14px]">
                  Can refer to the IPTV service or provider setup that supplies
                  your account, playlist, and available content.
                </p>
              </div>
              <div className="glass-card p-5 sm:p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(123,47,255,0.1)] text-[#7B2FFF]">
                  <MonitorPlay
                    className="h-5 w-5"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </span>
                <h3 className="mt-3 text-[16px] font-bold text-[#0B0E2C]">
                  Sky Glass IPTV player
                </h3>
                <p className="mt-2 text-[13px] leading-[1.65] text-[#5C607A] sm:text-[14px]">
                  Is the application used to access that service. The player may
                  not provide channels itself — it provides the interface through
                  which your IPTV account loads content.
                </p>
              </div>
            </div>
            <p className="text-[14px] leading-[1.65] text-[#5C607A] sm:text-[15px]">
              This is why installing the application and having valid IPTV
              credentials are normally two separate parts of the setup.
            </p>
          </section>

          <section className="space-y-5 border-t border-[#0B0E2C]/10 pt-10 sm:pt-12">
            <SectionTitle>
              Frequently Asked{" "}
              <span className="text-gradient-brand">Questions</span>
            </SectionTitle>
            <FaqAccordionList faqs={FAQS} defaultOpenId="install-firestick" />
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Final{" "}
              <span className="text-gradient-brand">Thoughts</span>
            </SectionTitle>
            <div className="glass-card space-y-3 p-5 sm:space-y-4 sm:p-6">
              <Prose>
                <p>
                  If you searched for how to install Sky Glass on Firestick, the
                  most important thing is to identify exactly what you are
                  installing. The Sky Glass television platform and the Sky
                  Glass-style IPTV applications discussed by Firestick users are
                  not the same thing.
                </p>
                <p>
                  For Sky Glass IPTV, start with the application and login method
                  provided by your IPTV service. Install the compatible player,
                  enter your account details, and test playback. If something
                  goes wrong, check the app, credentials, internet connection,
                  and provider service separately instead of changing several
                  things at once.
                </p>
                <p>
                  If you are using a real Sky Glass television, a Firestick can
                  also provide a practical way to run compatible external apps
                  through HDMI.
                </p>
              </Prose>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={siteRoutes.installation}
                className="inline-flex min-h-[48px] items-center justify-center rounded-[20px] bg-gradient-brand px-5 py-3 text-center text-[14px] font-semibold text-white sm:px-6"
              >
                Full installation guide
              </Link>
              <a
                href={whatsappUrl("Help installing Sky Glass IPTV on Firestick")}
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
