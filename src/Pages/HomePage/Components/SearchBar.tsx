import React from "react";

const SearchBar = () => {
  console.log(1);
  return (
    <div className="absolute flex flex-row justify-start md:justify-end top-0">
      <input type="text" placeholder="Search..." />
    </div>
  );
};

export default SearchBar;
