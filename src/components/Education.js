import React from 'react';
import './css/SkillStyle.css';
import './css/HomeStyle.css';
import { Container } from "reactstrap";
import { Table } from 'react-bootstrap';
function Education(){

return(
  <div style={{height:'75vh'}}>
    <div style={{width:'60%',marginLeft:'20%',position:'absolute'}}>
      <Container className="decoration1" style = {{marginTop:'0',top:'0'}}/>
      <Container className="decoration2" style = {{marginTop:'0', top:'0'}}/>
      <h1 style={{fontWeight: "bold", color: "#003D6B",margin:'20px 10px',textAlign:'left' ,position: 'relative',
    zIndex:' 1'}}>EDUCATION</h1>
      <Table className="Ed-history">
        <tbody>
          <tr>
            <td><h3 style={{textAlign:'center',fontSize:'1rem'}}>EDUCATION HISTORY</h3></td>
            <td style={{width:'50%'}}/>
          </tr>
          <tr>
            <td style={{paddingLeft:'20%' ,fontWeight:'bold'}}><p>2017 - 2021</p></td>
            <td><p>Bachelor of Engineering - computer engineering ,<br/> University of Chiang Mai University, Chiang Mai Thailand<br/><br/>GPA : 3.29 (Second-class honors)</p></td>
          </tr>
          <tr>
            <td style={{paddingLeft:'20%' ,fontWeight:'bold'}}><p >2015 - 2017</p></td>
            <td><p>High School Certificate equivalent, <br/>Yupparaj Wittayalai School, Chiang Mai Thailand <br/><br/>GPA : 3.59</p></td>
          </tr>
          <tr>
            <td style={{paddingLeft:'20%' ,fontWeight:'bold'}}><p>2012 - 2015</p></td>
            <td><p>Secondary school certificate equivalent,<br/>Suanboonyopatham Lamphun School, Lamphun Thailand</p></td>
          </tr>
        </tbody>
      </Table>
    </div>
      
  </div>  
);
}
export default Education;