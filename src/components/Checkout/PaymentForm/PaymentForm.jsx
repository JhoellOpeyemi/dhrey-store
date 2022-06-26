import { useForm } from "react-hook-form";

import InputField from "../../InputField/InputField";
import { NameInputs } from "../../InputField/InputField.styled";
import { PaymentFormWrapper, StyledForm } from "./PaymentForm.styled";
import { CtaButton } from "../../../styles/Buttons.styled";

const PaymentForm = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const submitForm = (data) => console.log(data);

  return (
    <PaymentFormWrapper>
      <StyledForm onSubmit={handleSubmit(submitForm)}></StyledForm>
    </PaymentFormWrapper>
  );
};

export default PaymentForm;
