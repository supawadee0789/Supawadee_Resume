import React, { useState } from "react";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavLink from "react-bootstrap/esm/NavLink";
import { Button } from "react-bootstrap";
import Logo from "../img/Logo.svg";
import { useMediaQuery } from "react-responsive";
import Hamburger from "hamburger-react";
import { push as Menu } from "react-burger-menu";
import "./css/menu.css";
import { Link } from "react-scroll";

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

const MyNavBar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <Container>
        <Default>
          <Navbar
            fixed="top"
            className="color-nav justify-content-between"
            style={{ paddingInline: "15%", height: 80 }}
          >
            <Navbar.Brand href="#home">
              <Link to="home" spy={true} smooth={true}>
                <img
                  src={Logo}
                  width="180"
                  className="d-inline-block align-top"
                  alt="logo"
                />
              </Link>
            </Navbar.Brand>

            <Nav>
              <Link to="home" spy={true} smooth={true} className="inActive" activeClassName="active" style={{marginInline:15 ,cursor:'pointer'}} >
                HOME
              </Link>
              
              <Link to="about" spy={true} smooth={true} className="inActive" activeClassName="active" style={{marginInline:15 ,cursor:'pointer'}}>
                ABOUT ME
              </Link>
              <Link to="project" spy={true} smooth={true} className="inActive" activeClassName="active" style={{marginInline:15 ,cursor:'pointer'}}>
                PROJECTS
              </Link>
            <Link to="contact" spy={true} smooth={true}  className="contact-button"
               >
    
              <Button
                title="CONTACT"
                className="contact-button"
                activeClassName="contact-button-active"
              >
                CONTACT
              </Button>  </Link>
            </Nav>
          </Navbar>
        </Default>
        <Mobile>
          <Navbar fixed="top" className="color-nav" style={{ height: 80 }}>
            <Navbar.Brand href="#home">
              <img
                src={Logo}
                width="180"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>
            <div style={{ position: "fixed", right: "20px" }}>
              <Hamburger
                direction="right"
                rounded
                size={20}
                toggled={isOpen}
                toggle={setOpen}
              />
            </div>

            <Menu right onOpen={isOpen} width={"70%"} noOverlay>
              <a id="home" className="bm-item-list" href="/">
                Home
              </a>
              <a id="about" className="bm-item-list" href="/about">
                About Me
              </a>
              <a id="project" className="bm-item-list" href="/about">
                Project
              </a>
              <a id="contact" className="bm-item-list" href="/contact">
                Contact
              </a>
            </Menu>
          </Navbar>
        </Mobile>
      </Container>
    </div>
  );
};

export default MyNavBar;
