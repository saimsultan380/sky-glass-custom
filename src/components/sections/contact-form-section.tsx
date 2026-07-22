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

export function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, this would send an API request
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact-form" className="bg-white py-16 sm:py-24 lg:py-32 border-b border-[#0B0E2C]/10">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[8px] border border-[#0B0E2C]/10 bg-white p-6 shadow-[0_8px_30px_rgba(11,14,44,0.04)] sm:p-10">
              <h2 className="text-2xl font-bold text-[#0B0E2C] sm:text-3xl">Send an <span className="text-gradient-brand">Enquiry</span></h2>
              <p className="mt-2 text-base text-[#5C607A]">
                Please check that your contact information is correct before submitting the form.
              </p>

              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-[#0B0E2C]">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Enter your name" 
                      className="w-full rounded-[8px] border border-[#0B0E2C]/10 bg-[#F5F5F7] px-4 py-3 text-[15px] outline-none transition-colors focus:border-[#7B2FFF] focus:bg-white focus:ring-1 focus:ring-[#7B2FFF]" 
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold text-[#0B0E2C]">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="Active email address" 
                      className="w-full rounded-[8px] border border-[#0B0E2C]/10 bg-[#F5F5F7] px-4 py-3 text-[15px] outline-none transition-colors focus:border-[#7B2FFF] focus:bg-white focus:ring-1 focus:ring-[#7B2FFF]" 
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-[#0B0E2C]">Contact Number (Optional)</label>
                    <input 
                      type="tel" 
                      placeholder="For WhatsApp support" 
                      className="w-full rounded-[8px] border border-[#0B0E2C]/10 bg-[#F5F5F7] px-4 py-3 text-[15px] outline-none transition-colors focus:border-[#7B2FFF] focus:bg-white focus:ring-1 focus:ring-[#7B2FFF]" 
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold text-[#0B0E2C]">Enquiry Type</label>
                    <select 
                      required
                      className="w-full rounded-[8px] border border-[#0B0E2C]/10 bg-[#F5F5F7] px-4 py-3 text-[15px] outline-none transition-colors focus:border-[#7B2FFF] focus:bg-white focus:ring-1 focus:ring-[#7B2FFF]"
                    >
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
                  <label className="mb-2 block text-sm font-bold text-[#0B0E2C]">Device Type</label>
                  <select 
                    required
                    className="w-full rounded-[8px] border border-[#0B0E2C]/10 bg-[#F5F5F7] px-4 py-3 text-[15px] outline-none transition-colors focus:border-[#7B2FFF] focus:bg-white focus:ring-1 focus:ring-[#7B2FFF]"
                  >
                    <option value="">Select your main device</option>
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
                  <label className="mb-2 block text-sm font-bold text-[#0B0E2C]">Message</label>
                  <textarea 
                    rows={5} 
                    required
                    placeholder="Explain what you need help with. Include any relevant application name, error message or setup information." 
                    className="w-full resize-none rounded-[8px] border border-[#0B0E2C]/10 bg-[#F5F5F7] px-4 py-3 text-[15px] outline-none transition-colors focus:border-[#7B2FFF] focus:bg-white focus:ring-1 focus:ring-[#7B2FFF]"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="flex w-full items-center justify-center rounded-[8px] bg-gradient-brand px-8 py-4 text-[16px] font-bold text-white transition-opacity hover:opacity-90"
                >
                  {submitted ? "Message Sent Successfully!" : "Send Your Enquiry"}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Info */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <div className="rounded-[8px] border border-[#0B0E2C]/10 bg-white p-6 shadow-[0_8px_30px_rgba(11,14,44,0.04)] sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-[#FF6B2C]/10">
                    <Info className="h-6 w-6 text-[#FF6B2C]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B0E2C]">
                    What to <span className="text-gradient-brand">Include</span>
                  </h3>
                </div>
                
                <p className="mt-6 text-[15px] leading-relaxed text-[#5C607A]">
                  Providing complete information helps the support team understand the problem and respond with the correct instructions. Please include:
                </p>
                
                <ul className="mt-6 space-y-3">
                  {MESSAGE_INCLUDES.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-[#0B0E2C]">
                      <svg width="0" height="0" className="absolute">
                        <defs>
                          <linearGradient id="gradient-brand" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ff6b2c" />
                            <stop offset="32%" stopColor="#e91e8c" />
                            <stop offset="68%" stopColor="#7b2fff" />
                            <stop offset="100%" stopColor="#2563eb" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ stroke: "url(#gradient-brand)" }} strokeWidth={3} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-[8px] border-l-4 border-[#E91E8C] bg-[#F5F5F7] p-5 text-sm leading-relaxed text-[#5C607A]">
                  <strong className="text-[#0B0E2C]">Security Note:</strong> Do not send payment-card information, passwords for unrelated accounts or unnecessary sensitive personal details.
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
