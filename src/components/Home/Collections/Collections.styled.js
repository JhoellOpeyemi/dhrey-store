import styled from "styled-components";
import { Link } from "react-router-dom";

export const CollectionsWrapper = styled.section`
  padding: 3rem 0 6rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black4};

  & > a {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const CollectionGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
  margin: 3.5rem 0;
`;

export const Card = styled(Link)`
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: left;
  overflow: hidden;
`;

export const CollectionImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 16rem;
`;

export const CollectionName = styled.h5`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 2rem;
  font-weight: 600;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.heading};
  z-index: 2;
  text-transform: capitalize;
`;
