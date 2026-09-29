import { Info } from "lucide-react";

const PLAYERS = ["UHF IPTV", "Ibo Player", "GSE Smart IPTV"];

export function AppleContent() {
  return (
    <div>
      <h3 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[32px] sm:leading-[1.15] lg:text-[38px]">
        iPhone, iPad and{" "}
        <span className="text-[#7B2FFF]">Apple TV</span>
      </h3>
      <p className="mt-4 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-4 sm:text-[15px] sm:leading-[1.75]">
        Check the App Store for a suitable version of:
      </p>

      <ul className="mt-4 grid gap-2 sm:grid-cols-3 sm:gap-3">
        {PLAYERS.map((player) => (
          <li
            key={player}
            className="glass-card px-4 py-3 text-[14px] font-semibold text-[#0B0E2C] sm:px-5 sm:py-3.5"
          >
            {player}
          </li>
        ))}
      </ul>

      <p className="mt-5 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:text-[15px] sm:leading-[1.75]">
        Choose an app available for your particular iPhone, iPad or Apple TV,
        then tell support which one you installed. They can provide the matching
        login format. Enter the supplied details and allow the playlist to load.
      </p>

      <div className="mt-5 flex items-start gap-2.5 glass-card p-5 sm:mt-6 sm:gap-3 sm:p-6">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[20px] bg-[#2563EB]/10 text-[#2563EB]">
          <Info className="h-3.5 w-3.5 sm:h-5 sm:w-5" strokeWidth={1.75} />
        </span>
        <p className="text-[14px] leading-[1.55] text-[#5C607A] sm:text-[14px] sm:leading-relaxed">
          Do not use the Android APK or Firestick Downloader code on an Apple
          device. App availability and any developer charge can differ between
          iOS and tvOS.
        </p>
      </div>
    </div>
  );
}
