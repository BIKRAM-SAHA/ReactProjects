import React from "react";
import { BsSearch } from "react-icons/bs";

function SearchBar({ searchText }) {
  return (
    <div className="searchBar">
      <BsSearch />
      <input
        type="text"
        className="searchInput"
        onChange={(event) => {
          searchText(event.target.value);
        }}
      />
    </div>
  );
}

export default SearchBar;
