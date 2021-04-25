import React from 'react';
import img1 from "../img/layers.svg";
import {Button} from 'react-bootstrap';
import { FiArrowRight } from "react-icons/fi";
function Projects (){
return(
    <div style={{height: "100vh", backgroundColor:'#003D6B' ,flexDirection:'row', alignItems:'center',justifyContent:'space-around',display:'flex'}}>
        <img src={img1} width="30%"/>
        <div style={{flexDirection:'column', alignItems:'start',justifyContent:'center',display:'flex',width:'35%'}}>
           <h1 style={{fontWeight:'bold',color:'white',marginBottom:50}}>PROJECTS</h1> 
           <p style={{fontSize:'1rem',color:'white',letterSpacing: 1,textAlign:'start'}}>Some projects that I ever did while I'm a 4th-years student.
         I have tried various projects for learning new languages and develop myself. Projects that are presented are written in programing languages such as Dart in Flutter framework and JavaScript by using React and React-Native library. 
         All details of projects will show up when you click on the button below.
           </p>
       
            <Button variant="light" size="lg"style={{alignSelf:'flex-end',marginBlock:50,fontWeight:'bold',color:'#003D6B'}} >See My Projects<FiArrowRight  style ={{marginLeft:10,fontWeight:5}}/></Button>   
         
        </div>
        
    </div>
);

}

export default Projects;