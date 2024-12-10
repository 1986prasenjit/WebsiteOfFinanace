import React from "react";
import heromImg from "../../assets/images/hero2.webp";
import "./HeroSection.css";
import Button from "../Button/Button";

function HeroSection() {
  return (
    <>
      <div className="heroImgContainer">
        <img src={heromImg} alt="Hero Section Image" className="heroImg" />
          <h2 className="heroTextH2">
            Prepare for the future with our advisors
          </h2>
          <p className="heroTextPara">
            Interactively simplify 24/7 markets throught 24/7 best
            practices.Authoritatively foster cutting-edge manufactured products
            and distinctive.
          </p>
          <Button
            text="Meet Experts"
            className="btn"
          />
      </div>
    </>
  );
}

export default HeroSection;
