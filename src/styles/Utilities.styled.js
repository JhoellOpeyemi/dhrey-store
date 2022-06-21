import styled, { css } from "styled-components";

export const Container = styled.div`
  width: ${({ theme }) => theme.container};
  max-width: 75rem;
  margin: auto;
`;

export const Main = styled.main`
  min-height: calc(100vh - 5.2rem);
  margin-top: 5.2rem;
  padding: 2rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black4};

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    margin-top: 5.4375rem;
  }

  ${({ moreTop }) =>
    moreTop &&
    css`
      margin-top: 7.5rem;

      @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
        margin-top: 8.4375rem;
      }
    `}
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  background-image: ${({ backgroundImage }) => backgroundImage};
  pointer-events: none;

  ${({ product }) =>
    product &&
    css`
      background-color: rgba(0, 0, 0, 0.25);
    `}
`;

export const Slide = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bodyBg};
  z-index: 4;
`;
