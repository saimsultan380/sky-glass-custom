import Link from "next/link";
import { Container } from "@/components/layout/container";
import { siteRoutes } from "@/lib/routes";

export function ResellerResponsibilities() {
  return (
    <section className="border-b border-[#0B0E2C]/10 bg-transparent py-10 sm:py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
            Manage Customers{" "}
            <span className="text-gradient-brand">Clearly</span>
          </h2>
          <p className="mt-4 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-6 sm:text-base sm:leading-[1.75]">
            Before creating an account, confirm which package the customer
            wants, how many simultaneous streams they require and which device
            they use. After activation, give them their account information
            privately and direct them to the correct{" "}
            <Link
              href={siteRoutes.installation}
              className="font-semibold text-[#7B2FFF] underline-offset-2 hover:underline"
            >
              installation guide
            </Link>
            .
          </p>
          <p className="mt-2 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-4 sm:text-base sm:leading-[1.75]">
            Keep a record of the agreed duration and expiry date. When a
            customer reports a problem, ask for the device model, player name
            and exact error so you can give useful help.
          </p>
        </div>
      </Container>
    </section>
  );
}
