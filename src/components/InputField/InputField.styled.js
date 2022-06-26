import styled from "styled-components";

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #aaa;
  font-size: 1.07rem;
  text-transform: capitalize;
`;

export const FlexInputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black8};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  padding: 0.6rem 0.8rem;
  letter-spacing: 2px;

  &:focus,
  &:active {
    outline: 1px solid ${({ theme }) => theme.colors.black8};
    background: rgba(255, 255, 255, 0.05);
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.pryColor};
  font-size: 0.9rem;
  margin-top: 0.6rem;
`;
