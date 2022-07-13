import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { nigerianStates } from "../../../lib/nigerianStates";

// context import
import { CheckoutContext } from "../../../contexts/CheckoutContext";

// normal component import
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
  const { customerInfo, deliveryPrice, updateCustomerInfo } =
    useContext(CheckoutContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: customerInfo?.firstName,
      lastName: customerInfo?.lastName,
      email: customerInfo?.email,
      address: customerInfo?.address,
      lga: customerInfo?.lga,
      country: "Nigeria",
      state: customerInfo?.state,
      phoneNumber: customerInfo?.phoneNumber,
    },
  });

  let navigate = useNavigate();

  const submitAddressForm = (data) => {
    updateCustomerInfo(data);

    if (Object.entries(errors).length > 0) {
      return;
    } else {
      navigate("payment");
    }
  };

  const backToCart = () => {
    navigate("/cart", { replace: true });
  };

  const formattedPrice = (price) => {
    const naira = "₦";
    const amount = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${naira}${amount}`;
  };

  return (
    <AddressFormWrapper>
      <StyledForm
        id="address-form"
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
              <Select {...register("country")}>
                <SelectOption value="nigeria">Nigeria</SelectOption>
              </Select>
              <CustomArrow>
                <ArrowDown />
              </CustomArrow>
            </CustomSelect>
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="state">State</Label>
            <CustomSelect>
              <Select
                {...register("state", {
                  required: {
                    value: true,
                    message: "Please select your state",
                  },
                })}
              >
                {nigerianStates.map(({ code, name }) => (
                  <SelectOption value={code} key={code}>
                    {name}
                  </SelectOption>
                ))}
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
          Delivery anywhere in Nigeria - {formattedPrice(deliveryPrice)}
        </Text>
      </StyledForm>

      <ButtonContainer>
        <SecondaryButton onClick={backToCart} small>
          Back to cart
        </SecondaryButton>

        <NextButton type="submit" form="address-form">
          Next
        </NextButton>
      </ButtonContainer>
    </AddressFormWrapper>
  );
};

export default AddressForm;
