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
  return (
    <>
      <SummaryHeading>Order Summary</SummaryHeading>
      <ProductsGroup>
        <Product>
          <div>
            <Name>name</Name>
            <Quantity>Quantity - </Quantity>
          </div>

          <Price>2000</Price>
        </Product>
      </ProductsGroup>

      <TotalContainer>
        <TotalText>Total</TotalText>
        <div></div>
        <TotalPrice>22000</TotalPrice>
      </TotalContainer>
    </>
  );
};

export default OrderReview;
