import { Info } from "lucide-react";

const ROKU_PLAYERS = ["Ibo Player", "IPTV Smarters", "CR7 Player"];

export function OtherDevicesContent() {
  return (
    <div>
      <h3 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[32px] sm:leading-[1.15] lg:text-[38px]">
        Roku, MAG and{" "}
        <span className="text-gradient-brand">Enigma2</span>
      </h3>

      <div className="mt-8 space-y-10 sm:space-y-12">
        <div>
          <h4 className="text-[18px] font-bold text-[#0B0E2C] sm:text-[22px]">
            Roku
          </h4>
          <p className="mt-3 text-[14px] leading-[1.6] text-[#5C607A] sm:text-[15px] sm:leading-[1.75]">
            Check the Roku Channel Store on your device for an available version
            of:
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {ROKU_PLAYERS.map((player) => (
              <li
                key={player}
                className="glass-card px-4 py-2.5 text-[14px] font-semibold text-[#0B0E2C]"
              >
                {player}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[14px] leading-[1.6] text-[#5C607A] sm:text-[15px] sm:leading-[1.75]">
            Install one compatible player and tell support its name and your Roku
            model. Ask which account format that player requires, enter the
            supplied details and test playback. Channel availability may vary by
            device and region; if none of these players appears for your Roku,
            ask support to check your model before purchasing or activating a
            player.
          </p>
        </div>

        <div className="border-t border-[#0B0E2C]/10 pt-8 sm:pt-10">
          <h4 className="text-[18px] font-bold text-[#0B0E2C] sm:text-[22px]">
            MAG boxes and Enigma2
          </h4>
          <p className="mt-3 text-[14px] leading-[1.6] text-[#5C607A] sm:text-[15px] sm:leading-[1.75]">
            These devices require model-specific instructions. Send support the
            exact model and software information, and ask whether it needs portal
            or playlist details. Do not use the Android APK unless support
            confirms that a device can use that route.
          </p>
          <div className="mt-4 flex items-start gap-2.5 glass-card p-5 sm:gap-3 sm:p-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[20px] bg-[#FF6B2C]/10 text-[#FF6B2C]">
              <Info className="h-3.5 w-3.5 sm:h-5 sm:w-5" strokeWidth={1.75} />
            </span>
            <p className="text-[14px] leading-[1.55] text-[#5C607A] sm:text-[14px] sm:leading-relaxed">
              Model-specific setup from support — do not guess portal or playlist
              settings without confirmation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
