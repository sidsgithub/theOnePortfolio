import React, { useContext } from "react";
import "../../../stylesheets/features/Technology/technology.css";
import { techData } from "./technologies";
import TechnologyCard from "./technology-card";
import BackgroundTag from "../../common/components/bacground-tags";
import ThemeContext from "../../../context/theme-context";
const Technology = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div id="technology" className="technology-wrapper">
      <div className="technology-heading-container">
        <BackgroundTag theme={theme} value={`</h3>`} />
        <div className={`technology-heading`}>SkillSet</div>
        <BackgroundTag theme={theme} value={`</h3>`} />
      </div>
      <div className="technology">
        {techData.map((tech, key) => (
          <TechnologyCard
            key={key}
            techName={tech.techName}
            techIcon={tech.techIcon}
            techLink={tech.link}
          />
        ))}
      </div>
    </div>
  );
};
export default Technology;
