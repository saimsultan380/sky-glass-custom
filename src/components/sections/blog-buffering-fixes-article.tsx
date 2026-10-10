import type { ReactNode } from "react";
import Link from "next/link";
import { Headphones, Wifi } from "lucide-react";
import { Container } from "@/components/layout/container";
import { BlogCoverImage } from "@/components/sections/blog-cover-image";
import {
  FaqAccordionList,
  type FaqItem,
} from "@/components/sections/faq-section";
import { getBlogPost } from "@/lib/blog";
import { siteRoutes } from "@/lib/routes";
import { whatsappUrl } from "@/lib/site";

const POST = getBlogPost("sky-glass-iptv-keeps-buffering")!;

const CAUSES = [
  "Weak or unstable Wi-Fi",
  "Slow internet or network congestion",
  "An overloaded IPTV server",
  "A particular channel or stream having problems",
  "Too many background apps running on your device",
  "An outdated IPTV player or Firestick software",
  "High-bitrate streams that require more bandwidth",
  "Temporary app cache or storage issues",
] as const;

const FIXES = [
  {
    title: "Restart the Sky Glass IPTV app",
    body: "Start with the simplest solution. Temporary app errors can interrupt playback or prevent channels from loading correctly. Exit the Sky Glass IPTV app, return to your device’s home screen, close the app completely if your device allows it, open the app again, and play the channel that was buffering. If the problem returns after a few minutes, continue with the next fix.",
    color: "#FF6B2C",
  },
  {
    title: "Restart your Firestick or streaming device",
    body: "If you are using Sky Glass IPTV on Firestick, a device restart can resolve temporary performance problems. On Fire TV, open Settings and look for Restart under My Fire TV or Device & Software. Wait for the Firestick to restart, then open the Sky Glass IPTV player and test playback. On another compatible device, use its normal power or restart controls.",
    color: "#E91E8C",
  },
  {
    title: "Restart your Wi-Fi router",
    body: "Your router may need a fresh connection if the network has become unstable. Turn off your router, wait approximately 30 seconds, turn it back on, allow the internet connection to return, reconnect your streaming device if necessary, and test Sky Glass IPTV again. This can help with temporary network problems, although it will not resolve an issue caused by the IPTV provider’s server.",
    color: "#7B2FFF",
  },
  {
    title: "Check your internet speed and stability",
    body: "A fast internet package does not always guarantee smooth IPTV playback. Your Firestick may receive a weak signal, or your connection may experience sudden speed drops. Run a speed test and check whether the connection remains stable. As a general guide, some HD streams work well with around 10 Mbps, while 4K streams may need considerably more bandwidth. If your speed drops whenever buffering starts, investigate your Wi-Fi connection first.",
    color: "#2563EB",
  },
  {
    title: "Switch between 2.4 GHz and 5 GHz Wi-Fi",
    body: "If your router offers both Wi-Fi bands, try connecting your device to the other one. The 5 GHz band can provide faster speeds at shorter distances, while 2.4 GHz can offer better coverage through walls. If your Firestick is close to the router, 5 GHz may work better. If it is in another room, test both bands and keep the one that provides the most stable connection.",
    color: "#FF6B2C",
  },
  {
    title: "Move your device closer to the router",
    body: "A weak Wi-Fi signal can cause Sky Glass IPTV buffering even when your broadband speed is sufficient. Try moving the router to an open location, reducing obstructions, or repositioning the Firestick with a compatible HDMI extender. Avoid placing the router inside a closed cabinet or directly beside equipment that may interfere with the wireless signal.",
    color: "#E91E8C",
  },
  {
    title: "Reduce internet usage on other devices",
    body: "Other devices may be using bandwidth while you watch IPTV. Large downloads, online gaming, video calls, cloud backups, and multiple high-resolution streams can all contribute to network congestion. Pause unnecessary downloads and close streams that are not being used. If buffering mainly happens during busy evening hours, compare playback at a quieter time.",
    color: "#7B2FFF",
  },
  {
    title: "Clear the Sky Glass IPTV app cache",
    body: "Temporary files can sometimes contribute to app performance issues on Firestick. Go to Settings → Applications → Manage Installed Applications → Your IPTV App → Clear Cache. Choose Clear Cache first rather than Clear Data — clearing data may remove saved settings, login information, or playlists. Open the app again after clearing the cache and test a few channels.",
    color: "#2563EB",
  },
  {
    title: "Free up storage on your Firestick",
    body: "A Firestick with very little available storage may become slow or less responsive. Open your installed applications list and uninstall apps you no longer use. You can also clear the cache of other apps that have accumulated temporary files. Once you have freed up space, restart your device and try Sky Glass IPTV again. You do not need third-party cleaning tools for this check.",
    color: "#FF6B2C",
  },
  {
    title: "Update your IPTV player and device software",
    body: "An outdated IPTV player or device operating system may cause compatibility problems. Check whether an update is available through the application’s official distribution source. Also look for system updates in your Firestick or smart TV settings. Avoid downloading unknown APK files that promise to fix buffering — use a trusted source for any application update.",
    color: "#E91E8C",
  },
  {
    title: "Lower the video quality",
    body: "Some IPTV services offer different stream qualities. If your player allows you to select a lower-bitrate stream, try it. Switching from a high-bitrate 4K stream to an available HD stream may reduce the bandwidth required for playback. Remember that lower quality will not necessarily fix an overloaded server or a faulty stream.",
    color: "#7B2FFF",
  },
  {
    title: "Test different Sky Glass IPTV channels",
    body: "Try several channels from different categories and compare their playback. Only one channel buffers: the individual stream may be experiencing a problem. Several channels buffer: the issue may affect a group of streams or a shared server. Every channel buffers: check your internet connection, device, app, and provider service. Report a repeatedly failing channel name and time to your IPTV provider.",
    color: "#2563EB",
  },
  {
    title: "Try an Ethernet connection",
    body: "If your streaming device supports a compatible Ethernet adapter, connect it directly to your router. A wired connection removes Wi-Fi signal strength and wireless interference from the equation. If Ethernet works smoothly while Wi-Fi buffers, your wireless connection may be the main problem. Ethernet cannot fix every issue — if the provider’s stream is unavailable or overloaded, playback may still be interrupted.",
    color: "#FF6B2C",
  },
  {
    title: "Check your VPN and network settings",
    body: "If you use a VPN, test whether the problem changes when you connect to a different VPN server or temporarily test your normal connection, where appropriate. A congested VPN server can reduce streaming performance. If you do not use a VPN, there is no need to install one just because IPTV is buffering. Avoid changing DNS or advanced router settings without a clear reason.",
    color: "#E91E8C",
  },
  {
    title: "Check with your IPTV provider",
    body: "If you have tried the previous fixes and Sky Glass IPTV still buffers, the problem may be outside your home network. Contact your provider if all channels continue buffering, particular channels remain unavailable, other streaming apps work normally, the same issue occurs on more than one device, or buffering repeatedly occurs at particular times. Tell them which channels are affected, when it happens, and which steps you have completed.",
    color: "#7B2FFF",
  },
] as const;

