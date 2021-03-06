import React, { useState } from "react";

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
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav((prev) => !prev);
  };

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

          <Nav nav={nav} setNav={setNav} />

          <HamburgerWrapper onClick={toggleNav} nav={nav}>
            {nav ? <Close /> : <Hamburger />}
          </HamburgerWrapper>
        </div>
      </NavWrapper>
    </StyledHeader>
  );
};

export default Header;
