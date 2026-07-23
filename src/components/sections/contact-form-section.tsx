"use client";

import { Container } from "@/components/layout/container";
import { useState, FormEvent } from "react";
import { Info, Check } from "lucide-react";

const MESSAGE_INCLUDES = [
  "Your name",
  "Email address or preferred contact method",
  "Device type",
  "Device model where possible",
  "IPTV application name",
  "Whether you are using a trial or full subscription",
  "A clear description of the issue",
  "Any error message displayed",
  "Troubleshooting steps already attempted",
];

const fieldClassName =
  "w-full rounded-[1px] border border-[#0B0E2C]/10 bg-[#F5F5F7] px-3.5 py-3 text-[14px] outline-none transition-colors focus:border-[#7B2FFF] focus:bg-white focus:ring-1 focus:ring-[#7B2FFF] sm:px-4 sm:py-3 sm:text-[15px]";

export function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="contact-form"
      className="border-b border-[#0B0E2C]/10 bg-white py-10 sm:py-16 lg:py-24"
    >
      <Container>
        <div className="grid gap-4 sm:gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[1px] bg-white p-5 shadow-[0_8px_30px_rgba(11,14,44,0.04)] sm:p-10">
              <h2 className="text-[26px] font-bold text-[#0B0E2C] sm:text-[32px]">
                Send an <span className="text-gradient-brand">Enquiry</span>
              </h2>
              <p className="mt-2 text-[14px] leading-[1.6] text-[#5C607A] sm:mt-2 sm:text-base">
                Please check that your contact information is correct before
                submitting the form.
              </p>

              <form className="mt-5 space-y-4 sm:mt-8 sm:space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-3.5 sm:gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[12px] font-bold text-[#0B0E2C] sm:mb-2 sm:text-sm">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter the name you want the support team to use when responding."
                      className={fieldClassName}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[12px] font-bold text-[#0B0E2C] sm:mb-2 sm:text-sm">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Provide an active email address where you can receive activation information or support instructions."
                      className={fieldClassName}
                    />
                  </div>
                </div>

                <div className="grid gap-3.5 sm:gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[12px] font-bold text-[#0B0E2C] sm:mb-2 sm:text-sm">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Add your contact number when you prefer assistance through a supported messaging service."
                      className={fieldClassName}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[12px] font-bold text-[#0B0E2C] sm:mb-2 sm:text-sm">
                      Enquiry Type
                    </label>
                    <select required className={fieldClassName}>
                      <option value="">Select an option</option>
                      <option value="trial">Request a 24-Hour Trial</option>
                      <option value="subscription">Subscription Question</option>
                      <option value="installation">Installation Support</option>
                      <option value="technical">Technical Support</option>
                      <option value="renewal">Renewal or Upgrade</option>
                      <option value="reseller">Reseller Enquiry</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-[12px] font-bold text-[#0B0E2C] sm:mb-2 sm:text-sm">
                    Device Type
                  </label>
                  <select required className={fieldClassName}>
                    <option value="">Select your main device</option>
                    <option value="firestick">Firestick or Fire TV</option>
                    <option value="android_tv">Android TV or Google TV</option>
                    <option value="android_mobile">Android Phone or Tablet</option>
                    <option value="samsung_tv">Samsung Smart TV</option>
                    <option value="lg_tv">LG Smart TV</option>
                    <option value="other_smart_tv">Other Smart TV</option>
                    <option value="apple_tv">Apple TV</option>
                    <option value="ios">iPhone or iPad</option>
                    <option value="windows">Windows PC</option>
                    <option value="mac">Mac or MacBook</option>
                    <option value="other">Other Device</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-[12px] font-bold text-[#0B0E2C] sm:mb-2 sm:text-sm">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Explain what you need help with. Include any relevant application name, error message or setup information."
                    className={`${fieldClassName} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="flex min-h-[44px] w-full items-center justify-center rounded-[1px] bg-gradient-brand px-6 py-2.5 text-[14px] font-bold text-white transition-opacity hover:opacity-90 sm:min-h-[56px] sm:px-8 sm:py-4 sm:text-[16px]"
                >
                  {submitted ? "Message Sent Successfully!" : "Send Your Enquiry"}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Info */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <div className="rounded-[1px] bg-white p-5 shadow-[0_8px_30px_rgba(11,14,44,0.04)] sm:p-8">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[1px] bg-[#FF6B2C]/10 sm:h-12 sm:w-12">
                    <Info className="h-4 w-4 text-[#FF6B2C] sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B0E2C] sm:text-xl">
                    What to Include in Your{" "}
                    <span className="text-gradient-brand">Message</span>
                  </h3>
                </div>

                <p className="mt-3 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-6 sm:text-[15px] sm:leading-relaxed">
                  Providing complete information helps the support team
                  understand the problem and respond with the correct
                  instructions. Please include:
                </p>

                <svg width="0" height="0" className="absolute" aria-hidden>
                  <defs>
                    <linearGradient
                      id="contact-form-gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#ff6b2c" />
                      <stop offset="32%" stopColor="#e91e8c" />
                      <stop offset="68%" stopColor="#7b2fff" />
                      <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                  </defs>
                </svg>

                <ul className="mt-3 space-y-1.5 sm:mt-6 sm:space-y-3">
                  {MESSAGE_INCLUDES.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[14px] text-[#0B0E2C] sm:gap-3 sm:text-[15px]"
                    >
                      <Check
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
                        style={{ stroke: "url(#contact-form-gradient)" }}
                        strokeWidth={3}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-3 rounded-[1px] bg-[#F5F5F7] p-4 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-8 sm:p-5 sm:text-sm sm:leading-relaxed">
                  <strong className="text-[#0B0E2C]">Security Note:</strong> Do
                  not send payment-card information, passwords for unrelated
                  accounts or unnecessary sensitive personal details.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
