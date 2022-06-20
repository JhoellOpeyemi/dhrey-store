import styled, { css } from "styled-components";

export const Faq = styled.li`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.black8};

  &:not(:last-of-type) {
    margin-bottom: 2rem;

    @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
      margin-bottom: 3rem;
    }
  }
`;

export const FaqButton = styled.button`
  width: 100%;
  background-color: none;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  border: none;
  padding: 0 1rem;
  text-align: left;
  line-height: 1.4;

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    padding: 0 1.6rem;
  }
`;

export const FaqQuestionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.25rem 0;

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    padding: 1.5rem 0;
  }
`;

export const FaqQuestion = styled.h4`
  font-size: 1.05rem;
  line-height: 1.5;
  margin-right: 2.5rem;
  color: ${({ theme }) => theme.colors.white4};

  @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
    font-size: 1.19rem;
  }
`;

export const FaqAnswerWrapper = styled.div`
  max-height: 0;
  overflow: hidden;
  width: 100%;
  border-top: 1px solid transparent;
  transition: all 0.5s cubic-bezier(0, 1, 0, 1);

  ${({ selected, index }) =>
    selected === index &&
    css`
      height: auto;
      max-height: 2000px;
      transition: all 0.5s cubic-bezier(1, 0, 1, 0);
      border-top: 1px solid ${({ theme }) => theme.colors.black4};
    `}

  p {
    color: ${({ theme }) => theme.colors.white4};
    padding: 1.25rem 0;

    @media screen and (min-width: ${({ theme }) => theme.break.bigTablet}) {
      padding: 1.5rem 0;
    }
  }
`;
