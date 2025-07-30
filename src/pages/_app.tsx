import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NavBar from "@/components/NavBar";
import Lenis from "lenis";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
    });

    // Listen for the scroll event and log the event data
    lenis.on("scroll", (e) => {
      console.log(e);
    });

    // Cleanup function
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div key={router.asPath}>
          <NavBar />

          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
