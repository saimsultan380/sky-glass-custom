import type { ReactNode } from "react";
import Link from "next/link";
import { Headphones, KeyRound, ShieldAlert } from "lucide-react";
import { Container } from "@/components/layout/container";
import { BlogCoverImage } from "@/components/sections/blog-cover-image";
import {
  FaqAccordionList,
  type FaqItem,
} from "@/components/sections/faq-section";
import { getBlogPost } from "@/lib/blog";
import { siteRoutes } from "@/lib/routes";
import { whatsappUrl } from "@/lib/site";

const POST = getBlogPost("sky-glass-iptv-keeps-signing-out")!;

const WHY_ROWS = [
  {
    reason: "Subscription expired",
    happens: "The service stops accepting your login",
    check: "Check your renewal date",
  },
  {
    reason: "Incorrect login details",
    happens: "The player rejects your account",
    check: "Verify username and password",
  },
  {
    reason: "App data cleared",
    happens: "Saved login information disappears",
    check: "Check storage settings",
  },
  {
    reason: "Multiple device connections",
    happens: "Access may be affected by account limits",
    check: "Check simultaneous connections",
  },
  {
    reason: "App update or reinstall",
    happens: "The player may request login again",
    check: "Re-enter your details",
  },
  {
    reason: "VPN or network changes",
    happens: "The connection to the server may fail",
    check: "Test your normal connection",
  },
  {
    reason: "Incorrect server URL",
    happens: "The player cannot connect properly",
    check: "Check the supplied server address",
  },
  {
    reason: "Player compatibility issue",
    happens: "The app may not save or process the login correctly",
    check: "Update or test another compatible player",
  },
] as const;

const FIXES = [
  {
    title: "Check whether your IPTV subscription is still active",
    body: "IPTV subscriptions normally have a fixed duration of one, three, six, or twelve months. When the subscription expires, the player may stop connecting, show a login error, or ask you to check your account. Confirm your start date, renewal or expiry date, latest payment, and activation status. If the subscription is still active, ask support why the server is rejecting your login.",
    color: "#FF6B2C",
  },
  {
    title: "Check your username, password and server URL",
    body: "Even a small typing mistake can stop the player from connecting. Check the username, capitalisation in the password, accidental spaces, the exact server URL, and the correct login method (Xtream Codes or M3U). If you are unsure, ask your provider to resend the original details and copy them rather than typing manually.",
    color: "#E91E8C",
  },
  {
    title: "Enable Remember Me or save login details",
    body: "Some IPTV applications provide an option such as Remember Me, Save Login Details, or Keep Me Signed In. Enable it if available. Also check whether the application automatically removes saved accounts when you close it. If your player does not offer a remember-login option, it may not support permanent login storage.",
    color: "#7B2FFF",
  },
  {
    title: "Stop your device from clearing app data",
    body: "If app data is cleared by a cleaning tool, reset, or reinstall, the player may forget your login. On Firestick and many Android TV devices, open Settings → Applications → your IPTV player → Storage. Clear Cache removes temporary files; Clear Data can remove saved accounts and playlists. Avoid automatic cleaning tools that remove app data without checking.",
    color: "#2563EB",
  },
  {
    title: "Check your simultaneous connection limit",
    body: "Some subscriptions allow one device at a time, while others include multiple connections. Close the IPTV player on other devices, sign out from unused devices, restart the player on your main device, and test again. Ask your provider to confirm the connection limit if the problem continues.",
    color: "#FF6B2C",
  },
  {
    title: "Update your IPTV player",
    body: "An outdated IPTV application may crash, fail to save login information, or return to the login screen. Install updates from the official or verified source, restart your device, open the player, sign in again if necessary, and test the connection. Do not download random APK files from unknown websites.",
    color: "#E91E8C",
  },
  {
    title: "Check your internet connection",
    body: "A weak or unstable internet connection can interrupt communication with the service and return you to the login screen. Restart your router, move closer to Wi-Fi, use Ethernet if available, reduce bandwidth usage, and restart the IPTV player after the connection is restored. If the internet works but the account is rejected, ask your provider to check service status.",
    color: "#7B2FFF",
  },
  {
    title: "Check your VPN connection",
    body: "If a VPN drops or changes servers, your IPTV player may temporarily lose contact with the service. Check VPN stability, try a different nearby server, or temporarily test your normal connection where permitted. If the service works without the VPN but not with it, ask your provider whether that VPN connection is supported.",
    color: "#2563EB",
  },
  {
    title: "Restart your Firestick, Smart TV or Android device",
    body: "Sometimes the IPTV application does not close properly or keeps running in the background. Restart the device fully, open your IPTV player, and check whether it remembers your account. If it asks you to sign in again, enter the correct details and test the connection.",
    color: "#FF6B2C",
  },
  {
    title: "Reinstall the IPTV player",
    body: "If nothing else works, reinstalling may help with corrupted settings. First save your username, password, server URL or M3U link, player activation details, and important settings. Remove the app, restart the device, install from a trusted source, and sign in again. Reinstalling does not automatically transfer a third-party player licence to a new device.",
    color: "#E91E8C",
  },
] as const;

