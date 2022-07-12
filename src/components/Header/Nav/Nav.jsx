import { useContext } from "react";

// context import
import { ProductsContext } from "../../../contexts/ProductsContext";

import CartIcon from "../../icons/CartIcon";

import { Link, LinkWrapper, StyledNav, NumberOfItem } from "./Nav.styled";

const Nav = ({ nav, setNav }) => {
  const { cart } = useContext(ProductsContext);
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
            cart="true"
            activeClassName="active"
            onClick={() => setNav(false)}
          >
            <CartIcon />
            {cart?.length > 0 && <NumberOfItem>{cart.length}</NumberOfItem>}
          </Link>
        </LinkWrapper>
      </StyledNav>
    </>
  );
};

export default Nav;
