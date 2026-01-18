"use client";

import { useState, useRef, FormEvent } from "react";
import { Inter } from "next/font/google";
import emailjs from "@emailjs/browser";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setStatus("sending");
    // Ensure you use your real keys here!
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, { publicKey: "YOUR_PUBLIC_KEY" })
      .then(() => { setStatus("success"); setTimeout(() => { if (form.current) form.current.reset(); setStatus("idle"); }, 5000); },
            (error) => { console.error("FAILED...", error.text); setStatus("error"); });
  };

  return (
    <section id="contact" className="relative w-full pb-32 pt-0 px-4 overflow-hidden scroll-mt-28">
      <div className="relative z-10 max-w-7xl mx-auto">
        
        <div className="w-full flex flex-col items-end pt-12 mb-10 md:mb-20">
            <h2 className={`${inter.className} text-3xl md:text-4xl font-medium text-white`}>
              Contact
            </h2>
            <div className="h-px w-1/4 bg-white/20 mt-10 md:mt-20"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* MOBILE ORDERING: 
             We want this TEXT section to be FIRST on mobile (order-1), 
             but LEFT on desktop (also order-1). So it stays order-1.
          */}
          <div className="flex flex-col justify-between order-1 lg:order-1">
            <div className="space-y-6 md:space-y-8">
              <h3 className={`${inter.className} text-xl md:text-2xl text-white font-medium`}>
                Contact us for Inquiries or Information.
              </h3>
              <p className="text-gray-400 leading-relaxed max-w-md text-sm md:text-base">
                We have availability for new clients in 2026. Please let us know if 
                you are interested in our services, or have any other relevant requests.
              </p>
            </div>

            <div className="mt-8 lg:mt-0">
               <div className="mb-4">
                  <span className={`${inter.className} text-xs text-gray-500 tracking-widest`}>
                    Direct Line
                  </span>
               </div>
               <a href="mailto:joe@strongholdlabs.io" className={`${inter.className} text-lg md:text-2xl text-white hover:text-gray-300 transition-colors border-b border-white/20 pb-1`}>
                 joe@strongholdlabs.io
               </a>
            </div>
          </div>

          {/* MOBILE ORDERING:
             We want the FORM to be SECOND on mobile (order-2),
             and RIGHT on desktop (lg:order-2).
          */}
          <div className="order-2 lg:order-2">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
              
              <div className="group">
                <label htmlFor="user_name" className={`${inter.className} text-xs text-gray-500 tracking-widest mb-3 block`}>Identity</label>
                <input type="text" name="user_name" required placeholder="Name / Organization" className="w-full bg-white/5 backdrop-blur-md border border-white/10 p-4 text-white placeholder-gray-600 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300" />
              </div>

              <div className="group">
                <label htmlFor="user_email" className={`${inter.className} text-xs text-gray-500 tracking-widest mb-3 block`}>Contact</label>
                <input type="email" name="user_email" required placeholder="Email Address" className="w-full bg-white/5 backdrop-blur-md border border-white/10 p-4 text-white placeholder-gray-600 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300" />
              </div>

              <div className="group">
                <label htmlFor="subject" className={`${inter.className} text-xs text-gray-500 tracking-widest mb-3 block`}>Subject</label>
                <div className="relative">
                  <select name="subject" className="w-full bg-white/5 backdrop-blur-md border border-white/10 p-4 text-white appearance-none focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300">
                    <option className="bg-black text-gray-400">Select Inquiry Subject</option>
                    <option value="Services" className="bg-black text-white">Services</option>
                    <option value="Project" className="bg-black text-white">Project</option>
                    <option value="Strategy" className="bg-black text-white">Consulting/Strategy</option>
                    <option value="General" className="bg-black text-white">General Inquiry</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"><svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1} d="M19 9l-7 7-7-7" /></svg></div>
                </div>
              </div>

              <div className="group">
                <label htmlFor="message" className={`${inter.className} text-xs text-gray-500 tracking-widest mb-3 block`}>Relevant Information</label>
                <textarea name="message" required rows={4} placeholder="Tell us about your inquiry..." className="w-full bg-white/5 backdrop-blur-md border border-white/10 p-4 text-white placeholder-gray-600 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all duration-300 resize-none"></textarea>
              </div>

              <button type="submit" disabled={status === "sending" || status === "success"} className={`mt-4 w-full md:w-auto self-start px-8 py-4 border backdrop-blur-md text-sm tracking-widest transition-all duration-300 ${status === "success" ? "bg-green-900/20 border-green-500 text-green-400 cursor-default" : status === "error" ? "bg-red-900/20 border-red-500 text-red-400" : "border-white/20 bg-white/5 text-white hover:bg-white hover:text-black hover:border-white"} ${status === "sending" ? "opacity-50 cursor-wait" : ""}`}>{status === "idle" && "SEND MESSAGE"}{status === "sending" && "SENDING..."}{status === "success" && "MESSAGE SENT"}{status === "error" && "ERROR - TRY AGAIN"}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}