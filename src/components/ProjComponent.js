import React from "react";
import { useMediaQuery } from "react-responsive";

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 990 });
  return isMobile ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 991 });
  return isNotMobile ? children : null;
};
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
      <Default>
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
              fontWeight: "normal",
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
              fontWeight: "normal",
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                color: props.textColor,
                letterSpacing: 0.5,
                textAlign: "start",
              }}
            >
              Responsibility :{" "}
            </span>
            {props.responsibility}
          </p>
          <br />
          <p
            style={{
              fontWeight: "bold",
              color: props.textColor,
              fontSize: "0.85rem",
              textAlign: "start",
            }}
          >
            See on github :{" "}
            <a
              href={props.github}
              style={{ fontWeight: "normal", color: props.textColor }}
            >
              {props.github}
            </a>
          </p>
        </div>
      </Default>
      <Mobile>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={props.img} width="40%" style={{ marginRight: "5%" }} />
            <h1
              style={{
                fontWeight: "bold",
                color: props.textColor,
              }}
            >
              {props.projTitle}
            </h1>
          </div>
          <p
            style={{
              fontSize: "1rem",
              color: props.textColor,
              letterSpacing: 0.5,
              textAlign: "start",
              fontWeight: "normal",
              width: "60%",
            }}
          >
            {props.projContent}
          </p>
          <p
            style={{
              fontWeight: "bold",
              color: props.textColor,
              fontSize: "0.85rem",
              textAlign: "center",
            }}
          >
            See on github :{" "}
            <a
              href={props.github}
              style={{ fontWeight: "normal", color: props.textColor }}
            >
              {props.github}
            </a>
          </p>
        </div>
      </Mobile>
    </div>
  );
}

export default ProjectComponent;
