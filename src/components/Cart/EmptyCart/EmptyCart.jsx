// styled components import
import { ButtonContainer, EmptyCartText } from "./EmptyCart.styled";
import { CtaButton } from "../../../styles/Buttons.styled";

const EmptyCart = () => {
  return (
    <>
      <EmptyCartText>There’s no item in your cart yet!</EmptyCartText>
      <ButtonContainer>
        <CtaButton to="/shop/all">Add items</CtaButton>
      </ButtonContainer>
    </>
  );
};

export default EmptyCart;
