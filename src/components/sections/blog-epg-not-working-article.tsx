import type { ReactNode } from "react";
import Link from "next/link";
import { Headphones, ShieldAlert } from "lucide-react";
import { Container } from "@/components/layout/container";
import { BlogCoverImage } from "@/components/sections/blog-cover-image";
import {
  FaqAccordionList,
  type FaqItem,
} from "@/components/sections/faq-section";
import { getBlogPost } from "@/lib/blog";
import { siteRoutes } from "@/lib/routes";
import { whatsappUrl } from "@/lib/site";

const POST = getBlogPost("sky-glass-iptv-epg-not-working")!;

const WHY_ROWS = [
  {
    problem: "Entire TV guide is blank",
    cause: "EPG source is missing or failed to load",
    check: "Check the EPG settings",
  },
  {
    problem: "Some channels show no information",
    cause: "Channel mapping problem",
    check: "Check channel IDs",
  },
  {
    problem: "Programme times are incorrect",
    cause: "Wrong time zone or EPG offset",
    check: "Check device time settings",
  },
  {
    problem: "Guide shows old programmes",
    cause: "Outdated EPG data",
    check: "Refresh the guide",
  },
  {
    problem: "EPG stops updating",
    cause: "Automatic refresh is disabled or failing",
    check: "Check update settings",
  },
  {
    problem: "Guide freezes while loading",
    cause: "Large guide file or app cache issue",
    check: "Clear cache and reload",
  },
] as const;

const FIXES = [
  {
    title: "Refresh the EPG guide",
    body: "This is the first thing to try when the Sky Glass IPTV TV guide is blank or showing old programme information. Open your IPTV player and look for Settings, EPG or TV Guide, Update EPG, Refresh Guide, or Reload Programme Information. Select the refresh option and give it enough time to complete. Once the update finishes, return to Live TV and check a few channels.",
    color: "#FF6B2C",
  },
  {
    title: "Check your EPG URL",
    body: "If you are using an M3U playlist, your IPTV player may need a separate EPG URL or XMLTV source. Make sure the EPG URL has been entered correctly, check for missing characters or spaces, and confirm that you are using the latest details supplied by your IPTV provider. Save the settings and refresh the guide again. Do not use a random EPG URL from the internet.",
    color: "#E91E8C",
  },
  {
    title: "Check the date and time settings",
    body: "Incorrect date and time settings can make the TV guide display programmes at the wrong time. Make sure the device is using the correct local time zone, automatic date and time are enabled where available, and the IPTV player’s EPG time offset is not set incorrectly. First correct the device clock, refresh the guide, and then adjust the player offset only if needed.",
    color: "#7B2FFF",
  },
  {
    title: "Clear the IPTV player cache",
    body: "Old or incomplete EPG data can remain in the cache and stop the guide from updating. On many Android TV and Google TV devices, open Settings → Apps → your IPTV player → Storage → Clear Cache. Restart the player and refresh the EPG. Choose Clear Cache, not Clear Data, unless you are prepared to set up the application again.",
    color: "#2563EB",
  },
  {
    title: "Check whether your playlist is updated",
    body: "An outdated playlist can also cause EPG problems. The channel list and EPG information need to match. Open your IPTV player and look for an option to reload or update the playlist. After updating it, refresh the EPG as well. If you have recently received new login details, make sure you are using the correct playlist and guide information.",
    color: "#FF6B2C",
  },
  {
    title: "Fix missing EPG on specific channels",
    body: "If most channels show guide data but a few say “No Information,” the issue is often channel mapping. IPTV players use channel identifiers to match playlist channels with programme listings. Try refreshing the guide and checking whether your player offers EPG matching or channel assignment. If the problem continues, contact your IPTV provider with the channel names.",
    color: "#E91E8C",
  },
  {
    title: "Restart your IPTV player and device",
    body: "Close the IPTV application, restart your Firestick, Android TV, Google TV, or compatible device, wait for the internet connection to return, open the player, and allow the playlist and EPG to load. Avoid repeatedly restarting while the EPG is downloading. Let the first update finish before trying another fix.",
    color: "#7B2FFF",
  },
  {
    title: "Check your internet connection",
    body: "The EPG file needs an internet connection to download and update. Even if live channels are playing, a weak or unstable connection can interrupt the guide update. Restart your router, move closer to Wi-Fi, use Ethernet if available, pause large downloads, and try refreshing the EPG again after the connection improves.",
    color: "#2563EB",
  },
  {
    title: "Update your IPTV application",
    body: "An outdated IPTV player can have problems loading playlists, refreshing guide information, or displaying programme details. Install updates from the official source, restart the application, reload your playlist, and refresh the EPG. Also check whether your device software is up to date. Avoid unofficial APK files from unknown websites.",
    color: "#FF6B2C",
  },
  {
    title: "Contact your IPTV provider",
    body: "If the EPG is still not working, the problem may be with the guide source itself. Contact support and share your IPTV player name, device model, whether all or selected channels are missing the guide, whether live TV still works, and a screenshot of the blank or incorrect TV guide.",
    color: "#E91E8C",
  },
] as const;