const DEVICE_TIPS = [
  {
    title: "Firestick",
    body: "Check application storage under Settings → Applications → Manage Installed Applications. Confirm the player is updated, has enough storage, and is not being cleared by a cleaning tool. After a Fire OS update or reinstall, you may need to enter your account details again.",
    color: "#FF6B2C",
  },
  {
    title: "Android TV",
    body: "Open Settings → Apps, find your IPTV application, and check storage settings. Avoid repeatedly clearing app data. If the player continues to forget your login, update it through a trusted source or reinstall after saving your account details.",
    color: "#E91E8C",
  },
  {
    title: "Smart TV",
    body: "Samsung and LG Smart TVs may use different IPTV players. Some apps require activation through a device identifier, portal, or playlist upload. Check activation and playlist details after a reset or update, and re-add the playlist using your provider’s instructions if needed.",
    color: "#7B2FFF",
  },
  {
    title: "IPTV Smarters Pro",
    body: "Confirm the correct login method and Xtream Codes or M3U details. Close and reopen the app, check for updates, and make sure the device is not clearing application data. If the same login works on another player, the issue may be with Smarters Pro or its local settings.",
    color: "#2563EB",
  },
  {
    title: "TiviMate",
    body: "Check whether your playlist is still available and that the server address, username, and password are correct. Confirm you have not accidentally removed the playlist. If TiviMate continues to lose access, test the same account on another compatible player if your subscription permits it.",
    color: "#FF6B2C",
  },
] as const;

const DIAGNOSE_ROWS = [
  {
    happens: "Login fails on every compatible device",
    problem: "Account, subscription, or server issue",
  },
  {
    happens: "Login works on another player",
    problem: "Original IPTV application issue",
  },
  {
    happens: "App forgets details after closing",
    problem: "Player settings or device storage",
  },
  {
    happens: "Login works only on one network",
    problem: "Network or VPN issue",
  },
  {
    happens: "Account stops working when another device is used",
    problem: "Simultaneous connection limit",
  },
  {
    happens: "Login fails after subscription expiry",
    problem: "Renewal or activation issue",
  },
  {
    happens: "Playlist disappears after app reset",
    problem: "Local application data was removed",
  },
] as const;

const SUPPORT_ITEMS = [
  "Your device model, such as Firestick, Samsung Smart TV, or Android TV.",
  "The name of your IPTV player.",
  "Whether you use Xtream Codes or an M3U playlist.",
  "The exact error message on the screen.",
  "Whether the issue started after an update or subscription renewal.",
  "Whether the account works on another compatible device.",
] as const;

const PREVENT_TIPS = [
  "Keep your subscription active and confirm payments and account activation.",
  "Save your username, password, and server URL securely and privately.",
  "Avoid clearing app data; use Clear Cache only when troubleshooting temporary issues.",
  "Use the correct number of simultaneous connections for your package.",
  "Keep the player updated from the official or verified source.",
  "Avoid unnecessary network or VPN changes before checking the basics.",
  "Do not share your account details publicly — only through a verified support channel when required.",
] as const;

const LOGIN_FIELDS = [
  "Username",
  "Password",
  "Server URL",
] as const;

