import React from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export const FloatingNav = ({ navItems, className }) => {
  const scrollToSection = (ref) => {
    if (!ref?.current) return;

    const navbarHeight = 100; // Adjust this based on your navbar height
    const y = ref.current.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        // POSITION (unchanged)
        "absolute top-5 left-5 z-[5000]",

        // SCALE (1.5x without redesign)
        "scale-[1.2] origin-top-left",

        // LAYOUT + CENTRALISATION
        "flex items-center justify-center",
        "gap-6 px-8 py-4",

        // BASE STYLE (unchanged)
        "border border-transparent dark:border-white/[0.3]",
        "rounded-full dark:bg-black bg-white",

        // NEON BLUE SHADOW (bottom + bottom-right)
        "shadow-[4px_6px_2px_rgba(96,165,250,0.45),8px_12px_30px_rgba(96,165,250,0.35)]",

        className
      )}
    >
      {navItems.map((navItem, idx) => (
        <button
          key={idx}
          onClick={() => scrollToSection(navItem.ref)}
          className={cn(
            "flex items-center justify-center gap-2",
            "text-neutral-600 dark:text-neutral-50",
            "hover:text-neutral-500 dark:hover:text-neutral-300",
            "transition-colors duration-200",
            "cursor-pointer"
          )}
        >
          <span className="flex items-center justify-center">
            {navItem.icon}
          </span>
          <span className="hidden sm:block text-sm font-medium">
            {navItem.name}
          </span>
        </button>
      ))}
    </motion.div>
  );
};