import React, { useState, useEffect } from "react";

import { PreLoader } from "../Loaders/Loaders";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [setIsLoading]);

  return <>{isLoading ? <PreLoader /> : <div>Home</div>}</>;
};

export default Home;
