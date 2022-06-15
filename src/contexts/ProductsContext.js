import { useState, useEffect, createContext } from "react";
import { commerce } from "../lib/commerce";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productOverview, setProductOverview] = useState({});
  const [cart, setCart] = useState({});

  useEffect(() => {
    fetchCategories();
    retrieveCart();
  }, []);

  const fetchCategories = () => {
    commerce.categories.list().then((category) => setCategories(category.data));
  };

  const setCategoryProducts = (category) => {
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
        setCategoryProducts,
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
