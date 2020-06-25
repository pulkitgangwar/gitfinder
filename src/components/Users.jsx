import React from "react";

// importing components
import UserDetails from "./UserDetails";
import UserRepos from "./UserRepos";

const Users = ({ data }) => {
  return (
    <div className="users">
      <div className="users__userdetails">
        <UserDetails data={data} />
      </div>
      <div className="users__userrepos">
        <UserRepos data={data} />
      </div>
    </div>
  );
};

export default Users;
