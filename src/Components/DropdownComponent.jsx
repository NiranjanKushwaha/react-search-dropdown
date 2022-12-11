import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../GlobalContext";

const DropdownComponent = () => {
  const {
    setSearchText,
    matchingData,
    setisHighlight,
    searchText,
    activeCardId,
    isHighlight,
    setActiveCardId,
    isMouseOver,
    setIsMouseOver,
    isKeyUpOrDownPressed,
    setIsKeyUpOrDownPressed,
    setIsSearchTextPresent,
  } = useContext(GlobalContext);

  useEffect(() => {
    if (activeCardId >= -1 && isHighlight && !isMouseOver) {
      let card = document.getElementById(`card_${activeCardId}`);
      if (card) {
        card.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [activeCardId, isHighlight, isMouseOver]);
  const getItems = (itemsArr) => {
    if (itemsArr && itemsArr.length) {
      return itemsArr.map((el, index) => (
        <span style={{ marginLeft: "5px" }} key={index}>
          {el}
        </span>
      ));
    }
  };

  function isHighLighted(value) {
    if (value && value.toLowerCase().includes(searchText.toLowerCase())) {
      const re = new RegExp(searchText, "gi");
      return value.replace(re, `<span class="highlight">${searchText}</span>`);
    } else {
      return value;
    }
  }

  const handleMouseOver = (e) => {
    if (!isKeyUpOrDownPressed) {
      setIsMouseOver(true);
      e.stopPropagation();
      const cardId = e.target.id;
      console.log(e.target.id + Number(cardId.split("_").at(-1)));
      setisHighlight(true);
      if (cardId) {
        setActiveCardId(Number(cardId.split("_").at(-1)));
      }
    }
  };

  const handleClick = (name) => {
    setisHighlight(true);
    if (name) {
      setSearchText(name);
      setIsSearchTextPresent(false);
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
          matchingData.map((el, index) => (
            <div
              className={`${
                isMouseOver ? "custom_card card_hover" : "custom_card"
              }`}
              key={el.id}
              id={`card_${index}`}
              style={{
                background:
                  activeCardId === index && isHighlight && !isMouseOver
                    ? "bisque"
                    : "",
              }}
              onMouseOver={handleMouseOver}
              onMouseMove={() => setIsKeyUpOrDownPressed(false)}
              onClick={() => handleClick(el.name)}
            >
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
          <div>
            <span style={{ marginLeft: "10rem" }}>No user found!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownComponent;
