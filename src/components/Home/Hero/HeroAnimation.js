export const MainVariants = {
  visible: { transition: { staggerChildren: 0.2 } },
};

export const HeroTextVariants = {
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

export const HeroWordVariants = {
  hidden: { y: "250%", rotateX: "15deg", rotateZ: "30deg" },
  visible: {
    y: 0,
    rotateX: 0,
    rotateZ: 0,
    transition: { type: "tween", duration: 0.8 },
  },
};

export const HeroButtonVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2, delay: 2.4 } },
};
