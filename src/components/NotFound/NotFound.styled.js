import styled from "styled-components";

export const NotFoundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: ${({ theme }) => theme.colors.bodyBg};

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 4rem;
      height: 100%;
    }
  }
`;

export const NotFoundMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 53vh;
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    text-align: left;
    align-items: flex-start;
    height: auto;
  }
`;

export const NotFoundSubText = styled.h3`
  font-style: italic;
  font-weight: 400;
  font-size: 1.4rem;
  padding: 1rem;

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    font-size: 1.6rem;
    padding: 1rem 0;
  }
`;

export const NotFoundText = styled.p`
  font-size: 1.25rem;
  padding: 2rem 3rem;
  font-weight: 500;

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    font-size: 1.5rem;
    padding: 3rem 0;
  }
`;

export const ImageGroup = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 80%;
  height: 45vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    position: relative;
    left: 0;
    bottom: 0;
    transform: translateX(0);
    width: fit-content;
    height: 25rem;
  }
`;
