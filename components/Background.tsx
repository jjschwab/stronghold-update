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
      
      const generateOrb = (size: number, color: string, speedMultiplier: number) => {
        // We calculate position based on CENTER point (0-100vw)
        const centerInitX = Math.random() * 100; 
        const centerInitY = Math.random() * 100; 
        
        return {
          x: centerInitX - (size / 2), 
          y: centerInitY - (size / 2),
          // Slight variance in speed to prevent synchronization
          dx: (Math.random() - 0.5) * speedMultiplier,
          dy: (Math.random() - 0.5) * speedMultiplier,
          size,
          color
        };
      };

      orbs.current = [
        // ORB 1: CYAN-TEAL (Smallest, Fastest - The "Spark")
        generateOrb(35, "bg-cyan-900/10", 0.08),
        
        // ORB 2: DEEP BLUE (Medium, The "Body")
        generateOrb(50, "bg-blue-950/15", 0.05),
        
        // ORB 3: INDIGO (Medium, The Bridge)
        generateOrb(45, "bg-indigo-900/10", 0.04),
        
        // ORB 4: VIOLET (Small-Medium, The "Redder" Hue you liked)
        generateOrb(40, "bg-violet-900/10", 0.06),
        
        // ORB 5: DEEP PURPLE (Largest, The Anchor - Very Faint)
        generateOrb(60, "bg-purple-950/10", 0.03),
      ];
      setReady(true); 
    }

    const animate = () => {
      orbs.current.forEach((orb, i) => {
        const el = orbRefs.current[i];
        if (!el) return;

        // 1. Update Position
        orb.x += orb.dx;
        orb.y += orb.dy;

        // 2. Center-Based Collision Detection
        const centerX = orb.x + (orb.size / 2);
        const centerY = orb.y + (orb.size / 2);
        
        // Bounding Box: 0 to 100vw/vh
        if (centerX < 0 || centerX > 100) orb.dx *= -1;
        if (centerY < 0 || centerY > 100) orb.dy *= -1;

        // 3. Apply Transform
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
            // TUNING: Reduced blur from 120 -> 100 to make the orbs more distinct
            className={`absolute rounded-full blur-[100px] mix-blend-screen will-change-transform 
              ${i === 0 ? "bg-cyan-900/10" : 
                i === 1 ? "bg-blue-950/15" : 
                i === 2 ? "bg-indigo-900/10" : 
                i === 3 ? "bg-violet-900/10" : 
                "bg-purple-950/10"
              }`}
            style={{
              // SIZES: Tuned down to [35, 50, 45, 40, 60] to prevent the "Super Blob" effect
              width: `${[35, 50, 45, 40, 60][i]}vw`,
              height: `${[35, 50, 45, 40, 60][i]}vw`,
              left: 0,
              top: 0,
              transform: 'translate3d(-100vw, -100vh, 0)'
            }}
          />
        ))}
      </div>

      {/* TEXTURE GRAIN */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

    </div>
  );
}