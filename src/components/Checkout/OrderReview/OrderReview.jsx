import { useContext } from "react";

import { CheckoutContext } from "../../../contexts/CheckoutContext";

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
  const { checkoutToken } = useContext(CheckoutContext);

  const totalPriceWithDelivery = (total, delivery) => {
    const naira = "₦";
    const totalPlusDelivery = total + delivery;
    const subtotal = totalPlusDelivery
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${naira}${subtotal}`;
  };

  return (
    <>
      <SummaryHeading>Order Summary</SummaryHeading>
      <ProductsGroup>
        {checkoutToken?.live.line_items.map((product) => (
          <Product>
            <div>
              <Name>{product.name}</Name>
              <Quantity>Quantity - {product.quantity}</Quantity>
            </div>

            <Price>{product.line_total.formatted_with_symbol}</Price>
          </Product>
        ))}
      </ProductsGroup>

      <TotalContainer>
        <TotalText>Total</TotalText>
        <div></div>
        <TotalPrice>
          {totalPriceWithDelivery(
            checkoutToken?.live.subtotal.raw,
            checkoutToken?.live.shipping.available_options[0].price.raw
          )}
        </TotalPrice>
      </TotalContainer>
    </>
  );
};

export default OrderReview;
