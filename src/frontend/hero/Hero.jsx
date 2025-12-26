import { motion } from "motion/react";

function Hero() {
  return (
    <section className="relative h-screen w-full">
      <div className="relative z-10 flex h-full items-end px-8 md:px-16 lg:px-24 pb-24 md:pb-32 lg:pb-40">
        <div className="w-full max-w-7xl mx-auto space-y-12">
          {/* Role Tag */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-block"
          >
            <div className="px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <span className="text-white/95 text-xs md:text-sm tracking-wide">
                AIML Engineer & Researcher
              </span>
            </div>
          </motion.div>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-end">
            {/* LEFT — Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal leading-tight">
                <motion.span
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 120 }}
                  className="block text-white"
                >
                  Akhilesh Damke
                </motion.span>

                <motion.span
                  whileHover={{ letterSpacing: "0.08em" }}
                  transition={{ duration: 0.3 }}
                  className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent"
                >
                  Creation
                </motion.span>
              </h1>
            </motion.div>

            {/* RIGHT — Bio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="flex justify-start"
            >
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 120, damping: 12 }}
                className="max-w-lg space-y-5"
              >
                <p className="text-white text-base md:text-lg font-medium leading-relaxed">
                  Designing and engineering intelligent AI systems that turn
                  data into real-world impact.
                </p>

                {/* Accent line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "4rem" }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="h-px bg-gradient-to-r from-purple-400 to-pink-400"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;