import React from "react";

// importing components
import GitForm from "./GitForm";

const Home = () => {
  return (
    <div className="hero">
      <h1 className="hero__heading">GitFinder</h1>
      <GitForm />
    </div>
  );
};

export default Home;
