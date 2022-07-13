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
