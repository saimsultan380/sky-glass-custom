import { Container } from "@/components/layout/container";

export function ResellerIntro() {
  return (
    <section className="border-b border-[#0B0E2C]/10 bg-transparent py-10 sm:py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            What Is the Sky Glass IPTV{" "}
            <span className="text-gradient-brand">Reseller Programme?</span>
          </h2>
          <p className="mt-4 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-[1.75]">
            The programme allows resellers to manage customer subscriptions
            through a dedicated dashboard.
          </p>
          <p className="mt-2 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-4 sm:text-base sm:leading-[1.75]">
            You handle your customer relationships, sales and payments. The
            panel provides account-management tools, while reseller assistance
            covers common questions about access, credits and eligible
            subscription actions.
          </p>
          <p className="mt-2 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-4 sm:text-base sm:leading-[1.75]">
            It can suit new resellers exploring demand or existing businesses
            looking for a more organised way to manage accounts.
          </p>
        </div>
      </Container>
    </section>
  );
}
