import { useNavigate } from "react-router-dom";

import OrderReview from "../OrderReview/OrderReview";
import { PaymentFormWrapper } from "./PaymentForm.styled";
import { CtaButton, SecondaryButton } from "../../../styles/Buttons.styled";

const PaymentForm = () => {
  let navigate = useNavigate();

  const backToAddress = () => {
    navigate(-1);
  };

  return (
    <PaymentFormWrapper>
      <SecondaryButton onClick={backToAddress}>
        Back to address form
      </SecondaryButton>

      <OrderReview />
    </PaymentFormWrapper>
  );
};

export default PaymentForm;
