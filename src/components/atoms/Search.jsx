import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <div className="flex items-center px-6 py-2 bg-white rounded-full shadow-xl dark:text-black">
      <input
        type="text"
        placeholder="Cari..."
        className="w-full py-2 outline-none dark:text-black"
      />
      <SearchIcon
        style={{ color: "black" }}
        className="cursor-pointer dark:text-black"
      />
    </div>
  );
};

export default Search;
