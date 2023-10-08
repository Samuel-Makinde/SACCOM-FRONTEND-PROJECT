import { useState } from "react";
import icon from "../Navbar/images/search.png";
import PropTypes from "prop-types";

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearchQuery = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    onSearch(newSearch);
  };

  // console.log(search);
  return (
    <main>
      <div className="hidden md:flex lg:w-[400px] md:w-[250px] h-full items-center justify-center ">
        <input
          type="text"
          className="relative w-[250px] lg:w-[400px] rounded-[40px] h-[40px] border-solid border-2 border-[#54555B] placeholder-[#B3B4BB] pl-[16px]"
          placeholder="Search through hostels"
          value={search}
          onChange={handleSearchQuery}
        />
        <div className="bg-blue-700 w-[36px] h-[30px] absolute ml-[200px] lg:ml-[350px] rounded-[40px] cursor-pointer">
          <img src={icon} alt="search" className="pt-[5px] pl-[6px]" />
        </div>
      </div>
    </main>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.string.isRequired,
};
export default SearchBar;
