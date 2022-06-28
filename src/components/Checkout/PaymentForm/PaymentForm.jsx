import { useForm } from "react-hook-form";

import OrderReview from "../OrderReview/OrderReview";
import { PaymentFormWrapper } from "./PaymentForm.styled";
import { CtaButton } from "../../../styles/Buttons.styled";

const PaymentForm = () => {
  return (
    <PaymentFormWrapper>
      <OrderReview />
    </PaymentFormWrapper>
  );
};

export default PaymentForm;
