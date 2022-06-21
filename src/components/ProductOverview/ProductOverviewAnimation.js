export const ProductOverviewVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2, staggerChildren: 0.7 } },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

export const ProductDescVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.1 } },
};
