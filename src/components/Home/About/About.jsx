import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

// styled components import
import { LinkButton } from "../../../styles/Buttons.styled";
import { SectionHeader, Text } from "../../../styles/Headings.styled";
import { AboutWrapper } from "./About.styled";

// animation variants import
import { AboutButtonVariants, AboutVariants } from "./AboutAnimation";
import { TextVariants, WordVariants, HeadingVariants } from "../../Animation";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
  });

  const aboutAnimation = useAnimation();

  const aboutText =
    "Dhreylyte store launched its very first collection catalog in 2021. Since then we have grown into one of the nation’s leading and fastest growing store, direct-to-consumer companies. We have been recognized by the industry as a Top Cataloger and Top Internet Retailer.";

  let aboutTextArray = aboutText.split(" ");

  useEffect(() => {
    if (inView) {
      aboutAnimation.start("visible");
    }
  }, [inView, aboutAnimation]);

  return (
    <AboutWrapper
      ref={ref}
      as={motion.section}
      variants={AboutVariants}
      initial="hidden"
      animate={aboutAnimation}
    >
      <SectionHeader as={motion.h3} variants={HeadingVariants}>
        Who We Are
      </SectionHeader>
      <Text as={motion.p} variants={TextVariants}>
        {aboutTextArray.map((text, index) => {
          return (
            <span className="word" key={index}>
              <motion.span variants={WordVariants}>{text}&nbsp;</motion.span>
            </span>
          );
        })}
      </Text>

      <motion.div variants={AboutButtonVariants}>
        <LinkButton to="/" small>
          Read More
        </LinkButton>
      </motion.div>
    </AboutWrapper>
  );
};

export default About;
