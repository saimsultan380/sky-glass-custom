import { Container } from "@/components/layout/container";

const STEPS = [
  {
    title: "Share your device",
    body: "Tell support its make and model and whether you want a trial or subscription.",
  },
  {
    title: "Confirm your choice",
    body: "Check the package, duration, content you care about, connection allowance and total cost.",
  },
  {
    title: "Receive your details",
    body: "Support supplies the login or playlist information appropriate for your setup.",
  },
  {
    title: "Install and test",
    body: "Follow the device guide, let the playlist load and test several streams.",
  },
] as const;

export function WhyChooseSkyGlassSection() {
  return (
    <section className="relative border-t border-[#0B0E2C]/10 bg-transparent">
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            How to get{" "}
            <span className="text-gradient-brand">started</span>
          </h2>
        </div>

        <ol className="mx-auto mt-6 grid max-w-4xl gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
          {STEPS.map((step, index) => (
            <li key={step.title} className="glass-card flex gap-3 p-4 sm:p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(123,47,255,0.12)] text-[13px] font-bold text-[#7B2FFF]">
                {index + 1}
              </span>
              <div>
                <h3 className="text-[15px] font-bold text-[#0B0E2C] sm:text-[16px]">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-[1.6] text-[#5C607A] sm:text-[14px]">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
