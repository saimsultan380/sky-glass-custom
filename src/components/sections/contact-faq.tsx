import { FaqAccordionSection } from "./faq-section";

const CONTACT_FAQS = [
  {
    id: "what-to-send",
    q: "What should I send when I need help?",
    a: "Send your device model, app name, exact error and the step where you stopped. Do not send payment-card information.",
  },
  {
    id: "login-help",
    q: "What should I report if login or playback fails?",
    a: "Provide the application name and error message. Check that you entered the supplied details without extra spaces, then note whether one stream or several are affected.",
  },
  {
    id: "select-plan",
    q: "Can you help me with a trial or subscription?",
    a: "Yes. Share your device, preferred duration, simultaneous connection needs and any content you want checked so the team can explain the options.",
  },
  {
    id: "renewal",
    q: "How do I ask about a renewal?",
    a: "Give enough information to identify your account and tell us which duration you want to discuss.",
  },
  {
    id: "reseller",
    q: "How do I enquire about the reseller panel?",
    a: "Ask about the current price and terms for the minimum 120-credit starting purchase.",
  },
];

export function ContactFaq() {
  return (
    <FaqAccordionSection
      title={
        <>
          Support{" "}
          <span className="text-gradient-brand">FAQs</span>
        </>
      }
      faqs={CONTACT_FAQS}
      description=""
    />
  );
}
