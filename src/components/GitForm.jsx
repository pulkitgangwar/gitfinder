import React, { useState } from "react";

const GitForm = () => {
  const [value, setValue] = useState("");
  return (
    <form className="hero__form form">
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
