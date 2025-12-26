import { useRef } from "react";
import Background from "./frontend/components/reusable-components/Background";
import Footer from "./frontend/footer/Footer";
import Hero from "./frontend/hero/Hero";
import Navbar from "./frontend/navbar/Navbar";
import SmoothScroll from "./frontend/components/ui/smooth-scroll";
import SkillsSection from "./frontend/skills/Skill";
import Experience from "./frontend/experience/Experience";
import Project from "./frontend/projects/Project";
import AboutMe from "./frontend/aboutme/AboutMe";
import Testimonials from "./frontend/testimonials/Testimonials";

function App() {
  // 🔹 SECTION REFS
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Background />
      </div>

      {/* Content */}
      <SmoothScroll>
        <div style={{ position: "relative", zIndex: 1 }}>
          {/* 👇 Pass refs to Navbar */}
          <Navbar
            sections={{
              home: heroRef,
              about: aboutRef,
              skills: skillsRef,
              experience: experienceRef,
              projects: projectsRef,
              testimonials: testimonialsRef,
              contact: contactRef,
            }}
          />

          {/* 👇 Hero Section */}
          <div ref={heroRef}>
            <Hero />
          </div>

          {/* 👇 All Sections with unified spacing */}
          <section className="space-y-32">
            <div ref={skillsRef}>
              <SkillsSection />
            </div>

            <div ref={experienceRef}>
              <Experience />
            </div>

            <div ref={projectsRef}>
              <Project />
            </div>

            <div ref={aboutRef}>
              <AboutMe />
            </div>

            <div ref={testimonialsRef}>
              <Testimonials />
            </div>
          </section>

          {/* 👇 Footer/Contact */}
          <div ref={contactRef}>
            <Footer />
          </div>
        </div>
      </SmoothScroll>
    </div>
  );
}

export default App;