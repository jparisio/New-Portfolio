import React from "react";
import { motion } from "framer-motion";

interface AnimTextProps {
  text: string;
  extraClass?: string;
  offset?: number;
  ease?: [number, number, number, number];
}

export default function AnimText({
  text,
  extraClass = "",
  offset = 0,
  ease = [0.25, 1, 0.5, 1],
}: AnimTextProps) {
  const words = text.split(" ");

  return (
    <>
      {words.map((word: string, index: number) => (
        <React.Fragment key={`${word}-${index}`}>
          <span className="inline-block overflow-hidden leading-none">
            <motion.span
              className={`inline-block whitespace-nowrap ${extraClass}`}
              initial={{ y: "100%" }}
              animate={{
                y: 0,
                transition: {
                  delay: index * 0.01 + offset,
                  duration: 1.2,
                  ease,
                },
              }}
              exit={{
                y: "-100%", // Changed from y: 0 to y: "-100%"
                transition: {
                  delay: (words.length - index - 1) * 0.01, // Reverse delay for exit
                  duration: 0.6, // Faster exit
                  ease,
                },
              }}
            >
              {word}
            </motion.span>
          </span>
          {index < words.length - 1 && " "}
        </React.Fragment>
      ))}
    </>
  );
}
