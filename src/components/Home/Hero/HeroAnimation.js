export const MainVariants = {
  visible: { transition: { staggerChildren: 0.25 } },
};

export const ImageVariants = {
  hidden: { scale: 1.2 },
  visible: { scale: 1, transition: { duration: 0.8 } },
};

export const HeroButtonVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2, delay: 2 } },
};
