import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.navBg};
`;

export const LinkWrapper = styled.div`
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 2.8rem;
  }

  span {
    display: inline-block;
  }
`;

export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.colors.black4};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 2.1rem;
`;
