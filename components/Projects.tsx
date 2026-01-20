"use client";

import { useState, useEffect } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// THE PROJECT DATA (Unchanged)
const projects = [
  {
    id: "merit",
    client: "Dr. Phil's MeritAI", 
    hoverLabel: "Branded Multipurpose Agent", 
    title: "Context-Aware Broadcast Agent",
    stats: [
      { label: "Data Ingestion", value: ">500 Internal Documents" },
      { label: "Design", value: "Proactive Multi-Turn Tool Use" },
      { label: "Tools", value: "Internal Document RAG, Specialized Research, Data.gov RAG" },
    ],
    description: "A specialized agent created for Dr. Phil's Merit Street Media. The unique architecture minimizes the learning curve for users through a proactive agent design. With access to 3 high-powered tools and multi-turn tool usage, MeritAI accelerates production workflows across a diverse range of production teams.",
    images: [
      "/meritAI/drphil.png", "/meritAI/1.png", "/meritAI/2.png", "/meritAI/3.png", "/meritAI/4.png",
      "/meritAI/5.png", "/meritAI/6.png", "/meritAI/7.png", "/meritAI/8.png"
    ]
  },
  {
    id: "chariot",
    client: "Slipstream", 
    hoverLabel: "AI-Powered Media Distribution", 
    title: "Real-Time Media Extraction",
    stats: [
      { label: "Distribution Speed", value: "<20s" },
      { label: "Format", value: "Livestream and VOD" },
      { label: "Output", value: "Social Media Clips" },
    ],
    description: "Slipstream detects, processes, and distributes key moments from video media faster than a human can. Whether it's a football game, a gaming stream, a late-night DJ set, or a wildlife cam, Slipstream is the premier solution for AI-accelerated and highlight distribution.",
    images: ["/chariot/1.png", "/chariot/2.png", "/chariot/3.png"]
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

export default function Projects() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const handleProjectSwitch = (event: Event) => {
      const customEvent = event as CustomEvent;
      const targetId = customEvent.detail;
      const foundProject = projects.find(p => p.id === targetId);
      if (foundProject) setActiveProject(foundProject);
    };
    window.addEventListener("switchProject", handleProjectSwitch);
    return () => window.removeEventListener("switchProject", handleProjectSwitch);
  }, []);

  useEffect(() => { setCurrentImgIndex(0); }, [activeProject]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % activeProject.images.length);
    }, 6000); 
    return () => clearInterval(timer);
  }, [activeProject]);

  return (
    <section id="projects" className="relative w-full pb-32 pt-0 px-4 overflow-hidden scroll-mt-28">
      <style jsx global>{`
        @keyframes ken-burns {
          0% { transform: scale(1.0) translate(0%, 0%); }
          100% { transform: scale(1.15) translate(-2%, -3%); }
        }
        .animate-ken-burns { animation: ken-burns 20s ease-out infinite alternate; }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="w-full flex flex-col items-end pt-12 mb-10 md:mb-20">
            <h2 className={`${inter.className} text-3xl md:text-4xl font-medium text-white`}>
              Projects
            </h2>
            <div className="h-px w-1/4 bg-white/20 mt-10 md:mt-20"></div>
        </div>

        {/* RESPONSIVE LAYOUT: 1 Col on Mobile, 12 Cols on Large Screens */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-auto lg:h-[600px]">
          
          <div className="lg:col-span-8 relative group order-2 lg:order-1">
            <div className="w-full h-full border border-white/10 bg-white/5 backdrop-blur-md relative overflow-hidden flex flex-col transition-all duration-500 hover:border-white/20">
              
              {/* MOBILE HEIGHT: 300px min-height on mobile, 400px on desktop */}
              <div className="relative flex-1 p-0 flex flex-col justify-end min-h-[300px] md:min-h-[400px]">
                
                <div className="absolute inset-0 z-0 overflow-hidden bg-gray-900">
                    {activeProject.images.map((img, index) => (
                        <div key={img} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImgIndex ? "opacity-100" : "opacity-0"}`}>
                            <img src={img} alt="Project Screenshot" className="w-full h-full object-cover object-top animate-ken-burns" />
                            {/* Darker gradient on mobile to make white text readable against busy images */}
                            <div className="absolute inset-0 z-20 bg-gradient-to-t from-black via-black/90 to-transparent md:via-black/80"></div>
                        </div>
                    ))}
                </div>

                <div className="relative z-30 pointer-events-none p-6 md:p-12">
                  <div className="flex gap-4 md:gap-8 mb-4 md:mb-8 flex-wrap">
                    {activeProject.stats.map((stat, i) => (
                      <div key={i} className="flex flex-col">
                        <span className={`${inter.className} text-[8px] md:text-[10px] text-gray-400 tracking-wider mb-1`}>
                          {stat.label}
                        </span>
                        {/* Smaller font size on mobile */}
                        <span className={`${inter.className} text-white text-xs md:text-base border-l-2 border-white/20 pl-2 md:pl-3`}>
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-300 leading-relaxed text-sm md:text-xl max-w-2xl drop-shadow-md">
                    {activeProject.description}
                  </p>

                  <div className="flex gap-2 mt-4 md:mt-6">
                    {activeProject.images.map((_, idx) => (
                        <div key={idx} className={`h-1 rounded-full transition-all duration-300 ${idx === currentImgIndex ? "w-8 bg-white" : "w-2 bg-white/20"}`}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Corners */}
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-white/30"></div>
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-white/30"></div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-2 order-1 lg:order-2">
            {projects.map((project) => {
              const isActive = activeProject.id === project.id;
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                  // MOBILE HEIGHT: Shorter buttons (h-16) on mobile
                  className={`group flex items-center h-16 md:h-20 border transition-all duration-500 overflow-hidden relative backdrop-blur-sm
                    ${isActive ? "bg-white text-black border-white" : "bg-white/5 text-gray-500 border-white/10 hover:border-white/30 hover:bg-white/10 hover:text-white"}`}
                >
                  <div className={`flex items-center justify-center h-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] whitespace-nowrap w-full group-hover:w-1/2`}>
                    <span className={`${inter.className} text-lg md:text-xl font-medium`}>
                      {project.client}
                    </span>
                  </div>
                  <div className={`flex items-center justify-center h-full overflow-hidden bg-white/5 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-100 ${isActive ? "border-l border-black/10 text-black/60" : "border-l border-white/10 text-gray-400"}`}>
                    <span className={`${inter.className} text-[10px] md:text-xs tracking-wide px-2 text-center leading-tight`}>
                      {project.hoverLabel}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}