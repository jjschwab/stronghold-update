"use client";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <section id="about" className="relative w-full pb-32 pt-0 px-4 overflow-hidden scroll-mt-28">
      
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* HEADER: Swapped from items-end to items-start (LEFT) */}
        <div className="w-full flex flex-col items-start pt-12 mb-20">
            <h2 className={`${inter.className} text-3xl md:text-4xl font-medium text-white`}>
              About Us
            </h2>
            <div className="h-px w-1/4 bg-white/20 mt-20"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT COLUMN: Main Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className={`${inter.className} text-2xl md:text-3xl font-medium text-white leading-tight`}>
              Innovators, builders, and seasoned strategists.
            </h3>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Stronghold Labs is a team of innovators and builders—a collective of seasoned strategists, 
                published scientists, and expert engineers—dedicated to creating high-end AI tools for Storytellers.
              </p>
              <p>
                We combine scientific rigor with an architect's eye for execution to translate complex theoretical 
                models into deployed, production-grade software. Our expertise spans from strategic vision and 
                high-value ROI delivery to the hands-on engineering that ensures stability, scalability, and 
                performance across all integrated solutions.
              </p>
              <p>
                We drive the operational pulse, aligning complex technical deliverables with clear client business 
                objectives for maximum impact.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: The Two Channels */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 md:p-10 space-y-8">
              <p className={`${inter.className} text-white font-medium text-lg border-b border-white/10 pb-4`}>
                We operate through two primary channels to expand your capabilities:
              </p>

              <div className="space-y-6">
                <div>
                  <span className={`${inter.className} block text-white font-medium mb-2`}>
                    Our Products
                  </span>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    We engineer and deploy our own resilient, scalable AI applications, such as <span className="text-white">Slipstream</span>, a premier solution for AI-accelerated media distribution.
                  </p>
                </div>

                <div>
                  <span className={`${inter.className} block text-white font-medium mb-2`}>
                    The Studio
                  </span>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Our custom AI integration and product development arm, where we work directly with clients to architect experiments, design custom agentic systems, and build innovative solutions.
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