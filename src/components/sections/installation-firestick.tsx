import { Headphones, ArrowRight, Info } from "lucide-react";
import { whatsappUrl } from "@/lib/site";
import { DownloaderCodeCard } from "@/components/sections/downloader-code-card";

const STEPS = [
  "Open Downloader and allow the permissions it needs. If Fire TV prompts you to permit app installation through Downloader, follow its on-screen settings.",
  "Enter 9557305 in Downloader.",
  "Follow the prompts to install the Sky Glass app. If the code opens an unexpected destination, stop and confirm it with support.",
  "Open the installed app and allow its necessary permissions.",
  "Choose Add Playlist and enter the details provided by support exactly as supplied.",
  "Save the playlist, allow it to load and test a stream.",
];

export function FirestickContent() {
  return (
    <div>
      <h3 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[32px] sm:leading-[1.15] lg:text-[38px]">
        Firestick and{" "}
        <span className="text-gradient-brand">Fire TV Cube</span>
      </h3>

      <div className="mt-5 sm:mt-6">
        <DownloaderCodeCard deviceLabel="Firestick & Fire TV Cube" />
      </div>

      <ol className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
        {STEPS.map((step, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 glass-card p-4 sm:gap-4 sm:p-5"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FF6B2C]/10 text-[12px] font-bold text-[#FF6B2C] sm:h-9 sm:w-9 sm:text-[13px]">
              {idx + 1}
            </span>
            <p className="min-w-0 flex-1 text-[14px] leading-[1.6] text-[#5C607A] sm:text-[15px] sm:leading-[1.75]">
              {step}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-5 flex items-start gap-2.5 glass-card p-5 sm:mt-6 sm:gap-3 sm:p-6">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[20px] bg-[#2563EB]/10 text-[#2563EB]">
          <Info className="h-3.5 w-3.5 sm:h-5 sm:w-5" strokeWidth={1.75} />
        </span>
        <p className="text-[14px] leading-[1.55] text-[#5C607A] sm:text-[14px] sm:leading-relaxed">
          <span className="font-semibold text-[#0B0E2C]">9557305</span> is the
          Sky Glass Downloader code for the app. It is not your account password
          or subscription activation code.
        </p>
      </div>

      <div className="mt-5 sm:mt-8">
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-[20px] bg-gradient-brand px-6 py-2.5 text-[13px] font-semibold text-white transition-opacity duration-150 hover:opacity-90 sm:min-h-[48px] sm:w-auto sm:py-3 sm:text-[14px]"
        >
          <Headphones className="h-4 w-4 shrink-0" strokeWidth={2} />
          Get Firestick Setup Help
          <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
        </a>
      </div>
    </div>
  );
}
