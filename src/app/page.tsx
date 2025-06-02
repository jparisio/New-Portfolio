"use client";
import NavBar from "@/components/NavBar";
import AnimText from "@/components/AnimText";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <NavBar />
      {/* Spacer for top */}
      <div></div>
      <div className="flex flex-col items-center">
        <h1 className="text-8xl md:text-8xl lg:text-9xl text-center">
          <AnimText text={"JUSTIN PARISIO"} offset={0.4} />
        </h1>
        <p className="uppercase text-sm md:text-base lg:text-lg xl:text-xl mt-5 text-center max-w-2xl">
          <AnimText
            text={
              "TORONTO NATIVE, FIFTH YEAR SOFTWARE DEVELOPER SPECIALIZING IN CRAFTING SCALABLE, ELEGANT APPLICATIONS WITH A FOCUS ON CLEAN CODE AND USER-CENTRIC DESIGN."
            }
            offset={0.5}
          />
        </p>
      </div>
      <div className="flex justify-between md:justify-between items-center w-full ">
        <p className="text-xs hidden md:block">
          <AnimText text={"© 2025 Justin Parisio™"} offset={0.6} />
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/justin.parisio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimText text={"@INSTAGRAM"} offset={0.6} />
          </a>
          <a
            href="https://github.com/jparisio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimText text={"@GITHUB"} offset={0.6} />
          </a>
        </div>
      </div>
    </motion.main>
  );
}
