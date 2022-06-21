import React from "react";
import { QuantityButton } from "../../../styles/Buttons.styled";
import { Overlay } from "../../../styles/Utilities.styled";
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
} from "./FilledCart.styled";

const FilledCart = ({ cart, updateQuantity, removeFromCart, emptyCart }) => {
  const formattedPrice = (price) => {
    const naira = "₦";
    const amount = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${naira}${amount}`;
  };

  console.log(cart);

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
    </CartWrapper>
  );
};

export default FilledCart;
