import { useState } from "react";
import Background from "./frontend/components/reusable-components/Background";
import Footer from "./frontend/footer/Footer";
import Hero from "./frontend/hero/Hero";
import Navbar from "./frontend/navbar/Navbar";
import SmoothScroll from "./frontend/components/ui/smooth-scroll";

function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Background layer - fixed or absolute */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Background />
      </div>

      {/* Content layer - on top of background */}
      <SmoothScroll>
        <div style={{ position: "relative", zIndex: 1 }}>
          <Navbar />
          <Hero />
          <Footer />
        </div>
      </SmoothScroll>
    </div>
  );
}

export default App;
