import React,{useEffect} from "react";

import './styles.css';
import NavBar from './components/Nav-bar';
import Home from './components/Home';
import About from './components/About';
import Dott from './components/DottLine';
import Skill from './components/Skill';
import Education from './components/Education';
import Activities from './components/Activities';
import Projects from "./components/Project";
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  useEffect(() => {
    document.title = "Supawadee Resume";
  }, []);

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
      <Contact/>
      <Footer/>
      
       
       
    </div>

  );
}

export default App;
