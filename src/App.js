import React from 'react'
import "./App.css";
import MainContainer from './Components/MainContainer';
import { GlobalContextProvider } from './GlobalContext';
const App = () => {
  return (
    <GlobalContextProvider>
      <MainContainer />
    </GlobalContextProvider>
  )
}

export default App