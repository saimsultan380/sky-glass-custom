"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

export type FaqItem = {
  id: string;
  q: string;
  a: ReactNode;
};

const HOMEPAGE_FAQS: FaqItem[] = [
  {
    id: "satellite-dish",
    q: "Do I need a satellite dish?",
    a: "No. The service uses an internet connection and a compatible application.",
  },
  {
    id: "multiple-devices",
    q: "Can I install the service on more than one device?",
    a: "You can configure compatible devices, but simultaneous viewing depends on the connection allowance in your plan.",
  },
  {
    id: "same-content",
    q: "Does every subscription include the same content?",
    a: "Standard and Premium offer different levels of access. Confirm specific channels, titles and features before purchasing.",
  },
  {
    id: "every-stream-4k",
    q: "Is every stream available in 4K?",
    a: "No. Resolution varies by stream, and your equipment and connection also affect playback quality.",
  },
  {
    id: "installation-support",
    q: "Can I get help with installation?",
    a: "Yes. Assistance is available for the service’s application and supported alternative players.",
  },
  {
    id: "official-sky",
    q: "Is this an official Sky service?",
    a: "No. Sky Glass IPTV is an independent service and is not affiliated with Sky UK Limited, Sky Group or the official Sky Glass product.",
  },
];

function AccordionItem({
  faq,
  isOpen,
  onToggle,
  compact = false,
}: {
  faq: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "glass-card overflow-hidden transition-[box-shadow] duration-200",
        isOpen && "ring-1 ring-[#E91E8C]/35"
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          "flex w-full items-center justify-between gap-3 text-left",
          compact ? "px-3.5 py-3.5" : "px-3.5 py-3 sm:px-6 sm:py-5"
        )}
        aria-expanded={isOpen}
      >
        <h3
          className={cn(
            "font-bold leading-snug text-[#0B0E2C]",
            compact ? "text-sm" : "text-[14px] sm:text-base"
          )}
        >
          {faq.q}
        </h3>
        <span
          className={cn(
            "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300",
            isOpen
              ? "rotate-180 border-[#E91E8C]/40 bg-[rgba(233,30,140,0.08)]"
              : "rotate-0 border-transparent"
          )}
        >
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-colors duration-200",
              isOpen ? "text-[#E91E8C]" : "text-[#5C607A]"
            )}
            strokeWidth={2.25}
          />
        </span>
      </button>

      <div
        className={cn(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div
            className={cn(
              "border-t border-[#0B0E2C]/8 text-[13px] leading-[1.7] text-[#5C607A] sm:text-sm sm:leading-[1.75]",
              compact ? "px-3.5 pb-3.5 pt-2.5" : "px-3.5 pb-3 pt-2 sm:px-6 sm:pb-6 sm:pt-3"
            )}
          >
            {faq.a}
          </div>
        </div>
      </div>
    </div>
  );
}

export function FaqAccordionList({
  faqs,
  defaultOpenId,
  compact = false,
}: {
  faqs: FaqItem[];
  defaultOpenId?: string;
  compact?: boolean;
}) {
  const [openId, setOpenId] = useState<string | null>(
    defaultOpenId ?? faqs[0]?.id ?? null
  );

  const toggle = (faqId: string) =>
    setOpenId((prev) => (prev === faqId ? null : faqId));

  return (
    <div className="space-y-2 sm:space-y-3">
      {faqs.map((faq) => (
        <AccordionItem
          key={faq.id}
          faq={faq}
          isOpen={openId === faq.id}
          onToggle={() => toggle(faq.id)}
          compact={compact}
        />
      ))}
    </div>
  );
}

type FaqSectionProps = {
  faqs: FaqItem[];
  defaultOpenId?: string;
  title: ReactNode;
  description?: string;
  id?: string;
};

export function FaqAccordionSection({
  faqs,
  defaultOpenId,
  title,
  description = "",
  id = "faq",
}: FaqSectionProps) {
  return (
    <section
      id={id}
      className="relative border-t border-[#0B0E2C]/10 bg-transparent"
    >
      <Container className="py-10 sm:py-16 lg:py-24">
        <div className="grid gap-4 sm:gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:pt-1">
            <h2 className="max-w-xl text-[26px] font-bold leading-[1.2] tracking-tight text-[#0B0E2C] sm:text-[38px] sm:leading-[1.12] lg:text-[44px]">
              {title}
            </h2>

            {description && (
              <p className="mt-4 max-w-sm text-[14px] leading-[1.6] text-[#5C607A] sm:mt-5 sm:text-base">
                {description}
              </p>
            )}
          </div>

          <div className="min-w-0">
            <FaqAccordionList faqs={faqs} defaultOpenId={defaultOpenId} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function FaqSection() {
  return (
    <FaqAccordionSection
      faqs={HOMEPAGE_FAQS}
      defaultOpenId="satellite-dish"
      title={
        <>
          Frequently Asked{" "}
          <span className="text-gradient-brand">Questions</span>
        </>
      }
      description=""
    />
  );
}
