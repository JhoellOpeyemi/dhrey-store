import React from "react";

// icons import
import Close from "../../icons/Close";
import Minus from "../../icons/Minus";
import Plus from "../../icons/Plus";

// styled components import
import {
  CartItem,
  CartWrapper,
  Delete,
  Details,
  Image,
  Name,
  Price,
  PriceAndDelete,
  Quantity,
  QuantityPriceDelete,
  CartCheckout,
  ButtonGroup,
  SubTotalPrice,
  SubTotal,
} from "./FilledCart.styled";
import { QuantityButton } from "../../../styles/Buttons.styled";
import { Overlay } from "../../../styles/Utilities.styled";
import { CtaButton, SecondaryButton } from "../../../styles/Buttons.styled";

const FilledCart = ({ cart, updateQuantity, removeFromCart, emptyCart }) => {
  const formattedPrice = (price) => {
    const naira = "₦";
    const amount = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${naira}${amount}`;
  };

  return (
    <CartWrapper>
      {cart?.line_items?.map((item) => (
        <CartItem key={item.id}>
          <Image>
            <img src={item.image.url} alt="" />
            <Overlay product />
          </Image>

          <Details>
            <Name>{item.name}</Name>

            <QuantityPriceDelete>
              <Quantity>
                <QuantityButton
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  <Minus />
                </QuantityButton>
                <p>{item.quantity}</p>
                <QuantityButton
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus />
                </QuantityButton>
              </Quantity>
              <PriceAndDelete>
                <Price>{formattedPrice(item?.price?.raw)}</Price>
                <Delete onClick={() => removeFromCart(item.id)}>
                  <Close />
                </Delete>
              </PriceAndDelete>
            </QuantityPriceDelete>
          </Details>
        </CartItem>
      ))}

      <CartCheckout>
        <SubTotal>
          Subtotal -{" "}
          <SubTotalPrice>
            {typeof cart?.subtotal?.raw === "undefined"
              ? "-"
              : formattedPrice(cart?.subtotal?.raw)}
          </SubTotalPrice>
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
