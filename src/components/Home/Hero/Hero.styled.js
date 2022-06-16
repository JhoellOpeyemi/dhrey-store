import styled from "styled-components";

export const Main = styled.main`
  min-height: calc(100vh - 5.2rem);
  margin-top: 5.2rem;
  padding: 2rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black4};
`;

export const SearchBox = styled.div`
  position: relative;
  width: 100%;
  height: 2.6rem;

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
    border: 1px solid ${({ theme }) => theme.colors.white4};
    padding: 0 2rem 0 3rem;
    font-size: 1rem;
    letter-spacing: 2px;
    color: ${({ theme }) => theme.colors.white4};
  }
`;

export const HeroSlider = styled.div`
  position: relative;
  width: 100%;
  height: 360px;
  margin-top: 2rem;
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
  pointer-events: none;
  transition: all 0.8s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const HeroText = styled.h1`
  color: ${({ theme }) => theme.colors.heading};
  font-size: 1.9rem;
  margin: 1rem 0 1.5rem;
  overflow: hidden;

  .word {
    overflow: hidden;
  }

  span {
    transform-style: preserve-3d;
  }
`;
