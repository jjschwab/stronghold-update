"use client";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for the sticky header
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-6 mix-blend-difference text-white">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO AREA */}
        <div 
          className="flex items-center gap-4 cursor-pointer group" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
           {/* The [SL] Box - Always Visible */}
           <div className="w-10 h-10 border border-white flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-black">
              <span className={`${inter.className} font-medium text-lg`}>SL</span>
           </div>

           {/* The "Stronghold Labs" Text - HIDDEN on Mobile (hidden), VISIBLE on Desktop (md:block) */}
           <span className={`${inter.className} text-xl font-medium tracking-wide hidden md:block`}>
             Stronghold Labs
           </span>
        </div>

        {/* RIGHT AREA */}
        <div className="flex items-center gap-8">
           
           {/* TEXT LINKS - HIDDEN on Mobile (hidden), VISIBLE on Desktop (md:flex) */}
           <nav className="hidden md:flex items-center gap-8">
             <button onClick={() => scrollToSection('services')} className={`${inter.className} text-sm text-gray-300 hover:text-white transition-colors`}>Services</button>
             <div className="w-px h-3 bg-white/20"></div>
             <button onClick={() => scrollToSection('projects')} className={`${inter.className} text-sm text-gray-300 hover:text-white transition-colors`}>Projects</button>
             <div className="w-px h-3 bg-white/20"></div>
             <button onClick={() => scrollToSection('team')} className={`${inter.className} text-sm text-gray-300 hover:text-white transition-colors`}>Team</button>
           </nav>

           {/* CONTACT BUTTON - Always Visible, but slightly smaller on mobile */}
           <button 
             onClick={() => scrollToSection('contact')}
             className={`
               border border-white/30 bg-white/5 backdrop-blur-sm 
               px-4 py-2 text-[10px] md:px-6 md:py-2 md:text-xs 
               tracking-widest uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-300
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