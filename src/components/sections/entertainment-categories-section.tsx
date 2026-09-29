import { Check } from "lucide-react";
import { Container } from "@/components/layout/container";

const POINTS = [
  "Before selecting a plan, check the current availability of any channel, programme, sports event or on-demand title that is important to you. Content and schedules can change.",
  "Compare Standard and Premium by asking what differs in the current catalogue and features. Also confirm your simultaneous connection allowance: having an app on more than one device does not necessarily mean those devices can stream at the same time.",
  "A third-party player may charge its own activation fee. Ask about that cost when choosing a smart TV, Apple, Roku or desktop setup.",
] as const;

export function EntertainmentCategoriesSection() {
  return (
    <section className="relative border-t border-[#0B0E2C]/10 bg-transparent">
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Choose around what you{" "}
            <span className="text-gradient-brand">actually watch</span>
          </h2>
        </div>

        <ul className="mx-auto mt-6 grid max-w-3xl gap-3 sm:mt-10 sm:gap-4">
          {POINTS.map((point) => (
            <li key={point} className="glass-card flex items-start gap-3 p-4 sm:p-5">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]" strokeWidth={3} />
              <span className="text-[14px] leading-[1.6] text-[#0B0E2C] sm:text-[15px]">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
