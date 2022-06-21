import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// styled components import
import { Container } from "../../styles/Utilities.styled";

// normal components import
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import FaqSection from "./FaqSection/FaqSection";
import { AboutVariants } from "./AboutAnimation";
import { PageTransition } from "../Loaders/Loaders";

const About = () => {
  const [pageTransition, setPageTransition] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPageTransition(false);
    }, 1500);
  });
  return (
    <>
      {pageTransition ? (
        <PageTransition text="About" />
      ) : (
        <Container
          as={motion.div}
          variants={AboutVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <WhoWeAre />
          <FaqSection />
        </Container>
      )}
    </>
  );
};

export default About;
