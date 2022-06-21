import styled from "styled-components";

export const CartWrapper = styled.ul`
  padding: 4rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.black8};
`;

export const CartItem = styled.li`
  display: flex;
  align-items: center;
  padding: 2rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black4};

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    padding: 2.75rem 0;
  }
`;

export const Image = styled.div`
  position: relative;
  width: 45%;

  img {
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.tablet}) {
    width: 35%;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    width: 30%;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.desktop}) {
    width: 30%;
  }
`;

export const Details = styled.div`
  flex: 1;
  margin-left: 1.25rem;

  @media screen and (min-width: ${({ theme }) => theme.break.tablet}) {
    margin-left: 2.5rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    margin-left: 3rem;
  }
`;

export const Name = styled.p`
  font-weight: 500;
  text-align: left;

  @media screen and (min-width: ${({ theme }) => theme.break.tablet}) {
    font-size: 1.125rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    font-size: 1.4rem;
  }
`;

export const QuantityPriceDelete = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    width: 100%;
    flex-direction: row;
    align-items: flex-end;
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;

  margin: 2rem 0;

  p {
    font-size: 1.05rem;
    font-weight: 500;
    margin: 0 1.3rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.tablet}) {
    p {
      font-size: 1.125rem;
      margin: 0 1.6rem;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    margin: 5rem 0 0;

    p {
      font-size: 1.3rem;
      margin: 0 2rem;
    }
  }
`;

export const PriceAndDelete = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    margin-left: 4.5rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.desktop}) {
    margin-left: 8rem;
  }
`;

export const Price = styled.p`
  font-size: 1.2rem;
  font-weight: 600;

  @media screen and (min-width: ${({ theme }) => theme.break.tablet}) {
    font-size: 1.4rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.desktop}) {
    font-size: 1.5rem;
  }
`;

export const Delete = styled.button`
  opacity: 0.65;

  svg {
    width: 2rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.tablet}) {
    svg {
      width: 3rem;
    }
  }
`;

export const Checkout = styled.div`
  p {
    font-size: 1.375rem;
    font-weight: 500;
    text-align: right;
    margin: 3.75rem 0 3.125rem;

    span {
      font-weight: 600;
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    p {
      font-size: 2rem;
      margin: 8rem 0 6.25rem;
    }
  }
`;
