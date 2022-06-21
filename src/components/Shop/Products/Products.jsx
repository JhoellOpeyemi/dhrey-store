import React, { useContext } from "react";
import { motion } from "framer-motion";

import { useParams } from "react-router-dom";

// context import
import { ProductsContext } from "../../../contexts/ProductsContext";
import { SectionHeader } from "../../../styles/Headings.styled";

// styled components import
import { ProductsGroup, ProductsWrapper } from "./Products.styled";
import { TextVariants, WordVariants } from "../../Animation";
import Product from "../Product/Product";

const Products = () => {
  const { products } = useContext(ProductsContext);

  const params = useParams();

  const productsHeading = params.collection.split("-");

  return (
    <ProductsWrapper>
      <SectionHeader as={motion.h3} variants={TextVariants}>
        {productsHeading.map((text, index) => {
          return (
            <span className="word" key={index}>
              <motion.span variants={WordVariants}>{text}&nbsp;</motion.span>
            </span>
          );
        })}
      </SectionHeader>

      <ProductsGroup>
        {products?.map((product, index) => {
          return <Product key={index} product={product} />;
        })}
      </ProductsGroup>
    </ProductsWrapper>
  );
};

export default Products;
