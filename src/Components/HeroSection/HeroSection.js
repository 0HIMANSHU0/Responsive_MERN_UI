// eslint-disable-next-line
import React, { useState } from "react";
import Button from "../Buttons/Button";
import "../../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src="./assets/video-1.mp4" autoPlay loop muted /> */}
      <div className="hero-content">
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn-large"
        >
          GETTING STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn-large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
      </div>
    </div>
  );
}

export default HeroSection;
