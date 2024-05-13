import React from "react";

function SearchBar(props) {
  const { label, ...inputProps } = props;
  return (
    <input
      placeholder="Search..."
      {...inputProps}
      className=" rounded-full px-4 py-1 w-64  bg-secondary    "
    />
  );
}

export default SearchBar;
