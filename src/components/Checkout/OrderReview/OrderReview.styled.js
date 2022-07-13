import styled from "styled-components";

export const SummaryHeading = styled.h3`
  font-size: 1.35rem;
  margin-top: 4rem;
`;

export const ProductsGroup = styled.div`
  margin: 2.5rem 0;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black4};

  @media screen and (min-width: ${({ theme }) => theme.break.tablet}) {
    padding: 2rem 1.5rem 2rem 5rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const Name = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.pryColor};

  @media screen and (min-width: ${({ theme }) => theme.break.tablet}) {
    font-size: 1.25rem;
  }
`;

export const Quantity = styled.p`
  font-size: 1.05rem;
  margin: 0.5rem 0 1rem;

  @media screen and (min-width: ${({ theme }) => theme.break.tablet}) {
    margin: 1rem 0 0;
    font-size: 1.15rem;
  }
`;

export const Price = styled.p`
  font-weight: 600;
  font-size: 1.2rem;

  @media screen and (min-width: ${({ theme }) => theme.break.tablet}) {
    font-size: 1.35rem;
  }
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

  @media screen and (min-width: ${({ theme }) => theme.break.tablet}) {
    padding: 0 1.5rem 0 5rem;

    & > div {
      height: 0.08rem;
      margin: 0 2.8rem;
    }
  }
`;

export const TotalText = styled.h4`
  font-size: 1.1rem;

  @media screen and (min-width: ${({ theme }) => theme.break.tablet}) {
    font-size: 1.3rem;
  }
`;

export const TotalPrice = styled.p`
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: ${({ theme }) => theme.break.tablet}) {
    font-size: 1.4rem;
  }
`;
