import { Laptop, Monitor } from "lucide-react";

export function DesktopContent() {
  return (
    <div>
      <h3 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[32px] sm:leading-[1.15] lg:text-[38px]">
        Set Up Windows or{" "}
        <span className="text-gradient-brand">Mac</span>
      </h3>
      <p className="mt-4 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-4 sm:text-[15px] sm:leading-[1.75]">
        Use a supported IPTV player designed for your computer’s operating
        system.
      </p>
      <p className="mt-3 text-[14px] leading-[1.6] text-[#5C607A] sm:text-[15px] sm:leading-[1.75]">
        After installation, enter the required account or playlist information
        and allow the player to load. Check sound output and display settings if
        playback appears to work but you cannot hear audio or see the picture
        correctly.
      </p>

      <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 lg:grid-cols-2">
        <div className="glass-card p-5 sm:p-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[20px] bg-[#2563EB]/10 text-[#2563EB] sm:h-10 sm:w-10">
              <Monitor className="h-3.5 w-3.5 sm:h-5 sm:w-5" strokeWidth={1.75} />
            </span>
            <h3 className="text-base font-bold leading-snug text-[#0B0E2C] sm:text-xl">
              Windows
            </h3>
          </div>
          <p className="mt-3 text-[14px] leading-[1.55] text-[#5C607A] sm:text-[13px] sm:leading-relaxed">
            Supported Windows player
          </p>
        </div>

        <div className="glass-card p-5 sm:p-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[20px] bg-[#7B2FFF]/10 text-[#7B2FFF] sm:h-10 sm:w-10">
              <Laptop className="h-3.5 w-3.5 sm:h-5 sm:w-5" strokeWidth={1.75} />
            </span>
            <h3 className="text-base font-bold leading-snug text-[#0B0E2C] sm:text-xl">
              Mac
            </h3>
          </div>
          <p className="mt-3 text-[14px] leading-[1.55] text-[#5C607A] sm:text-[13px] sm:leading-relaxed">
            Supported macOS player
          </p>
        </div>
      </div>
    </div>
  );
}
