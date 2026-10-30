import type { ReactNode } from "react";
import Link from "next/link";
import { Headphones, KeyRound, ListVideo, ShieldAlert } from "lucide-react";
import { Container } from "@/components/layout/container";
import { BlogCoverImage } from "@/components/sections/blog-cover-image";
import {
  FaqAccordionList,
  type FaqItem,
} from "@/components/sections/faq-section";
import { getBlogPost } from "@/lib/blog";
import { siteRoutes } from "@/lib/routes";
import { whatsappUrl } from "@/lib/site";

const POST = getBlogPost("iptv-playlist-not-loading")!;

const CAUSES = [
  "The M3U playlist URL is incomplete or incorrect.",
  "The Xtream Codes username, password or server address is wrong.",
  "Your IPTV subscription has expired.",
  "Your internet connection is unstable.",
  "The IPTV server is temporarily unavailable.",
  "Your app has cached an old playlist or has a software issue.",
  "Your device cannot handle a large playlist efficiently.",
  "Your network settings or VPN are interfering with the connection.",
] as const;

const M3U_STEPS = [
  "Open the original message or email containing your IPTV details.",
  "Copy the complete M3U playlist URL again.",
  "Return to your IPTV player.",
  "Open the playlist settings or edit the existing playlist.",
  "Paste the complete URL into the correct field.",
  "Save the settings and reload the playlist.",
] as const;

const XTREAM_FIELDS = [
  {
    title: "Username",
    body: "Your assigned account username.",
  },
  {
    title: "Password",
    body: "The password supplied for your account.",
  },
  {
    title: "Server URL",
    body: "The complete server address, including the required protocol and port when provided.",
  },
] as const;

const EXPIRY_CHECKS = [
  "When did you purchase or renew your subscription?",
  "Has the subscription period ended?",
  "Did you receive updated login details after renewal?",
  "Is your current account active?",
  "Does your provider report any account restrictions?",
] as const;

const INTERNET_STEPS = [
  "Restart your Wi-Fi router.",
  "Restart your Firestick, television or Android device.",
  "Move your device closer to the router if you use Wi-Fi.",
  "Pause large downloads or other activities using your connection.",
  "Try again after your internet connection stabilises.",
] as const;

const SERVER_SIGNS = [
  "The playlist fails on more than one device.",
  "Both M3U and Xtream Codes login methods fail.",
  "Your internet connection works normally.",
  "The same error continues after you recheck your login details.",
] as const;

const EMPTY_CHECKS = [
  "Confirm that the subscription is active.",
  "Refresh the playlist or update the channel list.",
  "Check whether categories are hidden or filtered in the player.",
  "Confirm that you entered the full playlist URL.",
  "Ask your provider whether the account is returning the expected channel information.",
] as const;

const DEVICE_TIPS = [
  {
    title: "Amazon Firestick",
    body: "Restart the device, check the app cache, and verify the playlist or login details. Make sure the application is compatible with your Fire TV version.",
    color: "#FF6B2C",
  },
  {
    title: "Android TV and Google TV",
    body: "Check the internet connection, update the player, and re-enter your account details if necessary.",
    color: "#E91E8C",
  },
  {
    title: "Samsung and LG Smart TVs",
    body: "Confirm that your chosen IPTV player is compatible with your exact television model, operating system, and app-store region.",
    color: "#7B2FFF",
  },
  {
    title: "Mobile phones and computers",
    body: "Test the same authorised playlist in another compatible player if available. If it works in one player but not another, the problem may be related to the original application’s configuration.",
    color: "#2563EB",
  },
] as const;

const SUPPORT_ITEMS = [
  "Your device model, such as Firestick or Android TV.",
  "The IPTV player you are using.",
  "The exact error message displayed.",
  "Whether you use an M3U URL or Xtream Codes login.",
  "When the problem started and whether the playlist worked previously.",
] as const;

