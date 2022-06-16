import React, { useContext } from "react";

// context import
import { NavContext } from "../../contexts/NavContext";

import Nav from "./Nav/Nav";
import Hamburger from "../icons/Hamburger";
import Close from "../icons/Close";
import {
  HamburgerWrapper,
  Logo,
  NavWrapper,
  StyledHeader,
} from "./Header.styled";

const Header = () => {
  const { nav, toggleNav } = useContext(NavContext);

  if (!nav) {
    document.querySelector("body").style.overflowY = "auto";
  } else {
    document.querySelector("body").style.overflowY = "hidden";
  }

  return (
    <StyledHeader>
      <NavWrapper>
        <div>
          <Logo nav={nav}>Dhrey store</Logo>

          <Nav nav={nav} />

          <HamburgerWrapper onClick={toggleNav} nav={nav}>
            {nav ? <Close /> : <Hamburger />}
          </HamburgerWrapper>
        </div>
      </NavWrapper>
    </StyledHeader>
  );
};

export default Header;
