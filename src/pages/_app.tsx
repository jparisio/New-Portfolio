import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import NavBar from "@/components/NavBar";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

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
