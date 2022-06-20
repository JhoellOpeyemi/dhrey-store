import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// styled components import
import { PageHeader, Text } from "../../../styles/Headings.styled";
import { Main } from "../../../styles/Utilities.styled";

// animation variants import
import { WordVariants } from "../../Animation";
import {
  FirstTextVariants,
  SecondTextVariants,
  ThirdTextVariants,
  FourthTextVariants,
} from "./WhoWeAreAnimation.js";

// content import
import {
  FirstAboutTextArray,
  SecondAboutTextArray,
  ThirdAboutTextArray,
  FourthAboutTextArray,
} from "../../../lib/websiteTexts";

const WhoWeAre = () => {
  const { ref: firstTextRef, inView: firstTextInView } = useInView();
  const { ref: secondTextRef, inView: secondTextInView } = useInView({
    threshold: 1,
  });
  const { ref: thirdTextRef, inView: thirdTextInView } = useInView({
    threshold: 0.6,
  });
  const { ref: fourthTextRef, inView: fourthTextInView } = useInView({
    threshold: 0.6,
  });

  const firstTextAnimation = useAnimation();
  const secondTextAnimation = useAnimation();
  const thirdTextAnimation = useAnimation();
  const fourthTextAnimation = useAnimation();

  useEffect(() => {
    if (firstTextInView) {
      firstTextAnimation.start("visible");
    }
    if (secondTextInView) {
      secondTextAnimation.start("visible");
    }
    if (thirdTextInView) {
      thirdTextAnimation.start("visible");
    }
    if (fourthTextInView) {
      fourthTextAnimation.start("visible");
    }
  });

  return (
    <Main moreTop>
      <PageHeader>About us</PageHeader>

      <Text
        as={motion.p}
        variants={FirstTextVariants}
        ref={firstTextRef}
        initial="hidden"
        animate={firstTextAnimation}
      >
        {FirstAboutTextArray.map((text, index) => {
          return (
            <span className="word" key={index}>
              <motion.span variants={WordVariants}>{text}&nbsp;</motion.span>
            </span>
          );
        })}
      </Text>

      <Text
        as={motion.p}
        variants={SecondTextVariants}
        ref={secondTextRef}
        initial="hidden"
        animate={secondTextAnimation}
      >
        {SecondAboutTextArray.map((text, index) => {
          return (
            <span className="word" key={index}>
              <motion.span variants={WordVariants}>{text}&nbsp;</motion.span>
            </span>
          );
        })}
      </Text>

      <Text
        as={motion.p}
        variants={ThirdTextVariants}
        ref={thirdTextRef}
        initial="hidden"
        animate={thirdTextAnimation}
      >
        {ThirdAboutTextArray.map((text, index) => {
          return (
            <span className="word" key={index}>
              <motion.span variants={WordVariants}>{text}&nbsp;</motion.span>
            </span>
          );
        })}
      </Text>

      <Text
        as={motion.p}
        variants={FourthTextVariants}
        ref={fourthTextRef}
        initial="hidden"
        animate={fourthTextAnimation}
        borderTop
      >
        {FourthAboutTextArray.map((text, index) => {
          return (
            <span className="word" key={index}>
              <motion.span variants={WordVariants}>{text}&nbsp;</motion.span>
            </span>
          );
        })}
      </Text>
    </Main>
  );
};

export default WhoWeAre;
