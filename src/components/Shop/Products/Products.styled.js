import styled from "styled-components";

export const ProductsWrapper = styled.div`
  margin-bottom: 4rem;

  h3 {
    margin: 3rem 0 2.5rem;
    font-size: 1.5rem;
  }

  .word {
    span {
      text-transform: capitalize;
    }
  }
`;

export const ProductsGroup = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem 1.5rem;

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2.5rem 2rem;
  }
`;

export const NoProducts = styled.div`
  text-align: center;
  margin-top: 2rem;
  font-style: italic;
  opacity: 0.8;
`;
