import { useState, useEffect, createContext } from "react";

// creating a context so the states, functions and logic in this file will be available to other components without passing props from parent components
export const ProductsContext = createContext();

// GET ITEMS FROM LOCAL STORAGE
// a variable that holds the value of 'productOverview' from local storage
const productOverviewFromStorage = JSON.parse(
  localStorage.getItem("productOverview") || "{}"
);

// a variable that holds the value of 'cart' from local storage
const cartFromStorage = JSON.parse(localStorage.getItem("cart") || "[]");

// a variable that holds the value of 'totalPrice' from local storage
const totalPriceFromStorage = JSON.parse(localStorage.getItem("total") || "[]");

export const ProductsProvider = ({ children }) => {
  // a state to hold products data
  const [products, setProducts] = useState({});

  // a state to hold collections data
  const [collections, setCollections] = useState({});

  // a state to hold product overview data after a product is clicked. if the page is refreshed, the state is set to the data from local storage
  const [productOverview, setProductOverview] = useState(
    productOverviewFromStorage
  );

  // a state to hold cart data. if the page is refreshed, the state is set to the data from local storage
  const [cart, setCart] = useState(cartFromStorage);

  // a state to hold and manage the total price of items in the cart, type of this state is array. if the page is refreshed, the state is set to the data from local storage
  const [totalPrice, setTotalPrice] = useState(totalPriceFromStorage);

  // a state to hold the sum of all cart item prices. this state will be updated using totalPrice.reduce array method
  const [subTotal, setSubTotal] = useState();

  // the base url of my api endpoint for retrieving data from strapi
  const baseUrl = "https://dhrey-store.herokuapp.com/api";

  const fetchCategories = () => {
    fetch(`${baseUrl}/categories?populate=*`)
      .then((res) => res.json())
      .then((data) => setCollections(data));
  };

  // a function to filter the products based on the category passed in and update the products state
  const filterProducts = (category) => {
    setProducts({});
    fetch(
      `${baseUrl}/products?populate=*&filters[$and][0][categories][name][$eq]=${category}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    updateTotalPrice("increase", product.initialPrice);
  };

  const deleteFromCart = (selected) => {
    setCart([...cart.filter((item) => item.id !== selected.id)]);
    setTotalPrice([
      ...totalPrice.filter((price) => price !== selected.initialPrice),
    ]);
  };

  const emptyCart = () => {
    setCart([]);
    setTotalPrice([]);
  };

  const updateTotalPrice = (direction, price) => {
    if (direction === "increase") {
      setTotalPrice([...totalPrice, price]);
    } else {
      const index = totalPrice.findIndex((item) => item === price);
      totalPrice.splice(index, 1);
      setTotalPrice([...totalPrice]);
    }
  };

  const updateSubTotal = () => {
    setSubTotal(
      totalPrice.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
      )
    );
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // useEffect for setting data to local storage
  useEffect(() => {
    localStorage.setItem("productOverview", JSON.stringify(productOverview));
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("total", JSON.stringify(totalPrice));
  }, [productOverview, cart, totalPrice]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        productOverview,
        setProductOverview,
        collections,
        filterProducts,
        cart,
        setCart,
        addToCart,
        deleteFromCart,
        emptyCart,
        totalPrice,
        setTotalPrice,
        subTotal,
        updateTotalPrice,
        updateSubTotal,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
