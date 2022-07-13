import React, { useEffect, useContext } from "react";
import { Outlet, useParams } from "react-router-dom";
import { motion } from "framer-motion";

// hooks import
import useDocumentTitle from "../../hooks/useDocumentTitle";

// context import
import { ProductsContext } from "../../contexts/ProductsContext";

// normal components import
import SearchInput from "../SearchInput/SearchInput";

// styled components import
import { PageHeader } from "../../styles/Headings.styled";
import { Container, Main } from "../../styles/Utilities.styled";
import {
  FilterButtonGroup,
  FilterButtonList,
  ShopWrapper,
} from "./Shop.styled";
import { FilterLinkButton } from "../../styles/Buttons.styled";
import { ShopVariants } from "./ShopAnimation";
import { LoadingProducts } from "../Loaders/Loaders";

const Shop = () => {
  const params = useParams();
  const { products, collections, filterProducts } = useContext(ProductsContext);

  const slug = (collection) => {
    return collection.split(" ").join("-");
  };

  const unSlug = params.collection.split("-").join(" ");

  useEffect(() => {
    if (params.collection) filterProducts(unSlug);
  }, []);

  useDocumentTitle("Shop | Dhrey Store");

  return (
    <>
      {Object.entries(products).length === 0 ? (
        <LoadingProducts text="Fetching Products" />
      ) : (
        <Container
          as={motion.div}
          variants={ShopVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Main moreTop>
            <SearchInput />

            <ShopWrapper>
              <PageHeader>Shop</PageHeader>

              <FilterButtonGroup>
                {collections.data?.map((collection) => (
                  <FilterButtonList key={collection.id}>
                    <FilterLinkButton
                      to={`/shop/${slug(collection.attributes.name)}`}
                      activeClassName="active"
                      onClick={() => filterProducts(collection.attributes.name)}
                    >
                      {collection.attributes.name}
                    </FilterLinkButton>
                  </FilterButtonList>
                ))}
              </FilterButtonGroup>

              <Outlet />
            </ShopWrapper>
          </Main>
        </Container>
      )}
    </>
  );
};

export default Shop;
