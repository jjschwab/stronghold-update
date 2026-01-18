"use client";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// TEAM DATA
const team = [
  {
    name: "Pete Schwab",
    role: "CEO",
    initials: "PS",
    linkedin: "https://www.linkedin.com/in/peteschwab/", 
    bio: "A 20-year veteran in the digital video and connected TV industry. Pete was part of the core team that launched Fire TV at Amazon. He sets the strategic vision for the Lab, defining project scope and delivering high-value ROI.",
    skills: ["Content Strategy", "Catalog Curation", "Voice / NLP", "AI Compliance"]
  },
  {
    name: "Joe Schwab",
    role: "CTO",
    initials: "JS",
    linkedin: "https://www.linkedin.com/in/joe-schwab-66890b23a/", 
    bio: "A published physicist and mathematician bringing scientific rigor to Stronghold Labs. Joe leads the AI design, working directly with clients to architect experiments that translate theoretical models into deployed software.",
    skills: ["AI Experiment Design", "Computer Vision", "React / Next.js", "AI Workflow"]
  },
  {
    name: "James Johnson",
    role: "VP Of Product and Engineering",
    initials: "JJ",
    linkedin: "https://www.linkedin.com/in/jamesconradjohnson/", 
    bio: "The architect of execution. James translates complex theoretical models into shipping code, ensuring stability, scalability, and performance across all deployed assets and client integrations.",
    skills: ["Full Stack Engineering", "System Architecture", "Distributed Systems", "Cloud Infrastructure"]
  },
  {
    name: "Anthony Valentino",
    role: "VP of Strategic Operations",
    initials: "AV",
    linkedin: "https://www.linkedin.com/in/anthonysvalentino/", 
    bio: "Driving the operational pulse of Stronghold Labs. Anthony aligns complex technical deliverables with client business objectives, ensuring that every AI integration is strategically positioned for maximum impact and scalability.",
    skills: ["Operational Strategy", "Client Growth", "Business Integration", "Scalable Workflows"]
  }
];

export default function Team() {
  return (
    // ADDED: scroll-mt-28
    <section id="team" className="relative w-full pb-32 pt-0 px-4 overflow-hidden scroll-mt-28">
      
      <div className="relative z-10 max-w-7xl mx-auto">
        
        <div className="w-full flex flex-col items-start pt-12 mb-20">
            <h2 className={`${inter.className} text-3xl md:text-4xl font-medium text-white`}>
              Team
            </h2>
            <div className="h-px w-1/4 bg-white/20 mt-20"></div>
        </div>

        {/* UPDATED GRID: 2 Cols Tablet, 4 Cols Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div 
              key={index}
              className="group relative w-full border border-white/10 bg-white/5 backdrop-blur-md p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/10 hover:border-white/30"
            >
              
              <a 
                href={member.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute top-6 right-6 text-gray-600 hover:text-white transition-colors duration-200 z-20"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              <div className="mb-6">
                <div className="w-20 h-20 border border-white/20 flex items-center justify-center bg-black/20 group-hover:border-white/50 transition-colors duration-300 rounded-full md:rounded-none">
                  <span className={`${inter.className} text-xl text-white tracking-widest font-medium`}>
                    {member.initials}
                  </span>
                </div>
              </div>

              <div className="mb-6 flex flex-col items-center w-full">
                <h3 className={`${inter.className} text-2xl text-white font-medium mb-2`}>
                  {member.name}
                </h3>
                <span className={`${inter.className} text-xs text-gray-400 tracking-widest`}>
                  {member.role}
                </span>
              </div>

              <div className="w-full h-px bg-white/10 mb-6"></div>

              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow max-w-sm">
                {member.bio}
              </p>

              <div className="border-t border-white/10 pt-6 w-full flex justify-center">
                <div className="flex flex-wrap justify-center gap-1.5">
                  {member.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className={`${inter.className} text-[10px] tracking-wide px-2 py-1 border border-white/10 bg-white/5 text-gray-300 transition-colors group-hover:border-white/20`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute top-0 right-0 h-3 w-3 border-t border-r border-white/10 group-hover:border-white/40 transition-colors pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-white/10 group-hover:border-white/40 transition-colors pointer-events-none"></div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}