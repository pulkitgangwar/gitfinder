import React from "react";

const UserDetails = ({ data }) => {
  console.log(data);
  return (
    <div className="userdetails">
      <div className="userdetails__image_and_name">
        <div className="userdetails__image_and_name__image">
          <img
            src={data.avatar_url}
            className="userdetails__image_and_name__image__img"
          />
        </div>
        <div className="userdetails__image_and_name__name">
          <h1 className="heading-primary">{data.name}</h1>
          <h2 className="heading-secondary heading-secondary--thin">
            {data.login}
          </h2>
        </div>
      </div>
      <div className="userdetails__bio">
        <p className="paragraph-primary">{data.bio}</p>
      </div>
      <div className="userdetails__social">
        <p>{data.followers} followers</p>
        <p>{data.following} following</p>
      </div>
      <div className="userdetails__personal">
        <p>{data.company}</p>
        <p>{data.location}</p>
        <a href={data.blog} target="_blank">
          {data.blog}
        </a>
      </div>
    </div>
  );
};

export default UserDetails;
