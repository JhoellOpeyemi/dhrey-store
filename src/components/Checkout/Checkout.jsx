import { Outlet } from "react-router-dom";

// import { ProductsContext } from "../../contexts/ProductsContext";

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
  return (
    <Container>
      <Main moreTop>
        <PageHeader>Checkout</PageHeader>

        <StepsWrapper>
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
