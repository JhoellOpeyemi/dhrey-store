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
  CollectionNameVariants,
  CollectionVariants,
} from "./CollectionAnimation";

// content import
import { CollectionSubTextArray } from "../../../lib/websiteTexts";

const Collections = () => {
  // get the collections state from the context
  const { collections, filterProducts } = useContext(ProductsContext);

  // manipulate the collections state to get the last three collection and set to 'homeCollections' variable
  let homeCollections = [];

  if (collections.data !== null) {
    homeCollections = collections?.data?.slice(-3);
  }

  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const collectionAnimation = useAnimation();

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
      {/* collection section heading */}
      <SectionHeader as={motion.h3} variants={HeadingVariants}>
        Collections
      </SectionHeader>

      {/* subtitle text below collection heading */}
      <Text as={motion.p} variants={TextVariants}>
        {CollectionSubTextArray.map((text, index) => {
          return (
            <span className="word" key={index}>
              <motion.span variants={WordVariants}>{text}&nbsp;</motion.span>
            </span>
          );
        })}
      </Text>

      <CollectionGroup as={motion.div} variants={CollectionGroupVariants}>
        {/* loop through homeCollections and create a card for each collection */}
        {homeCollections.map((collection) => (
          <Card to={`/shop/all`} key={collection.id}>
            <Slide as={motion.div} variants={SlideVariants} />
            <CollectionImage
              src={collection.attributes.image.data.attributes.url}
              alt=""
            />
            <CollectionName as={motion.h5} variants={CollectionNameVariants}>
              {collection.attributes.name}
            </CollectionName>
            <Overlay backgroundColor="rgba(20,20,20,.6)" />
          </Card>
        ))}
      </CollectionGroup>

      <LinkButton to="/shop/all" small onClick={() => filterProducts("all")}>
        See All
      </LinkButton>
    </CollectionsWrapper>
  );
};

export default Collections;
