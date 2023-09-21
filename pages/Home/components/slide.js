import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
//import "./styles.css";

const fadeImages = [
  "assets/images/screenshot1.png",
  "assets/images/screenshot2.png",
  "assets/images/screenshot3.png",
  "assets/images/screenshot4.png",
];

export default function Slide() {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <img src={fadeImages[0]} />
        </div>
        <div className="each-fade">
          <img src={fadeImages[1]} />
        </div>
        <div className="each-fade">
          <img src={fadeImages[2]} />
        </div>
        <div className="each-fade">
          <img src={fadeImages[3]} />
        </div>
      </Fade>
    </div>
  );
}
