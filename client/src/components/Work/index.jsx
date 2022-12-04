import React from "react";
import "./work.scss";

const Work = ({ data, aboutData }) => {

  const title = aboutData[0]?.firstHeroSite

  const newData = data.filter((value) => value.title.trim() === title)

  return (
    <div className="work experience" id="work">
      <div className="container">
        <h2>
          <span>03.</span>
          Some Things I’ve Built
          <div className="line"></div>
        </h2>

        <div className="wrapper-project">
          <a
            target="_blank"
            rel="noreferrer"
            href={newData[0]?.external_link}
            className="project-img"
          >
            <img src={data[0]?.image} alt="" />
          </a>
          <div className="project-content">
            <h5>Featured Project</h5>
            <a
              target="_blank"
              rel="noreferrer"
              href={newData[0]?.external_link}
            >
              {newData[0]?.title}
            </a>

            <div className="project-card">
              {newData[0]?.descr}
            </div>
            <ul>
              {
                newData[0]?.technology.map(({ id, technology }) => <li key={id}>{technology}</li>)
              }
            </ul>

            <div className="project-link">
              <a
                target="_blank"
                rel="noreferrer"
                href={newData[0]?.link}
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={newData[0]?.external_link}
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
