"use client";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Careers() {
  return (
    <section id="careers" className="relative w-full pb-32 pt-0 px-4 overflow-hidden scroll-mt-28">
      
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="w-full flex flex-col items-end pt-12 mb-20">
            <h2 className={`${inter.className} text-3xl md:text-4xl font-medium text-white`}>
              Join Us
            </h2>
            <div className="h-px w-1/4 bg-white/20 mt-20"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT COLUMN: Mission Statement */}
          <div className="lg:col-span-5 space-y-6">
             <h3 className={`${inter.className} text-2xl font-medium text-white`}>
               Build the future of storytelling.
             </h3>
             <div className="text-gray-400 leading-relaxed text-lg space-y-6">
                <p>
                  Stronghold Labs is always looking for brilliant minds to join our mission of building high-end AI tools for Storytellers. We are a team of expert engineers, published scientists, and seasoned strategists who thrive on translating complex theory into deployed, production-grade software.
                </p>
                <p>
                  While we may not have specific openings at all times, we encourage exceptional candidates to reach out and connect with us.
                </p>
             </div>
          </div>

          {/* RIGHT COLUMN: Opportunities List */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className={`${inter.className} text-lg text-white font-medium mb-2 border-b border-white/10 pb-4`}>
              Current Opportunities
            </h3>

            {/* OPPORTUNITY 1: General Inquiries */}
            <div className="group border border-white/10 bg-white/5 p-8 hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm">
               <h4 className={`${inter.className} text-xl text-white font-medium mb-4`}>
                 General Inquiries: Connect with Our Team
               </h4>
               <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                 <div>
                   <span className="text-white block mb-1 font-medium">Overview</span>
                   <p>
                     We believe in proactive engagement with top talent. If you are a visionary engineer, a strategic thinker in AI product development, or an operational expert, we invite you to share your resume and a brief introduction about how your expertise aligns with Stronghold Labs mission. This is a general contact point for future opportunities, as we are not actively hiring for full-time roles at this moment.
                   </p>
                 </div>
                 <div className="pt-2">
                   <span className="text-white block mb-1 font-medium">How to Apply</span>
                   <p>
                     Send your information to <a href="mailto:contact@strongholdlabs.io" className="text-white border-b border-white/20 hover:text-gray-300 transition-colors">contact@strongholdlabs.io</a> with the subject line "Future Opportunities Inquiry."
                   </p>
                 </div>
               </div>
            </div>

            {/* OPPORTUNITY 2: AI Intern */}
            <div className="group border border-white/10 bg-white/5 p-8 hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm">
               <h4 className={`${inter.className} text-xl text-white font-medium mb-4`}>
                 AI Intern (Summer 2026)
               </h4>
               <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                 <div>
                   <span className="text-white block mb-1 font-medium">Overview</span>
                   <p>
                     Join The Studio for a summer internship and work directly with our leadership to architect experiments and build innovative custom agentic systems. You will gain hands-on experience in full-cycle engineering, translating cutting-edge theoretical models into resilient, scalable applications. This role is ideal for students or recent graduates with a strong foundation in AI/ML, mathematics, or computer science who are looking to make a significant impact.
                   </p>
                 </div>
                 <div>
                   <span className="text-white block mb-1 font-medium">Requirements</span>
                   <p>
                     Currently enrolled in a relevant Bachelor’s or Master’s program, or recent graduate. Proficient in one or more modern programming languages and experience with AI/ML frameworks.
                   </p>
                 </div>
                 <div className="pt-2">
                   <span className="text-white block mb-1 font-medium">How to Apply</span>
                   <p>
                     Send your resume and a brief statement of interest to <a href="mailto:contact@strongholdlabs.io" className="text-white border-b border-white/20 hover:text-gray-300 transition-colors">contact@strongholdlabs.io</a> with the subject line "Summer 2026 AI Intern Application."
                   </p>
                 </div>
               </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}