const FAQS: FaqItem[] = [
  {
    id: "asks-login",
    q: "Why does Sky Glass IPTV keep asking me to log in?",
    a: "This can happen because the player is not saving your login details, the app data has been cleared, or your subscription is no longer active. Check your account status and the player’s save-login settings first.",
  },
  {
    id: "every-close",
    q: "Why does my IPTV app sign out every time I close it?",
    a: "Your IPTV player may not be saving its login information correctly. Check the Remember Me option, app permissions, and device storage settings. Also make sure a cleaning application is not removing the saved data.",
  },
  {
    id: "expired",
    q: "Can an expired IPTV subscription cause repeated sign-outs?",
    a: "Yes. When a subscription expires, the service may reject your login or stop providing access. Check your renewal date with your provider.",
  },
  {
    id: "multiple-devices",
    q: "Does using IPTV on multiple devices cause login problems?",
    a: "It can, depending on the number of simultaneous connections included in your subscription. If your plan allows one connection, using the same account on multiple devices at the same time may cause access problems.",
  },
  {
    id: "cache",
    q: "Will clearing the cache stop my IPTV app from signing out?",
    a: "It may help if temporary application files are causing a problem. However, clearing the cache does not fix an expired subscription or incorrect login details. Avoid selecting Clear Data unless you are ready to set up the player again.",
  },
  {
    id: "phone-firestick",
    q: "Why does my IPTV login work on my phone but not on Firestick?",
    a: "The issue may be related to the Firestick application, its saved settings, or the device’s network connection. Check the server details and update the player before assuming your account is faulty.",
  },
  {
    id: "smarters",
    q: "Do I need to reinstall IPTV Smarters Pro if it keeps signing out?",
    a: "Not immediately. First check your account, login details, app updates, and storage settings. Reinstall the application only if the basic checks do not resolve the issue.",
  },
  {
    id: "wifi",
    q: "Why does my IPTV account stop working after changing Wi-Fi?",
    a: "Changing networks can affect the connection between your device and the IPTV server. Check the new Wi-Fi connection, VPN settings, and account restrictions. Contact your provider if the login continues to fail.",
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

export function BlogKeepsSigningOutArticle() {
  return (
    <article className="relative bg-transparent pt-4 sm:pt-8 lg:pt-10">
      <Container className="pb-10 sm:pb-16 lg:pb-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#5C607A] sm:text-[13px]">
            Troubleshooting guide
          </p>
          <h1 className="mt-2 text-[26px] font-bold leading-[1.18] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-[38px] sm:leading-[1.12] lg:text-[42px]">
            Sky Glass IPTV Keeps Signing Out: What Can You{" "}
            <span className="text-gradient-brand">Do?</span>
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
              When Sky Glass IPTV keeps signing out, you may find that the app
              suddenly asks for your username and password again. Sometimes it
              happens every time you open the IPTV player. In other cases, the
              service works for a few hours or days before asking you to log in
              again.
            </p>
            <p>
              This can be frustrating, especially when you have already entered
              your account details and set everything up properly.
            </p>
            <p>
              There are a few reasons why this happens. Your IPTV subscription
              may have expired, the player may not be saving your login details,
              or the app may be clearing its stored data. In some cases, using
              the same account on multiple devices or entering an incorrect
              server address can also cause login problems.
            </p>
            <p>
              The good thing is that you can check most of these issues
              yourself. Before reinstalling the app or requesting new login
              details, go through the following steps to find out why your Sky
              Glass IPTV keeps signing out.
            </p>
          </Prose>

          <section className="space-y-4">
            <SectionTitle>
              Why Does Sky Glass IPTV Keep{" "}
              <span className="text-gradient-brand">Signing Out?</span>
            </SectionTitle>
            <div className="glass-card p-5 sm:p-6">
              <Prose>
                <p>
                  The first thing to understand is that your IPTV subscription
                  and the IPTV player are two separate things.
                </p>
                <p>
                  The subscription provides your account access, while the IPTV
                  player is the application you use to enter your login details
                  and watch the available content. For example, you may use IPTV
                  Smarters Pro, TiviMate, IBO Player, or another compatible
                  application.
                </p>
                <p>
                  If the player forgets your login information, the problem may
                  be with the app or device. If the account itself is losing
                  access, the issue may be related to subscription status,
                  connection limits, or the service.
                </p>
              </Prose>
            </div>
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-left">
                  <thead>
                    <tr className="border-b border-[#0B0E2C]/10 bg-[rgba(11,14,44,0.02)]">
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Possible reason
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        What happens
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        What to check
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {WHY_ROWS.map((row) => (
                      <tr
                        key={row.reason}
                        className="border-b border-[#0B0E2C]/8 last:border-b-0"
                      >
                        <td className="px-4 py-3 text-[13px] font-semibold text-[#0B0E2C] sm:px-5 sm:text-[14px]">
                          {row.reason}
                        </td>
                        <td className="px-4 py-3 text-[13px] text-[#5C607A] sm:px-5 sm:text-[14px]">
                          {row.happens}
                        </td>
                        <td className="px-4 py-3 text-[13px] text-[#5C607A] sm:px-5 sm:text-[14px]">
                          {row.check}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="space-y-5">
            <SectionTitle>
              How to Fix Sky Glass IPTV Keeps{" "}
              <span className="text-gradient-brand">Signing Out?</span>
            </SectionTitle>
            <p className="text-[14px] leading-[1.65] text-[#5C607A] sm:text-[15px]">
              Try these solutions one by one. Start with your account details
              and subscription status before changing the settings on your
              device.
            </p>

            <div className="glass-card p-4 sm:p-5">
              <p className="text-[13px] font-semibold text-[#0B0E2C] sm:text-[14px]">
                Common Xtream Codes fields:
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {LOGIN_FIELDS.map((field) => (
                  <span
                    key={field}
                    className="inline-flex items-center gap-1.5 rounded-[14px] border border-[#0B0E2C]/10 bg-white/70 px-3 py-2 text-[12px] font-semibold text-[#0B0E2C] sm:text-[13px]"
                  >
                    <KeyRound
                      className="h-3.5 w-3.5 text-[#7B2FFF]"
                      strokeWidth={2}
                      aria-hidden
                    />
                    {field}
                  </span>
                ))}
              </div>
            </div>

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
            <p className="text-[14px] leading-[1.65] text-[#5C607A] sm:text-[15px]">
              If your subscription has ended, see our{" "}
              <Link
                href="/sky-glass-iptv-subscription-expired/"
                className="font-semibold text-[#0B0E2C] underline-offset-2 hover:underline"
              >
                expired subscription guide
              </Link>
              . For playlist URL issues, use the{" "}
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
              Sky Glass IPTV Keeps Signing Out on Different{" "}
              <span className="text-gradient-brand">Devices</span>
            </SectionTitle>
            <p className="text-[14px] leading-[1.65] text-[#5C607A] sm:text-[15px]">
              The exact settings can vary depending on the device and
              application you use. Here are some checks for common IPTV setups.
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
          </section>

          <section className="space-y-4">
            <SectionTitle>
              How to Know Whether the Problem Is With Your IPTV Account or{" "}
              <span className="text-gradient-brand">App?</span>
            </SectionTitle>
            <Prose>
              <p>
                This is an important check because reinstalling the player will
                not fix an expired subscription or a problem with the provider’s
                server.
              </p>
            </Prose>
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[480px] text-left">
                  <thead>
                    <tr className="border-b border-[#0B0E2C]/10 bg-[rgba(11,14,44,0.02)]">
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        What happens
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Possible problem
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {DIAGNOSE_ROWS.map((row) => (
                      <tr
                        key={row.happens}
                        className="border-b border-[#0B0E2C]/8 last:border-b-0"
                      >
                        <td className="px-4 py-3 text-[13px] font-semibold text-[#0B0E2C] sm:px-5 sm:text-[14px]">
                          {row.happens}
                        </td>
                        <td className="px-4 py-3 text-[13px] text-[#5C607A] sm:px-5 sm:text-[14px]">
                          {row.problem}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-[14px] leading-[1.65] text-[#5C607A] sm:text-[15px]">
              If your login works on another supported player but not on the
              original one, you have a useful starting point. If it fails
              everywhere, contact your IPTV provider and ask them to check your
              account status and server access.
            </p>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              When Should You Contact Sky Glass IPTV{" "}
              <span className="text-gradient-brand">Support?</span>
            </SectionTitle>
            <Prose>
              <p>
                If you have checked your login details, subscription status,
                device settings, and internet connection but the problem
                continues, contact support. There is no benefit in repeatedly
                entering the same credentials if the account is being rejected
                by the server.
              </p>
              <p>When contacting support, explain:</p>
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
                You can also share a screenshot of the error, but hide your
                password, full playlist URL, and other private account
                information.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              How to Prevent Sky Glass IPTV From Signing Out{" "}
              <span className="text-gradient-brand">Again?</span>
            </SectionTitle>
            <ul className="space-y-2.5">
              {PREVENT_TIPS.map((tip) => (
                <li
                  key={tip}
                  className="glass-card flex items-start gap-2.5 p-3.5 sm:p-4"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7B2FFF]" />
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
            <FaqAccordionList faqs={FAQS} defaultOpenId="asks-login" />
          </section>

          <section className="space-y-4">
            <SectionTitle>
              <span className="text-gradient-brand">Conclusion</span>
            </SectionTitle>
            <div className="glass-card space-y-3 p-5 sm:space-y-4 sm:p-6">
              <Prose>
                <p>
                  When Sky Glass IPTV keeps signing out, the problem is usually
                  related to the account, IPTV player, device storage, or
                  network connection. It does not always mean that your
                  subscription has stopped working.
                </p>
                <p>
                  Start by checking your subscription status and login details.
                  Then look at the Remember Me option, app storage, simultaneous
                  connections, and internet settings. If the issue continues,
                  test another compatible player or contact your provider to
                  check the account.
                </p>
                <p>
                  The important thing is to identify where the problem starts
                  before reinstalling everything. Once you know whether it is
                  the account, application, device, or network, finding the
                  right solution becomes much easier.
                </p>
              </Prose>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={siteRoutes.contact}
                className="inline-flex min-h-[48px] items-center justify-center rounded-[20px] bg-gradient-brand px-5 py-3 text-center text-[14px] font-semibold text-white sm:px-6"
              >
                Contact support
              </Link>
              <a
                href={whatsappUrl(
                  "Sky Glass IPTV keeps signing out — need help",
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
                <span className="text-gradient-brand">Ask about login help</span>
              </a>
            </div>
          </section>
        </div>
      </Container>
    </article>
  );
}
