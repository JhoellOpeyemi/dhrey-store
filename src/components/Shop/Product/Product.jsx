import React from "react";

// context import
// import { ProductsContext } from "../../../contexts/ProductsContext";
import { Overlay } from "../../../styles/Utilities.styled";
import {
  ProductCard,
  ProductDetails,
  ProductImage,
  ProductImageContainer,
  ProductName,
  ProductPrice,
  ProductsList,
} from "./Product.styled";

const Product = ({ product, setProductOverview }) => {
  const formattedPrice = (price) => {
    const naira = "₦";
    const amount = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${naira}${amount}`;
  };

  return (
    <ProductsList>
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
    </ProductsList>
  );
};

export default Product;
