"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export const FloatingNav = ({ navItems, className }) => {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        // 🔽 POSITIONING FIX
        "absolute top-0 left-0 z-[5000]",

        // 🔽 LAYOUT + STYLE
        "flex w-fit ml-6 mt-4 border border-transparent dark:border-white/[0.2]",
        "rounded-full dark:bg-black bg-white",
        "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
        "pr-2 pl-6 py-2 items-center space-x-4",

        className
      )}
    >
      {navItems.map((navItem, idx) => (
        <a
          key={`link-${idx}`}
          href={navItem.link}
          className="relative flex items-center space-x-1 text-neutral-600 dark:text-neutral-50 hover:text-neutral-500 dark:hover:text-neutral-300"
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="hidden sm:block text-sm font-medium">
            {navItem.name}
          </span>
        </a>
      ))}

      <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
        <span>Login</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
      </button>
    </motion.div>
  );
};
