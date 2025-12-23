import { useRef } from "react";
import Background from "./frontend/components/reusable-components/Background";
import Footer from "./frontend/footer/Footer";
import Hero from "./frontend/hero/Hero";
import Navbar from "./frontend/navbar/Navbar";
import SmoothScroll from "./frontend/components/ui/smooth-scroll";

function App() {
  // 🔹 SECTION REFS
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
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
              contact: contactRef,
            }}
          />

          {/* 👇 Attach refs */}
          <div ref={heroRef}>
            <Hero />
          </div>

          <div ref={aboutRef}>
            {/* This is wherever your About/Experience lives */}
          </div>

          <div ref={contactRef}>
            <Footer />
          </div>
        </div>
      </SmoothScroll>
    </div>
  );
}

export default App;
