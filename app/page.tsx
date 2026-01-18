import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

export default function Home() {
  return (
    // REMOVED: bg-black
    // ADDED: relative (to ensure stacking context is correct)
    <main className="relative min-h-screen flex-col text-white">
      <Background />
      
      <Hero />
      
      {/* THE HORIZON SEPARATOR */}
      <div className="w-full px-4">
        <div className="h-px w-full max-w-7xl mx-auto bg-white/20"></div>
      </div>
      
      <Services />
      <Projects />
      <Team />
      <Contact />
      <Footer /> 
    </main>
  );
}