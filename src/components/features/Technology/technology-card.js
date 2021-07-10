import React from "react";

const TechnologyCard = (props) => {
  const { techName, techIcon, techLink } = props;
  function handleClick() {
    window.open(techLink,'_blank');
    }
  return (
    <div className="tech-container" onClick={handleClick}>
      <div className="card">
        <img src={techIcon} className="tech-img" alt={`${techName}-name`} />
        <div className="tech-title" >{techName}</div>
      </div>
    </div>
  );
};
export default TechnologyCard;
