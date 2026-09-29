import { Info } from "lucide-react";

const DESKTOP_PLAYERS = [
  "IPTV Smarters Expert",
  "Ibo Player",
  "IPTV One",
];

export function DesktopContent() {
  return (
    <div>
      <h3 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[32px] sm:leading-[1.15] lg:text-[38px]">
        Windows and{" "}
        <span className="text-gradient-brand">Mac</span>
      </h3>
      <p className="mt-4 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-4 sm:text-[15px] sm:leading-[1.75]">
        Check for a compatible version of:
      </p>

      <ul className="mt-4 grid gap-2 sm:grid-cols-3 sm:gap-3">
        {DESKTOP_PLAYERS.map((player) => (
          <li
            key={player}
            className="glass-card px-4 py-3 text-[14px] font-semibold text-[#0B0E2C] sm:px-5 sm:py-3.5"
          >
            {player}
          </li>
        ))}
      </ul>

      <p className="mt-5 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:text-[15px] sm:leading-[1.75]">
        Tell support your operating system and chosen player so you receive the
        correct login method. Install the suitable player, enter your supplied
        account information and test playback. The Downloader code is not a
        Windows or Mac installer.
      </p>

      <div className="mt-5 flex items-start gap-2.5 glass-card p-5 sm:mt-6 sm:gap-3 sm:p-6">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[20px] bg-[#2563EB]/10 text-[#2563EB]">
          <Info className="h-3.5 w-3.5 sm:h-5 sm:w-5" strokeWidth={1.75} />
        </span>
        <p className="text-[14px] leading-[1.55] text-[#5C607A] sm:text-[14px] sm:leading-relaxed">
          Do not use the Firestick Downloader code or Android APK to install on
          Windows or Mac.
        </p>
      </div>
    </div>
  );
}
