import React, { useState, useEffect } from "react";

import { Container } from "../../styles/Utilities.styled";

import { PreLoader } from "../Loaders/Loaders";
import Hero from "./Hero/Hero";

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
        <Container>
          <Hero />
        </Container>
      )}
    </>
  );
};

export default Home;
