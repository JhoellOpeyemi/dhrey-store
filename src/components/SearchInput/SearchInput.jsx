import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ProductsContext } from "../../contexts/ProductsContext";

import SearchIcon from "../icons/SearchIcon";

import { SearchBox } from "./SearchInput.styled";

const SearchInput = () => {
  const { fetchSearchedProducts, query, setQuery } =
    useContext(ProductsContext);

  let navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchSearchedProducts(query);
      navigate(`/search/${query}`);
    }
  };

  return (
    <SearchBox>
      <SearchIcon />
      <input
        type="search"
        placeholder="Search Products"
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </SearchBox>
  );
};

export default SearchInput;
