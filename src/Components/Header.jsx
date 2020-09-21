import React, { useContext } from "react";
import { SettingsContext } from "../Contexts";
import "../Styles/header.scss";

export default function Header() {
  const [settings, setSettings] = useContext(SettingsContext);

  return (
    <header className="header">
      <h1 className="header__title">Trello Clone</h1>
      <div
        onClick={() => setSettings((prev) => ({ ...prev, menuIsOpen: true }))}
        className="header__settings"
      >
        <i class="fas fa-cog"></i>
      </div>
    </header>
  );
}
