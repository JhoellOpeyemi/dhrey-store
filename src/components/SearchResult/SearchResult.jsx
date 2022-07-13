import { useContext } from "react";

import { ProductsContext } from "../../contexts/ProductsContext";

import { Container, Main } from "../../styles/Utilities.styled";
import { SectionHeader, Text } from "../../styles/Headings.styled";
import { Overlay } from "../../styles/Utilities.styled";
import {
  SearchWrapper,
  SubHeading,
  SearchProductsGroup,
  ProductCard,
  ProductDetails,
  ProductImage,
  ProductImageContainer,
  ProductName,
  ProductPrice,
  ProductList,
  NoProducts,
} from "./SearchResult.styled";

const SearchResult = () => {
  const { query, searchedProducts, setProductOverview } =
    useContext(ProductsContext);

  const formattedPrice = (price) => {
    const naira = "₦";
    const amount = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${naira}${amount}`;
  };

  return (
    <Container>
      <Main moreTop>
        <SectionHeader center>Search Result</SectionHeader>

        <SearchWrapper>
          <SubHeading>
            You searched for "<span>{query}</span>"
          </SubHeading>

          {searchedProducts?.data?.length > 0 ? (
            <SearchProductsGroup>
              {searchedProducts?.data?.map((product) => (
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
              ))}
            </SearchProductsGroup>
          ) : (
            <NoProducts>
              <Text>No product match your search</Text>
            </NoProducts>
          )}
        </SearchWrapper>
      </Main>
    </Container>
  );
};

export default SearchResult;
