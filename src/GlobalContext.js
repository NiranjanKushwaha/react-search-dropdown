import React, { useState } from "react";

const GlobalContext = React.createContext();

const GlobalContextProvider = (props) => {
    const [apiListData, setApiListData] = useState([]);
    const [isSearchTextPresent, setIsSearchTextPresent] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [matchingData, setMatchingData] = useState([]);
    return <GlobalContext.Provider value={{ apiListData, setApiListData, isSearchTextPresent, setIsSearchTextPresent, searchText, setSearchText, matchingData, setMatchingData }}>
        {props.children}
    </GlobalContext.Provider>
}

export { GlobalContext, GlobalContextProvider };