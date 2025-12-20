// import Background from "../components/reusable-components/Background";
import SkillsSection from "./Skill";
import Project from "./Project";
import Testimonials from "./Testimonials";

function Hero() {
  return (
    <>
      <div className="relative w-auto h-screen">
        {/* <Background /> */}
        <div className="relative z-10 flex items-end pb-24 md:pb-32 lg:pb-40 h-full px-8 md:px-16 lg:px-24">
          <div className="w-full max-w-7xl mx-auto">
            {/* Product Designer Tag in Cylinder */}
            <div className="mb-6">
              <div className="inline-block px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
                <span className="text-white/95 text-xs md:text-sm font-normal tracking-wide">
                  AIML Engineer & Researcher
                </span>
              </div>
            </div>

            {/* Main Content Container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end">
              {/* Left: Main Heading */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
                  <span className="text-white">Akhilesh Damke</span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                    Creation
                  </span>
                </h1>
              </div>
              
              {/* Right: Bio Box */}
              <div className="flex justify-center lg:justify-start lg:-ml-32">
                <div className="px-8 py-6 max-w-md">
                  <p className="text-white text-sm md:text-base font-medium leading-relaxed">
                    Designing and engineering intelligent AI systems that turn data into real-world impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <Project />

      {/* Testimonials Section */}
      <Testimonials />
    </>
  );
}

export default Hero;