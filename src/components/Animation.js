export const HeadingVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

export const TextVariants = {
  visible: { transition: { staggerChildren: 0.05 } },
};

export const WordVariants = {
  hidden: { opacity: 0, y: "250%", rotateX: "15deg", rotateZ: "30deg" },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    rotateZ: 0,
    transition: { type: "tween", duration: 0.8 },
  },
};

export const SlideVariants = {
  hidden: { width: "100%" },
  visible: {
    width: "0%",
    transition: { type: "tween", duration: 0.8 },
  },
};
