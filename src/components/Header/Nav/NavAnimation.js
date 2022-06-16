export const NavVariants = {
  hidden: { y: "-100vh" },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      delayChildren: 0.55,
    },
  },
  exit: { y: "-100vh" },
};

export const NavLinkVariants = {
  hidden: { y: "100%" },
  visible: { y: 0, transition: { type: "tween", duration: 0.2 } },
};
