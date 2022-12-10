import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../GlobalContext";

const DropdownComponent = () => {
  const { matchingData, setMatchingData, searchText } =
    useContext(GlobalContext);
  const getItems = (itemsArr) => {
    if (itemsArr && itemsArr.length) {
      return itemsArr.map((el, index) => (
        <span style={{ marginLeft: "5px" }} key={index}>
          {el}
        </span>
      ));
    }
  };

  //  style={
  //     el.name.toLowerCase().includes(searchText.toLowerCase())
  //     ? { color: "red" }
  //     : {}
  // }

  function isHighLighted(value) {
    if (value && value.toLowerCase().includes(searchText.toLowerCase())) {
      const re = new RegExp(searchText, "gi");
      return value.replace(re, `<span class="highlight">${searchText}</span>`);
    } else {
      return value;
    }
  }

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
                  <p
                    dangerouslySetInnerHTML={{ __html: isHighLighted(el.id) }}
                  ></p>
                  <strong>Name:</strong>
                  <p
                    dangerouslySetInnerHTML={{ __html: isHighLighted(el.name) }}
                  ></p>
                </div>
                <div style={{ marginLeft: "10rem" }}>
                  <strong>Pin:</strong>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: isHighLighted(el.pincode),
                    }}
                  ></p>
                  <strong>Items:</strong> <p>{getItems(el.items)}</p>
                </div>
              </div>
              <div>
                <strong>Address:</strong>
                <p
                  dangerouslySetInnerHTML={{
                    __html: isHighLighted(el.address),
                  }}
                ></p>
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
