import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import LandingPage from "./components/features/Landing-Page/landing-page";
import About from "./components/features/About/about";
import Contact from "./components/features/Contact/contact";
import Instagram from './components/features/Insta/instagram';
import Technology from "./components/features/Technology/technology";
import ThemeContext from "./context/theme-context";
import { Helmet } from "react-helmet";
import {
  isBrowser
} from "react-device-detect";
import TimeLine from './components/features/Time-Line/time-line';

function App() {
  const [theme, setTheme] = useState("light");
  const value = { theme, setTheme };
  return (
    <ThemeContext.Provider value={value}>
      <Helmet>
        <body className={`body ${theme === "dark" ? "dark" : "light"} `}></body>
      </Helmet>
      <div className={`App ${theme === "dark" ? "dark" : "light"}`}>
        {isBrowser ? <Navbar /> : null }
        <div className={`app-no-nav ${theme === "dark" ? "dark" : "light"}`}>
          <LandingPage />
          <About />
          <TimeLine/>
          <Technology/>
          <Instagram />
          <Contact />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
