import { motion } from "framer-motion";

import { StyledPreLoader, ProgressBar, PreLoaderText } from "./Loaders.styled";

import { PreLoaderVariants, PreLoaderTextVariants } from "./LoadersAnimation";

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
        <PreLoaderText as={motion.p} variants={PreLoaderTextVariants}>
          Dhrey store
        </PreLoaderText>
        <ProgressBar></ProgressBar>
      </div>
    </StyledPreLoader>
  );
};
