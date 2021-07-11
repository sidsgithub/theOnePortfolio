import React, { useContext } from "react";
import "./time-line.scss";
import TimeLineElement from "./Time-Line-Elements/time-line-elements";
import { education } from "./Time-Line-Elements/eduction";
import { work } from "./Time-Line-Elements/work";
import BackgroundTag from "../../common/components/bacground-tags";
import ThemeContext from "../../../context/theme-context";

const TimeLine = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className="timeline">
      <ul>
      {education.map(edu => 
        <li>
          <div>
            <time>{edu.date}</time>
            {edu.schoolName}
          </div>
        </li>
        )}
        
      </ul>
    </section>
  );
};
export default TimeLine;
