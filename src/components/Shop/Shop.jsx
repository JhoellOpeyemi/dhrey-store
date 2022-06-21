import React, { useEffect, useContext } from "react";
import { Outlet, useParams } from "react-router-dom";
import { motion } from "framer-motion";

// context import
import { ProductsContext } from "../../contexts/ProductsContext";

// styled components import
import { PageHeader } from "../../styles/Headings.styled";
import { Container, Main } from "../../styles/Utilities.styled";
import { FilterButtonGroup, FilterButtonList } from "./Shop.styled";
import { FilterLinkButton } from "../../styles/Buttons.styled";
import { ShopVariants } from "./ShopAnimation";
import { LoadingProducts } from "../Loaders/Loaders";

const Shop = () => {
  const { products, categories, fetchCategoryProducts } =
    useContext(ProductsContext);

  const params = useParams();

  useEffect(() => {
    document.title = "Shop | Dhrey Store";
    if (params.collection === "all") {
      fetchCategoryProducts("all");
    } else {
      fetchCategoryProducts(params.collection);
    }
  }, []);

  return (
    <>
      {products?.length === 0 ? (
        <LoadingProducts />
      ) : (
        <Container
          as={motion.div}
          variants={ShopVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Main moreTop>
            <PageHeader>Shop</PageHeader>

            <FilterButtonGroup>
              {categories.map((category, index) => {
                return (
                  <FilterButtonList key={index}>
                    <FilterLinkButton
                      to={category.slug}
                      activeClassName="active"
                      onClick={() => {
                        fetchCategoryProducts(category.slug);
                      }}
                    >
                      {category.name}
                    </FilterLinkButton>
                  </FilterButtonList>
                );
              })}
            </FilterButtonGroup>

            <Outlet />
          </Main>
        </Container>
      )}
    </>
  );
};

export default Shop;
