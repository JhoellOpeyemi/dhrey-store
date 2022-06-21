import { useState, useEffect, createContext } from "react";
import { commerce } from "../lib/commerce";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const productOverviewFromLocalStorage = JSON.parse(
    localStorage.getItem("product") || "{}"
  );

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productOverview, setProductOverview] = useState(
    productOverviewFromLocalStorage
  );
  const [cart, setCart] = useState({});

  useEffect(() => {
    // store product overview to local storage, this is to persist the state even after page refreshes
    localStorage.setItem("product", JSON.stringify(productOverview));

    fetchCategories();
    retrieveCart();
  }, [productOverview]);

  // function to fetch all the categories e.g Fashion, Home accessories from commerce api
  const fetchCategories = () => {
    commerce.categories.list().then((category) => setCategories(category.data));
  };

  // function to fetch all the products in each category
  const fetchCategoryProducts = (category) => {
    setProducts([]);
    if (category === "all") {
      commerce.products.list().then((product) => setProducts(product.data));
    } else {
      commerce.products
        .list({
          category_slug: [category],
        })
        .then((product) => setProducts(product.data));
    }
  };

  const retrieveCart = () => {
    commerce.cart.retrieve().then((cart) => setCart(cart));
  };

  const addToCart = (productId, quantity) => {
    commerce.cart
      .add(productId, quantity)
      .then((response) => setCart(response.cart));
  };

  const updateQuantity = (productId, quantity) => {
    commerce.cart
      .update(productId, { quantity: quantity })
      .then((response) => setCart(response.cart));
  };

  const removeFromCart = (productId) => {
    commerce.cart.remove(productId).then((response) => setCart(response.cart));
  };

  const emptyCart = () => {
    commerce.cart.empty().then((response) => setCart(response.cart));
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        categories,
        setCategories,
        fetchCategoryProducts,
        productOverview,
        setProductOverview,
        cart,
        setCart,
        addToCart,
        updateQuantity,
        removeFromCart,
        emptyCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
