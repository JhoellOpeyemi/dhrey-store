import { motion } from "framer-motion";
import { TextVariants, WordVariants } from "../Animation";

import {
  StyledPreLoader,
  ProgressBar,
  PreLoaderText,
  StyledPageTransition,
  LoadingProductsWrapper,
} from "./Loaders.styled";

import {
  PreLoaderVariants,
  PageTransitionVariants,
  PageTransitionTextVariants,
  LoadingProductsVariants,
  LoadingProductsWordVariants,
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

export const LoadingProducts = () => {
  return (
    <LoadingProductsWrapper
      as={motion.div}
      variants={LoadingProductsVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <PreLoaderText as={motion.p} variants={TextVariants}>
        <span className="word">
          <motion.span variants={LoadingProductsWordVariants}>
            Fetching&nbsp;
          </motion.span>
        </span>
        <span className="word">
          <motion.span variants={LoadingProductsWordVariants}>
            Products
          </motion.span>
        </span>
      </PreLoaderText>
    </LoadingProductsWrapper>
  );
};
