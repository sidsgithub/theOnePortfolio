import React, { useContext } from "react";
import "./time-line.scss";
import TimeLineElement from "./Time-Line-Elements/time-line-elements";
import { work } from "./Time-Line-Elements/work";
import BackgroundTag from "../../common/components/bacground-tags";
import ThemeContext from "../../../context/theme-context";

const TimeLine = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div id={'timeline'} className="timeline-container">
      <div className="timeline">
        <div className="heading-container">
          <BackgroundTag theme={theme} value={`<h3>`} />
          <div className={`timeline-heading`}>Journey So Far </div>
          <BackgroundTag theme={theme} value={`</h3>`} />
        </div>
        <div className="timeline">
          {work.map((element) => (
            <div className="timeline-points">
              <span className="dot"></span>
              <hr />
              <div className='element-wrap-container'>
                <BackgroundTag theme={theme} value={`<cite>`} />
                <TimeLineElement
                  imgSrc={element.imgSrc}
                  jobTitle={element.jobTitle}
                  date={element.date}
                />
                <BackgroundTag theme={theme} value={`</cite>`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TimeLine;
