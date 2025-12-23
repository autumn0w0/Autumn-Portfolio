import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";

export default function SmoothScroll({ children }) {
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect desktop / laptop only
  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(
        window.matchMedia("(hover: hover) and (pointer: fine)").matches
      );
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const { scrollY } = useScroll();

  // Smooth spring (tweak for feel)
  const smoothY = useSpring(scrollY, {
    stiffness: 80,
    damping: 20,
    mass: 0.8,
  });

  const y = useTransform(smoothY, (value) => -value);

  if (!isDesktop) {
    // Mobile = native scrolling
    return <>{children}</>;
  }

  return (
    <>
      {/* Spacer to keep page height */}
      <motion.div style={{ height: document.body.scrollHeight }} />

      {/* Smooth scrolling content */}
      <motion.div style={{ y }} className="fixed top-0 left-0 w-full">
        {children}
      </motion.div>
    </>
  );
}
