import React from "react";

import { Overlay } from "../../../styles/Utilities.styled";
import {
  ProductCard,
  ProductDetails,
  ProductImage,
  ProductImageContainer,
  ProductName,
  ProductPrice,
  ProductList,
} from "./Product.styled";

const Product = ({ product, setProductOverview }) => {
  const formattedPrice = (price) => {
    const naira = "₦";
    const amount = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${naira}${amount}`;
  };

  return (
    <ProductList>
      <ProductCard
        to={`/product/${product.id}`}
        onClick={() => setProductOverview(product)}
      >
        <ProductImageContainer>
          {product.attributes.images.data !== null && (
            <ProductImage
              src={product.attributes.images.data[0].attributes.url}
              alt=""
            />
          )}

          <Overlay product />
        </ProductImageContainer>

        <ProductDetails>
          <ProductName>{product.attributes.name}</ProductName>
          <ProductPrice>
            {formattedPrice(product.attributes.price)}
          </ProductPrice>
        </ProductDetails>
      </ProductCard>
    </ProductList>
  );
};

export default Product;
