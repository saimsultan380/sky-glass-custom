import {
  XCircle,
  Key,
  RotateCcw,
  WifiOff,
  AlertTriangle,
  CreditCard,
  Check,
} from "lucide-react";
import { Container } from "@/components/layout/container";

const PROBLEMS = [
  {
    title: "The Application Will Not Install",
    icon: XCircle,
    color: "#FF6B2C",
    items: [
      "Check device compatibility and available storage. Confirm that the download completed and that you are using the installation method intended for your platform.",
    ],
  },
  {
    title: "My Login Is Rejected",
    icon: Key,
    color: "#E91E8C",
    items: [
      "Compare the details with the original message. Check capital letters, punctuation and extra spaces. Confirm that you selected the correct login method.",
    ],
  },
  {
    title: "The Categories Do Not Load",
    icon: RotateCcw,
    color: "#7B2FFF",
    items: [
      "Check your internet connection and account status. Close and reopen the application, then allow time for the content to load.",
    ],
  },
  {
    title: "Playback Keeps Pausing",
    icon: WifiOff,
    color: "#2563EB",
    items: [
      "Try another stream and note whether the problem affects one channel or the whole application. Where practical, test a wired connection or stronger Wi-Fi signal.",
    ],
  },
  {
    title: "Programme Information Is Missing",
    icon: AlertTriangle,
    color: "#7B2FFF",
    items: [
      "Refresh the programme guide if your player supports it. Some channels may not provide complete schedule information.",
    ],
  },
  {
    title: "The Player Requests Payment",
    icon: CreditCard,
    color: "#E91E8C",
    items: [
      "A third-party player may require its own activation. This is separate from the service subscription.",
    ],
  },
];

export function InstallationTroubleshooting() {
  return (
    <section
      id="troubleshooting"
      className="relative border-t border-[#0B0E2C]/10 bg-transparent"
    >
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Common{" "}
            <span className="text-gradient-brand">Setup Problems</span>
          </h2>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {PROBLEMS.map((problem) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.title}
                className="group relative flex flex-col overflow-hidden glass-card card-hover-lift p-5 hover:-translate-y-1 sm:p-6">
                <div className="relative z-10 flex h-full gap-2.5 sm:gap-4">
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[20px] sm:h-10 sm:w-10"
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
