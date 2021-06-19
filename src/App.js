import './App.css';
import Navbar from './components/Navbar/navbar';
import LandingPage from './components/LandingPage/landingPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="app-no-nav">
      <LandingPage/>
      </div>
    </div>
  );
}

export default App;
