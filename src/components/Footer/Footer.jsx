import React from "react";
import { FooterLink, FooterLinks, StyledFooter } from "./Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterLinks>
        <FooterLink to="/">Home</FooterLink>
        <FooterLink to="/">About</FooterLink>
        <FooterLink to="/">Shop</FooterLink>
        <FooterLink to="/">Contact</FooterLink>
      </FooterLinks>
    </StyledFooter>
  );
};

export default Footer;
