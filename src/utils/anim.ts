export const textVariants = {
  initial: {
    y: "100%",
  },

  animate: {
    y: "0%",
    transition: {
      duration: 1.2,
      ease: [0.25, 1, 0.5, 1],
    },
  },

  exit: {
    y: "-100%",
    transition: {
      duration: 1.2,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};
