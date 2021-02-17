import React from 'react';
import "./css/SkillStyle.css";

function Card(props){
    return(
        <div className="card">
                <img className="pic" src={props.url} alt='design'/>
                <p className="title">{props.name}</p>
                <div className="content"><p>{props.massage}</p></div>
                
        </div>
    );
}

export default Card;