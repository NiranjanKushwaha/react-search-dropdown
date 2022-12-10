import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const SearchInput = () => {
  const {
    apiListData,
    setIsSearchTextPresent,
    searchText,
    setSearchText,
    setMatchingData,
  } = useContext(GlobalContext);

  const handleSearchText = (e) => {
    const text = e.target.value;
    setSearchText(text);
    if (text) {
      setIsSearchTextPresent(true);
      const listData = getDeepCopy(apiListData);
      const filteredData = listData.filter((el) => {
        if (Object.values(el).some((item) => isExists(item, text))) {
          return el;
        }
      });
      setMatchingData(filteredData);
    } else {
      setIsSearchTextPresent(false);
      setMatchingData([]);
    }
  };

  function isExists(data, value) {
    if (data && typeof data === "string") {
      return data.toLowerCase().includes(value.toLowerCase());
    }
    if (data && Array.isArray(data)) {
      return data.some((item) =>
        item.toString().toLowerCase().includes(value.toLowerCase())
      );
    }
  }

  const getDeepCopy = (value) => {
    return JSON.parse(JSON.stringify(value));
  };

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
        <input
          type="text"
          className="search_input"
          placeholder="Search here"
          value={searchText}
          onChange={handleSearchText}
        />
      </div>
    </div>
  );
};

export default SearchInput;
