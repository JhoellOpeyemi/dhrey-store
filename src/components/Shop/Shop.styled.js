import styled from "styled-components";

export const ShopWrapper = styled.div`
  margin-top: 3rem;
`;

export const FilterButtonGroup = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black4};
`;

export const FilterButtonList = styled.li``;
