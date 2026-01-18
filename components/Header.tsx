"use client";

import { useState, useEffect } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full border-b transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-white/10 py-4"
          : "bg-transparent border-transparent py-8"
      }`}
    >
      <div className="w-full px-4 flex items-center justify-between">
        
        {/* Left Side: Logo and Brand Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative h-11 w-11 overflow-hidden rounded-sm">
            <img 
              src="/SL_logo.png" 
              alt="Stronghold Labs Logo" 
              className="object-contain h-full w-full transition-transform group-hover:scale-110"
            />
          </div>
          <span className={`${inter.className} text-2xl font-medium text-white tracking-wide`}>
            Stronghold Labs
          </span>
        </a>

        {/* Right Side: Navigation Links */}
        <nav>
          <ul className="flex items-center gap-1 text-base font-medium text-gray-300">
            <li><a href="#services" className="px-5 py-2 hover:text-white transition-colors">Services</a></li>
            
            {/* NEW: Vertical Schematic Separator */}
            {/* h-4 (16px height) to match text height, w-px (1px width) for sharpness */}
            <li className="h-4 w-px bg-white/20" aria-hidden="true"></li>
            
            <li><a href="#projects" className="px-5 py-2 hover:text-white transition-colors">Projects</a></li>
            
            {/* NEW: Vertical Schematic Separator */}
            <li className="h-4 w-px bg-white/20" aria-hidden="true"></li>
            
            <li><a href="#team" className="px-5 py-2 hover:text-white transition-colors">Team</a></li>
            
            <li className="ml-5">
              <a 
                href="#contact" 
                className="border border-white/20 bg-white/5 px-6 py-2.5 text-white transition-all hover:bg-white/10 hover:border-white/40 active:scale-95"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}