import React from "react";

//shared by all the components using ThemeContext.Provider
const ThemeContext = React.createContext({
  theme: "light",
  setTheme: () => {},
})

export default ThemeContext