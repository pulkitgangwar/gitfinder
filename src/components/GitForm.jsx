import React, { useState } from "react";

const GitForm = ({ getUserName }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      setError("Please enter a Name");
      return;
    }

    setError("");
    getUserName(value);
    return;
  };

  return (
    <form className="hero__form form" onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <input
        className="hero__form--input form__input form__input--value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        name="value"
        placeholder="Enter Name"
      />
      <button className="hero__form--btn form__submit btn">Search</button>
    </form>
  );
};

export default GitForm;
