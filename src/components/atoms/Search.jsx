import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <div className="flex items-center px-6 py-2 text-black bg-white rounded-full">
      <input type="text" placeholder="Cari..." className="outline-none" />
      <SearchIcon style={{ color: "black" }} className="cursor-pointer" />
    </div>
  );
};

export default Search;
