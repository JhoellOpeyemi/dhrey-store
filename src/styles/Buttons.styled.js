import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const LinkButton = styled(Link)`
  position: relative;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.pryColor};
  text-transform: uppercase;
  letter-spacing: 1px;

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
  font-size: 0.9rem;
  padding: 0.75rem;
  background-color: transparent;
  border: 1px solid transparent;

  &.${({ activeClassName }) => activeClassName} {
    border: 1px solid ${({ theme }) => theme.colors.black8};
    background-color: #333;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    font-size: 1.2rem;
    padding: 0.7rem 0.9rem;
  }
`;
