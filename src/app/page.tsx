"use client";
import NavBar from "@/components/NavBar";
import AnimText from "@/components/AnimText";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main className="flex min-h-screen flex-col items-center justify-center p-24 ">
      <NavBar />
      <h1 className="text-8xl text-center">
        <AnimText text={"JUSTIN PARISIO"} offset={0.4} />
      </h1>
      <p className="uppercase text-sm md:text-base lg:text-lg xl:text-xl mt-5 text-center max-w-2xl">
        <AnimText
          text={
            "TORONTO NATIVE, NEW GRAD SOFTWARE DEVELOPER SPECIALIZING IN CRAFTING SCALABLE, ELEGANT APPLICATIONS WITH A FOCUS ON CLEAN CODE AND USER-CENTRIC DESIGN."
          }
          offset={0.5}
        />
      </p>
    </motion.main>
  );
}
