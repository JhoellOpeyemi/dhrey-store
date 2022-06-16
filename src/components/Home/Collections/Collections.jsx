import React, { useContext } from "react";

import { ProductsContext } from "../../../contexts/ProductsContext";
import { LinkButton } from "../../../styles/Buttons.styled";

import { SectionHeader, Text } from "../../../styles/Headings.styled";
import { Overlay } from "../../../styles/Utilities.styled";
import {
  Card,
  CollectionGroup,
  CollectionImage,
  CollectionName,
  CollectionsWrapper,
} from "./Collections.styled";

const Collections = () => {
  const { categories } = useContext(ProductsContext);

  const categoriesToShow = categories.slice(-3);
  return (
    <CollectionsWrapper>
      <SectionHeader>Collections</SectionHeader>
      <Text>Explore various collections of our products</Text>

      <CollectionGroup>
        {categoriesToShow.map((category, index) => {
          return (
            <Card key={index} to="/">
              <CollectionImage src={category?.assets[0]?.url} alt="" />
              <CollectionName>{category.name}</CollectionName>
              <Overlay backgroundImage="linear-gradient(0deg, rgba(0,0,0,.9) 25%, rgba(230,230,230,.1) 100%)" />
            </Card>
          );
        })}
      </CollectionGroup>

      <LinkButton to="/" small>
        See All
      </LinkButton>
    </CollectionsWrapper>
  );
};

export default Collections;
