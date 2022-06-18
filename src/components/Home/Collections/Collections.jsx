import React, { useEffect, useContext } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

// context import
import { ProductsContext } from "../../../contexts/ProductsContext";

// styled components import
import { LinkButton } from "../../../styles/Buttons.styled";
import { SectionHeader, Text } from "../../../styles/Headings.styled";
import { Overlay, Slide } from "../../../styles/Utilities.styled";
import {
  Card,
  CollectionGroup,
  CollectionImage,
  CollectionName,
  CollectionsWrapper,
} from "./Collections.styled";

// animation variants import
import {
  HeadingVariants,
  TextVariants,
  WordVariants,
  SlideVariants,
} from "../../Animation";
import {
  CollectionGroupVariants,
  CollectionVariants,
} from "./CollectionAnimation";

const Collections = () => {
  const { categories } = useContext(ProductsContext);

  const categoriesToShow = categories.slice(-3);

  const { ref, inView } = useInView({
    threshold: 0.25,
  });
  const collectionAnimation = useAnimation();

  const collectionSubText = "Explore various collections of our products";

  let collectionSubTextArray = collectionSubText.split(" ");

  useEffect(() => {
    if (inView) {
      collectionAnimation.start("visible");
    }
  });

  return (
    <CollectionsWrapper
      ref={ref}
      as={motion.section}
      variants={CollectionVariants}
      initial="hidden"
      animate={collectionAnimation}
    >
      <SectionHeader as={motion.h3} variants={HeadingVariants}>
        Collections
      </SectionHeader>

      <Text as={motion.p} variants={TextVariants}>
        {collectionSubTextArray.map((text, index) => {
          return (
            <span className="word" key={index}>
              <motion.span variants={WordVariants}>{text}&nbsp;</motion.span>
            </span>
          );
        })}
      </Text>

      <CollectionGroup as={motion.div} variants={CollectionGroupVariants}>
        {categoriesToShow.map((category, index) => {
          return (
            <Card key={index} to="/">
              <Slide as={motion.div} variants={SlideVariants} />
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
