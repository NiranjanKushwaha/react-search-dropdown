import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const DropdownComponent = () => {
  const { apiListData } = useContext(GlobalContext);
  return (
    <div className="dropdown_container">
      <div>{apiListData.map((el) => el.name)}</div>
    </div>
  );
};

export default DropdownComponent;
