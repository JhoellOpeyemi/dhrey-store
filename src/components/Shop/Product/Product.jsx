import React, { useContext } from "react";

// context import
import { ProductsContext } from "../../../contexts/ProductsContext";
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

const Product = ({ product }) => {
  const { setProductOverview } = useContext(ProductsContext);

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
          <ProductImage src={product.assets[0].url} alt="" />
          <Overlay product />
        </ProductImageContainer>

        <ProductDetails>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>{formattedPrice(product.price.raw)}</ProductPrice>
        </ProductDetails>
      </ProductCard>
    </ProductsList>
  );
};

export default Product;
