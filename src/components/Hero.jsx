import React from "react";

// importing components
import GitForm from "./GitForm";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__heading--wrapper">
        <h1 className="hero__heading">GitFinder</h1>
      </div>

      <GitForm />
    </div>
  );
};

export default Hero;
