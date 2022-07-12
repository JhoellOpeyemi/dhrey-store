import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { InputField } from "../../InputField/InputField";

// styled components import
import { FlexInputs } from "../../InputField/InputField.styled";
import { Text } from "../../../styles/Headings.styled";
import {
  AddressFormWrapper,
  ButtonContainer,
  NextButton,
  StyledForm,
  Select,
  SelectOption,
  Label,
  InputWrapper,
  CustomSelect,
  CustomArrow,
} from "./AddressForm.styled";
import { SecondaryButton } from "../../../styles/Buttons.styled";

// icon import
import ArrowDown from "../../icons/ArrowDown";

const AddressForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      lga: "",
      country: "NG",
      state: "AB",
      phoneNumber: "",
    },
  });

  let navigate = useNavigate();

  const submitAddressForm = (data) => {
    console.log(data);

    if (Object.entries(errors).length > 0) {
      return;
    } else {
      navigate("payment");
    }
  };

  const backToCart = () => {
    navigate("/cart", { replace: true });
  };

  return (
    <AddressFormWrapper>
      <StyledForm
        onSubmit={handleSubmit((data) =>
          submitAddressForm({
            ...data,
          })
        )}
      >
        <FlexInputs>
          <InputWrapper>
            <InputField
              label="first name"
              name="firstName"
              register={register}
              errors={errors}
            />
          </InputWrapper>

          <InputWrapper>
            <InputField
              label="last name"
              name="lastName"
              register={register}
              errors={errors}
            />
          </InputWrapper>
        </FlexInputs>

        <FlexInputs>
          <InputWrapper>
            <InputField
              label="email"
              name="email"
              register={register}
              errors={errors}
            />
          </InputWrapper>

          <InputWrapper>
            <InputField
              label="address"
              name="address"
              register={register}
              errors={errors}
            />
          </InputWrapper>
        </FlexInputs>

        <FlexInputs>
          <InputWrapper>
            <Label htmlFor="country">Country</Label>
            <CustomSelect>
              <Select>
                <SelectOption>country </SelectOption>
              </Select>
              <CustomArrow>
                <ArrowDown />
              </CustomArrow>
            </CustomSelect>
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="state">State</Label>
            <CustomSelect>
              <Select>
                <SelectOption>state</SelectOption>
              </Select>
              <CustomArrow>
                <ArrowDown />
              </CustomArrow>
            </CustomSelect>
          </InputWrapper>
        </FlexInputs>

        <FlexInputs>
          <InputWrapper>
            <InputField
              label="local government area"
              name="lga"
              register={register}
              errors={errors}
            />
          </InputWrapper>

          <InputWrapper>
            <InputField
              label="phone number"
              name="phoneNumber"
              register={register}
              errors={errors}
            />
          </InputWrapper>
        </FlexInputs>

        <Text italic small pryColor>
          Delivery anywhere in Nigeria -
        </Text>

        <ButtonContainer>
          <SecondaryButton onClick={backToCart} small>
            Back to cart
          </SecondaryButton>

          <NextButton>Next</NextButton>
        </ButtonContainer>
      </StyledForm>
    </AddressFormWrapper>
  );
};

export default AddressForm;
