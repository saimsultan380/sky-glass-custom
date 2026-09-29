import { MessageCircle, BookOpen } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { whatsappUrl } from "@/lib/site";
import { siteRoutes } from "@/lib/routes";

export function ContactCta() {
  return (
    <section
      id="contact-cta"
      className="relative border-t border-[#0B0E2C]/10 bg-transparent py-10 sm:py-16 lg:py-24"
    >
      <Container>
        <div className="mx-auto max-w-5xl glass-card px-5 py-8 text-center sm:px-10 sm:py-16">
          <div className="mt-4 grid grid-cols-1 gap-2.5 sm:mt-0 sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-1.5 rounded-[20px] bg-gradient-brand px-2 py-2.5 text-center text-[11px] font-semibold leading-snug text-white transition-opacity duration-150 hover:opacity-90 sm:min-h-[48px] sm:w-auto sm:gap-2 sm:px-6 sm:py-3 sm:text-[14px] sm:leading-normal"
            >
              <MessageCircle
                className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
                strokeWidth={2}
                aria-hidden
              />
              <span>Send a Support Enquiry</span>
            </a>
            <Link
              href={siteRoutes.installation}
              className="border-gradient-brand inline-flex min-h-[48px] w-full items-center justify-center gap-1.5 rounded-[20px] px-2 py-2.5 text-center text-[11px] font-semibold leading-snug transition-opacity duration-150 hover:opacity-80 sm:min-h-[48px] sm:w-auto sm:gap-2 sm:px-6 sm:py-3 sm:text-[14px] sm:leading-normal"
            >
              <BookOpen
                className="h-3.5 w-3.5 shrink-0 text-[#7B2FFF] sm:h-4 sm:w-4"
                strokeWidth={2}
                aria-hidden
              />
              <span className="text-gradient-brand">View Installation Guide</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
