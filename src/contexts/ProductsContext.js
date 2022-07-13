import { useState, useEffect, createContext } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState({});

  const [collections, setCollections] = useState({});
  const [productOverview, setProductOverview] = useState({});
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  const [subTotal, setSubTotal] = useState();

  const baseUrl = "https://dhrey-store.herokuapp.com/api";

  const fetchCategories = () => {
    fetch(`${baseUrl}/categories?populate=*`)
      .then((res) => res.json())
      .then((data) => setCollections(data));
  };

  const filterProducts = (category) => {
    setProducts({});
    fetch(
      `${baseUrl}/products?populate=*&filters[$and][0][categories][name][$eq]=${category}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const addToCart = (product) => {
    if (localStorage.getItem("cart") === null) {
      setCart([]);
    }
    if (localStorage.getItem("total") === null) {
      setTotalPrice([]);
    }
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
    if (totalPrice !== null) {
      setSubTotal(
        totalPrice.reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          0
        )
      );
    }
  };

  useEffect(() => {
    const productOverviewFromLocalStorage = JSON.parse(
      localStorage.getItem("product")
    );
    const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
    const totalPriceFromLocalStorage = JSON.parse(
      localStorage.getItem("total")
    );

    setProductOverview(productOverviewFromLocalStorage);
    setCart(cartFromLocalStorage);
    setTotalPrice(totalPriceFromLocalStorage);
  }, []);

  useEffect(() => {
    // store states to local storage, this is to persist the state even after page refreshes
    localStorage.setItem("product", JSON.stringify(productOverview));
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("total", JSON.stringify(totalPrice));

    fetchCategories();
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
