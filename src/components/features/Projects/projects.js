import React, { useContext } from "react";
import "./projects.scss";
import BackgroundTag from "../../common/components/bacground-tags";
import ThemeContext from "../../../context/theme-context";
import { projects } from "./project-list";
import {BiLinkExternal,BiLinkAlt} from 'react-icons/bi';

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  function handleClick(link) {
    window.open(link,'_blank');
    }
  return (
    <div className="projects-container" id="projects">
      <div>
        <BackgroundTag theme={theme} value={`<section>`} />
        <div className="projects-heading">Projects</div>
        <BackgroundTag theme={theme} value={`<section>`} />
      </div>
      <div className='projects-wrapper'>
      {projects.map((project) => (
        <div className="projects-card" onClick={()=>handleClick(project.link)}>
          <div className="projects-image-container">
            <img className="projects-image" src={project.image} alt="cypress"></img>
          </div>
          <div className="projects-heading-wrapper">
          <div className="projects-title">{project.title} <BiLinkAlt className='proejects-link'/></div>
          <div className="projects-description">
              {project.description}
            </div>
            <div className="projects-hashtags">{project.hashtags.map(hashtag => hashtag)}</div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Projects;
