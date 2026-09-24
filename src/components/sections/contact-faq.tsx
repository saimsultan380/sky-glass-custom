import { FaqAccordionSection } from "./faq-section";

const CONTACT_FAQS = [
  {
    id: "select-plan",
    q: "Can you help me select a plan?",
    a: "Yes. Share your preferred duration, device and viewing requirements so the team can explain the available options.",
  },
  {
    id: "request-trial",
    q: "Can I request a trial before purchasing?",
    a: "Yes. Include the device you intend to use when making your request.",
  },
  {
    id: "third-party",
    q: "Do you assist with third-party players?",
    a: "Guidance is available for supported players. Their separate fees and account terms are determined by the player developer.",
  },
  {
    id: "login-fails",
    q: "What should I report if my login fails?",
    a: "Provide the application name and error message. First check that you entered the supplied details without extra spaces.",
  },
  {
    id: "existing-subscription",
    q: "Can I contact you about an existing subscription?",
    a: "Yes. Explain whether your enquiry concerns setup, playback, renewal or another account question.",
  },
];

export function ContactFaq() {
  return (
    <FaqAccordionSection
      title={
        <>
          Contact{" "}
          <span className="text-gradient-brand">FAQs</span>
        </>
      }
      faqs={CONTACT_FAQS}
      description=""
    />
  );
}
