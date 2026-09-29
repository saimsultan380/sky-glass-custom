import { Clock } from "lucide-react";
import { Container } from "@/components/layout/container";
import { whatsappFreeTrialUrl } from "@/lib/site";

export function FreeTrialSection() {
  return (
    <section className="relative border-t border-[#0B0E2C]/10 bg-transparent">
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Make your trial{" "}
            <span className="text-gradient-brand">useful</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-[1.6] text-[#5C607A] sm:mt-5 sm:text-base sm:leading-[1.75]">
            Use the 24-hour trial on the device and home connection you normally
            use. Check that you can find the categories you want and that
            playback works at your usual viewing time. Ask which content and
            features are included in the paid package before purchasing; trial
            access may differ.
          </p>
          <div className="mt-5 flex justify-center sm:mt-8">
            <a
              href={whatsappFreeTrialUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[20px] bg-gradient-brand px-6 py-2.5 text-[13px] font-semibold text-white sm:min-h-[48px] sm:text-[14px]"
            >
              <Clock className="h-4 w-4" strokeWidth={2} aria-hidden />
              Request a 24-Hour Trial
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
