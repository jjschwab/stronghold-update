"use client";

import { useEffect, useState, useRef, useCallback } from "react";

export default function CustomScrollbar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // 1. Calculate Position
  const handleScroll = useCallback(() => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progress = window.scrollY / totalHeight;
    setScrollPercentage(progress);

    setIsVisible(true);
    
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    if (!isDragging) {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 1500);
    }
  }, [isDragging]);

  // 2. Setup Listeners
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [handleScroll]);

  // 3. Drag Logic
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setIsVisible(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const startY = e.clientY;
    const startScroll = window.scrollY;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    
    const handleMouseMove = (moveEvent: MouseEvent) => {
        const deltaY = moveEvent.clientY - startY;
        const scrollRatio = totalHeight / window.innerHeight;
        
        window.scrollTo({
            top: startScroll + deltaY * scrollRatio,
            behavior: "auto"
        });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 1500);
      
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }, []);

  return (
    <div 
      className={`fixed top-0 right-0 z-[60] h-full w-4 flex flex-col justify-center items-center transition-opacity duration-500 ease-out ${
        isVisible || isDragging ? "opacity-100" : "opacity-0"
      }`}
    >
        <div 
            // STRONGHOLD HERO BOX STYLING:
            // 1. bg-white/10 -> Matches the "faintly illuminated" look of the box.
            // 2. border-white/10 -> Matches the box border exactly.
            // 3. backdrop-blur-sm -> Matches the box blur exactly.
            // 4. No shadow, just pure flat glass.
            className="w-2 bg-white/10 hover:bg-white/20 active:bg-white/30 cursor-pointer backdrop-blur-sm border border-white/10 transition-colors duration-200"
            style={{
                height: "15vh",
                position: "absolute",
                top: `${scrollPercentage * 85}%`,
                borderRadius: "0px",
            }}
            onMouseDown={handleMouseDown}
        />
    </div>
  );
}