const FIXES = [
  {
    title: "Check your M3U playlist URL",
    body: "If you use an M3U playlist, start by checking the URL provided by your IPTV service. An M3U URL can be long, so even one missing character can prevent the playlist from loading. Check for accidental spaces at the beginning or end of the URL, and make sure the address has not been cut off when copying it. Do not change the server address, port or other URL parameters unless your provider instructs you to do so.",
    color: "#FF6B2C",
  },
  {
    title: "Enter Xtream Codes details correctly",
    body: "Some IPTV applications allow you to connect using Xtream Codes-style login details instead of an M3U URL. Make sure you enter each detail in its correct field. Do not paste the entire server URL into the username or password box. Check capital letters, numbers and special characters carefully. Use the login method supported by both your IPTV service and your player.",
    color: "#E91E8C",
  },
  {
    title: "Check whether your IPTV subscription has expired",
    body: "An expired subscription can cause your playlist to stop loading, your login to fail or your channel list to become unavailable. If your playlist worked previously but has suddenly stopped, check when you purchased or renewed, whether the period ended, and whether your account is active. If you have already paid for a renewal, ask support to verify your payment before purchasing another plan.",
    color: "#7B2FFF",
  },
  {
    title: "Check your internet connection",
    body: "Your IPTV player needs a working internet connection to retrieve playlist information from the server. Open another application and check whether websites or other online services work normally. If they do not, the problem may be your internet connection rather than your IPTV playlist. If possible, test the same playlist on another device on the same network.",
    color: "#2563EB",
  },
  {
    title: "Restart your IPTV app and reload the playlist",
    body: "Sometimes, an application temporarily fails to retrieve playlist information correctly. Close the IPTV app completely, then open it again. Look for Refresh Playlist, Reload Playlist or Update Playlist. Wait for the playlist to finish loading before opening a channel. If needed, clear cache — but be careful with Clear Data or Reset, which may remove saved profiles.",
    color: "#FF6B2C",
  },
  {
    title: "Check whether the IPTV server is down",
    body: "Sometimes the problem is not on your device. Your IPTV provider’s server may be temporarily unavailable. If the playlist fails on more than one device, both login methods fail, and your internet works normally, contact your provider. Avoid repeatedly changing settings when the service itself is unavailable.",
    color: "#E91E8C",
  },
  {
    title: "Check VPN, DNS and network settings",
    body: "A VPN, firewall, router filter, or DNS configuration can sometimes interfere with a connection to an IPTV server. If you use a VPN, temporarily disconnect it and test again where appropriate. You can also test on another trusted network, such as a mobile hotspot. Do not assume your internet provider is blocking the service based on one failed attempt.",
    color: "#7B2FFF",
  },
  {
    title: "Update your IPTV player and device",
    body: "An outdated player or device operating system can sometimes cause compatibility problems. Check for updates through the official app store or the developer’s verified website, and for system updates on your Firestick, Android TV or Smart TV. After updating, restart the device and try loading the playlist again. Reinstalling should be a later step, not the first solution.",
    color: "#2563EB",
  },
] as const;

