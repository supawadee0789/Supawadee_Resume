import React from "react";
import './styles.css';
import NavBar from './components/Nav-bar';
import Home from './components/Home';
import About from './components/About';
import Dott from './components/DottLine';
import Skill from './components/Skill';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About/>
      <Dott/>
      <Skill/>
      <Dott/>
    </div>
  );
}

export default App;
