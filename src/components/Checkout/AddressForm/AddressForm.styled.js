import styled from "styled-components";

export const AddressFormWrapper = styled.div``;

export const StyledForm = styled.form``;

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 1.7rem;

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    margin-bottom: 2.7rem;
  }
`;

export const CustomSelect = styled.div`
  position: relative;
  margin-top: 1rem;
`;

export const CustomArrow = styled.div`
  position: absolute;
  top: 50%;
  right: 1px;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  width: 3rem;
  background: ${({ theme }) => theme.colors.bodyBg};
  pointer-events: none;
`;

export const Select = styled.select`
  width: 100%;
  font-size: 1.08rem;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.black8};
  background: ${({ theme }) => theme.colors.bodyBg};
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 1px;
  font-family: "Montserrat", sans-serif;
`;

export const SelectOption = styled.option``;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #aaa;
  font-size: 1.07rem;
  text-transform: capitalize;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;
`;

export const NextButton = styled.button`
  text-transform: capitalize;
  font-size: 1.1rem;
  border: 1px solid ${({ theme }) => theme.colors.black8};
  padding: 0.75rem 0.9rem;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    background-color: #333;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    font-size: 1.2rem;
    padding: 1.2rem 1.5rem;
  }
`;