const DEVICE_TIPS = [
  {
    title: "Firestick",
    body: "Refresh the guide from the application settings. Then open Fire TV Settings → Applications → Manage Installed Applications → your IPTV player → Clear Cache. Reopen the app and update the EPG. Also check Fire TV date and time settings if programme timings look wrong.",
    color: "#FF6B2C",
  },
  {
    title: "Android TV and Google TV",
    body: "Open Settings → Apps → your IPTV player and check storage and cache options. After clearing the cache, refresh the EPG. If you use an M3U playlist, also confirm the correct XMLTV guide URL is saved in the playlist settings.",
    color: "#E91E8C",
  },
  {
    title: "IPTV Smarters Pro",
    body: "Open the Live TV or EPG section and look for a refresh or reload option. For M3U login, confirm the EPG URL has been added if required. For Xtream Codes login, check the account details and refresh the guide. Menu names can vary by version.",
    color: "#7B2FFF",
  },
  {
    title: "TiviMate",
    body: "Open Settings → EPG, confirm the correct guide source is available, then update programme information. For M3U playlists, confirm the XMLTV source has been added. Check EPG time offset and channel matching if only selected channels are missing information.",
    color: "#2563EB",
  },
] as const;

const QUICK_ROWS = [
  {
    see: "No information on every channel",
    reason: "Missing or unavailable EPG source",
    fix: "Check the EPG URL",
  },
  {
    see: "Guide is blank after first setup",
    reason: "Initial guide download is incomplete",
    fix: "Wait and refresh",
  },
  {
    see: "Only a few channels have no guide",
    reason: "Channel mapping issue",
    fix: "Check channel IDs",
  },
  {
    see: "Programme timings are one hour out",
    reason: "Time zone or offset problem",
    fix: "Check device time and EPG offset",
  },
  {
    see: "Old programmes remain in the guide",
    reason: "Outdated cached information",
    fix: "Refresh the EPG",
  },
  {
    see: "Guide stops updating",
    reason: "Automatic update is not working",
    fix: "Check update settings",
  },
  {
    see: "EPG loads very slowly",
    reason: "Large guide file or unstable connection",
    fix: "Check internet and clear cache",
  },
  {
    see: "Guide disappeared after changing playlist",
    reason: "Old or missing guide source",
    fix: "Check the new playlist settings",
  },
] as const;

const PREVENT_TIPS = [
  "Keep automatic EPG updates enabled so programme information can refresh without manual work.",
  "Keep your device time correct. Incorrect time zone settings can affect the entire guide.",
  "Use the correct playlist and EPG details. Avoid mixing old playlist information with a new guide URL.",
  "Update your IPTV player from a trusted source to reduce application-related problems.",
  "Avoid clearing app data unnecessarily. Clearing the cache is usually a better first step.",
  "Check the guide after changing devices and allow the EPG to download fully before assuming it is not working.",
] as const;

