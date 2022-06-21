import "./App.css";
import Navigation from "./components/navigation/Navigation.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <>
        <Navigation />
        <Home/>
        <div className="App"></div>
      </>
    </Router>
  );
}

export default App;
