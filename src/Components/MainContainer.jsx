import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../GlobalContext";
import { getData } from "../services/CommonApiService";
import DropdownComponent from "./DropdownComponent";
import SearchInput from "./SearchInput";

const MainContainer = () => {
  const { isSearchTextPresent, setApiListData } = useContext(GlobalContext);
  useEffect(() => {
    const apiUrl = "http://www.mocky.io/v2/5ba8efb23100007200c2750c";
    getData(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length) {
          console.log(data);
          setApiListData(data);
          // to see scroll bar duplicating items for test
          // setApiListData(data.concat(data));
        } else {
          setApiListData([]);
        }
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <div className="main_container">
      <SearchInput />
      {isSearchTextPresent && <DropdownComponent />}
    </div>
  );
};

export default MainContainer;
