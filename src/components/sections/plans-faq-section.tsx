import { FaqAccordionSection, type FaqItem } from "@/components/sections/faq-section";

const PLANS_FAQS: FaqItem[] = [
  {
    id: "whats-included",
    q: "What is included in a Sky Glass IPTV subscription?",
    a: "Subscriptions may include available live television, sports, movies, television series, EPG functionality and other entertainment categories. Exact availability depends on the selected package.",
  },
  {
    id: "test-before-subscribing",
    q: "Can I test Sky Glass IPTV before subscribing?",
    a: "Yes. You can request a 24-hour trial to test compatibility, navigation and general playback performance.",
  },
  {
    id: "which-duration",
    q: "Which subscription duration should I choose?",
    a: "A shorter plan provides greater flexibility, while a longer subscription may offer better long-term value. Choose according to your viewing habits and budget.",
  },
  {
    id: "compatible-devices",
    q: "Which devices are compatible?",
    a: "Compatible devices include many Smart TVs, Fire TV Stick, Android TV, Google TV, Apple TV, smartphones, tablets, Windows PCs and Mac computers.",
  },
  {
    id: "several-devices",
    q: "Can I watch on several devices?",
    a: "You may install a compatible application on multiple devices. Simultaneous streaming depends on the number of connections included with your subscription.",
  },
  {
    id: "4k-support",
    q: "Does Sky Glass IPTV support 4K?",
    a: "Selected content may be available in 4K where supported. Playback quality depends on the source, application, device and internet connection.",
  },
  {
    id: "installation-assistance",
    q: "Is installation assistance available?",
    a: "Yes. Setup guidance is available for supported IPTV applications and popular streaming devices.",
  },
  {
    id: "activation-speed",
    q: "How quickly will my subscription be activated?",
    a: "Activation is normally completed after your order has been confirmed and the required information has been received.",
  },
  {
    id: "satellite-dish",
    q: "Do I need a satellite dish?",
    a: "No. IPTV uses an internet connection and compatible application rather than a traditional satellite connection.",
  },
  {
    id: "internet-connection",
    q: "What internet connection should I use?",
    a: "A reliable broadband connection is recommended. Ethernet or strong Wi-Fi can provide better stability, particularly for higher-resolution content.",
  },
];

export function PlansFaqSection() {
  return (
    <FaqAccordionSection
      faqs={PLANS_FAQS}
      defaultOpenId="whats-included"
      title={
        <>
          Frequently Asked Questions About{" "}
          <span className="text-gradient-brand">
            Sky Glass IPTV Subscriptions
          </span>
        </>
      }
      description="Answers about packages, durations, devices, connections, 4K support, activation and setup assistance."
      id="plans-faq"
    />
  );
}
