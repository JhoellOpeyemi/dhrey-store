import React, { useContext } from "react";
import { motion } from "framer-motion";

import { useParams } from "react-router-dom";

// context import
import { ProductsContext } from "../../../contexts/ProductsContext";
import { SectionHeader, Text } from "../../../styles/Headings.styled";

// styled components import
import { ProductsGroup, ProductsWrapper, NoProducts } from "./Products.styled";
import { TextVariants, WordVariants } from "../../Animation";
import Product from "../Product/Product";

const Products = () => {
  const { products, setProductOverview } = useContext(ProductsContext);

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

      {products.data.length > 0 ? (
        <ProductsGroup>
          {products.data.map((product) => (
            <Product
              key={product.id}
              product={product}
              setProductOverview={setProductOverview}
            />
          ))}
        </ProductsGroup>
      ) : (
        <NoProducts>
          <Text>
            No products in this collection right now. Check back later!
          </Text>
        </NoProducts>
      )}
    </ProductsWrapper>
  );
};

export default Products;
