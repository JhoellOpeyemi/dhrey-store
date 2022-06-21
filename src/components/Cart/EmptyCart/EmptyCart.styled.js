import styled from "styled-components";

export const EmptyCartText = styled.p`
  font-size: 1.3rem;
  margin: 6rem 0 4rem;
  font-weight: 500;

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    font-size: 1.6rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.desktop}) {
    font-size: 1.85rem;
    margin: 9rem 0 5rem;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
`;
