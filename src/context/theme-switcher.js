import React, { useContext } from "react";
import ThemeContext from "../context/theme-context";
import { IoMdSunny, IoMoon } from "../imports/icons";

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? <IoMoon /> : <IoMdSunny />}
    </button>
  );
}

export default ThemeSwitcher;
