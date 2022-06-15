import styled from "styled-components";

export const StyledHeader = styled.header``;

export const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 0;
  background-color: ${({ theme }) => theme.colors.bodyBg};
  z-index: 10;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: ${({ theme }) => theme.container};
    max-width: 75rem;
    margin: auto;
  }
`;

export const Logo = styled.p`
  color: ${({ nav, theme }) =>
    nav ? theme.colors.black4 : theme.colors.white4};
  font-size: 1.3rem;
  text-transform: uppercase;
  z-index: 4;
`;

export const HamburgerWrapper = styled.button`
  z-index: 4;

  svg {
    width: 100%;

    path {
      fill: ${({ nav, theme }) =>
        nav ? theme.colors.black4 : theme.colors.white4};
    }
  }
`;
