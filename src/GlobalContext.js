import React, { useState } from "react";

const GlobalContext = React.createContext();

const GlobalContextProvider = (props) => {
    const [apiListData, setApiListData] = useState([]);
    const [isSearchTextPresent, setIsSearchTextPresent] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [matchingData, setMatchingData] = useState([]);
    const [activeCardId, setActiveCardId] = useState(-1);
    const [isHighlight, setisHighlight] = useState(false);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [isKeyUpOrDownPressed, setIsKeyUpOrDownPressed] = useState(false);
    return <GlobalContext.Provider value={{ apiListData, setApiListData, isSearchTextPresent, setIsSearchTextPresent, searchText, setSearchText, matchingData, setMatchingData, activeCardId, setActiveCardId, isHighlight, setisHighlight, isMouseOver, setIsMouseOver, isKeyUpOrDownPressed, setIsKeyUpOrDownPressed }}>
        {props.children}
    </GlobalContext.Provider>
}

export { GlobalContext, GlobalContextProvider };