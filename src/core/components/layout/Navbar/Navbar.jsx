import React from "react";
import { SearchBar } from "../../ui/SearchBar";
import NavOptions from "./components/NavOptions";

export default function NavBar() {
  return (
    <div className="py-2 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
      <div className="mb-2 md:mb-0">
        <SearchBar />
      </div>
      <NavOptions />
    </div>
  );
}
