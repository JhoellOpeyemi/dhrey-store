import { motion } from "framer-motion";
import { TextVariants, WordVariants } from "../Animation";

import {
  StyledPreLoader,
  ProgressBar,
  PreLoaderText,
  StyledPageTransition,
} from "./Loaders.styled";

import {
  PreLoaderVariants,
  PageTransitionVariants,
  PageTransitionTextVariants,
} from "./LoadersAnimation";

export const PreLoader = () => {
  return (
    <StyledPreLoader
      as={motion.div}
      variants={PreLoaderVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div>
        <PreLoaderText as={motion.p} variants={TextVariants}>
          <span className="word">
            <motion.span variants={WordVariants}>Dhrey&nbsp;</motion.span>
          </span>
          <span className="word">
            <motion.span variants={WordVariants}>store</motion.span>
          </span>
        </PreLoaderText>
        <ProgressBar></ProgressBar>
      </div>
    </StyledPreLoader>
  );
};

export const PageTransition = ({ text }) => {
  return (
    <StyledPageTransition
      as={motion.div}
      variants={PageTransitionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.p variants={PageTransitionTextVariants}>{text}</motion.p>
    </StyledPageTransition>
  );
};
