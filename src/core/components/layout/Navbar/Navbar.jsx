import { SearchBar } from "../../ui/SearchBar";
import NavOptions from "./components/NavOptions";

export default function NavBar() {
  return (
    <div className="py-2 px-6 flex-row flex items-center justify-between  ">
      <SearchBar />
      <NavOptions />
    </div>
  );
}
