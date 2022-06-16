export const PreLoaderVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2, delayChildren: 1.8 } },
  exit: { y: "-100vh" },
};

export const PreLoaderTextVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0 },
};
