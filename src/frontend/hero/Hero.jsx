import Background from "../components/reusable-components/Background";
import Testimonials from "../testimonials/Testimonials";
import Experience from "../experience/Experience";
import React from "react";

function Hero() {
  return (
    <div className="relative w-auto h-screen">
      <Background />
      <div className="relative z-10 flex mb-15 items-center justify-center h-full">
        <h1 className="text-white text-5xl">Hero Content</h1>
      </div>
      <Testimonials />
      <Experience />
    </div>
  );
}

export default Hero;
