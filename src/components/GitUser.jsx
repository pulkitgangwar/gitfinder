import React from "react";
import Moment from "react-moment";

const GitUser = ({
  data: { name, url, createdAt, username },
  handleGoBack,
}) => {
  return (
    <div className="gituser">
      <p onClick={handleGoBack} className="gituser__back">
        Go Back
      </p>
      <div className="gituser__detail gituser__detail--name">
        <h3>Name</h3>
        <h1>{name ? name.toUpperCase() : "unknown"}</h1>
      </div>
      <div className="gituser__detail gituser__detail--username">
        <h3>Username</h3>
        <h1>{username}</h1>
      </div>
      <div className="gituser__detail gituser__detail--date">
        <h3>Year</h3>
        <h1>
          <Moment format="YYYY">{createdAt}</Moment>
        </h1>
      </div>
      <div className="gituser__detail gituser__detail--url">
        <h3>URL</h3>
        <p>
          <a href={url}>{url}</a>
        </p>
      </div>
    </div>
  );
};

export default GitUser;
