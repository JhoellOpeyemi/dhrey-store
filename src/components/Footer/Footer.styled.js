import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

export const FooterLinks = styled.div`
  text-align: center;
`;

export const FooterLink = styled(Link)`
  position: relative;
  color: ${({ theme }) => theme.colors.white4};

  &:not(:last-child) {
    margin-right: 1.5rem;
  }
`;
