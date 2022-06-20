import React from "react";
import { motion } from "framer-motion";

// icon import
import Minus from "../../../icons/Minus";
import Plus from "../../../icons/Plus";

// styled components import
import { Text } from "../../../../styles/Headings.styled";
import {
  Faq,
  FaqAnswerWrapper,
  FaqButton,
  FaqQuestion,
  FaqQuestionWrapper,
} from "./FaqBox.styled";
import { FaqVariants } from "../FaqSectionAnimation";

const FaqBox = ({ faq, toggle, index, selected }) => {
  const { question, answer } = faq;

  return (
    <Faq as={motion.li} variants={FaqVariants}>
      <FaqButton onClick={() => toggle(index)}>
        <FaqQuestionWrapper>
          <FaqQuestion>{question}</FaqQuestion>
          <span>{selected === index ? <Minus /> : <Plus />}</span>
        </FaqQuestionWrapper>

        <FaqAnswerWrapper selected={selected} index={index}>
          <Text small>{answer}</Text>
        </FaqAnswerWrapper>
      </FaqButton>
    </Faq>
  );
};

export default FaqBox;
