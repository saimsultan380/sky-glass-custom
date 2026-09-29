import {
  XCircle,
  Key,
  RotateCcw,
  WifiOff,
  CreditCard,
  Check,
  KeyRound,
} from "lucide-react";
import { Container } from "@/components/layout/container";

const PROBLEMS = [
  {
    title: "The app will not install",
    icon: XCircle,
    color: "#FF6B2C",
    items: [
      "Check device compatibility, free storage, the download and any installation permission requested on screen.",
    ],
  },
  {
    title: "The login is rejected",
    icon: Key,
    color: "#E91E8C",
    items: [
      "Recheck the details and make sure you chose the correct login method for the player.",
    ],
  },
  {
    title: "The playlist does not load",
    icon: RotateCcw,
    color: "#7B2FFF",
    items: [
      "Confirm that the device is online and the account is active. Close and reopen the player after checking the entered details.",
    ],
  },
  {
    title: "Playback pauses",
    icon: WifiOff,
    color: "#2563EB",
    items: [
      "Try another stream. If several are affected, test a stronger Wi-Fi connection or Ethernet where practical and report whether the problem affects all streams.",
    ],
  },
  {
    title: "A player requests payment",
    icon: CreditCard,
    color: "#E91E8C",
    items: [
      "Check whether this is the player developer's separate activation charge. Paying that charge does not create an IPTV subscription.",
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
            Sky Glass Username and{" "}
            <span className="text-gradient-brand">Password Help</span>
          </h2>
        </div>

        <div className="mx-auto mt-6 max-w-3xl glass-card p-5 sm:mt-10 sm:p-8">
          <div className="flex items-start gap-3 sm:gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[20px] bg-[#E91E8C]/10 text-[#E91E8C] sm:h-11 sm:w-11">
              <KeyRound className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2} />
            </span>
            <div className="min-w-0 space-y-3 text-[14px] leading-[1.6] text-[#5C607A] sm:space-y-4 sm:text-[15px] sm:leading-[1.75]">
              <p>
                Type your username and password exactly as supplied. Check capital
                letters, punctuation and spaces at the start or end of a field. If
                the player also asks for a server address, enter the corresponding
                address supplied for your account.
              </p>
              <p>
                A playlist link or portal setup uses different fields from a
                username and password login. If you are unsure which screen to
                choose, send support the app name and a description of the
                screen, without posting your password publicly.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center sm:mt-16">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Common Installation{" "}
            <span className="text-gradient-brand">Problems</span>
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
