import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import LandingPage from "./components/LandingPage/landingPage";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import ThemeContext from "./context/theme-context";
import { Helmet } from "react-helmet";

function App() {
  const [theme, setTheme] = useState("light");
  const value = { theme, setTheme };
  return (
    <ThemeContext.Provider value={value}>
      <Helmet>
        <body className={`body ${theme === "dark" ? "dark" : "light"} `}></body>
      </Helmet>
      <div className={`App ${theme === "dark" ? "dark" : "light"}`}>
        <Navbar />
        <div className={`app-no-nav ${theme === "dark" ? "dark" : "light"}`}>
          <LandingPage />
          <About />
          <Contact />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
