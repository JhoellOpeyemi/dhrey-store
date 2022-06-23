import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.navBg};
  transform: ${({ nav }) => (nav ? "translateY(0)" : "translateY(-100%)")};
  transition: all 0.6s;

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    position: relative;
    top: 0;
    background: none;
    transform: translateX(0%);
    height: 100%;
    width: fit-content;
    justify-content: flex-end;
    flex-direction: row;
    padding: 0;
  }
`;

export const LinkWrapper = styled.div`
  position: relative;
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 2.8rem;
  }

  a {
    animation: ${({ nav }) => (nav ? "reveal .2s ease-in-out forwards" : "")};
  }

  &:nth-of-type(1) {
    a {
      animation-delay: calc(${({ theme }) => theme.linkDelay} * 5.5);
    }
  }

  &:nth-of-type(2) {
    a {
      animation-delay: calc(${({ theme }) => theme.linkDelay} * 6.5);
    }
  }

  &:nth-of-type(3) {
    a {
      animation-delay: calc(${({ theme }) => theme.linkDelay} * 7.5);
    }
  }

  &:nth-of-type(4) {
    a {
      animation-delay: calc(${({ theme }) => theme.linkDelay} * 8.5);
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    &:not(:last-child) {
      margin: 0 3rem 0 0;
    }
  }
`;

export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.colors.black4};
  text-transform: uppercase;
  letter-spacing: 1px;
  transform: translateY(100%);
  font-size: 2.1rem;

  &:hover {
    color: ${({ theme }) => theme.colors.pryColor};
  }

  &.${({ activeClassName }) => activeClassName} {
    color: ${({ theme }) => theme.colors.pryColor};
  }

  ${({ cart }) =>
    cart &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        width: 2.5rem;
        height: 2.5rem;

        path {
          fill: ${({ theme }) => theme.colors.black4};
        }
      }

      &:hover {
        svg {
          path {
            fill: ${({ theme }) => theme.colors.pryColor};
          }
        }
      }

      &.${({ activeClassName }) => activeClassName} {
        svg {
          path {
            fill: ${({ theme }) => theme.colors.pryColor};
          }
        }
      }

      @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
        svg {
          width: 1.8rem;
          height: 1.8rem;

          path {
            fill: ${({ theme }) => theme.colors.black8};
          }
        }
      }
    `}

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.white4};
    text-transform: capitalize;
    transform: translateY(0%);

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  @keyframes reveal {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const NumberOfItem = styled.span`
  position: absolute;
  top: -0.125rem;
  right: -0.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1rem;
  aspect-ratio: 1/1;
  background-color: red;
  border-radius: 50%;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.white};
`;
