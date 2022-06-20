import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { QuestionsAndAnswers } from "../../../lib/Faq";

// styled components import
import { SectionHeader } from "../../../styles/Headings.styled";
import FaqBox from "./FaqBox/FaqBox";
import { FaqsGroup, FaqsWrapper } from "./FaqSection.styled";
import { FaqsWrapperVariants } from "./FaqSectionAnimation";

const FaqSection = () => {
  const [selected, setSelected] = useState(null);
  const { ref, inView } = useInView({ threshold: 0.5 });

  const animation = useAnimation();

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  });

  return (
    <FaqsWrapper
      as={motion.div}
      variants={FaqsWrapperVariants}
      ref={ref}
      initial="hidden"
      animate={animation}
    >
      <SectionHeader>FAQS</SectionHeader>

      <FaqsGroup>
        {QuestionsAndAnswers.map((faq, index) => {
          return (
            <FaqBox
              key={index}
              faq={faq}
              toggle={toggle}
              selected={selected}
              index={index}
            />
          );
        })}
      </FaqsGroup>
    </FaqsWrapper>
  );
};

export default FaqSection;
