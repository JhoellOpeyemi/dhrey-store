import React from "react";

import CartIcon from "../../icons/CartIcon";

import { Link, LinkWrapper, StyledNav } from "./Nav.styled";

const Nav = ({ nav, setNav }) => {
  return (
    <>
      <StyledNav nav={nav}>
        <LinkWrapper nav={nav}>
          <Link to="/" activeClassName="active" onClick={() => setNav(false)}>
            Home
          </Link>
        </LinkWrapper>

        <LinkWrapper nav={nav}>
          <Link
            to="/about"
            activeClassName="active"
            onClick={() => setNav(false)}
          >
            About
          </Link>
        </LinkWrapper>

        <LinkWrapper nav={nav}>
          <Link
            to="/shop/all"
            activeClassName="active"
            onClick={() => setNav(false)}
          >
            Shop
          </Link>
        </LinkWrapper>

        <LinkWrapper nav={nav}>
          <Link
            to="/cart"
            cart
            activeClassName="active"
            onClick={() => setNav(false)}
          >
            <CartIcon />
          </Link>
        </LinkWrapper>
      </StyledNav>
    </>
  );
};

export default Nav;
