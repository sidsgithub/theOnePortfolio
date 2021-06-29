import "./App.css";
import Navbar from "./components/Navbar/navbar";
import LandingPage from "./components/LandingPage/landingPage";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app-no-nav">
        <LandingPage />
        <About />
        <Contact/> 
      </div>
    </div>
  );
}

export default App;
