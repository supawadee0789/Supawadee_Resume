import React from 'react';

function ProjectComponent(props){
    return(
        <div style={{height: "100vh", backgroundColor:props.bgColor ,flexDirection:'row', alignItems:'center',justifyContent:'space-around',display:'flex'}}>
        <img src={props.img} width="30%"/>
        <div style={{flexDirection:'column', alignItems:'start',justifyContent:'center',display:'flex',width:'35%'}}>
           <h1 style={{fontWeight:'bold',color:props.textColor,marginBottom:50}}>{props.projTitle}</h1> 
           <p style={{fontSize:'1rem',color:props.textColor,letterSpacing: 1,textAlign:'start'}}>{props.projContent}
           </p>
                
        </div>
        
    </div>
    );
}

export default ProjectComponent;