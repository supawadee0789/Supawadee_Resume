import React from "react";

import './styles.css';
import NavBar from './components/Nav-bar';
import Home from './components/Home';
import About from './components/About';
import Dott from './components/DottLine';
import Skill from './components/Skill';
import Education from './components/Education';
import Activities from './components/Activities';
import Projects from "./components/Project";




function App() {

  return (
    <div className="App">
      <NavBar />
      <Home />
      <About/>
      <Dott/>
      <Skill/>
      <Dott/>
      <Education/>
      <Dott/>
      <Activities/>
      <Dott/>
      <Projects />
      
      
      
       
       
    </div>

  );
}

export default App;
