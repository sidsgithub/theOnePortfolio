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
    <div id={"timeline"} className="timeline-container">
      <div className="timeline">
        <div className="heading-container">
          <BackgroundTag theme={theme} value={`<h3>`} />
          <div className={`timeline-heading`}>Journey So Far </div>
          <BackgroundTag theme={theme} value={`</h3>`} />
        </div>
        <div className="timelin-wrapper">
          <div className="timeline">
            <BackgroundTag theme={theme} value={`<section>`} />
            <div>1. Institutions</div>
            <BackgroundTag theme={theme} value={`</section>`} />
            {education.map((element) => (
              <div className="timeline-points">
                <span className="dot"></span>
                <hr />
                <div className="element-wrap-container">
                  <BackgroundTag theme={theme} value={`<cite>`} />
                  <TimeLineElement
                    img={element.img}
                    schoolName={element.schoolName}
                    eduTitle={element.eduTitle}
                    date={element.date}
                  />
                  <BackgroundTag theme={theme} value={`</cite>`} />
                </div>
              </div>
            ))}
          </div>
          <div className="timeline">
            <BackgroundTag theme={theme} value={`<section>`} />
            <div>2. Experiences</div>
            <BackgroundTag theme={theme} value={`</section>`} />
            {work.map((element) => (
              <div className="timeline-points">
                <span className="dot"></span>
                <hr />
                <div className="element-wrap-container">
                  <BackgroundTag theme={theme} value={`<cite>`} />
                  <TimeLineElement
                    img={element.img}
                    schoolName={element.schoolName}
                    eduTitle={element.eduTitle}
                    date={element.date}
                  />
                  <BackgroundTag theme={theme} value={`</cite>`} />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/** work */}
      </div>
    </div>
  );
};
export default TimeLine;
