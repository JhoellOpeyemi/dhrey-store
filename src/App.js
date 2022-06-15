import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";

// normal components import
import ScrollToTop from "./components/ScrollToTop";
import { Header, Home } from "./components";

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
            <AnimatePresence>
              <Routes location={location} key={location.key}>
                <Route path="/" element={<Home />} />
              </Routes>
            </AnimatePresence>
          </NavProvider>
        </ProductsProvider>
      </ScrollToTop>
    </ThemeProvider>
  );
};

export default App;