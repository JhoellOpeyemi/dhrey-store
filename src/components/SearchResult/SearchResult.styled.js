import styled from "styled-components";
import { Link } from "react-router-dom";

export const SearchWrapper = styled.div`
  margin-top: 3.2rem;

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    margin-top: 4rem;
  }
`;

export const SubHeading = styled.h3`
  font-size: 1.3rem;
  font-weight: 500;

  span {
    font-size: 1.35rem;
    font-weight: 700;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    font-size: 1.5rem;

    span {
      font-size: 1.55rem;
    }
  }
`;

export const SearchProductsGroup = styled.div`
  margin-top: 4rem;
  border-top: 1px solid ${({ theme }) => theme.colors.black4};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem 1.5rem;
  padding: 3rem 0;

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2.5rem 2rem;
  }
`;

export const ProductList = styled.li``;

export const ProductCard = styled(Link)`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #333;
  border: 1px solid ${({ theme }) => theme.colors.black4};
`;

export const ProductImageContainer = styled.div`
  position: relative;
  height: 17rem;

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    height: 17.5rem;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const ProductDetails = styled.div`
  padding: 1.375rem 1rem 0;
`;

export const ProductName = styled.h5`
  font-size: 1.15rem;
  font-weight: 500;
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    font-size: 1.2rem;
  }
`;

export const ProductPrice = styled.p`
  position: absolute;
  bottom: 1rem;
  font-size: 1.15rem;
  color: ${({ theme }) => theme.colors.heading};
  letter-spacing: 1px;
  font-weight: 600;

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    font-size: 1.2rem;
  }
`;

export const NoProducts = styled.div`
  text-align: center;
  margin-top: 4rem;
  border-top: 1px solid ${({ theme }) => theme.colors.black4};
  padding: 3rem 0;
  font-style: italic;
  opacity: 0.8;

  p {
    font-size: 1.35rem;
  }
`;
