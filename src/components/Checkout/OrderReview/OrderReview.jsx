import { useContext } from "react";

// context import
import { ProductsContext } from "../../../contexts/ProductsContext";

import {
  SummaryHeading,
  ProductsGroup,
  Product,
  Name,
  Quantity,
  Price,
  TotalContainer,
  TotalText,
  TotalPrice,
} from "./OrderReview.styled";

const OrderReview = () => {
  const { cart, subTotal } = useContext(ProductsContext);

  const formattedPrice = (price) => {
    const naira = "₦";
    const amount = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${naira}${amount}`;
  };

  return (
    <>
      <SummaryHeading>Order Summary</SummaryHeading>
      <ProductsGroup>
        {cart.map((item) => (
          <Product key={item.id}>
            <div>
              <Name>{item.name}</Name>
              <Quantity>Quantity - {item.quantity}</Quantity>
            </div>

            <Price>{formattedPrice(item.price)}</Price>
          </Product>
        ))}
      </ProductsGroup>

      <TotalContainer>
        <TotalText>Total</TotalText>
        <div></div>
        <TotalPrice>{formattedPrice(subTotal)}</TotalPrice>
      </TotalContainer>
    </>
  );
};

export default OrderReview;
