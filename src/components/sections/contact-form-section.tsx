"use client";

import { Container } from "@/components/layout/container";
import { useState, FormEvent } from "react";
import { Info, Check } from "lucide-react";

const MESSAGE_INCLUDES = [
  "Your device type and model.",
  "The IPTV application name.",
  "Whether you use a trial or paid subscription.",
  "The exact error message, if one appears.",
  "Whether the problem affects one stream or several.",
  "Whether you use Wi-Fi or Ethernet.",
  "Any troubleshooting already attempted.",
];

const fieldClassName =
  "w-full rounded-[20px] border-0 glass-card px-3.5 py-3 text-[14px] outline-none transition-[box-shadow] focus:ring-1 focus:ring-[#7B2FFF] sm:px-4 sm:py-3 sm:text-[15px]";

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
      className="border-b border-[#0B0E2C]/10 bg-transparent py-10 sm:py-16 lg:py-24"
    >
      <Container>
        <div className="grid gap-4 sm:gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="glass-card p-5 sm:p-10">
              <h2 className="text-[26px] font-bold text-[#0B0E2C] sm:text-[32px]">
                Send Your{" "}
                <span className="text-gradient-brand">Enquiry</span>
              </h2>

              <form className="mt-5 space-y-4 sm:mt-8 sm:space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-3.5 sm:gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[12px] font-bold text-[#0B0E2C] sm:mb-2 sm:text-sm">
                      Full name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter the name you would like us to use."
                      className={fieldClassName}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[12px] font-bold text-[#0B0E2C] sm:mb-2 sm:text-sm">
                      Email address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Provide an address where you can receive a reply."
                      className={fieldClassName}
                    />
                  </div>
                </div>

                <div className="grid gap-3.5 sm:gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[12px] font-bold text-[#0B0E2C] sm:mb-2 sm:text-sm">
                      Contact number
                    </label>
                    <input
                      type="tel"
                      placeholder="Add your preferred contact number where relevant."
                      className={fieldClassName}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[12px] font-bold text-[#0B0E2C] sm:mb-2 sm:text-sm">
                      Enquiry type
                    </label>
                    <select required className={fieldClassName}>
                      <option value="">Select an option</option>
                      <option value="trial">Trial</option>
                      <option value="subscription">Subscription</option>
                      <option value="installation">Installation</option>
                      <option value="technical">Technical support</option>
                      <option value="renewal">Renewal</option>
                      <option value="reseller">Reseller enquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-[12px] font-bold text-[#0B0E2C] sm:mb-2 sm:text-sm">
                    Device type
                  </label>
                  <select required className={fieldClassName}>
                    <option value="">Tell us which device you use.</option>
                    <option value="firestick">Firestick or Fire TV</option>
                    <option value="android_tv">Android TV or Google TV</option>
                    <option value="android_mobile">Android Phone or Tablet</option>
                    <option value="samsung_tv">Samsung Smart TV</option>
                    <option value="lg_tv">LG Smart TV</option>
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
                    placeholder="Explain your question and include any relevant device or application details."
                    className={`${fieldClassName} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="flex min-h-[44px] w-full items-center justify-center rounded-[20px] bg-gradient-brand px-6 py-2.5 text-[14px] font-bold text-white transition-opacity hover:opacity-90 sm:min-h-[56px] sm:px-8 sm:py-4 sm:text-[16px]"
                >
                  {submitted ? "Message Sent Successfully!" : "Send Your Enquiry"}
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <div className="glass-card p-5 sm:p-8">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[20px] bg-[#FF6B2C]/10 sm:h-12 sm:w-12">
                    <Info className="h-4 w-4 text-[#FF6B2C] sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B0E2C] sm:text-xl">
                    What to Include for{" "}
                    <span className="text-gradient-brand">Technical Support</span>
                  </h3>
                </div>

                <p className="mt-3 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-6 sm:text-[15px] sm:leading-relaxed">
                  A useful support message includes:
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

                <div className="mt-3 glass-card p-4 text-[14px] leading-[1.55] text-[#5C607A] sm:mt-8 sm:p-5 sm:text-sm sm:leading-relaxed">
                  Avoid including payment-card details, unrelated passwords or
                  unnecessary personal information.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
