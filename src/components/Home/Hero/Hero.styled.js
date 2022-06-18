import styled from "styled-components";

export const SearchBox = styled.div`
  position: relative;
  width: 100%;
  height: 3rem;

  svg {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
  }

  input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.black4};
    padding: 0 2rem 0 3rem;
    font-size: 1rem;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.colors.white4};
  }

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    height: 3.5rem;
  }
`;

export const SliderAndText = styled.div`
  margin-top: 2rem;

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    display: flex;
    align-items: center;
  }
`;

export const HeroSlider = styled.div`
  position: relative;
  width: 100%;
  height: 21.25rem;

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    height: 24rem;
  }
`;

export const ImageGroup = styled.div`
  position: relative;
  height: 100%;

  .active {
    opacity: 1;
    pointer-events: all;
  }
`;

export const Image = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  overflow: hidden;
  transition: all 0.8s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const HeroTextWrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    margin-left: 3rem;
    width: 95%;
  }
`;

export const HeroText = styled.h1`
  color: ${({ theme }) => theme.colors.heading};
  font-size: 1.9rem;
  margin: 1rem 0 1.5rem;
  overflow: hidden;

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    font-size: 2.33rem;
  }
`;

export const ButtonWrapper = styled.div``;
