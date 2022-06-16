import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkButton = styled(Link)`
  position: relative;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.button};
  text-transform: uppercase;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.3rem;
    width: 100%;
    height: 0.1rem;
    background-color: ${({ theme }) => theme.colors.button};
  }
`;
