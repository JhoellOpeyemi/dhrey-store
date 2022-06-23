import styled from "styled-components";

export const EmptyCartText = styled.p`
  font-size: 1.3rem;
  margin: 5.5rem 0 3.5rem;
  font-weight: 500;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    font-size: 1.6rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.desktop}) {
    font-size: 1.85rem;
    margin: 6.5rem 0 3.25rem;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
`;
