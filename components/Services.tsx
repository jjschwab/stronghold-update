"use client";

import { useState, useEffect } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// --- DATA: STUDIO PORTFOLIO (Merit & Ethos Only) ---
const studioProjects = [
  {
    id: "merit",
    client: "MeritAI", 
    hoverLabel: "Branded Multipurpose Agent", 
    title: "Context-Aware Broadcast Agent",
    stats: [
      { label: "Data Ingestion", value: ">500 Internal Documents" },
      { label: "Design", value: "Proactive Multi-Turn Tool Use" },
      { label: "Tools", value: "Internal Document RAG, Specialized Research, Data.gov RAG" },
    ],
    description: "A specialized agent created for Dr. Phil's Merit Street Media. The unique architecture minimizes the learning curve for users through a proactive agent design. With access to 3 high-powered tools and multi-turn tool usage, MeritAI accelerates production workflows across a diverse range of production teams.",
    images: ["/meritAI/1.png", "/meritAI/2.png", "/meritAI/3.png", "/meritAI/4.png", "/meritAI/5.png"]
  },
  {
    id: "ethos",
    client: "Ethos", 
    hoverLabel: "AI-Driven Narrative Storytelling", 
    title: "Legacy Preservation Core",
    stats: [
      { label: "Data Ingestion", value: ">1000 Handwritten Journal Entries" },
      { label: "Design", value: "Agentic GraphRAG" },
      { label: "Output", value: "Dynamic Biographical Narratives" },
    ],
    description: "An innovation in AI-powered storytelling. Ethos synthesizes a subject's lifetime of stories, voice patterns, and personality traits into an interactive conversational agent, preserving human legacy in a digital stronghold.",
    images: ["/ethos/1.png", "/ethos/2.png", "/ethos/3.png", "/ethos/4.png", "/ethos/5.png"]
  }
];

// --- DATA: SERVICE ACCORDION ---
interface ServiceItem {
  id: string;
  title: string;
  description: string;
  imagePath: string;
  targetType: "internal" | "external_section"; // Logic switch
  targetId: string; 
}

const services: ServiceItem[] = [
  {
    id: "01",
    title: "Context Engineering", 
    description: "Turn your unstructured datasets into profitable assets. With intelligent data processing and rigorous system design, we structure your data to unlock and power innovative solutions.",
    imagePath: "/blade_1_image_3.png",
    targetType: "internal",
    targetId: "ethos", 
  },
  {
    id: "02",
    title: "Custom Agents and AI Integration",
    description: "Transform your process into intelligent automation. We implement custom agentic designs to accelerate business and expand capabilities. Our solutions go beyond N8N and off the shelf agent builders to give you an enduring technical advantage.",
    imagePath: "/blade_2_image_4.png", 
    targetType: "internal",
    targetId: "merit", 
  },
  {
    id: "03",
    title: "Product Development",
    description: "Full-cycle engineering of production-grade AI. We bridge the gap between concept and reality, delivering resilient, scalable applications built to withstand real-world demand.",
    imagePath: "/blade_3_image_2.png", 
    targetType: "external_section",
    targetId: "slipstream", // This will scroll to the NEW Slipstream section
  }
];

