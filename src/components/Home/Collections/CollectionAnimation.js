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
  visible: { transition: { staggerChildren: 0.7 } },
};

export const CollectionNameVariants = {
  hidden: { y: "20%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};
