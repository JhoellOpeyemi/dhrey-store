import React, { useEffect, useState, useContext } from "react";

import { motion } from "framer-motion";

// hooks import
import useDocumentTitle from "../../hooks/useDocumentTitle";

// context import
import { ProductsContext } from "../../contexts/ProductsContext";

// styled components import
import { CtaButton } from "../../styles/Buttons.styled";
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
  const { productOverview, addToCart } = useContext(ProductsContext);

  const [pageTransition, setPageTransition] = useState(true);

  const firstImage = productOverview.attributes.images.data[0].attributes.url;
  const [image, setImage] = useState(firstImage);

  const showImage = (e) => {
    const clickedImage = e.target.src;
    setImage(clickedImage);
  };

  const cartItem = {
    id: productOverview.id,
    name: productOverview.attributes.name,
    image: productOverview.attributes.images.data[0].attributes.url,
    price: productOverview.attributes.price,
    initialPrice: productOverview.attributes.initialPrice,
    quantity: 1,
  };

  useEffect(() => {
    setTimeout(() => {
      setPageTransition(false);
    }, 1500);
  });

  useDocumentTitle("Product Overview | Dhrey Store");

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

            <ProductName>{productOverview.attributes.name}</ProductName>

            <ProductOverviewGroup>
              <ProductImageGroup>
                <CurrentImage>
                  <Slide as={motion.div} variants={SlideVariants} />
                  <img src={image} alt="" />
                  <Overlay product />
                </CurrentImage>
                <OtherImagesGroup>
                  {productOverview.attributes.images.data.map((image) => (
                    <OtherImage key={image.id}>
                      <OtherImageButton onClick={(e) => showImage(e)}>
                        <img src={image.attributes.url} alt="" />
                      </OtherImageButton>
                      <Overlay product />
                    </OtherImage>
                  ))}
                </OtherImagesGroup>
              </ProductImageGroup>

              <ProductDescGroup as={motion.div} variants={ProductDescVariants}>
                <h5>Description</h5>
                <Text>{productOverview.attributes.description}</Text>

                <ButtonContainer>
                  <CtaButton to="/cart" onClick={() => addToCart(cartItem)}>
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
