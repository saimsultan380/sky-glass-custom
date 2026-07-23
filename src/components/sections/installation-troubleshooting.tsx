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
    title: "The Application Will Not Install",
    icon: XCircle,
    color: "#FF6B2C",
    items: [
      "Check available device storage.",
      "Enable installation permissions.",
      "You are using the correct application file.",
      "Ensure the download is complete.",
      "The application is compatible with your operating system.",
    ],
  },
  {
    title: "Login Details Are Not Working",
    icon: Key,
    color: "#E91E8C",
    items: [
      "Enter the username, password and server information exactly as supplied.",
      "Avoid adding spaces before or after the details.",
      "Check whether capital letters and special characters have been entered correctly.",
    ],
  },
  {
    title: "Content Is Not Loading",
    icon: RotateCcw,
    color: "#7B2FFF",
    items: [
      "Restart the IPTV application.",
      "Check your internet connection.",
      "Restart your device and router.",
      "Verify your subscription remains active.",
      "Allow additional time for the available categories to load.",
    ],
  },
  {
    title: "The Stream Keeps Buffering",
    icon: WifiOff,
    color: "#2563EB",
    items: [
      "Test your internet connection and close unnecessary applications.",
      "Use Ethernet or stronger Wi-Fi where possible.",
      "If the problem affects only one stream, try another available stream before changing your device settings.",
    ],
  },
  {
    title: "The Application Has Disappeared",
    icon: EyeOff,
    color: "#FF6B2C",
    items: [
      "Some devices may remove or restrict applications after an operating-system update.",
      "Reinstall the official application using the current approved installation method or contact support.",
    ],
  },
  {
    title: "The EPG Is Not Displaying",
    icon: AlertTriangle,
    color: "#7B2FFF",
    items: [
      "Allow the application enough time to download programme information.",
      "You may also refresh the playlist or EPG through the application settings.",
      "Not every channel provides complete EPG information.",
    ],
  },
  {
    title: "A Smart TV Player Requests Activation",
    icon: CreditCard,
    color: "#E91E8C",
    items: [
      "Some third-party Smart TV players require separate activation through the player developer.",
      "This charge is not included with your IPTV subscription.",
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
                className="group relative flex flex-col overflow-hidden rounded-[1px] bg-white p-5 shadow-[var(--card-shadow)] card-hover-lift hover:-translate-y-1 hover:shadow-[var(--card-shadow-hover)] sm:p-6"
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
      </Container>
    </section>
  );
}
