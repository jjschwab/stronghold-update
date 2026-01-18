"use client";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Footer() {
  
  const links = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-black border-t border-white/10 pt-16 pb-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        
        {/* LEFT: BRAND & COPYRIGHT */}
        <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className={`${inter.className} text-white text-lg font-medium tracking-wide`}>
                Stronghold Labs
            </h3>
            <span className={`${inter.className} text-xs text-gray-600`}>
                © 2026 Stronghold Labs. All rights reserved.
            </span>
        </div>

        {/* CENTER: NAVIGATION */}
        <nav className="flex gap-8">
            {links.map((link) => (
                <a 
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`${inter.className} text-sm text-gray-500 hover:text-white transition-colors`}
                >
                    {link.name}
                </a>
            ))}
        </nav>

        {/* RIGHT: BACK TO TOP (Functional Utility) */}
        <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300"
        >
            <span className={`${inter.className} text-xs text-gray-400 group-hover:text-white transition-colors`}>
                Back to Top
            </span>
            <svg 
                className="w-3 h-3 text-gray-500 group-hover:text-white transition-colors transform group-hover:-translate-y-0.5 duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
            >
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
        </button>

      </div>
    </footer>
  );
}