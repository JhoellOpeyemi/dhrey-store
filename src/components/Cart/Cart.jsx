import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";

// hooks import
import useDocumentTitle from "../../hooks/useDocumentTitle";

// context import
import { ProductsContext } from "../../contexts/ProductsContext";

// styled components import
import { Container, Main } from "../../styles/Utilities.styled";
import { PageHeader } from "../../styles/Headings.styled";

// normal components import
import EmptyCart from "./EmptyCart/EmptyCart";
import FilledCart from "./FilledCart/FilledCart";
import { PageTransition } from "../Loaders/Loaders";

// animation variants import
import { CartVariants } from "./CartAnimation";

const Cart = () => {
  const { cart } = useContext(ProductsContext);

  const [pageTransition, setPageTransition] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPageTransition(false);
    }, 1500);
  });
  useDocumentTitle("Your Cart | Dhrey Store");

  return (
    <>
      {pageTransition ? (
        <PageTransition text="Cart" />
      ) : (
        <Container
          as={motion.div}
          variants={CartVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Main moreTop>
            <PageHeader>Cart</PageHeader>

            {cart?.length === 0 ? <EmptyCart /> : <FilledCart />}
          </Main>
        </Container>
      )}
    </>
  );
};

export default Cart;
