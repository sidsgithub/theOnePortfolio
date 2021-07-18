import React, { useContext, useEffect, useState } from "react";
import "./projects.scss";
import BackgroundTag from "../../common/components/bacground-tags";
import ThemeContext from "../../../context/theme-context";
import { projects } from "./project-list";
import { BiLinkAlt } from "react-icons/bi";
import { db } from "../../common/components/firestore.db";
import { urlString,accessToken } from "../../common/components/constants";
import _ from 'lodash';

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const [projectImages, setProjectImages] = useState([]);
  useEffect(() => {
    const fetchProjectImages = async () => {
      const fetchedPosts = await db.collection("projects").get();
      setProjectImages(fetchedPosts.docs.map((doc) => doc.data()));
    };
    fetchProjectImages();
  }, []);
  function handleClick(link) {
    window.open(link, "_blank");
  }
  return (
    <div className="projects-container" id="projects">
      <div>
        <BackgroundTag theme={theme} value={`<section>`} />
        <div className="projects-heading">Projects</div>
        <BackgroundTag theme={theme} value={`<section>`} />
      </div>
      <div className="projects-wrapper">
        {projects.map((project,key) => (
          <div
          key={key}
            className="projects-card"
            onClick={() => handleClick(project.link)}
          >
            <div className="projects-image-container">
             {_.get(projectImages[key],'image') ? <img
                className="projects-image"
                src={`${urlString}${_.get(projectImages[key],'image')}?alt=media&token=${accessToken}`}
                alt="cypress"
              ></img> : null}
            </div>
            <div className="projects-heading-wrapper">
              <div className="projects-title">
                {project.title} <BiLinkAlt className="proejects-link" />
              </div>
              <div className="projects-description">{project.description}</div>
              <div className="projects-hashtags">
                {project.hashtags.map((hashtag) => hashtag)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
