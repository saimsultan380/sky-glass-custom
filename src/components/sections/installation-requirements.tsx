import { Check, ShieldAlert, KeyRound } from "lucide-react";
import { Container } from "@/components/layout/container";

const REQUIREMENTS = [
  "An active Sky Glass IPTV subscription or trial",
  "A compatible internet-connected device",
  "A stable broadband connection",
  "Your subscription login information",
  "Access to your device’s application store or installation settings",
  "Enough storage space for the selected application",
];

const ACTIVATION_DATA = [
  "Username",
  "Password",
  "Server address",
  "Portal address",
  "Playlist link",
  "Device activation information",
];

export function InstallationRequirements() {
  return (
    <section
      id="before-start"
      className="relative border-t border-[#0B0E2C]/10 bg-white"
    >
      <Container className="py-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E91E8C] sm:text-[12px]">
            Preparation
          </p>
          <h2 className="mt-1.5 text-[20px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:mt-3 sm:text-4xl sm:leading-[1.12] lg:text-[42px]">
            Before You Begin the{" "}
            <span className="text-gradient-brand">Installation</span>
          </h2>
          <p className="mt-3 text-[13px] leading-[1.55] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-[1.8]">
            Make sure you have the following before setting up Sky Glass IPTV:
          </p>
        </div>

        <div className="mt-5 grid gap-2.5 sm:mt-12 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-[8px] border border-[#0B0E2C]/10 bg-white p-3 shadow-[0_4px_20px_rgba(11,14,44,0.04),0_8px_24px_rgba(123,47,255,0.08)] sm:p-8 md:col-span-2 lg:col-span-2">
            <h3 className="text-[15px] font-bold text-[#0B0E2C] sm:text-lg">
              Checklist for Setup
            </h3>
            <ul className="mt-3 grid gap-x-4 gap-y-2 sm:mt-6 sm:gap-x-8 sm:gap-y-4 sm:grid-cols-2">
              {REQUIREMENTS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[12px] font-medium leading-snug text-[#0B0E2C] sm:gap-3 sm:text-[14px]"
                >
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#7B2FFF]/10 text-[#7B2FFF] sm:h-5 sm:w-5">
                    <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[8px] border border-[#0B0E2C]/10 bg-white p-3 shadow-[0_4px_20px_rgba(11,14,44,0.04),0_8px_24px_rgba(233,30,140,0.08)] sm:p-8">
            <div className="flex items-center gap-2 sm:gap-3">
              <KeyRound className="h-4 w-4 text-[#E91E8C] sm:h-5 sm:w-5" strokeWidth={2} />
              <h3 className="text-[15px] font-bold text-[#0B0E2C] sm:text-lg">
                Activation Info
              </h3>
            </div>
            <p className="mt-2 text-[12px] leading-[1.5] text-[#5C607A] sm:mt-3 sm:text-[13px]">
              Your info may include:
            </p>
            <ul className="mt-2.5 space-y-1.5 sm:mt-4 sm:space-y-2.5">
              {ACTIVATION_DATA.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[12px] font-semibold text-[#0B0E2C] sm:gap-2.5 sm:text-[14px]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E91E8C]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-4 max-w-3xl rounded-[8px] border border-[#FF6B2C]/20 bg-[#FF6B2C]/5 p-3 sm:mt-12 sm:p-6">
          <div className="flex items-start gap-2.5 sm:gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FF6B2C] text-white sm:h-10 sm:w-10">
              <ShieldAlert className="h-4 w-4 sm:h-5 sm:w-5" />
            </span>
            <div>
              <p className="text-[13px] font-bold text-[#0B0E2C] sm:text-base">
                Security Warning
              </p>
              <p className="mt-1 text-[12px] leading-[1.5] text-[#5C607A] sm:text-[14px] sm:leading-[1.7]">
                Keep your login details private and enter them only into the
                official Sky Glass IPTV application or a compatible IPTV player
                you trust. The exact information depends on the application being
                used.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
