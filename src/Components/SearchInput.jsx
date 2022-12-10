import React from "react";

const SearchInput = () => {
  return (
    <div className="input_container">
      <div className="icon_container">
        <img
          className="search_icon"
          src="https://icons.veryicon.com/png/o/application/wq/search-171.png"
          alt="search_icon"
        />
      </div>
      <div>
        <input type="text" className="search_input" placeholder="Search here" />
      </div>
    </div>
  );
};

export default SearchInput;
