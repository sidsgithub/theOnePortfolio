import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import LandingPage from "./components/LandingPage/landingPage";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import ThemeContext from "./context/theme-context";

function App() {
  const [theme, setTheme] = useState("light");
  const value = { theme, setTheme };
  return (
    <ThemeContext.Provider value={value}>
      <div className="App">
        <Navbar />
        <div className="app-no-nav">
          <LandingPage />
          <About />
          <Contact />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
