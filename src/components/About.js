import React from 'react';
import './css/AboutStyle.css';
import img from "../img/my_img.png";
import { Row, Col } from 'reactstrap';
import { useMediaQuery } from 'react-responsive';

const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 1070 })
    return isNotMobile ? children : null
  };
function About(){
    return (
        <div>
            <Row className="about-container">
                <Default>
                <Col xs="6" sm="5">
                    <div className="square1">
                     <div className="square2"/>
                     <img src={img} alt="my profile" width="300" style={{position:'absolute',zIndex:'1000',top:'18%',left:'25%'}}/>       
                    </div>
                    
                </Col>
                </Default>
                <Col >
                    <div className="text-box">
                        <p style={{fontSize:'1.5rem',fontWeight:'bold',color:'#003D6B',textAlign:'left'}}>Personal Informations</p>
                        <p style={{color:'#003D6B',textAlign:'left'}}>MISS SUPAWADEE KHAMNUENGSITHI</p>
                        <p className="info">Residential Address : 54/5 Moo 8 Suthep Mueng Chiang Mai, Thailand 50200 
                            <br/>Phone : 084 - 501 - 1875 
                            <br/>Email : supawadee.khamnuengsithi@gmail.com 
                            <br/>Date of Birth : 24 June 1998 
                            <br/>Nationality : Thai 
                            <br/>Age : 22 
                            <br/>Material Status : Single 
                            <br/>Interested and Activity : Learning language, Learning programing language, 
                            <br/>Watching movie , Listening music , Playing guitar</p>
                    </div>
                    
                </Col>
            </Row>
            
        </div>
    );
}

export default About;