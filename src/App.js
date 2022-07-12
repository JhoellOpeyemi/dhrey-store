import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";

// normal components import
import ScrollToTop from "./components/ScrollToTop";
import {
  About,
  Cart,
  Footer,
  Header,
  Home,
  ProductOverview,
  Products,
  Shop,
  Checkout,
  AddressForm,
  NotFound,
  PaymentForm,
} from "./components";

// contexts provider import
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
          <GlobalStyles />
          <Header />
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.key}>
              <Route path="/" element={<Home />} />

              <Route path="about" element={<About />} />

              <Route path="shop" element={<Shop />}>
                <Route index element={<Products />} />
                <Route path=":collection" element={<Products />} />
              </Route>

              <Route path="product/:id" element={<ProductOverview />} />

              <Route path="cart" element={<Cart />} />

              <Route path="checkout" element={<Checkout />}>
                <Route index element={<AddressForm />} />
                <Route path="payment" element={<PaymentForm />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </ProductsProvider>
      </ScrollToTop>
    </ThemeProvider>
  );
};

export default App;