const FAQS: FaqItem[] = [
  {
    id: "what-epg",
    q: "What is EPG in Sky Glass IPTV?",
    a: "EPG stands for Electronic Programme Guide. It shows programme names, start and end times, and upcoming show information. Channel streams and guide data can load separately, so live TV can work while the guide stays blank.",
  },
  {
    id: "blank-guide",
    q: "Why is my Sky Glass IPTV TV guide blank?",
    a: "The EPG source may be missing, incorrect, or still downloading. Refresh the guide, check the EPG URL or account connection, and confirm your device date and time settings.",
  },
  {
    id: "some-channels",
    q: "Why do only some channels show no EPG information?",
    a: "That is often a channel mapping issue. The playlist channel ID may not match the guide source. Refresh the guide and ask your provider to check the channel listings if the problem continues.",
  },
  {
    id: "wrong-times",
    q: "Why are the programme times wrong?",
    a: "Check your device time zone and the IPTV player’s EPG offset. Correct the device clock first, refresh the guide, and only then adjust the player offset if needed.",
  },
  {
    id: "clear-cache",
    q: "Should I clear cache or clear data?",
    a: "Start with Clear Cache. Clear Data can remove saved login details, playlists, and other settings, so use it only if you are prepared to set the app up again.",
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

export function BlogEpgNotWorkingArticle() {
  return (
    <article className="relative bg-transparent pt-4 sm:pt-8 lg:pt-10">
      <Container className="pb-10 sm:pb-16 lg:pb-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#5C607A] sm:text-[13px]">
            Troubleshooting guide
          </p>
          <h1 className="mt-2 text-[26px] font-bold leading-[1.18] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-[38px] sm:leading-[1.12] lg:text-[42px]">
            Sky Glass IPTV EPG Not Working: Fix{" "}
            <span className="text-gradient-brand">Missing TV Guide</span>
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
              When the EPG is not working on Sky Glass IPTV, you may see a blank
              TV guide, missing programme names, incorrect show times, or
              channels without any schedule information. The channels may still
              play normally, but you cannot see what is currently showing or
              what is coming next.
            </p>
            <p>
              This usually happens because the EPG link has not loaded properly,
              the playlist has not been updated, the device has an incorrect
              date or time, or the IPTV player is having trouble reading the
              guide data.
            </p>
            <p>
              The good thing is that you do not always need to reinstall the app
              or change your IPTV subscription. In most cases, a few checks can
              bring the TV guide back. Here is what to check and how to fix the
              most common Sky Glass IPTV EPG problems.
            </p>
          </Prose>

          <section className="space-y-4">
            <SectionTitle>
              What Is EPG in{" "}
              <span className="text-gradient-brand">Sky Glass IPTV?</span>
            </SectionTitle>
            <div className="glass-card p-5 sm:p-6">
              <Prose>
                <p>
                  EPG stands for Electronic Programme Guide. It is the TV guide
                  that displays programme names, starting times, ending times,
                  and information about upcoming shows on different channels.
                </p>
                <p>
                  When you open the guide in your IPTV player, you can see what
                  is currently playing and what is scheduled next. Some players
                  also show programme descriptions and information about future
                  broadcasts.
                </p>
                <p>
                  The EPG data is not always loaded in the same way as live TV
                  channels. Your channel list may come from an IPTV playlist,
                  while the programme information comes from a separate guide
                  source, commonly provided in XMLTV format.
                </p>
                <p>
                  That is why your channels can work perfectly while the TV
                  guide remains empty. The video stream and programme schedule
                  are two different things.
                </p>
              </Prose>
            </div>
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Why Is Sky Glass IPTV EPG Not{" "}
              <span className="text-gradient-brand">Working?</span>
            </SectionTitle>
            <Prose>
              <p>
                There is no single reason behind every EPG problem. Sometimes
                the guide has not finished loading, while in other cases the
                source link or channel information is incorrect.
              </p>
            </Prose>
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-left">
                  <thead>
                    <tr className="border-b border-[#0B0E2C]/10 bg-[rgba(11,14,44,0.02)]">
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        EPG problem
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Possible cause
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        What to check
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {WHY_ROWS.map((row) => (
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
                          {row.check}
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
                Before changing anything, check whether live channels are
                playing normally. If they are, the problem is more likely
                related to the guide data than your entire IPTV connection.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <SectionTitle>
              How to Fix Sky Glass IPTV EPG Not{" "}
              <span className="text-gradient-brand">Working?</span>
            </SectionTitle>
            <p className="text-[14px] leading-[1.65] text-[#5C607A] sm:text-[15px]">
              Work through these fixes one by one. Start with the simple checks
              before changing playlist settings or reinstalling your IPTV
              player.
            </p>
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
              How to Fix Sky Glass IPTV EPG on Different{" "}
              <span className="text-gradient-brand">Devices?</span>
            </SectionTitle>
            <p className="text-[14px] leading-[1.65] text-[#5C607A] sm:text-[15px]">
              The general troubleshooting process is similar across devices, but
              the settings can be in different places.
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
              If playlist login is also failing, see our{" "}
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
              Sky Glass IPTV EPG Problems and{" "}
              <span className="text-gradient-brand">Quick Fixes</span>
            </SectionTitle>
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] text-left">
                  <thead>
                    <tr className="border-b border-[#0B0E2C]/10 bg-[rgba(11,14,44,0.02)]">
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        What you see
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Likely reason
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Recommended fix
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {QUICK_ROWS.map((row) => (
                      <tr
                        key={row.see}
                        className="border-b border-[#0B0E2C]/8 last:border-b-0"
                      >
                        <td className="px-4 py-3 text-[13px] font-semibold text-[#0B0E2C] sm:px-5 sm:text-[14px]">
                          {row.see}
                        </td>
                        <td className="px-4 py-3 text-[13px] text-[#5C607A] sm:px-5 sm:text-[14px]">
                          {row.reason}
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
              How to Prevent Sky Glass IPTV EPG{" "}
              <span className="text-gradient-brand">Problems?</span>
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
            <FaqAccordionList faqs={FAQS} defaultOpenId="what-epg" />
          </section>

          <section className="space-y-4">
            <SectionTitle>
              <span className="text-gradient-brand">Conclusion</span>
            </SectionTitle>
            <div className="glass-card space-y-3 p-5 sm:space-y-4 sm:p-6">
              <Prose>
                <p>
                  A missing EPG does not always mean your Sky Glass IPTV
                  subscription has stopped working. Your live channels may
                  continue to play because the programme guide uses separate
                  data that needs to load and update correctly.
                </p>
                <p>
                  Start by refreshing the EPG, checking your playlist and guide
                  URL, and making sure your device has the correct time
                  settings. If only a few channels are missing information, the
                  problem may be related to channel mapping rather than the
                  entire guide.
                </p>
                <p>
                  If none of these steps works, contact your IPTV provider and
                  ask them to check the EPG source and channel listings. There
                  is no need to reinstall everything before checking these
                  basic settings.
                </p>
                <p>
                  A working EPG makes it much easier to browse live TV, check
                  upcoming programmes, and find what you want to watch without
                  opening every channel individually.
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
                href={whatsappUrl("Sky Glass IPTV EPG not working — need help")}
                target="_blank"
                rel="noopener noreferrer"
                className="border-gradient-brand inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[20px] px-5 py-3 text-center text-[14px] font-semibold sm:px-6"
              >
                <Headphones
                  className="h-4 w-4 shrink-0 text-[#7B2FFF]"
                  strokeWidth={2}
                  aria-hidden
                />
                <span className="text-gradient-brand">Ask about EPG help</span>
              </a>
            </div>
          </section>
        </div>
      </Container>
    </article>
  );
}
