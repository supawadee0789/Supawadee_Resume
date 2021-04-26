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
import img2 from "./img/mtm.png";
import img3 from "./img/browser.svg";
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
      <ProjectComponent bgColor="#E0EEF9" img={img1} textColor="#003D6B" projTitle="Flutter" projContent="My 4th years student project or Senior project is moblie application that was written by flutter framework.
       It's a expensed management application which can record transactions by voice for decrese time to take note and comfortable to make income statement. "
       responsibility="My responsibilities are designing application using Adobe XD, Developing front-end and handling database by using firebase cloud firestore."
       github="https://github.com/supawadee0789/goodwallet_app" />
       <ProjectComponent bgColor="#003D6B" img={img2} textColor="#E0EEF9" projTitle="React Native" projContent="Macth the Memories is application to note English words with auto translation in Thai. And making random flashcards to users who learn English and want to remember vocabulary faster."
       responsibility="Design and Develop whole application." github="https://github.com/supawadee0789/Match-the-Memory"/>
       <ProjectComponent bgColor="#E0EEF9" img={img3} textColor="#003D6B" projTitle="React" projContent="This website was written by HTML,CSS,JavaScript and React.This website was created for learning to create website and using new library. Including a detailed description of my background and personal information."
       responsibility="Design and Develop whole website."
       github="https://github.com/supawadee0789/Supawadee_Resume" />
    </div>

  );
}

export default App;
