import { FaqAccordionSection, type FaqItem } from "@/components/sections/faq-section";

const INSTALL_FAQS: FaqItem[] = [
  {
    id: "downloader-code",
    q: "What is the Downloader code for Sky Glass?",
    a: "The code supplied for compatible Firestick and Android setup is 9557305.",
  },
  {
    id: "app-starts-subscription",
    q: "Does downloading the Sky Glass app start my subscription?",
    a: "No. You need active account details as well as the app.",
  },
  {
    id: "smart-tv-app",
    q: "Which app should I install on my smart TV?",
    a: "That depends on its model and app store. Choose one supported player from the smart TV list, then provide its MAC address and key to support.",
  },
  {
    id: "what-to-send",
    q: "What should I send when I need help?",
    a: "Send your device model, app name, exact error and the step where you stopped. Do not send payment-card information.",
  },
];

export function InstallationFaq() {
  return (
    <FaqAccordionSection
      faqs={INSTALL_FAQS}
      defaultOpenId="downloader-code"
      title={
        <>
          Installation{" "}
          <span className="text-gradient-brand">FAQs</span>
        </>
      }
      description=""
      id="installation-faq"
    />
  );
}
