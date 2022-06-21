import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";

// context import
import { ProductsContext } from "../../contexts/ProductsContext";

// styled components import
import { Container, Main } from "../../styles/Utilities.styled";
import { PageHeader } from "../../styles/Headings.styled";

// normal components import
import EmptyCart from "./EmptyCart/EmptyCart";
import FilledCart from "./FilledCart/FilledCart";

const Cart = () => {
  const [pageTransition, setPageTransition] = useState(true);
  const { cart, updateQuantity, removeFromCart, emptyCart } =
    useContext(ProductsContext);

  useEffect(() => {
    document.title = "Your Cart | Dhrey Store";
    setTimeout(() => {
      setPageTransition(false);
    }, 1500);
  });

  return (
    <Container>
      <Main moreTop>
        <PageHeader>Cart</PageHeader>

        {cart.total_items === 0 ? (
          <EmptyCart />
        ) : (
          <FilledCart
            cart={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            emptyCart={emptyCart}
          />
        )}
      </Main>
    </Container>
  );
};

export default Cart;
