import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductsList = styled.li``;

export const ProductCard = styled(Link)`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #333;
  border: 1px solid ${({ theme }) => theme.colors.black4};
`;

export const ProductImageContainer = styled.div`
  position: relative;
  height: 16rem;

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
