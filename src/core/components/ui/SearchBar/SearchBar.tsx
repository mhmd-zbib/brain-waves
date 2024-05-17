import React, { InputHTMLAttributes } from "react";

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ label, ...inputProps }) => {
  return (
    <input
      placeholder="Search..."
      {...inputProps}
      className="rounded-full px-4 py-1 w-64 bg-secondary"
    />
  );
};

export default SearchBar;
