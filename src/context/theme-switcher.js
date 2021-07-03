import React, { useContext } from "react";
import ThemeContext from "../context/theme-context";
import { IoMdSunny, IoMoon } from "../imports/icons";
import "./theme.css";
import "./switch.css"

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      className={`${theme === 'dark' ? 'dark' :'light'} switch-theme`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <IoMoon /> : <IoMdSunny />}
    </button>
  );
}

export default ThemeSwitcher;
