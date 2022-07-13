import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const LinkButton = styled(Link)`
  position: relative;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.pryColor};
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover::before {
    width: 0;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.3rem;
    width: 100%;
    height: 0.1rem;
    background-color: ${({ theme }) => theme.colors.pryColor};
  }

  ${({ small }) =>
    small &&
    css`
      font-size: 1.25rem;
      text-transform: capitalize;
      letter-spacing: 0;
      color: ${({ theme }) => theme.colors.white4};

      &::before {
        background-color: ${({ theme }) => theme.colors.white4};
      }
    `}
`;

export const FilterLinkButton = styled(NavLink)`
  font-size: 1.05rem;
  padding: 0.75rem;
  background-color: transparent;
  border: 1px solid transparent;
  text-transform: capitalize;

  &:hover {
    background-color: #333;
  }

  &.${({ activeClassName }) => activeClassName} {
    border: 1px solid ${({ theme }) => theme.colors.black8};
    background-color: #333;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    font-size: 1.2rem;
    padding: 0.7rem 0.9rem;
  }
`;

export const CtaButton = styled(Link)`
  text-transform: capitalize;
  font-size: 1.1rem;
  border: 1px solid ${({ theme }) => theme.colors.black8};
  padding: 1.1rem 1.2rem;

  &:hover {
    background-color: #333;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    font-size: 1.2rem;
    padding: 1.2rem 1.3rem;
  }

  ${({ big }) =>
    big &&
    css`
      font-size: 1.2rem;
      padding: 1.1rem 1.2rem;

      @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
        font-size: 1.4rem;
        padding: 1.3rem 1.6rem;
      }
    `}
`;

export const QuantityButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.black8};
  padding: 0.25rem 0.45rem;

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    padding: 0.45rem 0.65rem;
  }
`;

export const SecondaryButton = styled.button`
  position: relative;
  font-size: 1.15rem;
  text-transform: capitalize;
  letter-spacing: 0;
  color: ${({ theme }) => theme.colors.white4};

  &:hover::before {
    width: 0;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.3rem;
    width: 100%;
    height: 0.1rem;
    background-color: ${({ theme }) => theme.colors.white4};
  }

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    font-size: 1.25rem;
  }

  ${({ small }) =>
    small &&
    css`
      font-size: 1rem;

      @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
        font-size: 1.19rem;
      }
    `}
`;
