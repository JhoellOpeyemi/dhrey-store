import styled from "styled-components";

export const ProductName = styled.h3`
  margin: 3rem 0 0;
  font-size: 1.35rem;
  font-weight: 500;

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    font-size: 1.6rem;
  }
`;

export const ProductOverviewGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.5rem 0 4rem;

  @media screen and (min-width: ${({ theme }) => theme.break.tablet}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const ProductImageGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 88%;
  margin: auto;

  img {
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.tablet}) {
    width: 45%;
    margin: unset;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.desktop}) {
    width: 40%;
  }
`;

export const CurrentImage = styled.div`
  position: relative;
  width: 100%;

  img {
    height: 100%;
    object-fit: cover;
  }
`;

export const OtherImagesGroup = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-top: 0.5rem;
`;

export const OtherImage = styled.div`
  position: relative;

  &:not(:last-child) {
    margin-right: 0.7rem;
  }
`;

export const OtherImageButton = styled.button`
  width: 100%;
  height: 100%;

  img {
    height: 100%;
    object-fit: cover;
  }
`;

export const ProductDescGroup = styled.div`
  margin-top: 3.75rem;

  h5 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.tablet}) {
    width: 50%;
    margin: 0 0 0 2rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    width: 75%;
    margin: 0 0 0 4rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.break.desktop}) {
    margin: 0 0 0 7rem;

    h5 {
      font-size: 1.35rem;
    }
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: grid;
  place-items: center;

  @media screen and (min-width: ${({ theme }) => theme.break.tablet}) {
    place-items: flex-start;
  }
`;
