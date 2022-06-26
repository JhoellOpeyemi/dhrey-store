import { useState, useEffect, createContext } from "react";

import { commerce } from "../lib/commerce";

export const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
  const [addressFormComplete, setAddressFormComplete] = useState(false);
  const [paymentFormComplete, setPaymentFormComplete] = useState(false);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [subDivisions, setSubDivisions] = useState([]);
  const [subDivision, setSubDivision] = useState("");

  const generateToken = (cartId) => {
    commerce.checkout
      .generateToken(cartId, { type: "cart" })
      .then((checkout) => setCheckoutToken(checkout));
  };

  const fetchShippingCountry = (checkoutTokenId) => {
    commerce.services
      .localeListShippingCountries(checkoutTokenId)
      .then(({ countries }) => {
        setShippingCountries(Object.entries(countries));
        setShippingCountry(Object.keys(countries)[0]);
      });
  };

  const fetchSubDivisions = (checkoutTokenId, countryCode) => {
    commerce.services
      .localeListShippingSubdivisions(checkoutTokenId, countryCode)
      .then(({ subdivisions }) => {
        setSubDivisions(Object.entries(subdivisions));
        setSubDivision(Object.keys(subdivisions)[0]);
      });
  };

  useEffect(() => {
    fetchShippingCountry(checkoutToken);
  }, []);

  useEffect(() => {
    if (shippingCountry) fetchSubDivisions(checkoutToken, shippingCountry);
  }, [shippingCountry]);

  return (
    <CheckoutContext.Provider
      value={{
        addressFormComplete,
        setAddressFormComplete,
        paymentFormComplete,
        setPaymentFormComplete,
        generateToken,
        checkoutToken,
        fetchShippingCountry,
        shippingCountries,
        shippingCountry,
        setShippingCountry,
        fetchSubDivisions,
        subDivisions,
        subDivision,
        setSubDivision,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};
