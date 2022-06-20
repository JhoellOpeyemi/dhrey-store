import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";

// normal components import
import ScrollToTop from "./components/ScrollToTop";
import { About, Footer, Header, Home, Shop } from "./components";

// contexts provider import
import { NavProvider } from "./contexts/NavContext";
import { ProductsProvider } from "./contexts/ProductsContext";

// styled components import
import GlobalStyles from "./styles/Global";
import theme from "./lib/theme";

const App = () => {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop>
        <ProductsProvider>
          <NavProvider>
            <GlobalStyles />
            <Header />
            <AnimatePresence exitBeforeEnter>
              <Routes location={location} key={location.key}>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="shop" element={<Shop />} />
              </Routes>
            </AnimatePresence>
            <Footer />
          </NavProvider>
        </ProductsProvider>
      </ScrollToTop>
    </ThemeProvider>
  );
};

export default App;
