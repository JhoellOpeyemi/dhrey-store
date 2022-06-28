import styled, { css } from "styled-components";

export const PageHeader = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    font-size: 2.7rem;
  }
`;

export const SectionHeader = styled.h3`
  font-size: 1.65rem;
  color: ${({ theme }) => theme.colors.heading};

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    font-size: 2.2rem;
  }
`;

export const Text = styled.p`
  padding: 1rem 0;
  font-size: 1.14rem;

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    font-size: 1.3rem;
  }

  ${({ borderTop }) =>
    borderTop &&
    css`
      border-top: 1px solid ${({ theme }) => theme.colors.black4};
      margin-top: 1rem;
      padding-top: 2rem;
    `}

  ${({ small }) =>
    small &&
    css`
      font-size: 1.05rem;

      @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
        font-size: 1.2rem;
      }
    `}

    ${({ italic }) =>
    italic &&
    css`
      font-style: italic;
    `}

    ${({ pryColor }) =>
    pryColor &&
    css`
      color: ${({ theme }) => theme.colors.pryColor};
    `}
`;
