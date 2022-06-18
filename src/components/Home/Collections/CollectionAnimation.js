export const CollectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

export const CollectionGroupVariants = {
  visible: { transition: { staggerChildren: 0.6 } },
};