const QUICK_GUIDE = [
  {
    problem: "One channel keeps buffering",
    tryFirst: "Test other channels",
  },
  {
    problem: "All channels buffer",
    tryFirst: "Check internet stability",
  },
  {
    problem: "Firestick feels slow",
    tryFirst: "Restart it and free up storage",
  },
  {
    problem: "App freezes during playback",
    tryFirst: "Clear the app cache",
  },
  {
    problem: "HD works but 4K buffers",
    tryFirst: "Try a lower-bitrate stream",
  },
  {
    problem: "Buffering happens in the evening",
    tryFirst: "Check network congestion",
  },
  {
    problem: "Wi-Fi keeps disconnecting",
    tryFirst: "Test another Wi-Fi band or Ethernet",
  },
  {
    problem: "Other apps work, but IPTV does not",
    tryFirst: "Check the player and provider",
  },
  {
    problem: "Channels load but will not play",
    tryFirst: "Verify account and stream availability",
  },
] as const;

const FAQS: FaqItem[] = [
  {
    id: "fast-internet",
    q: "Why does Sky Glass IPTV keep buffering even with fast internet?",
    a: "Fast internet does not rule out Wi-Fi interference, packet loss, device problems, or IPTV server congestion. Test other streaming apps and several IPTV channels to identify whether the problem affects your connection or only the IPTV service.",
  },
  {
    id: "firestick",
    q: "How do I stop Sky Glass IPTV buffering on Firestick?",
    a: "Restart the app and Firestick, check your internet connection, clear the app cache, free up storage, and test different channels. If other apps work normally but IPTV continues buffering, contact your provider.",
  },
  {
    id: "night",
    q: "Why does Sky Glass IPTV buffer at night?",
    a: "Evening buffering may result from household internet congestion or increased demand on the IPTV service. Compare playback during quieter hours and check whether other streaming services experience the same problem.",
  },
  {
    id: "one-channel",
    q: "Why does Sky Glass IPTV buffer on one channel only?",
    a: "The individual channel’s stream may be experiencing a technical issue. Test other channels and contact your provider if the same channel repeatedly buffers while the rest play normally.",
  },
  {
    id: "vpn",
    q: "Will a VPN fix Sky Glass IPTV buffering?",
    a: "Not necessarily. A VPN can sometimes improve a network route, but it can also increase latency or reduce speed. Compare performance with different connection routes before deciding whether the VPN helps.",
  },
  {
    id: "cache",
    q: "Should I clear the cache or data of my IPTV app?",
    a: "Start with Clear Cache because it removes temporary files without normally deleting saved app settings. Clear Data only if necessary and after confirming that you can restore your login details and playlist.",
  },
  {
    id: "broadband",
    q: "Will faster broadband stop Sky Glass IPTV lag?",
    a: "Only if insufficient bandwidth is causing the problem. Faster broadband will not necessarily fix an overloaded IPTV server, unstable Wi-Fi, or a faulty stream.",
  },
  {
    id: "freeze-audio",
    q: "Why does Sky Glass IPTV keep freezing but the sound continues?",
    a: "The video stream may be struggling to load or render correctly. Restart the player, check device performance, lower the stream quality if possible, and test another channel to narrow down the cause.",
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

export function BlogBufferingFixesArticle() {
  return (
    <article className="relative bg-transparent pt-4 sm:pt-8 lg:pt-10">
      <Container className="pb-10 sm:pb-16 lg:pb-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#5C607A] sm:text-[13px]">
            Troubleshooting guide
          </p>
          <h1 className="mt-2 text-[26px] font-bold leading-[1.18] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-[38px] sm:leading-[1.12] lg:text-[42px]">
            Sky Glass IPTV Keeps Buffering? Top 15 Fixes to{" "}
            <span className="text-gradient-brand">Stop the Lag</span>
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
              Is your Sky Glass IPTV buffering, freezing during live TV, or
              taking too long to load channels? These problems can interrupt
              your viewing even when your internet connection appears to be
              working normally.
            </p>
            <p>
              If Sky Glass IPTV keeps buffering, the cause could be your Wi-Fi
              signal, Firestick performance, IPTV player, stream quality, or
              provider connection. The good news is that you can check these
              issues one by one without immediately replacing your device or
              upgrading your internet package.
            </p>
            <p>
              In this guide, you will learn 15 practical ways to fix Sky Glass
              IPTV buffering issues, improve playback, and troubleshoot problems
              on Firestick, Fire TV, smart TVs, and other compatible devices.
              Start with the first few fixes because they are quick to try and
              can help you identify the cause.
            </p>
          </Prose>

          <section className="space-y-4">
            <SectionTitle>
              Why Does Sky Glass IPTV Keep{" "}
              <span className="text-gradient-brand">Buffering?</span>
            </SectionTitle>
            <div className="glass-card p-5 sm:p-6">
              <Prose>
                <p>
                  Sky Glass IPTV buffering happens when a video stream cannot
                  maintain smooth playback. Your device may pause while waiting
                  for more video data, or the picture may freeze while the audio
                  continues.
                </p>
              </Prose>
              <p className="mt-4 text-[13px] font-semibold text-[#0B0E2C] sm:text-[14px]">
                Common causes include:
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
                Before changing your settings, try playing another channel. If
                only one channel buffers, the problem may be related to that
                stream. If every channel buffers, check your device and internet
                connection first.
              </p>
            </div>
          </section>

          <section className="space-y-5">
            <SectionTitle>
              Top 15 Fixes for Sky Glass IPTV{" "}
              <span className="text-gradient-brand">Buffering</span>
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
              Quick{" "}
              <span className="text-gradient-brand">Troubleshooting Guide</span>
            </SectionTitle>
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[480px] text-left">
                  <thead>
                    <tr className="border-b border-[#0B0E2C]/10 bg-[rgba(11,14,44,0.02)]">
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        Sky Glass IPTV problem
                      </th>
                      <th className="px-4 py-3 text-[12px] font-bold uppercase tracking-wide text-[#5C607A] sm:px-5 sm:text-[13px]">
                        What to try first
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {QUICK_GUIDE.map((row) => (
                      <tr
                        key={row.problem}
                        className="border-b border-[#0B0E2C]/8 last:border-b-0"
                      >
                        <td className="px-4 py-3 text-[13px] font-semibold text-[#0B0E2C] sm:px-5 sm:text-[14px]">
                          {row.problem}
                        </td>
                        <td className="px-4 py-3 text-[13px] text-[#5C607A] sm:px-5 sm:text-[14px]">
                          {row.tryFirst}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="space-y-5 border-t border-[#0B0E2C]/10 pt-10 sm:pt-12">
            <SectionTitle>
              Frequently Asked{" "}
              <span className="text-gradient-brand">Questions</span>
            </SectionTitle>
            <FaqAccordionList faqs={FAQS} defaultOpenId="fast-internet" />
          </section>

          <section className="space-y-4">
            <SectionTitle>
              Final{" "}
              <span className="text-gradient-brand">Thoughts</span>
            </SectionTitle>
            <div className="glass-card space-y-3 p-5 sm:space-y-4 sm:p-6">
              <Prose>
                <p>
                  If Sky Glass IPTV keeps buffering, start with your internet
                  connection, streaming device, and IPTV app before assuming you
                  need faster broadband or a new Firestick.
                </p>
                <p>
                  The most effective approach is to test one thing at a time. If
                  every channel buffers, investigate your network and device. If
                  only certain channels are affected, check the individual
                  streams and contact your provider when necessary.
                </p>
                <p>
                  Whether you use Sky Glass IPTV, the Sky Glass IPTV app, or a
                  Sky Glass player, the same troubleshooting principle applies:
                  identify where the problem starts before changing settings.
                </p>
                <p>
                  Work through these 15 fixes to find the cause of the lag and
                  get back to smoother playback.
                </p>
              </Prose>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={siteRoutes.contact}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[20px] bg-gradient-brand px-5 py-3 text-center text-[14px] font-semibold text-white sm:px-6"
              >
                <Wifi className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                Get support help
              </Link>
              <a
                href={whatsappUrl("Sky Glass IPTV keeps buffering — need help")}
                target="_blank"
                rel="noopener noreferrer"
                className="border-gradient-brand inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[20px] px-5 py-3 text-center text-[14px] font-semibold sm:px-6"
              >
                <Headphones
                  className="h-4 w-4 shrink-0 text-[#7B2FFF]"
                  strokeWidth={2}
                  aria-hidden
                />
                <span className="text-gradient-brand">Ask about buffering</span>
              </a>
            </div>
          </section>
        </div>
      </Container>
    </article>
  );
}
