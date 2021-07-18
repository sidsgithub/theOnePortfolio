import React, { useContext } from "react";
import "./time-line.scss";
import { work } from "./Time-Line-Elements/work";
import ThemeContext from "../../../context/theme-context";
import pinlocation from "../../../assets/images/location.svg";

const WorkTimeLine = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section className="timeline">
      <ul>
        {work.map((work, key) => (
          <li key={key}>
            <div className={`timeline-element ${theme}-element`}>
              <div className="timeline-image-container">
                <img
                  className="timeline-image"
                  src={work.icon}
                  alt={`${key}`}
                />
              </div>
              <div className="timeline-content">
                <div className="timeline-heading">{work.company}</div>
                <div className="timeline-location-container">
                  <img
                    src={pinlocation}
                    alt="location"
                    className="timeline-location"
                  />
                  {work.location}
                </div>
                <div className="timeline-sub-heading">{work.jobTitle}</div>
                <time>{`( ${work.date} )`}</time>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default WorkTimeLine;
