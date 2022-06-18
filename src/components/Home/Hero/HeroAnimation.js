export const MainVariants = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export const ImageVariants = {
  hidden: { scale: 1.3 },
  visible: { scale: 1, transition: { duration: 0.6 } },
};

export const HeroButtonVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2, delay: 2 } },
};
