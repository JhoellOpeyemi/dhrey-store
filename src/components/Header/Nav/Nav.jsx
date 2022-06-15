import React from "react";
import { motion } from "framer-motion";

import { Link, LinkWrapper, StyledNav } from "./Nav.styled";

import { NavVariants, NavLinkVariants } from "./NavAnimation";

const Nav = ({ nav }) => {
  return (
    <>
      {nav && (
        <StyledNav
          nav={nav}
          as={motion.nav}
          variants={NavVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <LinkWrapper>
            <motion.span variants={NavLinkVariants}>
              <Link to="/">Home</Link>
            </motion.span>
          </LinkWrapper>
          <LinkWrapper>
            <motion.span variants={NavLinkVariants}>
              <Link to="/">About</Link>
            </motion.span>
          </LinkWrapper>
          <LinkWrapper>
            <motion.span variants={NavLinkVariants}>
              <Link to="/">Shop</Link>
            </motion.span>
          </LinkWrapper>
        </StyledNav>
      )}
    </>
  );
};

export default Nav;
