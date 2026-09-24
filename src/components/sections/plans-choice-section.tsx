import { Check } from "lucide-react";
import { Container } from "@/components/layout/container";

const CONFIRM_ITEMS = [
  "The specific channels or categories you want.",
  "Your device and preferred application.",
  "The number of simultaneous connections.",
  "Any separate player activation charge.",
  "The features available with your chosen package.",
] as const;

export function PlansChoiceSection() {
  return (
    <section
      id="choose-plan"
      className="relative border-t border-[#0B0E2C]/10 bg-transparent"
    >
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="grid items-start gap-4 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14 xl:gap-16">
          <div>
            <h2 className="max-w-lg text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
              Which Package Fits{" "}
              <span className="text-gradient-brand">Your Viewing?</span>
            </h2>

            <div className="mt-4 space-y-2 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:space-y-4 sm:text-base sm:leading-[1.8]">
              <p>Start with what you actually watch.</p>
              <p>
                If you mainly use a familiar selection of channels and
                occasionally browse films, check whether Standard includes the
                content you need.
              </p>
              <p>
                If you want a wider selection, compare Premium’s available
                categories with Standard before ordering. A larger package is
                useful only when its additional content matters to you.
              </p>
              <p>For either package, confirm:</p>
            </div>
          </div>

          <div className="glass-card p-5 sm:p-8">
            <ul className="space-y-1.5 sm:space-y-3">
              {CONFIRM_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-[20px] px-3 py-2.5 sm:gap-3 sm:px-3.5 sm:py-3"
                >
                  <Check
                    className="h-3.5 w-3.5 shrink-0 text-[#7B2FFF] sm:h-4 sm:w-4"
                    strokeWidth={2.25}
                    aria-hidden
                  />
                  <span className="flex-1 text-[14px] font-medium text-[#0B0E2C] sm:text-[15px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 space-y-3 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-14 sm:space-y-4 sm:text-base sm:leading-[1.8]">
          <h3 className="text-[20px] font-bold tracking-tight text-[#0B0E2C] sm:text-[26px]">
            Understand Content and Playback Availability
          </h3>
          <p>
            The catalogue includes available live television, sports, movies,
            series, news, documentaries, family entertainment and international
            programming.
          </p>
          <p>
            Individual channels, titles and events can vary. Programme-guide
            information, Catch-Up and higher resolutions also depend on the
            content source and application.
          </p>
          <p>
            A supported device does not guarantee that every stream will play at
            the highest resolution. Your display and internet connection remain
            part of the viewing experience.
          </p>
        </div>
      </Container>
    </section>
  );
}
