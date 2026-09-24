import { FaqAccordionSection, type FaqItem } from "@/components/sections/faq-section";

const PLANS_FAQS: FaqItem[] = [
  {
    id: "try-first",
    q: "Can I try the service first?",
    a: "Yes. A 24-hour trial lets you check compatibility and playback. Trial access may differ from a paid subscription.",
  },
  {
    id: "app-activates",
    q: "Does installing the app activate my subscription?",
    a: "No. You also need active trial or subscription details for the service.",
  },
  {
    id: "several-people",
    q: "Can several people watch at once?",
    a: "That depends on the number of simultaneous connections included in your package. Confirm the allowance before ordering.",
  },
  {
    id: "player-fees",
    q: "Are third-party player fees included?",
    a: "Some player developers charge separately for activation or use. Those fees are separate from the IPTV subscription.",
  },
  {
    id: "renewal",
    q: "Can I ask about a renewal?",
    a: "Yes. Contact support with enough information to identify your subscription and the duration you want to discuss.",
  },
  {
    id: "how-quickly",
    q: "How quickly will I receive access?",
    a: "Activation follows order confirmation and receipt of the necessary information. Ask support about the expected timing for your order.",
  },
];

export function PlansFaqSection() {
  return (
    <FaqAccordionSection
      faqs={PLANS_FAQS}
      defaultOpenId="try-first"
      title={
        <>
          Subscription{" "}
          <span className="text-gradient-brand">FAQs</span>
        </>
      }
      description=""
      id="plans-faq"
    />
  );
}
