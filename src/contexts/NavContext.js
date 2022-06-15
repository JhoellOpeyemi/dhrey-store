import React, { useState, createContext } from "react";

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav((prev) => !prev);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <NavContext.Provider value={{ nav, setNav, toggleNav, closeNav }}>
      {children}
    </NavContext.Provider>
  );
};
