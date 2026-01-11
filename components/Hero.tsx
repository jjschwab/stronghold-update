export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Gradient Effect - Adds the "Premium" feel */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-black to-black"></div>
      
      <div className="z-10 container mx-auto px-4 text-center">
        <h1 className="pb-2 text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">          Stronghold Labs
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Advanced algorithmic solutions and intelligent system design.
          Building the digital infrastructure of tomorrow.
        </p>

        <div className="mt-10 flex gap-4 justify-center">
          <a href="#projects" className="rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition-all hover:bg-gray-200">
            View Projects
          </a>
          <a href="#contact" className="rounded-full border border-gray-700 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-gray-900 hover:border-gray-500">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}