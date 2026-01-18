"use client";

import { useEffect, useRef, useState } from "react";

export default function Background() {
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const [ready, setReady] = useState(false);
  
  // Physics State
  const orbs = useRef<{ x: number; y: number; dx: number; dy: number; size: number; color: string }[]>([]);
  const orbRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // 1. Initialize Random Orb Data
    if (orbs.current.length === 0) {
      
      // MOBILE DETECT: We check the screen width once on mount
      const isMobile = window.innerWidth < 768;

      const generateOrb = (desktopSize: number, mobileSize: number, colorClass: string, speedMultiplier: number) => {
        const size = isMobile ? mobileSize : desktopSize; // Fork the size logic
        const centerInitX = Math.random() * 100; 
        const centerInitY = Math.random() * 100; 
        
        return {
          x: centerInitX - (size / 2), 
          y: centerInitY - (size / 2),
          dx: (Math.random() - 0.5) * speedMultiplier,
          dy: (Math.random() - 0.5) * speedMultiplier,
          size,
          color: colorClass // This string will now handle the responsive CSS
        };
      };

      orbs.current = [
        // ORB 1: CYAN
        // Mobile: Big (70vw) & Bright (30%). Desktop: Small (35vw) & Faint (10%).
        generateOrb(35, 70, "bg-cyan-900/30 md:bg-cyan-900/10", 0.08),
        
        // ORB 2: BLUE
        generateOrb(50, 80, "bg-blue-950/40 md:bg-blue-950/15", 0.05),
        
        // ORB 3: INDIGO
        generateOrb(45, 75, "bg-indigo-900/30 md:bg-indigo-900/10", 0.04),
        
        // ORB 4: VIOLET
        generateOrb(40, 65, "bg-violet-900/30 md:bg-violet-900/10", 0.06),
        
        // ORB 5: PURPLE
        generateOrb(60, 90, "bg-purple-950/30 md:bg-purple-950/10", 0.03),
      ];
      setReady(true); 
    }

    const animate = () => {
      orbs.current.forEach((orb, i) => {
        const el = orbRefs.current[i];
        if (!el) return;

        orb.x += orb.dx;
        orb.y += orb.dy;

        const centerX = orb.x + (orb.size / 2);
        const centerY = orb.y + (orb.size / 2);
        
        if (centerX < 0 || centerX > 100) orb.dx *= -1;
        if (centerY < 0 || centerY > 100) orb.dy *= -1;

        el.style.transform = `translate3d(${orb.x}vw, ${orb.y}vh, 0)`;
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full bg-[#020205] -z-50 overflow-hidden pointer-events-none">
      
      <div className={`transition-opacity duration-1000 ${ready ? 'opacity-100' : 'opacity-0'}`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            ref={(el) => { orbRefs.current[i] = el; }}
            // RESPONSIVE CLASS: 
            // - Mobile: bg-cyan-900/30 (Bright)
            // - Desktop (md:): bg-cyan-900/10 (Your original faint glass)
            className={`absolute rounded-full blur-[60px] md:blur-[100px] mix-blend-screen will-change-transform 
              ${i === 0 ? "bg-cyan-900/30 md:bg-cyan-900/10" : 
                i === 1 ? "bg-blue-950/40 md:bg-blue-950/15" : 
                i === 2 ? "bg-indigo-900/30 md:bg-indigo-900/10" : 
                i === 3 ? "bg-violet-900/30 md:bg-violet-900/10" : 
                "bg-purple-950/30 md:bg-purple-950/10"
              }`}
            style={{
              // The JS handles the size logic now (see generateOrb above)
              width: `${orbs.current[i]?.size || 0}vw`,
              height: `${orbs.current[i]?.size || 0}vw`,
              left: 0,
              top: 0,
              transform: 'translate3d(-100vw, -100vh, 0)'
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

    </div>
  );
}