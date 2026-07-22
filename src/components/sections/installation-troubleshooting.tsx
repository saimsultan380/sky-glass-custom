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
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#E91E8C]">
            Support
          </p>
          <h2 className="mt-3 text-[28px] font-bold leading-[1.15] tracking-tight text-[#0B0E2C] sm:text-4xl sm:leading-[1.12] lg:text-[42px]">
            Common Sky Glass IPTV{" "}
            <span className="text-gradient-brand">Setup Problems</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((problem) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.title}
                className="group relative flex flex-col overflow-hidden rounded-[8px] border border-[#0B0E2C]/10 bg-white p-6 shadow-[var(--card-shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0B0E2C]/20 hover:shadow-[var(--card-shadow-hover)]"
                style={
                  {
                    "--card-shadow": `0 4px 20px rgba(11, 14, 44, 0.04), 0 8px 24px ${problem.color}08`,
                    "--card-shadow-hover": `0 8px 30px rgba(11, 14, 44, 0.08), 0 12px 40px ${problem.color}15`,
                  } as React.CSSProperties
                }
              >
                <div className="relative z-10 flex h-full gap-4">
                  <span className="accent-line-brand" aria-hidden />
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px]"
                        style={{
                          backgroundColor: `${problem.color}15`,
                          color: problem.color,
                        }}
                      >
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </span>
                      <h3 className="font-bold text-[#0B0E2C]">
                        {problem.title}
                      </h3>
                    </div>
                    <ul className="mt-4 flex-1 space-y-2.5">
                      {problem.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-[13px] leading-snug text-[#5C607A]"
                        >
                          <Check
                            className="mt-0.5 h-3.5 w-3.5 shrink-0"
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

        <div className="mx-auto mt-10 flex max-w-xl items-center gap-3 rounded-[8px] bg-[#E91E8C]/5 p-4 text-[13px] text-[#0B0E2C] sm:mt-12">
          <AlertTriangle className="h-5 w-5 shrink-0 text-[#E91E8C]" />
          <p>
            <strong>EPG Not Displaying?</strong> Allow the app time to download
            program info. Refresh the playlist or EPG in settings.
          </p>
        </div>
      </Container>
    </section>
  );
}