const FAQS: FaqItem[] = [
  {
    id: "why-not-loading",
    q: "Why is my IPTV playlist not loading?",
    a: "The most common possibilities include an incorrect M3U URL, wrong Xtream Codes details, an expired subscription, a network problem or a temporary server issue. Check the URL and account status first.",
  },
  {
    id: "fix-m3u",
    q: "How do I fix an M3U playlist that is not working?",
    a: "Copy the complete M3U URL again, remove accidental spaces, enter it into the correct playlist field and refresh it. If the error continues, ask your provider to verify the link.",
  },
  {
    id: "xtream-failed",
    q: "Why does Xtream Codes say login failed?",
    a: "Check the server address, username and password. Make sure you are using the correct login method and confirm that your subscription is active.",
  },
  {
    id: "m3u-vs-xtream",
    q: "What is the difference between M3U and Xtream Codes?",
    a: "M3U setup generally uses a playlist URL. Xtream Codes-style setup usually uses a server address, username and password. Use whichever method your provider and IPTV player support.",
  },
  {
    id: "phone-not-tv",
    q: "Why does my IPTV playlist work on my phone but not my TV?",
    a: "The issue may be related to the TV’s app, device compatibility, cached data or network settings. Test the TV’s internet connection, update the player and compare the settings with the working device.",
  },
  {
    id: "reinstall",
    q: "Should I reinstall my IPTV app if the playlist will not load?",
    a: "Not immediately. First check your URL, login details, subscription and internet connection. Reinstalling may remove saved profiles, so keep your account details available if you decide to do it.",
  },
  {
    id: "renew",
    q: "Can renewing my IPTV subscription fix a playlist error?",
    a: "Renewal can restore access if your subscription has expired, but it will not fix every technical problem. Confirm your account status before paying for another subscription.",
  },
  {
    id: "no-channels",
    q: "Why does my IPTV playlist load but show no channels?",
    a: "The playlist may be empty, filtered, outdated or linked to an account that is not returning channel information. Refresh the list and contact your provider if the problem continues.",
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

export function BlogPlaylistNotLoadingArticle() {
  return (
    <article className="relative bg-transparent pt-4 sm:pt-8 lg:pt-10">
      <Container className="pb-10 sm:pb-16 lg:pb-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#5C607A] sm:text-[13px]">
            Troubleshooting guide
          </p>
          <h1 className="mt-2 text-[26px] font-bold leading-[1.18] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-[38px] sm:leading-[1.12] lg:text-[42px]">
            IPTV Playlist Not Loading? M3U and Xtream Codes{" "}
            <span className="text-gradient-brand">Troubleshooting Guide</span>
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
              Is your IPTV playlist not loading, or does your app show an error
              when you enter your M3U URL or Xtream Codes details? This problem
              can happen on Firestick, Android TV, Smart TVs, mobile phones, and
              other compatible devices.
            </p>
            <p>
              The good news is that you may not need to reinstall your IPTV app
              or purchase a new subscription. In many cases, the problem is
              caused by an incorrect playlist URL, a typing mistake, an expired
              subscription, an internet connection issue or a temporary server
              problem.
            </p>
            <p>
              In this guide, you will learn how to fix an IPTV playlist that
              will not load, troubleshoot M3U and Xtream Codes login errors, and
              identify when you need help from your provider.
            </p>
          </Prose>

          <section className="space-y-4">
            <SectionTitle>
              Why Is Your IPTV Playlist Not{" "}
              <span className="text-gradient-brand">Loading?</span>
            </SectionTitle>
            <div className="glass-card p-5 sm:p-6">
              <Prose>
                <p>
                  An IPTV playlist contains the information your compatible
                  player needs to display available channels and, depending on
                  your service, movies and series. If the player cannot retrieve
                  or process this information, the playlist may fail to load.
                </p>
              </Prose>
              <p className="mt-4 text-[13px] font-semibold text-[#0B0E2C] sm:text-[14px]">
                Here are some common reasons:
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2 sm:gap-2.5">
                {CAUSES.map((cause) => (
                  <li
                    key={cause}
                    className="flex items-start gap-2.5 rounded-[14px] border border-[#0B0E2C]/8 bg-white/60 px-3 py-2.5"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E91E8C]" />
                    <span className="text-[13px] font-medium leading-snug text-[#0B0E2C] sm:text-[14px]">
                      {cause}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[13px] leading-[1.65] text-[#5C607A] sm:text-[14px]">
                Before changing several settings, identify the error message you
                see. This makes it easier to find the correct solution.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              1. Check Your M3U Playlist{" "}
              <span className="text-gradient-brand">URL</span>
            </SectionTitle>
            <Prose>
              <p>
                If you use an M3U playlist, start by checking the URL provided
                by your IPTV service. An M3U URL can be long, so even one
                missing character can prevent the playlist from loading.
              </p>
            </Prose>
            <ol className="glass-card space-y-0 divide-y divide-[#0B0E2C]/8 overflow-hidden p-0">
              {M3U_STEPS.map((step, index) => (
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
            <div className="glass-card flex items-start gap-3 p-4 ring-1 ring-[#FF6B2C]/20 sm:p-5">
              <ShieldAlert
                className="mt-0.5 h-5 w-5 shrink-0 text-[#FF6B2C]"
                strokeWidth={2}
                aria-hidden
              />
              <p className="text-[13px] leading-[1.65] text-[#5C607A] sm:text-[14px]">
                Check for accidental spaces at the beginning or end of the URL.
                Do not change the server address, port or other URL parameters
                unless your provider instructs you to do so. If you still
                receive an error, ask your provider to confirm that the playlist
                address is correct and active.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              2. Enter Xtream Codes Details{" "}
              <span className="text-gradient-brand">Correctly</span>
            </SectionTitle>
            <Prose>
              <p>
                Some IPTV applications allow you to connect using Xtream
                Codes-style login details instead of an M3U URL. This method
                usually requires three fields:
              </p>
            </Prose>
            <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
              {XTREAM_FIELDS.map((field) => (
                <div key={field.title} className="glass-card p-4 sm:p-5">
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.08em] text-[#5C607A]">
                    <KeyRound
                      className="h-3.5 w-3.5 text-[#7B2FFF]"
                      strokeWidth={2}
                      aria-hidden
                    />
                    {field.title}
                  </span>
                  <p className="mt-2 text-[13px] leading-[1.65] text-[#0B0E2C] sm:text-[14px]">
                    {field.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="glass-card p-5 sm:p-6">
              <Prose>
                <p>
                  Make sure you enter each detail in its correct field. Do not
                  paste the entire server URL into the username or password box.
                  Check capital letters, numbers and special characters
                  carefully. If your password contains unusual characters,
                  copying it from your original account information may help
                  prevent typing mistakes.
                </p>
                <p>
                  Also, use the login method supported by both your IPTV service
                  and your player. If you were given an M3U URL, do not assume
                  that it can be entered into an Xtream Codes login screen.
                </p>
              </Prose>
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              3. Check Whether Your IPTV Subscription Has{" "}
              <span className="text-gradient-brand">Expired</span>
            </SectionTitle>
            <Prose>
              <p>
                An expired subscription can cause your playlist to stop loading,
                your login to fail or your channel list to become unavailable.
                If your IPTV playlist worked previously but has suddenly
                stopped, check the following:
              </p>
            </Prose>
            <ul className="space-y-2.5">
              {EXPIRY_CHECKS.map((item) => (
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
            <p className="text-[14px] leading-[1.65] text-[#5C607A] sm:text-[15px]">
              If your subscription has expired, contact your provider to confirm
              the renewal options. Existing Sky Glass IPTV customers can review
              plans on the{" "}
              <Link
                href={siteRoutes.plans}
                className="font-semibold text-[#0B0E2C] underline-offset-2 hover:underline"
              >
                subscription page
              </Link>{" "}
              or read our{" "}
              <Link
                href="/sky-glass-iptv-subscription-expired/"
                className="font-semibold text-[#0B0E2C] underline-offset-2 hover:underline"
              >
                expired subscription guide
              </Link>
              . If you have already paid for a renewal, ask support to verify
              your payment and account status before making another payment.
            </p>
          </section>

          <section className="space-y-5">
            <SectionTitle>
              Practical Fixes When Your Playlist Will Not{" "}
              <span className="text-gradient-brand">Load</span>
            </SectionTitle>
            <div className="space-y-3 sm:space-y-4">
              {FIXES.map((fix, index) => (
                <div
                  key={fix.title}
                  className="glass-card flex gap-3.5 p-4 sm:gap-5 sm:p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(123,47,255,0.12)] text-[13px] font-bold text-[#7B2FFF] sm:h-10 sm:w-10 sm:text-[14px]">
                    {index + 1}
                  </span>
                  <div className="min-w-0">
                    <span
                      className="mb-2 block h-1 w-10 rounded-full"
                      style={{ backgroundColor: fix.color }}
                      aria-hidden
                    />
                    <h3 className="text-[15px] font-bold text-[#0B0E2C] sm:text-[16px]">
                      {fix.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-[1.65] text-[#5C607A] sm:text-[14px] sm:leading-[1.75]">
                      {fix.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              4. Check Your Internet{" "}
              <span className="text-gradient-brand">Connection</span>
            </SectionTitle>
            <Prose>
              <p>
                Your IPTV player needs a working internet connection to retrieve
                playlist information from the server. Open another application
                on your device and check whether websites or other online
                services work normally. If they do not, the problem may be your
                internet connection rather than your IPTV playlist.
              </p>
            </Prose>
            <ul className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
              {INTERNET_STEPS.map((step) => (
                <li
                  key={step}
                  className="glass-card flex items-start gap-2.5 p-3.5 sm:p-4"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7B2FFF]" />
                  <span className="text-[13px] font-medium leading-snug text-[#0B0E2C] sm:text-[14px]">
                    {step}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-[14px] leading-[1.65] text-[#5C607A] sm:text-[15px]">
              If possible, test the same playlist on another device connected to
              the same network. This can help you determine whether the issue is
              limited to one device.
            </p>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              6. Check Whether the IPTV Server Is{" "}
              <span className="text-gradient-brand">Down</span>
            </SectionTitle>
            <div className="glass-card p-5 sm:p-6">
              <Prose>
                <p>
                  Sometimes, the problem is not on your device at all. Your IPTV
                  provider’s server may be temporarily unavailable or
                  experiencing a technical issue.
                </p>
              </Prose>
              <p className="mt-4 text-[13px] font-semibold text-[#0B0E2C] sm:text-[14px]">
                Possible signs include:
              </p>
              <ul className="mt-3 space-y-2">
                {SERVER_SIGNS.map((item) => (
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
                If these symptoms occur, contact your provider and ask whether
                the server is experiencing a problem. Avoid repeatedly changing
                your settings when the service itself is unavailable.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              9. What If Your IPTV Playlist Loads but Shows{" "}
              <span className="text-gradient-brand">No Channels?</span>
            </SectionTitle>
            <Prose>
              <p>
                A playlist can sometimes be added successfully while displaying
                an empty channel list. If this happens, check the following:
              </p>
            </Prose>
            <ul className="space-y-2.5">
              {EMPTY_CHECKS.map((item) => (
                <li
                  key={item}
                  className="glass-card flex items-start gap-2.5 p-3.5 sm:p-4"
                >
                  <ListVideo
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
            <div className="glass-card p-5 sm:p-6">
              <Prose>
                <p>
                  If the playlist is large, give the first import enough time to
                  complete. Older streaming devices may need longer to process
                  extensive channel and programme lists. If the playlist remains
                  empty, contact support before deleting your profile or
                  creating multiple duplicate playlists.
                </p>
              </Prose>
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              10. Fix IPTV Playlist Problems on Firestick and{" "}
              <span className="text-gradient-brand">Smart TVs</span>
            </SectionTitle>
            <p className="text-[14px] leading-[1.65] text-[#5C607A] sm:text-[15px]">
              The basic troubleshooting steps are similar across devices, but
              the settings menus may differ.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {DEVICE_TIPS.map((item) => (
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
            <p className="text-[14px] leading-[1.65] text-[#5C607A] sm:text-[15px]">
              The Sky Glass IPTV service should be used with a compatible player
              and the correct account information supplied for your
              subscription. The service name does not mean that every device has
              a dedicated native app with the same name.
            </p>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              When Should You Contact Sky Glass IPTV{" "}
              <span className="text-gradient-brand">Support?</span>
            </SectionTitle>
            <Prose>
              <p>
                If your playlist still does not load after checking the URL,
                login details, subscription status, internet connection and
                application, contact support for further assistance.
              </p>
              <p>To help the team identify the issue, provide:</p>
            </Prose>
            <ul className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
              {SUPPORT_ITEMS.map((item) => (
                <li
                  key={item}
                  className="glass-card flex items-start gap-2.5 p-3.5 sm:p-4"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]" />
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
                Never share your password, full M3U URL or private account
                credentials in a public post. Use a verified support channel and
                provide only the account information needed to identify your
                order. If your subscription has expired, check the available{" "}
                <Link
                  href={siteRoutes.plans}
                  className="font-semibold text-[#0B0E2C] underline-offset-2 hover:underline"
                >
                  Sky Glass IPTV plans
                </Link>{" "}
                and confirm the appropriate renewal option.
              </p>
            </div>
          </section>

          <section className="space-y-5 border-t border-[#0B0E2C]/10 pt-10 sm:pt-12">
            <SectionTitle>
              Frequently Asked{" "}
              <span className="text-gradient-brand">Questions</span>
            </SectionTitle>
            <FaqAccordionList faqs={FAQS} defaultOpenId="why-not-loading" />
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Final{" "}
              <span className="text-gradient-brand">Thoughts</span>
            </SectionTitle>
            <div className="glass-card space-y-3 p-5 sm:space-y-4 sm:p-6">
              <Prose>
                <p>
                  If your IPTV playlist is not loading, start with the basics.
                  Check your M3U URL or Xtream Codes details, confirm your
                  subscription is active, restart the player and test your
                  internet connection.
                </p>
                <p>
                  If the same problem continues across multiple devices, ask
                  your provider to check the account and server rather than
                  repeatedly reinstalling the app.
                </p>
                <p>
                  Already using Sky Glass IPTV? Visit the subscription page to
                  review the available plans, or contact support if you need
                  help checking your existing account.
                </p>
              </Prose>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={siteRoutes.plans}
                className="inline-flex min-h-[48px] items-center justify-center rounded-[20px] bg-gradient-brand px-5 py-3 text-center text-[14px] font-semibold text-white sm:px-6"
              >
                View subscription plans
              </Link>
              <a
                href={whatsappUrl("IPTV playlist not loading — need help")}
                target="_blank"
                rel="noopener noreferrer"
                className="border-gradient-brand inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[20px] px-5 py-3 text-center text-[14px] font-semibold sm:px-6"
              >
                <Headphones
                  className="h-4 w-4 shrink-0 text-[#7B2FFF]"
                  strokeWidth={2}
                  aria-hidden
                />
                <span className="text-gradient-brand">Ask for playlist help</span>
              </a>
            </div>
          </section>
        </div>
      </Container>
    </article>
  );
}
