import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { Container } from "../../styles/Utilities.styled";

// hooks import
import useDocumentTitle from "../../hooks/useDocumentTitle";

import About from "./About/About";
import Collections from "./Collections/Collections";
import Hero from "./Hero/Hero";
import { HomeVariants } from "./HomeAnimation";
import { PreLoader } from "../Loaders/Loaders";

const Home = () => {
  const [preLoader, setPreLoader] = useState(true);

  useDocumentTitle("Dhrey Store | Home");

  useEffect(() => {
    setTimeout(() => {
      setPreLoader(false);
    }, 3300);
  }, []);

  return (
    <>
      {preLoader ? (
        <PreLoader />
      ) : (
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
