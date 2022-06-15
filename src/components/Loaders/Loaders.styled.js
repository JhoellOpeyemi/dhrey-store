import styled from "styled-components";

export const StyledPreLoader = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  z-index: 10;

  & > div {
    width: 70%;
    max-width: 31.25rem;
    margin: auto;
  }
`;

export const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 0.25rem;
  background-color: ${({ theme }) => theme.colors.preLoaderProgress};
  border-radius: 2rem;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background-color: ${({ theme }) => theme.colors.white};
    animation: progress 2.3s linear forwards 0.3s;
  }

  @keyframes progress {
    0% {
      width: 0%;
    }

    10% {
      width: 10%;
    }

    30% {
      width: 15%;
    }

    40% {
      width: 35%;
    }

    50% {
      width: 40%;
    }

    60% {
      width: 65%;
    }

    70% {
      width: 70%;
    }

    80% {
      width: 90%;
    }

    100% {
      width: 100%;
    }
  }
`;

export const PreLoaderText = styled.p`
  text-align: center;
  font-size: 1.35rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.darkWhite};
  letter-spacing: 2px;
`;
