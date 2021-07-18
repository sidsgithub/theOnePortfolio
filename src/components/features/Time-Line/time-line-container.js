import React, { useContext } from "react";
import TimeLine from "./time-line";
import WorkTimeLine from "./work-time-line";
import BackgroundTag from "../../common/components/bacground-tags";
import ThemeContext from "../../../context/theme-context";
import "./time-line-container.scss";

const TimeLineConatiner = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="time-line-container" id="timeline">
      <div>
        <BackgroundTag theme={theme} value={`<section>`} />
        <div className="time-line-heading">Journey So Far</div>
        <BackgroundTag theme={theme} value={`</section>`} />
      </div>
      <div className="sectional-heading">1.) Institutions</div>
      <TimeLine />
      <div className="sectional-heading" id="experiences">2.) Experiences</div>
      <WorkTimeLine />
    </div>
  );
};

export default TimeLineConatiner;
