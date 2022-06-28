import { useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";

import { CheckoutContext } from "../../contexts/CheckoutContext";
import { ProductsContext } from "../../contexts/ProductsContext";

// icons import
import Tick from "../icons/Tick";

// styled components import
import { PageHeader, Text } from "../../styles/Headings.styled";
import { Container, Main } from "../../styles/Utilities.styled";
import {
  StepsWrapper,
  StepGroup,
  StepDivider,
  FormWrapper,
} from "./Checkout.styled";

const Checkout = () => {
  const { cart } = useContext(ProductsContext);
  const { generateToken, addressFormComplete, paymentFormComplete } =
    useContext(CheckoutContext);

  useEffect(() => {
    document.title = "Checkout | Dhrey Store";
    generateToken(cart.id);
  }, []);

  return (
    <Container>
      <Main moreTop>
        <PageHeader>Checkout</PageHeader>

        <StepsWrapper addressFormComplete={addressFormComplete}>
          <StepGroup className="address">
            <Tick />
            <Text small>Address</Text>
          </StepGroup>

          <StepDivider></StepDivider>

          <StepGroup className="payment">
            <Tick />
            <Text small>Payment details</Text>
          </StepGroup>
        </StepsWrapper>

        <FormWrapper>
          <Outlet />
        </FormWrapper>
      </Main>
    </Container>
  );
};

export default Checkout;
