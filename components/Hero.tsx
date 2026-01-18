"use client";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Hero() {
  
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // Removed bg-black and local lighting layers
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-white pt-20">
      
      <div className="z-10 container mx-auto px-4 flex flex-col items-center">
        
        {/* THE FROSTY BOX CONTAINER (UNCHANGED) */}
        <div className="relative max-w-4xl w-full border border-white/10 bg-white/5 backdrop-blur-sm p-10 md:p-14 text-center mb-10">
          
          <div className="absolute top-0 left-0 border-b border-r border-white/10 bg-white/5 px-4 py-2">
            <span className="font-mono text-xs text-gray-400 tracking-widest">SL-2026</span>
          </div>

          <h1 className={`${inter.className} text-4xl md:text-6xl font-medium tracking-tight text-white mt-4`}>
            Stronghold Labs
          </h1>
          
          <div className="flex justify-center w-full my-8">
            <div className="h-px w-64 bg-white/20"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            High-end AI Products, Strategy, and Custom Integration. <br className="hidden md:block" />
            Find your competitive edge.
          </p>
        </div>

        {/* THE SILENT TRIGGER (Glass Artifact) */}
        <button 
          onClick={scrollToServices}
          aria-label="Initialize System"
          className="group mt-8 cursor-pointer"
        >
          <div className="p-4 border border-white/10 bg-white/5 transition-all duration-500 group-hover:border-white/30 group-hover:bg-white/10 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <svg 
              className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-500" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1} d="M12 4v16m0 0l-4-4m4 4l4-4" />
            </svg>
          </div>
        </button>

      </div>
    </section>
  );
}