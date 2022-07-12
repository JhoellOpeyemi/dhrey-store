import React, { useContext, useState } from "react";

// context import
import { ProductsContext } from "../../../contexts/ProductsContext";

// icons import
import Close from "../../icons/Close";
import Minus from "../../icons/Minus";
import Plus from "../../icons/Plus";

// styled components import
import {
  CartItemContainer,
  Delete,
  Details,
  Image,
  Name,
  Price,
  PriceAndDelete,
  Quantity,
  QuantityPriceDelete,
} from "./CartItem.styled";
import { QuantityButton } from "../../../styles/Buttons.styled";
import { Overlay } from "../../../styles/Utilities.styled";

const CartItem = ({ item }) => {
  const { deleteFromCart, updateTotalPrice } = useContext(ProductsContext);
  const [quantity, setQuantity] = useState(item.quantity);
  const [price, setPrice] = useState(item.price);

  item.price = price;
  item.quantity = quantity;

  const formattedPrice = (price) => {
    const naira = "₦";
    const amount = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${naira}${amount}`;
  };

  const increment = () => {
    setPrice((prev) => prev + item.initialPrice);
    setQuantity((prev) => prev + 1);
    updateTotalPrice("increase", item.initialPrice);
  };

  const decrement = () => {
    setPrice((prev) => prev - item.initialPrice);
    setQuantity((prev) => prev - 1);
    updateTotalPrice("decrease", item.initialPrice);
  };

  if (item.quantity === 0) {
    deleteFromCart(item);
  }

  return (
    <CartItemContainer>
      <Image>
        <img src={item.image} alt="" />
        <Overlay product />
      </Image>

      <Details>
        <Name>{item.name}</Name>

        <QuantityPriceDelete>
          <Quantity>
            <QuantityButton onClick={decrement}>
              <Minus />
            </QuantityButton>
            <p>{quantity}</p>
            <QuantityButton onClick={increment}>
              <Plus />
            </QuantityButton>
          </Quantity>
          <PriceAndDelete>
            <Price>{formattedPrice(price)}</Price>
            <Delete onClick={() => deleteFromCart(item)}>
              <Close />
            </Delete>
          </PriceAndDelete>
        </QuantityPriceDelete>
      </Details>
    </CartItemContainer>
  );
};

export default CartItem;
