import React from "react";
import { SearchBar } from "../../ui/SearchBar";
import NavOptions from "./components/NavOptions";

const Navbar = () => {
  return (
    <nav className="py-2  flex flex-col md:flex-row items-center justify-between sticky top-0 z-50 container  bg-background  mx-auto   ">
      <div className="mb-2 md:mb-0">
        <SearchBar />
      </div>
      <NavOptions />
    </nav>
  );
};

export default Navbar;
