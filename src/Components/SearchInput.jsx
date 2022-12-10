import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import { getData } from "../services/CommonApiService";

const SearchInput = () => {
  const { setApiListData } = useContext(GlobalContext);
  useEffect(() => {
    const apiUrl = "http://www.mocky.io/v2/5ba8efb23100007200c2750c";
    getData(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length) {
          console.log(data);
          setApiListData(data);
        } else {
        }
      })
      .catch((err) => alert(err));
  }, []);
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
