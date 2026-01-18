"use client";

import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  targetProjectId: string; 
}

const services: ServiceItem[] = [
  {
    id: "01",
    title: "Context Engineering", 
    description: "Turn your unstructured datasets into profitable assets. With intelligent data processing and rigorous system design, we specialize in structuring your data to unlock and power innovative solutions.",
    imagePath: "/blade_1_image_3.png",
    targetProjectId: "ethos", 
  },
  {
    id: "02",
    title: "Custom Agents and AI Integration",
    description: "Transform your process into intelligent automation. We implement custom agentic designs to accelerate business and expand capabilities. Our solutions go beyond N8N and off the shelf agent builders to give you an enduring technical advantage.",
    imagePath: "/blade_2_image_4.png", 
    targetProjectId: "merit", 
  },
  {
    id: "03",
    title: "Product Development",
    description: "Full-cycle engineering of production-grade AI. We bridge the gap between concept and reality, delivering resilient, scalable applications built to withstand real-world demand.",
    imagePath: "/blade_3_image_2.png", 
    targetProjectId: "chariot", 
  }
];

export default function Services() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  const handleNavigateToProject = (projectId: string) => {
    const event = new CustomEvent("switchProject", { detail: projectId });
    window.dispatchEvent(event);

    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // ADDED: scroll-mt-28 (Stop scrolling 112px before the top)
    <section id="services" className="relative w-full pb-32 overflow-hidden scroll-mt-28">
      
      <div className="relative z-10 w-full px-4">
        <div className="max-w-7xl mx-auto">
          
          <div className="w-full flex flex-col items-start pt-20 mb-20">
            <h2 className={`${inter.className} text-3xl md:text-4xl font-medium text-white`}>
              Services
            </h2>
            <div className="h-px w-1/4 bg-white/20 mt-20"></div>
          </div>

          <div className="flex flex-col gap-4">
            {services.map((service) => {
              const isOpen = activeId === service.id;

              return (
                <div 
                  key={service.id}
                  className={`
                    group relative w-full border border-white/10 backdrop-blur-md
                    transition-all duration-500 overflow-hidden
                    ${isOpen ? "bg-white/10 border-white/30" : "bg-white/5 hover:bg-white/10 hover:border-white/30"}
                  `}
                >
                  
                  <div 
                    onClick={() => toggleService(service.id)}
                    className="flex flex-col md:flex-row min-h-[9rem] divide-y md:divide-y-0 divide-white/10 cursor-pointer"
                  >
                    
                    <div className="flex-1 flex items-center justify-center p-6 md:p-8 border-r-0 md:border-r border-white/10 transition-all duration-500">
                      <h3 className={`${inter.className} text-xl md:text-2xl font-medium text-white text-center transition-colors group-hover:text-white`}>
                        {service.title}
                      </h3>
                    </div>

                    <div className="flex-1 flex items-center justify-center p-8 bg-black/20 md:bg-transparent relative overflow-hidden border-r-0 md:border-r border-white/10 transition-all duration-500">
                      <img 
                        src={service.imagePath} 
                        alt={service.title}
                        className="w-full h-16 object-contain opacity-40 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                      />
                      <div className="absolute inset-0 bg-white/0 transition-colors duration-500 group-hover:bg-white/[0.03]"></div>
                    </div>

                    <div className={`
                      flex items-center justify-center overflow-hidden bg-white/0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                      w-full py-6 border-white/10
                      md:py-0 md:w-0 md:opacity-0 md:border-l-0
                      md:group-hover:w-[33%] md:group-hover:opacity-100 md:group-hover:border-l md:group-hover:border-white/10
                      ${isOpen ? "md:w-[33%] md:opacity-100 md:border-l md:border-white/10" : ""}
                    `}>
                       <svg 
                        className={`w-6 h-6 text-white transition-transform duration-500 ${isOpen ? "rotate-90" : "rotate-0"}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                       </svg>
                    </div>

                  </div>

                  <div 
                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr] border-t border-white/10" : "grid-rows-[0fr] border-none"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="md:col-span-2 p-8 md:p-10 text-gray-400 leading-relaxed text-lg flex items-center">
                          {service.description}
                        </div>
                        <div className="md:col-span-1 p-8 md:p-10 flex items-center justify-center">
                            <button 
                                onClick={() => handleNavigateToProject(service.targetProjectId)}
                                className="px-6 py-3 border border-white/20 bg-white/5 text-white text-sm tracking-wide hover:bg-white/10 hover:border-white/40 transition-all duration-200"
                            >
                                Find Out More
                            </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 h-4 w-4 border-t border-r border-white/10 transition-colors group-hover:border-white/40 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-white/10 transition-colors group-hover:border-white/40 pointer-events-none"></div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}