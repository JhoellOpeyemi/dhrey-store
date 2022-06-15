export const NavVariants = {
  hidden: { y: "-100vh" },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      delayChildren: 0.65,
    },
  },
  exit: { y: "-100vh" },
};

export const NavLinkVariants = {
  hidden: { y: "110%" },
  visible: { y: 0, transition: { type: "tween", duration: 0.2 } },
};
