import React from "react";

function ProjectComponent(props) {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: props.bgColor,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <img src={props.img} width="40%" style={{ marginRight: "5%" }} />
      <div
        style={{
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
          display: "flex",
          width: "35%",
        }}
      >
        <h1
          style={{
            fontWeight: "bold",
            color: props.textColor,
            marginBottom: 50,
          }}
        >
          {props.projTitle}
        </h1>
        <p
          style={{
            fontSize: "1rem",
            color: props.textColor,
            letterSpacing: 0.5,
            textAlign: "start",
          }}
        >
          {props.projContent}
        </p>
        <br />
        <p
          style={{
            fontSize: "0.85rem",
            color: props.textColor,
            letterSpacing: 0.5,
            textAlign: "start",
          }}
        >
          <span style={{ fontWeight: "bold", color: props.textColor,letterSpacing: 0.5, textAlign: "start",}}>
            Responsibility :{" "}
          </span>
          {props.responsibility}
        </p>
        <br/>
        <p style={{ fontWeight: "bold", color: props.textColor,fontSize:'0.85rem',textAlign: "start", }}>See on github repositories : <a href={props.github} style={{fontWeight:'normal' ,color:props.textColor}}>{props.github}</a></p>
      </div>
    </div>
  );
}

export default ProjectComponent;
