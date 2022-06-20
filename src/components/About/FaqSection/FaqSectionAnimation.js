export const FaqsWrapperVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2, staggerChildren: 0.4, delayChildren: 0.5 },
  },
};

export const FaqVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: { opacity: 1, y: 0, transition: { type: "tween", duration: 0.3 } },
};
