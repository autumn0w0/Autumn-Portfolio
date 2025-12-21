import { useScroll, useTransform, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const [height, setHeight] = useState(0);

  // Measure timeline height
  useEffect(() => {
    if (!lineRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      setHeight(lineRef.current.getBoundingClientRect().height);
    });

    resizeObserver.observe(lineRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="w-full bg-transparent font-sans md:px-10"
    >
      {/* Timeline */}
      <div ref={lineRef} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            {/* Sticky title */}
            <div className="sticky top-40 z-40 max-w-xs lg:max-w-sm w-full">
              <div className="relative flex items-center">
                <div className="absolute left-3 h-10 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700" />
                </div>
                <h3 className="hidden md:block pl-20 text-xl md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Vertical line */}
        <div
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-gradient-to-b
            from-transparent via-neutral-200 dark:via-neutral-700 to-transparent
            [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          style={{ height }}
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full
              bg-gradient-to-t from-purple-500 via-blue-500 to-transparent"
          />
        </div>
      </div>
    </div>
  );
};

// Demo component
export default function App() {
  const timelineData = [
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Started the journey with a vision to create something amazing.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-20 bg-gradient-to-br from-neutral-200 dark:from-neutral-900 to-neutral-100 dark:to-neutral-800 rounded-lg"></div>
            <div className="h-20 bg-gradient-to-br from-neutral-200 dark:from-neutral-900 to-neutral-100 dark:to-neutral-800 rounded-lg"></div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Grew the team and launched multiple successful projects.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-20 bg-gradient-to-br from-neutral-200 dark:from-neutral-900 to-neutral-100 dark:to-neutral-800 rounded-lg"></div>
            <div className="h-20 bg-gradient-to-br from-neutral-200 dark:from-neutral-900 to-neutral-100 dark:to-neutral-800 rounded-lg"></div>
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Looking forward to new challenges and opportunities ahead.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Timeline data={timelineData} />
    </div>
  );
}