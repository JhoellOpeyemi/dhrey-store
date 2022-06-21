import React, { useEffect, useState, useContext } from "react";

import { motion } from "framer-motion";

// context import
import { ProductsContext } from "../../contexts/ProductsContext";
import { CtaButton } from "../../styles/Buttons.styled";

// styled components import
import { PageHeader, Text } from "../../styles/Headings.styled";
import { Container, Main, Overlay, Slide } from "../../styles/Utilities.styled";
import {
  ButtonContainer,
  CurrentImage,
  OtherImage,
  OtherImageButton,
  OtherImagesGroup,
  ProductDescGroup,
  ProductImageGroup,
  ProductName,
  ProductOverviewGroup,
} from "./ProductOverview.styled";

// animation variants import
import { SlideVariants } from "../Animation";
import {
  ProductDescVariants,
  ProductOverviewVariants,
} from "./ProductOverviewAnimation";
import { PageTransition } from "../Loaders/Loaders";

const ProductOverview = () => {
  const [pageTransition, setPageTransition] = useState(true);
  const { productOverview, addToCart } = useContext(ProductsContext);
  const currentImage = productOverview?.assets[0]?.url;
  const [image, setImage] = useState(currentImage);

  const showImage = (e) => {
    const clickedImage = e.target.src;
    setImage(clickedImage);
  };

  useEffect(() => {
    document.title = `${productOverview.name} | Dhrey Store`;
    setTimeout(() => {
      setPageTransition(false);
    }, 1500);
  });

  return (
    <>
      {pageTransition ? (
        <PageTransition text="Product Overview" />
      ) : (
        <Container
          as={motion.div}
          variants={ProductOverviewVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Main moreTop>
            <PageHeader>Product Overview</PageHeader>

            <ProductName>{productOverview.name}</ProductName>

            <ProductOverviewGroup>
              <ProductImageGroup>
                <CurrentImage>
                  <Slide as={motion.div} variants={SlideVariants} />
                  <img src={image} alt="" />
                  <Overlay product />
                </CurrentImage>
                <OtherImagesGroup>
                  {productOverview?.assets?.map((img) => {
                    return (
                      <OtherImage>
                        <OtherImageButton
                          key={img.id}
                          onClick={(e) => showImage(e)}
                        >
                          <img src={img.url} alt="" />
                        </OtherImageButton>
                        <Overlay product />
                      </OtherImage>
                    );
                  })}
                </OtherImagesGroup>
              </ProductImageGroup>

              <ProductDescGroup as={motion.div} variants={ProductDescVariants}>
                <h5>Description</h5>
                <Text
                  small
                  dangerouslySetInnerHTML={{
                    __html: productOverview.description,
                  }}
                />

                <ButtonContainer>
                  <CtaButton
                    to="/cart"
                    onClick={() => addToCart(`${productOverview.id}`, 1)}
                  >
                    Add to cart
                  </CtaButton>
                </ButtonContainer>
              </ProductDescGroup>
            </ProductOverviewGroup>
          </Main>
        </Container>
      )}
    </>
  );
};

export default ProductOverview;
