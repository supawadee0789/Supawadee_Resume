import React, { useState } from "react";
import img from "../img/layers.svg";
import { Button } from "react-bootstrap";
import { Container } from "reactstrap";
import { FiArrowRight } from "react-icons/fi";
import { CSSTransition } from "react-transition-group";
import { Carousel } from "react-bootstrap";
import img1 from "../img/good-wallet.png";
import img2 from "../img/mtm.png";
import img3 from "../img/browser.svg";
import ProjectComponent from "./ProjComponent";
import "./css/slide.css";
import { nativeTouchData } from "react-dom/cjs/react-dom-test-utils.production.min";
import { useMediaQuery } from "react-responsive";
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 990 });
  return isMobile ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 991 });
  return isNotMobile ? children : null;
};

function Projects() {
  const [isClick, setClick] = useState(false);
  return (
    <Container style={{ width: "100%", padding: 0 }}>
      <CSSTransition in={isClick} timeout={500} classNames="slide">
        <div id="project">
          <Default>
            <img src={img} width="30%" />
          </Default>

          <div className="project-subtitle">
            <h1
              style={{ fontWeight: "bold", color: "white", marginBottom: 50 }}
            >
              PROJECTS
            </h1>
            <p style={{ color: "white", textAlign: "left" }}>
              There are some of projects that I ever did while I'm a 4th-years
              student. I have tried various projects for learning new languages
              and develop myself. Projects that are presented are written in
              programing languages such as Dart in Flutter framework and
              JavaScript by using React and React-Native library. All details of
              projects will show up when you click on the button below.
            </p>

            <Button
              variant="light"
              size="lg"
              style={{
                alignSelf: "flex-end",
                marginBlock: 50,
                fontWeight: "bold",
                color: "#003D6B",
              }}
              onClick={() => setClick(!isClick)}
            >
              See My Projects
              <FiArrowRight style={{ marginLeft: 10, fontWeight: 5 }} />
            </Button>
          </div>
        </div>
      </CSSTransition>

      <Carousel indicators={false}>
        <Carousel.Item>
          <ProjectComponent
            bgColor="#003D6B"
            img={img1}
            textColor="#E0EEF9"
            projTitle="Flutter"
            projContent="My 4th years student project or Senior project is moblie application that was written by flutter framework.
       It's a expensed management application which can record transactions by voice for decrese time to take note and comfortable to make income statement. "
            responsibility="My responsibilities are designing application using Adobe XD, Developing front-end and handling database by using firebase cloud firestore."
            github="https://github.com/supawadee0789/goodwallet_app"
          />
        </Carousel.Item>
        <Carousel.Item>
          <ProjectComponent
            bgColor="#003D6B"
            img={img2}
            textColor="#E0EEF9"
            projTitle="React Native"
            projContent="Macth the Memories is application to note English words with automatic translation to Thai languages. And making random flashcards to users who learn English and want to remember vocabulary faster."
            responsibility="Design and Develop whole application."
            github="https://github.com/supawadee0789/Match-the-Memory"
          />
        </Carousel.Item>
        <Carousel.Item>
          <ProjectComponent
            bgColor="#003D6B"
            img={img3}
            textColor="#E0EEF9"
            projTitle="React"
            projContent="This website was written by HTML,CSS,JavaScript and React.This website was created for learning to create website and using new library. Including a detailed description of my background and personal information."
            responsibility="Design and Develop whole website."
            github="https://github.com/supawadee0789/Supawadee_Resume"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Projects;
