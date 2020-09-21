import React, { useState, createContext } from "react";
import Board from "./Components/Board";
import Header from "./Components/Header";
import Settings from "./Components/Settings";
import { ListContextProvider } from "./ListContext";

import { SettingsContext } from "./Contexts";

function App() {
  const [settings, setSettings] = useState({
    menuIsOpen: false,
    darkMode: true,
  });

  return (
    <ListContextProvider>
      <SettingsContext.Provider value={[settings, setSettings]}>
        <div className="app">
          <Header />
          <Settings />
          <Board />
        </div>
      </SettingsContext.Provider>
    </ListContextProvider>
  );
}

export default App;
