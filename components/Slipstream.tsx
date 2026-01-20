"use client";

import { useState, useEffect } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Slipstream() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // DATA: Extracted strictly for Slipstream
  const product = {
    id: "slipstream",
    client: "Slipstream", 
    title: "Real-Time Media Extraction",
    stats: [
      { label: "Distribution Speed", value: "<20s" },
      { label: "Format", value: "Livestream and VOD" },
      { label: "Output", value: "Social Media Clips" },
    ],
    description: "Slipstream detects, processes, and distributes key moments from video media faster than a human can. Whether it's a football game, a gaming stream, a late-night DJ set, or a wildlife cam, Slipstream is the premier solution for AI-accelerated highlight distribution.",
    images: ["/chariot/1.png", "/chariot/2.png", "/chariot/3.png"]
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % product.images.length);
    }, 6000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="slipstream" className="relative w-full pb-32 pt-0 px-4 overflow-hidden scroll-mt-28">
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="w-full flex flex-col items-end pt-12 mb-20">
            <h2 className={`${inter.className} text-3xl md:text-4xl font-medium text-white`}>
              Product
            </h2>
            <div className="h-px w-1/4 bg-white/20 mt-20"></div>
        </div>

        {/* SINGLE FEATURE CARD */}
        <div className="w-full border border-white/10 bg-white/5 backdrop-blur-md relative overflow-hidden flex flex-col transition-all duration-500 hover:border-white/20 h-[600px]">
              
          <div className="relative flex-1 p-0 flex flex-col justify-end min-h-[400px]">
            
            {/* BACKGROUND IMAGES */}
            <div className="absolute inset-0 z-0 overflow-hidden bg-gray-900">
                {product.images.map((img, index) => (
                    <div key={img} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImgIndex ? "opacity-100" : "opacity-0"}`}>
                        <img src={img} alt="Slipstream Interface" className="w-full h-full object-cover object-top" />
                        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                    </div>
                ))}
            </div>

            {/* TEXT OVERLAY */}
            <div className="relative z-30 pointer-events-none p-6 md:p-12">
              <h3 className={`${inter.className} text-3xl md:text-5xl font-medium text-white mb-2`}>
                {product.client}
              </h3>
              <p className={`${inter.className} text-white/60 text-lg mb-8 tracking-wide`}>
                {product.title}
              </p>

              <div className="flex gap-8 mb-8 flex-wrap">
                {product.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className={`${inter.className} text-[10px] text-gray-400 tracking-wider mb-1`}>
                      {stat.label}
                    </span>
                    <span className={`${inter.className} text-white text-base border-l-2 border-white/20 pl-3`}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed text-xl max-w-2xl drop-shadow-md mb-8">
                {product.description}
              </p>

              {/* External Link Button */}
              <a 
                href="https://beta.strongholdlabs.io" 
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto inline-block px-8 py-3 bg-white text-black font-medium text-sm tracking-widest hover:bg-gray-200 transition-colors"
              >
                LAUNCH BETA
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}