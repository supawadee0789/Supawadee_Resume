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
import ProjectComponent from "./components/ProjComponent";

import img1 from "./img/good-wallet.png";
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
      <Projects/>
      <ProjectComponent bgColor="#E0EEF9" img={img1} textColor="#003D6B" projTitle="Project" projContent="isus"/>
    </div>
  );
}

export default App;
