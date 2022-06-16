import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { Container } from "../../styles/Utilities.styled";

import { PreLoader } from "../Loaders/Loaders";
import About from "./About/About";
import Collections from "./Collections/Collections";
import Hero from "./Hero/Hero";
import { HomeVariants } from "./HomeAnimation";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [setIsLoading]);

  return (
    <>
      {isLoading && <PreLoader />}
      {!isLoading && (
        <Container
          as={motion.div}
          variants={HomeVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Hero />
          <About />
          <Collections />
        </Container>
      )}
    </>
  );
};

export default Home;
