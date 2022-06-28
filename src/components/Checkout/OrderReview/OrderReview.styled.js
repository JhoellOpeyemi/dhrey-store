import styled from "styled-components";

export const SummaryHeading = styled.h3`
  font-size: 1.35rem;
`;

export const ProductsGroup = styled.div`
  margin: 1.7rem 0;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black4};
`;

export const Name = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.pryColor};
`;

export const Quantity = styled.p`
  font-size: 1.05rem;
  margin: 0.3rem 0 1rem;
`;

export const Price = styled.p`
  font-weight: 600;
  font-size: 1.2rem;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  & > div {
    width: 100%;
    height: 0.1rem;
    background-color: ${({ theme }) => theme.colors.pryColor};
    margin: 0 1rem;
  }
`;

export const TotalText = styled.h4`
  font-size: 1.1rem;
`;

export const TotalPrice = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.white};
`;
