import {
  XCircle,
  Key,
  RotateCcw,
  WifiOff,
  EyeOff,
  CreditCard,
  Check,
  AlertTriangle,
} from "lucide-react";
import { Container } from "@/components/layout/container";

const PROBLEMS = [
  {
    title: "Application Won't Install",
    icon: XCircle,
    color: "#FF6B2C",
    items: [
      "Check available device storage.",
      "Enable installation permissions.",
      "Verify application file compatibility.",
      "Ensure download is complete.",
    ],
  },
  {
    title: "Login Not Working",
    icon: Key,
    color: "#E91E8C",
    items: [
      "Enter details exactly as supplied.",
      "Check for accidental spaces.",
      "Verify capital letters and symbols.",
    ],
  },
  {
    title: "Content Not Loading",
    icon: RotateCcw,
    color: "#7B2FFF",
    items: [
      "Restart the IPTV application.",
      "Check your internet connection.",
      "Restart device and router.",
      "Verify subscription remains active.",
    ],
  },
  {
    title: "Buffering Issues",
    icon: WifiOff,
    color: "#2563EB",
    items: [
      "Use Ethernet or strong Wi-Fi.",
      "Close background applications.",
      "Try another stream channel.",
    ],
  },
  {
    title: "App Has Disappeared",
    icon: EyeOff,
    color: "#FF6B2C",
    items: [
      "Reinstall official application.",
      "Check OS restrictions/updates.",
      "Contact support for help.",
    ],
  },
  {
    title: "Player Activation",
    icon: CreditCard,
    color: "#E91E8C",
    items: [
      "Third-party players may charge fees.",
      "These are separate from Sky Glass plans.",
    ],
  },
];

export function InstallationTroubleshooting() {
  return (
    <section
      id="troubleshooting"
      className="relative border-t border-[#0B0E2C]/10 bg-white"
    >
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Common Sky Glass IPTV{" "}
            <span className="text-gradient-brand">Setup Problems</span>
          </h2>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {PROBLEMS.map((problem) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.title}
                className="group relative flex flex-col overflow-hidden rounded-[1px] bg-white p-5 shadow-[var(--card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--card-shadow-hover)] sm:p-6"
                style={
                  {
                    "--card-shadow": `0 4px 20px rgba(11, 14, 44, 0.04), 0 8px 24px ${problem.color}08`,
                    "--card-shadow-hover": `0 8px 30px rgba(11, 14, 44, 0.08), 0 12px 40px ${problem.color}15`,
                  } as React.CSSProperties
                }
              >
                <div className="relative z-10 flex h-full gap-2.5 sm:gap-4">
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] sm:h-10 sm:w-10"
                        style={{
                          backgroundColor: `${problem.color}15`,
                          color: problem.color,
                        }}
                      >
                        <Icon className="h-3.5 w-3.5 sm:h-5 sm:w-5" strokeWidth={2} />
                      </span>
                      <h3 className="text-[13px] font-bold text-[#0B0E2C] sm:text-base">
                        {problem.title}
                      </h3>
                    </div>
                    <ul className="mt-2.5 flex-1 space-y-1.5 sm:mt-4 sm:space-y-2.5">
                      {problem.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-[13px] leading-snug text-[#5C607A] sm:gap-2.5 sm:text-[13px]"
                        >
                          <Check
                            className="mt-0.5 h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5"
                            style={{ color: problem.color }}
                            strokeWidth={3}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-4 flex max-w-xl items-center gap-2.5 rounded-[1px] bg-[#E91E8C]/5 p-4 text-[14px] text-[#0B0E2C] sm:mt-12 sm:gap-3 sm:p-4 sm:text-[13px]">
          <AlertTriangle className="h-4 w-4 shrink-0 text-[#E91E8C] sm:h-5 sm:w-5" />
          <p>
            <strong>EPG Not Displaying?</strong> Allow the app time to download
            program info. Refresh the playlist or EPG in settings.
          </p>
        </div>
      </Container>
    </section>
  );
}
