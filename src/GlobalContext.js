import React, { useState } from "react";

const GlobalContext = React.createContext();

const GlobalContextProvider = (props) => {
    const [apiListData, setApiListData] = useState([])
    return <GlobalContext.Provider value={{ apiListData, setApiListData }}>
        {props.children}
    </GlobalContext.Provider>
}

export { GlobalContext, GlobalContextProvider };