export default function Services() {
  // Accordion State
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  // Gallery State
  const [activeProject, setActiveProject] = useState(studioProjects[0]);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // Accordion Logic
  const toggleService = (id: string) => {
    setActiveServiceId(activeServiceId === id ? null : id);
  };

  // Gallery Navigation Logic
  const handleNavigation = (type: string, targetId: string) => {
    if (type === "external_section") {
      // Scroll to the separate Slipstream section
      const element = document.getElementById(targetId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      // Switch the local gallery
      const found = studioProjects.find(p => p.id === targetId);
      if (found) {
        setActiveProject(found);
        // Scroll down to the portfolio area slightly
        const portfolioArea = document.getElementById("studio-portfolio");
        if (portfolioArea) portfolioArea.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Carousel Logic
  useEffect(() => { setCurrentImgIndex(0); }, [activeProject]);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % activeProject.images.length);
    }, 6000); 
    return () => clearInterval(timer);
  }, [activeProject]);

  return (
    <section id="services" className="relative w-full pb-20 overflow-hidden scroll-mt-28">
      
      <div className="relative z-10 w-full px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* --- PART 1: ACCORDION --- */}
          <div className="w-full flex flex-col items-start pt-20 mb-20">
            <h2 className={`${inter.className} text-3xl md:text-4xl font-medium text-white`}>
              Studio
            </h2>
            <div className="h-px w-1/4 bg-white/20 mt-20"></div>
          </div>

          <div className="flex flex-col gap-4 mb-32">
            {services.map((service) => {
              const isOpen = activeServiceId === service.id;
              return (
                <div key={service.id} className={`group relative w-full border border-white/10 backdrop-blur-md transition-all duration-500 overflow-hidden ${isOpen ? "bg-white/10 border-white/30" : "bg-white/5 hover:bg-white/10 hover:border-white/30"}`}>
                  <div onClick={() => toggleService(service.id)} className="flex flex-col md:flex-row min-h-[9rem] divide-y md:divide-y-0 divide-white/10 cursor-pointer">
                    <div className="flex-1 flex items-center justify-center p-6 md:p-8 md:border-r border-white/10">
                      <h3 className={`${inter.className} text-xl md:text-2xl font-medium text-white text-center`}>{service.title}</h3>
                    </div>
                    <div className="flex-1 flex items-center justify-center p-8 bg-black/20 md:bg-transparent relative overflow-hidden md:border-r border-white/10">
                      <img src={service.imagePath} alt={service.title} className="w-full h-16 object-contain opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105" />
                    </div>
                    <div className={`flex items-center justify-center w-full py-6 md:py-0 md:w-0 md:opacity-0 md:border-l-0 transition-all duration-500 ${isOpen ? "md:w-[33%] md:opacity-100 md:border-l border-white/10" : "md:group-hover:w-[33%] md:group-hover:opacity-100 md:group-hover:border-l"}`}>
                       <svg className={`w-6 h-6 text-white transition-transform duration-500 ${isOpen ? "rotate-90" : "rotate-0"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
                  </div>
                  <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? "grid-rows-[1fr] border-t border-white/10" : "grid-rows-[0fr] border-none"}`}>
                    <div className="overflow-hidden">
                      <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="md:col-span-2 p-8 md:p-10 text-gray-400 leading-relaxed text-lg">{service.description}</div>
                        <div className="md:col-span-1 p-8 md:p-10 flex items-center justify-center">
                            <button onClick={() => handleNavigation(service.targetType, service.targetId)} className="px-6 py-3 border border-white/20 bg-white/5 text-white text-sm tracking-wide hover:bg-white/10 hover:border-white/40 transition-all duration-200">Find Out More</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>


          {/* --- PART 2: STUDIO PORTFOLIO (Gallery) --- */}
          <div id="studio-portfolio" className="w-full flex flex-col items-end mb-10">
             <h3 className={`${inter.className} text-2xl md:text-3xl font-medium text-white/50`}>
               Projects
             </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-auto lg:h-[600px]">
            {/* GALLERY AREA */}
            <div className="lg:col-span-8 relative group order-2 lg:order-1">
              <div className="w-full h-full border border-white/10 bg-white/5 backdrop-blur-md relative overflow-hidden flex flex-col transition-all duration-500 hover:border-white/20">
                <div className="relative flex-1 p-0 flex flex-col justify-end min-h-[300px] md:min-h-[400px]">
                  <div className="absolute inset-0 z-0 overflow-hidden bg-gray-900">
                      {activeProject.images.map((img, index) => (
                          <div key={img} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImgIndex ? "opacity-100" : "opacity-0"}`}>
                              <img src={img} alt="Project Screenshot" className="w-full h-full object-cover object-top" />
                              <div className="absolute inset-0 z-20 bg-gradient-to-t from-black via-black/90 to-transparent md:via-black/80"></div>
                          </div>
                      ))}
                  </div>
                  <div className="relative z-30 pointer-events-none p-6 md:p-12">
                    <div className="flex gap-4 md:gap-8 mb-4 md:mb-8 flex-wrap">
                      {activeProject.stats.map((stat, i) => (
                        <div key={i} className="flex flex-col">
                          <span className={`${inter.className} text-[8px] md:text-[10px] text-gray-400 tracking-wider mb-1`}>{stat.label}</span>
                          <span className={`${inter.className} text-white text-xs md:text-base border-l-2 border-white/20 pl-2 md:pl-3`}>{stat.value}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-xl max-w-2xl drop-shadow-md">{activeProject.description}</p>
                    <div className="flex gap-2 mt-4 md:mt-6">
                      {activeProject.images.map((_, idx) => (
                          <div key={idx} className={`h-1 rounded-full transition-all duration-300 ${idx === currentImgIndex ? "w-8 bg-white" : "w-2 bg-white/20"}`}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* LIST AREA */}
            <div className="lg:col-span-4 flex flex-col gap-2 order-1 lg:order-2">
              {studioProjects.map((project) => {
                const isActive = activeProject.id === project.id;
                return (
                  <button key={project.id} onClick={() => setActiveProject(project)} className={`group flex items-center h-16 md:h-20 border transition-all duration-500 overflow-hidden relative backdrop-blur-sm ${isActive ? "bg-white text-black border-white" : "bg-white/5 text-gray-500 border-white/10 hover:border-white/30 hover:bg-white/10 hover:text-white"}`}>
                    <div className={`flex items-center justify-center h-full transition-all duration-500 whitespace-nowrap w-full group-hover:w-1/2`}>
                      <span className={`${inter.className} text-lg md:text-xl font-medium`}>{project.client}</span>
                    </div>
                    <div className={`flex items-center justify-center h-full overflow-hidden bg-white/5 transition-all duration-500 w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-100 ${isActive ? "border-l border-black/10 text-black/60" : "border-l border-white/10 text-gray-400"}`}>
                      <span className={`${inter.className} text-[10px] md:text-xs tracking-wide px-2 text-center leading-tight`}>{project.hoverLabel}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}