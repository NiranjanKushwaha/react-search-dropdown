import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const SearchInput = () => {
  const {
    apiListData,
    setIsSearchTextPresent,
    searchText,
    setSearchText,
    setMatchingData,
    matchingData,
    activeCardId,
    setActiveCardId,
    setisHighlight,
    setIsMouseOver,
    setIsKeyUpOrDownPressed,
  } = useContext(GlobalContext);

  const handleSearchText = (e) => {
    let text = e.target.value;
    setSearchText(text);
    if (text) {
      commonFilterFunction(text);
    } else {
      setIsSearchTextPresent(false);
      setMatchingData([]);
      setActiveCardId(-1);
    }
  };

  function commonFilterFunction(searchText) {
    if (searchText) {
      setIsSearchTextPresent(true);
      const listData = getDeepCopy(apiListData);
      const filteredData = listData.filter((el) => {
        if (
          Object.values(el).some(
            (item) => !Array.isArray(item) && isExists(item, searchText)
          )
        ) {
          return el;
        }
        if (
          Object.values(el).some(
            (item) => Array.isArray(item) && isExists(item, searchText)
          )
        ) {
          el["isFoundItem"] = true;
          return el;
        }
      });
      setMatchingData(filteredData);
    }
  }

  const handleInputClick = () => {
    commonFilterFunction(searchText);
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

  const visitCards = (event) => {
    setIsMouseOver(false);
    if (event.key === "ArrowDown" && matchingData.length) {
      setisHighlight(true);
      setIsKeyUpOrDownPressed(true);
      if (activeCardId < matchingData.length - 1) {
        setActiveCardId((prev) => prev + 1);
      } else {
        setActiveCardId(0);
      }
    } else if (event.key === "ArrowUp" && matchingData.length) {
      setisHighlight(true);
      setIsKeyUpOrDownPressed(true);
      if (activeCardId > -1 && activeCardId < matchingData.length) {
        setActiveCardId((prev) => prev - 1);
      } else {
        setActiveCardId(matchingData.length - 1);
      }
    } else {
      setisHighlight(false);
      setIsKeyUpOrDownPressed(false);
    }
  };

  const clearSearchText = () => {
    setSearchText("");
    setIsSearchTextPresent(false);
    setMatchingData([]);
    setActiveCardId(-1);
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
          placeholder="Search users by ID,address,name,pin and items"
          value={searchText}
          onClick={handleInputClick}
          onChange={handleSearchText}
          onKeyDown={visitCards}
        />
      </div>
      <button
        className="delete_icon_container"
        onClick={clearSearchText}
        disabled={searchText ? false : true}
      >
        <img
          className="delete_icon"
          src="https://cdn-icons-png.flaticon.com/512/32/32178.png"
          alt="search_icon"
        />
      </button>
    </div>
  );
};

export default SearchInput;
