import React from 'react';
import "./css/HomeStyle.css";
import {Container, Row, Col } from 'reactstrap';
import img from "../img/my_img.png";
import { useMediaQuery } from 'react-responsive';
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 600 })
    return isMobile ? children : null
  };
const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 601 })
    return isNotMobile ? children : null
  };

function Home(){
    return (
        <div className="container" fluid={true} style={{padding:0}}>
            <Default>
            <Row className="home-content" style={{padding:0,margin:0}}>
                <Col xs="6">
                    <div style={{width:'60%',marginLeft:'25%',marginRight:'20px',position:'absolute'}}>
                    <Container className="decoration1"/>
                    <Container className="decoration2"/>
                    <h1 className="hello"> Hello, I'm Supawadee Khamnuengsithi</h1>
                    <p className="introduce-text">I'm a new graduated student. I'm a friendly and 
                    honest person, so I can get along with others easily. I can work under pressure.
                     My strength are enthusiastic ,fast learning and having continual improvement.</p>    
                    </div>
                </Col>
                <Col style={{backgroundColor:'#F3F9FE',padding:0,margin:0}} >
                    <img src={img} width="250" alt="my profile" style={{marginTop:"25%"}}/>
                </Col>
            </Row></Default>
            <Mobile>
                <div style={{margin:'5%',paddingLeft:'2%',paddingRight:'2%'}}><Row >
                <h1 className="hello" style={{textAlign:'center',fontSize:'2rem'}}> Hello,<br/> I'm Supawadee Khamnuengsithi</h1>
                <p className="introduce-text" style={{textAlign:'center'}}>I'm a new graduated student. I'm a friendly and 
                    honest person, so I can get along with others easily. I can work under pressure.
                     My strength are enthusiastic ,fast learning and having continual improvement.</p> 
                </Row>
                <Row style={{backgroundColor:'#F3F9FE'}}>
                <img src={img} width="200" alt="my profile" style={{marginTop:"15%",marginBottom:'15%',alignSelf:'center',marginLeft:'auto',marginRight:'auto'}}/>
                </Row></div>
                
            </Mobile>
        </div>
    );
}
export default Home;