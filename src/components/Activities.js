import React from "react";
import Carousel from "nuka-carousel";
import img1 from "../img/act1.jpg";
import img2 from "../img/act2.jpg";
import img3 from "../img/act3.jpg";
import img4 from "../img/act4.jpg";
import img5 from "../img/act6.jpg";
import { useMediaQuery } from "react-responsive";
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 990 });
  return isMobile ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 991 });
  return isNotMobile ? children : null;
};
function Activities() {
  return (
    <div style={{ height: "75vh",display:'flex',flexDirection:'column',alignItems:'center' }}>
      <h1 className="head">ACTIVITIES</h1>
      <Default>
        <div
          style={{
            backgroundColor: "#F3F9FE",
            width: "62em",
            height: "28em",
            marginInline: "auto",
            marginTop: "5em",
            flexDirection: "row",
            display: "flex",
          }}
        >
          <div
            style={{
              backgroundColor: "#003D6B",
              width: "50em",
              height: "100%",
              marginInline: "auto",

              flexDirection: "row",
              display: "flex",
            }}
          >
            <Carousel>
              <img src={img4} />
              <img src={img5} />
              <img src={img1} />
              <img src={img2} />
              <img src={img3} />
            </Carousel>
          </div>
        </div>
      </Default>
      <Mobile>
        <div
          style={{
            backgroundColor: "#F3F9FE",
            width: "80%",
            marginTop: "5em",
            marginInline:'auto',
            display:'flex',
            flexDirection:'row',
            justifySelf:'center'
          }}
        >
          <Carousel>
            <img src={img4} />
            <img src={img5} />
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
          </Carousel>
        </div>
      </Mobile>
    </div>
  );
}

export default Activities;
