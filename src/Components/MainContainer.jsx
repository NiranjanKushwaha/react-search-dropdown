import React, { useContext } from "react";
import DropdownComponent from "./DropdownComponent";
import SearchInput from "./SearchInput";

const MainContainer = () => {
  return (
    <div className="main_container">
      <SearchInput />
      <DropdownComponent />
    </div>
  );
};

export default MainContainer;
