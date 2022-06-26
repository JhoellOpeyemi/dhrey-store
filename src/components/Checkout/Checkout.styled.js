import styled from "styled-components";

export const StepsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .address {
    opacity: ${({ addressFormComplete }) => (addressFormComplete ? 1 : 0.7)};

    svg {
      display: ${({ addressFormComplete }) =>
        addressFormComplete ? "inline-block" : "none"};
    }
  }

  .payment {
    opacity: ${({ paymentFormComplete }) => (paymentFormComplete ? 1 : 0.7)};

    svg {
      display: ${({ paymentFormComplete }) =>
        paymentFormComplete ? "inline-block" : "none"};
    }
  }
`;

export const StepGroup = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.7;

  svg {
    margin-right: 0.5rem;
  }
`;

export const StepDivider = styled.div`
  position: relative;
  height: 2rem;
  width: 0.06rem;
  background-color: ${({ theme }) => theme.colors.white4};
`;

export const FormWrapper = styled.div`
  width: 100%;
  margin: 2rem auto;
  border: 1px solid ${({ theme }) => theme.colors.black4};
  padding: 2rem 1.4rem;
`;
