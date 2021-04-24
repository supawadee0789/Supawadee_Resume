import React from "react";
import Carousel from "nuka-carousel";
import img1 from "../img/act1.jpg";
import img2 from "../img/act2.jpg";
import img3 from "../img/act3.jpg";
import img4 from "../img/act4.jpg";
import img5 from "../img/act6.jpg";
function Activities() {
  return (
    <div style={{ height: "75vh" }}>
      <h1 className="head">ACTIVITIES</h1>

      <div
        style={{
          backgroundColor: "#003D6B",
          width: "50em",
          height: "28em",
          marginInline: "auto",
          marginTop: "5em",
          flexDirection: "row",
          display: "flex",
        }}
      >
        <Carousel
          defaultControlsConfig={{
            pagingDotsStyle: {
              fill: "#003D6B",
            },
          }}
        >
          <img src={img4} />
          <img src={img5} />
          <img src={img1} />
          <img src={img2} />
          <img src={img3} />

        </Carousel>
      </div>
    </div>
  );
}

export default Activities;
