import { useState, useEffect, createContext } from "react";

// creating a context so the states, functions and logic in this file will be available to other components without passing props from parent components
export const CheckoutContext = createContext();

// a variable that holds the value of 'customerInfo' from local storage
const customerInfoFromStorage = JSON.parse(
  localStorage.getItem("customer") || "{}"
);

export const CheckoutProvider = ({ children }) => {
  const [customerInfo, setCustomerInfo] = useState(customerInfoFromStorage);
  const [deliveryPrice] = useState(2500);

  const updateCustomerInfo = (data) => {
    setCustomerInfo(data);
  };

  // useEffect for setting data to local storage
  useEffect(() => {
    localStorage.setItem("customer", JSON.stringify(customerInfo));
  }, [customerInfo]);

  return (
    <CheckoutContext.Provider
      value={{
        customerInfo,
        setCustomerInfo,
        updateCustomerInfo,
        deliveryPrice,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};
