import { Info } from "lucide-react";

const PLAYERS = [
  "Ibo Player",
  "Ibo Player Pro",
  "Smart One",
  "CR7 Player",
  "Bay IPTV",
  "Hot IPTV",
  "Bob Player",
];

const STEPS = [
  "Install one suitable player; you do not need all seven. Availability can vary by TV model and operating system.",
  "Open the installed player and find the MAC address and device key or activation key it displays.",
  "Send the player name, MAC address and key to support through your private support conversation.",
  "Follow the supplied playlist instructions, then refresh or reopen the player if necessary.",
  "Test a stream after the categories appear.",
];

export function SmartTvContent() {
  return (
    <div>
      <h3 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[32px] sm:leading-[1.15] lg:text-[38px]">
        Samsung, LG, Sony, Hisense, TCL and Philips{" "}
        <span className="text-gradient-brand">smart TVs</span>
      </h3>
      <p className="mt-4 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-4 sm:text-[15px] sm:leading-[1.75]">
        Search your TV&apos;s app store for a player supported on your exact model.
        Options to check are:
      </p>

      <ul className="mt-4 grid gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
        {PLAYERS.map((player) => (
          <li
            key={player}
            className="flex items-center gap-2.5 glass-card px-4 py-3 text-[14px] font-semibold text-[#0B0E2C] sm:px-5 sm:py-3.5"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#7B2FFF]" />
            {player}
          </li>
        ))}
      </ul>

      <ol className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
        {STEPS.map((step, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 sm:gap-4"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#7B2FFF]/10 text-[12px] font-bold text-[#7B2FFF] sm:h-9 sm:w-9 sm:text-[13px]">
              {idx + 1}
            </span>
            <p className="min-w-0 flex-1 text-[14px] leading-[1.6] text-[#5C607A] sm:text-[15px] sm:leading-[1.75]">
              {step}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-5 flex items-start gap-2.5 glass-card p-5 sm:mt-6 sm:gap-3 sm:p-6">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[20px] bg-[#E91E8C]/10 text-[#E91E8C]">
          <Info className="h-3.5 w-3.5 sm:h-5 sm:w-5" strokeWidth={1.75} />
        </span>
        <p className="text-[14px] leading-[1.55] text-[#5C607A] sm:text-[14px] sm:leading-relaxed">
          Some of these players charge their own activation fee, separate from
          your IPTV subscription.
        </p>
      </div>

      <div className="mt-5 glass-card p-5 sm:mt-6 sm:p-6">
        <p className="text-[14px] leading-[1.6] text-[#5C607A] sm:text-[15px] sm:leading-[1.75]">
          <span className="font-semibold text-[#0B0E2C]">
            For Sony, Hisense, TCL and Philips:
          </span>{" "}
          Check whether your particular TV runs Android TV or Google TV. If it
          does and is compatible with the Sky Glass app, you may follow the
          Android route instead. Otherwise, use an available player from your
          TV&apos;s app store. The model and operating system, rather than the brand
          alone, determine the route.
        </p>
      </div>
    </div>
  );
}
