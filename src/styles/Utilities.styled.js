import styled from "styled-components";

export const Container = styled.div`
  width: ${({ theme }) => theme.container};
  max-width: 75rem;
  margin: auto;
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
`;
