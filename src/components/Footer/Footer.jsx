import React from "react";
import { FooterLink, FooterLinks, StyledFooter } from "./Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterLinks>
        <FooterLink to="/" activeClassName="active">
          Home
        </FooterLink>
        <FooterLink to="/" activeClassName="active">
          About
        </FooterLink>
        <FooterLink to="/" activeClassName="active">
          Shop
        </FooterLink>
        <FooterLink to="/" activeClassName="active">
          Contact
        </FooterLink>
      </FooterLinks>
    </StyledFooter>
  );
};

export default Footer;
