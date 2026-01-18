"use client";

import { useState, useEffect } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 20px threshold for the "glass" effect activation
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full border-b transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-white/10 py-4"
          : "bg-transparent border-transparent py-6 md:py-8"
      }`}
    >
      {/* LAYOUT FIX: 
         - Removed 'max-w-7xl mx-auto' to fix the margin issue.
         - Used 'w-full px-4 md:px-8' to push content to the edges (matching your original).
      */}
      <div className="w-full px-4 md:px-8 flex items-center justify-between">
        
        {/* LEFT AREA: Logo & Title */}
        <div 
          className="flex items-center gap-4 cursor-pointer group" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
           {/* THE CSS LOGO (Used on BOTH Mobile & Desktop now) */}
           <div className="w-10 h-10 border border-white flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-black">
              <span className={`${inter.className} font-medium text-lg text-white group-hover:text-black`}>SL</span>
           </div>

           {/* TITLE TEXT: Hidden on Mobile, Visible on Desktop */}
           <span className={`${inter.className} text-xl font-medium tracking-wide text-white hidden md:block`}>
             Stronghold Labs
           </span>
        </div>

        {/* RIGHT AREA: Nav & Contact */}
        <div className="flex items-center gap-8">
           
           {/* DESKTOP NAV LINKS: Hidden on Mobile */}
           <nav className="hidden md:flex items-center gap-8">
             <button onClick={() => scrollToSection('services')} className={`${inter.className} text-sm text-gray-300 hover:text-white transition-colors`}>Services</button>
             <div className="w-px h-3 bg-white/20"></div>
             <button onClick={() => scrollToSection('projects')} className={`${inter.className} text-sm text-gray-300 hover:text-white transition-colors`}>Projects</button>
             <div className="w-px h-3 bg-white/20"></div>
             <button onClick={() => scrollToSection('team')} className={`${inter.className} text-sm text-gray-300 hover:text-white transition-colors`}>Team</button>
           </nav>

           {/* CONTACT BUTTON: Always Visible */}
           <button 
             onClick={() => scrollToSection('contact')}
             className={`
               border border-white/30 bg-white/5 backdrop-blur-sm 
               px-4 py-2 text-[10px] md:px-6 md:py-2.5 md:text-xs 
               text-white tracking-widest uppercase 
               hover:bg-white hover:text-black hover:border-white transition-all duration-300
               ${inter.className}
             `}
           >
             Contact Us
           </button>

        </div>

      </div>
    </header>
  );
}