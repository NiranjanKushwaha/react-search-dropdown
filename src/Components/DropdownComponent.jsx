import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const DropdownComponent = () => {
  const { matchingData } = useContext(GlobalContext);
  const getItems = (itemsArr) => {
    if (itemsArr && itemsArr.length) {
      return itemsArr.map((el, index) => (
        <span style={{ marginLeft: "5px" }} key={index}>
          {el}
        </span>
      ));
    }
  };
  return (
    <div className="dropdown_container">
      <div
        className={`${
          matchingData && matchingData.length > 2
            ? "dropdown_items_parent overflowY_Scroll"
            : "dropdown_items_parent"
        }`}
      >
        {matchingData && matchingData.length ? (
          matchingData.map((el) => (
            <div className="custom_card" key={el.id}>
              <div className="card_flex">
                <div>
                  <strong>Id:</strong>
                  <p>{el.id}</p>
                  <strong>Name:</strong>
                  <p>{el.name}</p>
                </div>
                <div>
                  <strong>Pin:</strong>
                  <p>{el.pincode}</p>
                  <strong>Items:</strong> <p>{getItems(el.items)}</p>
                </div>
              </div>
              <div>
                <strong>Address:</strong> <p>{el.address}</p>
              </div>
            </div>
          ))
        ) : (
          <span>No matching items found!</span>
        )}
      </div>
    </div>
  );
};

export default DropdownComponent;
