import React, { useState } from "react";
import axios from "axios";

// importing components
import GitForm from "./GitForm";
import GitUser from "./GitUser";
import Loading from "./Loading";

const Hero = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getUserName = async (name) => {
    setLoading(true);
    const trimmedName = name.trim().split(" ").join("").toLowerCase();
    const client_id = process.env.CLIENT_ID;
    const client_secret = process.env.CLIENT_SECRET;
    const url = `https://api.github.com/users/${trimmedName}?client_id=${client_id}&client_secret=${client_secret}`;
    const response = await axios.get(url).catch((err) => {
      setLoading(false);
      setData(null);
      setError(err.response.data.message); //we need this
    });

    if (response) {
      const newData = {
        name: response.data.name,
        username: response.data.login,
        url: response.data.html_url,
        createdAt: response.data.created_at,
      };

      setData(newData);
      setLoading(false);
      setError("");
    }
  };

  const handleGoBack = () => {
    setLoading(true);
    setData("");
    setLoading(false);
    setError("");
  };

  if (loading) {
    return <Loading />;
  }

  return (
    // <GitUser />

    <>
      {data ? (
        <GitUser data={data} handleGoBack={handleGoBack} />
      ) : (
        <div className="hero">
          {error && <p>{error}</p>}
          <div className="hero__heading--wrapper">
            <h1 className="hero__heading">GitFinder</h1>
          </div>

          <GitForm getUserName={getUserName} />
        </div>
      )}
    </>
  );
};

export default Hero;
