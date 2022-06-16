import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const LinkButton = styled(Link)`
  position: relative;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.pryColor};
  text-transform: uppercase;
  letter-spacing: 1px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.3rem;
    width: 100%;
    height: 0.1rem;
    background-color: ${({ theme }) => theme.colors.pryColor};
  }

  ${({ small }) =>
    small &&
    css`
      font-size: 1.25rem;
      text-transform: capitalize;
      letter-spacing: 0;
      color: ${({ theme }) => theme.colors.white4};

      &::before {
        background-color: ${({ theme }) => theme.colors.white4};
      }
    `}
`;
