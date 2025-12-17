import Background from "../components/reusable-components/Background";

function Hero() {
  return (
    <div className="relative w-auto h-screen overflow-hidden">
      <Background />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-5xl">Hero Content</h1>
      </div>
    </div>
  );
}

export default Hero;
