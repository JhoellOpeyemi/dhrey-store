import styled from "styled-components";

export const PageHeader = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-size: 2rem;
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
`;
