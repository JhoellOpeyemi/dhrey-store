export const PreLoaderVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2, delayChildren: 1.2 } },
  exit: { opacity: 0 },
};

export const PreLoaderTextVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0 },
};

export const PageTransitionVariants = {
  hidden: { x: "100vw" },
  visible: {
    x: 0,
    transition: { type: "tween", duration: 0.3, delayChildren: 0.8 },
  },
  exit: { x: "-100vw", transition: { type: "tween", duration: 0.3 } },
};

export const PageTransitionTextVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};
