import React, { useContext, useEffect } from "react";

// context import
import { ProductsContext } from "../../../contexts/ProductsContext";

// styled components import
import {
  CartWrapper,
  CartCheckout,
  ButtonGroup,
  SubTotalPrice,
  SubTotal,
} from "./FilledCart.styled";
import { CtaButton, SecondaryButton } from "../../../styles/Buttons.styled";
import CartItem from "../CartItem/CartItem";

const FilledCart = () => {
  const { cart, emptyCart, subTotal, updateSubTotal } =
    useContext(ProductsContext);

  const formattedPrice = (price) => {
    const naira = "₦";
    const amount = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${naira}${amount}`;
  };

  useEffect(() => {
    updateSubTotal();
  });

  return (
    <CartWrapper>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <CartCheckout>
        <SubTotal>
          Subtotal - <SubTotalPrice>{formattedPrice(subTotal)}</SubTotalPrice>
        </SubTotal>
        <ButtonGroup>
          <SecondaryButton onClick={emptyCart}>Empty cart</SecondaryButton>
          <CtaButton to="/checkout" big="true">
            Checkout
          </CtaButton>
        </ButtonGroup>
      </CartCheckout>
    </CartWrapper>
  );
};

export default FilledCart;
