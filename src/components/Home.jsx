import React, { useState } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      return;
    }
    const name = username.toLowerCase().split(" ").join("");
    router.push(`/users/${name}`);
  };
  return (
    <div className="home">
      <h1 className="home__heading">Search GitHub User</h1>
      <form className="home__form" onSubmit={handleSubmit}>
        <input
          className="home__form__input"
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search any user"
          autoComplete="off"
        />
      </form>
    </div>
  );
};

export default Home;
