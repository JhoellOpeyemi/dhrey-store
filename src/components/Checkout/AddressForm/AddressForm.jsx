import { useEffect, useContext } from "react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { CheckoutContext } from "../../../contexts/CheckoutContext";

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
    shippingCountries,
    shippingCountry,
    setShippingCountry,
    subDivisions,
    subDivision,
    setSubDivision,
    shippingOption,
    setAddressFormComplete,
    customerShippingData,
    setCustomerShippingData,
  } = useContext(CheckoutContext);

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
      setCustomerShippingData(data);
      navigate("payment");
    }
  };

  const backToCart = () => {
    navigate("/cart", { replace: true });
  };

  useEffect(() => {
    setAddressFormComplete(false);

    return () => setAddressFormComplete(true);
  }, []);

  return (
    <AddressFormWrapper>
      <StyledForm
        onSubmit={handleSubmit((data) =>
          submitAddressForm({
            ...data,
            shippingOption,
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
              <Select
                {...register("country")}
                value={shippingCountry}
                onChange={(e) => setShippingCountry(e.target.value)}
                id="country"
              >
                {shippingCountries.map(([code, name]) => (
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

          <InputWrapper>
            <Label htmlFor="state">State</Label>
            <CustomSelect>
              <Select
                {...register("state")}
                value={subDivision}
                onChange={(e) => setSubDivision(e.target.value)}
                id="state"
              >
                {subDivisions.map(([code, name]) => (
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
          Delivery anywhere in Nigeria -{" "}
          {shippingOption?.price?.formatted_with_symbol}
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
