import { useRef, MouseEvent } from "react";
import { motion, useAnimation } from "framer-motion";
import AnimText from "./AnimText";

interface Project {
  id: number;
  project: string;
  category: string;
  client: string;
  year: string;
  link: string;
}

interface ProjectProps {
  project: Project;
  index: number;
}

export default function Project({ project, index }: ProjectProps) {
  const bgControls = useAnimation();
  const titleControls = useAnimation();
  const yearControls = useAnimation();
  const linkRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: MouseEvent) => {
    if (!linkRef.current) return;
    const bounds = linkRef.current.getBoundingClientRect();
    const fromTop = e.clientY < bounds.top + bounds.height / 2;

    bgControls.set({ top: fromTop ? "-100%" : "100%" });
    bgControls.start({
      top: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    });

    // Move title right and year left
    titleControls.start({
      x: 10,
      transition: { duration: 0.3, ease: "easeOut" },
    });
    yearControls.start({
      x: -10,
      transition: { duration: 0.3, ease: "easeOut" },
    });
  };

  const handleMouseLeave = (e: MouseEvent) => {
    if (!linkRef.current) return;
    const bounds = linkRef.current.getBoundingClientRect();
    const toTop = e.clientY < bounds.top + bounds.height / 2;

    bgControls.start({
      top: toTop ? "-100%" : "100%",
      transition: { duration: 0.2, ease: "easeOut" },
    });

    // Reset positions
    titleControls.start({
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    });
    yearControls.start({
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    });
  };

  const handleClick = () => {
    // router.push(project.link);
    window.open(project.link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative w-full cursor-pointer overflow-hidden group">
      {/* Animated Border Line */}
      <motion.div
        className="w-full border-b border-gray-300"
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: 1,
          transition: {
            duration: 1.2,
            delay: index * 0.1 + 0.5,
            ease: [0.25, 1, 0.5, 1],
          },
        }}
        exit={{
          scaleX: 0,
          transition: {
            duration: 1.2,
            delay: index * 0.1,
            ease: [0.25, 1, 0.5, 1],
          },
        }}
        style={{ originX: 0 }}
      />

      {/* Content Container */}
      <motion.div
        ref={linkRef}
        className="relative w-full cursor-pointer py-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.8,
          delay: index * 0.1 + 0.7,
          ease: [0.25, 1, 0.5, 1],
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {/* Animated Background Layer */}
        <motion.div
          className="absolute inset-0 bg-foreground z-0"
          style={{ top: "-100%", height: "100%" }}
          animate={bgControls}
        />

        {/* Content Grid - Mobile: 2 cols, Desktop: 4 cols */}
        {/* Content Grid - Mobile: 2 cols, Desktop: 4 cols */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8 items-center relative z-10 px-2 md:px-24">
          {/* Project Name */}
          <div className="col-span-1 md:col-span-1">
            <motion.div
              className="group-hover:text-black transition-colors duration-200 overflow-hidden text-ellipsis"
              animate={titleControls}
            >
              <AnimText
                text={project.project}
                offset={0.1 + index * 0.05}
                extraClass="font-medium text-sm md:text-base"
              />
            </motion.div>
          </div>

          {/* Category - Hidden on mobile */}
          <div className="col-span-1 hidden md:block">
            <div className="text-gray-600 group-hover:text-black transition-colors duration-200 whitespace-nowrap overflow-hidden text-ellipsis">
              <AnimText
                text={project.category}
                offset={0.15 + index * 0.05}
                extraClass="whitespace-nowrap"
              />
            </div>
          </div>

          {/* Client - Hidden on mobile */}
          <div className="col-span-1 hidden md:block">
            <div className="text-gray-600 group-hover:text-black transition-colors duration-200 whitespace-nowrap overflow-hidden text-ellipsis">
              <AnimText
                text={project.client}
                offset={0.2 + index * 0.05}
                extraClass="whitespace-nowrap"
              />
            </div>
          </div>

          {/* Year */}
          <div className="col-span-1 text-right">
            <motion.div
              className="text-gray-600 group-hover:text-black transition-colors duration-200"
              animate={yearControls}
            >
              <AnimText
                text={project.year}
                offset={0.25 + index * 0.05}
                extraClass="text-sm md:text-base"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
