import React from "react";

const UserRepos = ({ data }) => {
  return (
    <div className="userrepos">
      <div className="userrepos__grid">
        {data.respositories.map((singleRepo, index) => {
          return (
            <div key={`UserRepos ${index}`} className="userrepos__repo">
              <div className="userrepos__repo__name">
                <a
                  href={singleRepo.html_url}
                  className="userrepos__repo__heading"
                  target="_blank"
                >
                  {singleRepo.name}
                </a>
              </div>
              <div className="userrepos__repo__repo-details">
                {singleRepo.language && <p>{singleRepo.language}</p>}
                <p>forks : {singleRepo.forks}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserRepos;
