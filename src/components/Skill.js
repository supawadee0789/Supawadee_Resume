import React from "react";
import Card from "./SkillCard";
import Pic1 from "../img/programming.svg";
import Pic2 from "../img/design.svg";
import Pic3 from "../img/other.svg";
import { Table } from 'react-bootstrap';

function Skill() {
  return (
    <div style={{ paddingInline:'10em' }}>
      <h1 style={{ fontWeight: "bold", color: "#003D6B",marginBottom:'10px' }}>SKILLS</h1>
      <Card
        name="Programming"
        url={Pic1}
        massage="Front-End Web and Mobile Dev. HTML , CSS , Bootstrap framework, JavaScript, React, React Native, Flutter"
      />
      <Card
        name="UI Designer"
        url={Pic2}
        massage='Web and Mobile User Interface Design and Interaction by using Adobe XD'
      />
      <Card
        name="Other"
        url={Pic3}
        massage="Writing Report and Presentation Microsoft skills Word, Excel, PPT"
      />
      <div className="language-container">
          <p style={{color:'#003D6B',fontSize:'1em',fontWeight:'bold',textAlign:'start'}}>Languages</p>
          <Table responsive size="sm" className='table-lang'>
            <thead>
                <tr>
                    <th></th>
                    <th>Listening</th>
                    <th>Speaking</th>
                    <th>Reading</th>
                    <th>Writing</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>THAI</th>
                    <td>100%</td>
                    <td>100%</td>
                    <td>100%</td>
                    <td>100%</td>
                </tr>
                <tr>
                    <th>ENGLISH</th>
                    <td>75%</td>
                    <td>60%</td>
                    <td>70%</td>
                    <td>70%</td>
                </tr>
                <tr>
                    <th>JAPANESE (N5)</th>
                    <td>45%</td>
                    <td>50%</td>
                    <td>40%</td>
                    <td>50%</td>
                </tr>
                
            </tbody>
          </Table>
          <p style={{color:'#003D6B',fontSize:'0.6em',textAlign:'end',margin:'10px '}}>Self-Performance Evaluation*</p>
        
      </div>
    </div>
  );
}

export default Skill;
