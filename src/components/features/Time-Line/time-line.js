import React, { useEffect, useState, useContext } from "react";
import useElementOnScreen from "../../common/components/isInViewPort";
import "./time-line.scss";
import { education } from "./Time-Line-Elements/eduction";
import ThemeContext from "../../../context/theme-context";

const TimeLine = () => {
  const [containerRef, isVisible] = useElementOnScreen();
  const [items, setItems] = useState([]);

  const { theme } = useContext(ThemeContext);

  // adding calsses to the lists in view;
  function addClassToLi() {
    items.forEach((element) => element.classList.add("in-view"));
  }

  useEffect(() => {
    if (isVisible) {
      setItems(document.querySelectorAll(".timeline li"));
    }
  }, [isVisible]);

  useEffect(() => {
    if (items.length > 0) addClassToLi();
  }, [items, addClassToLi]);

  return (
    <section className="timeline">
      <ul>
        {education.map((edu, key) => (
          <li ref={containerRef} key={key}>
            <div className={`timeline-element`}>
              <div className="timeline-image-container">
                <img
                  className="timeline-image"
                  src={edu.img}
                  alt={`edu-${key}`}
                />
              </div>
              <div className="timeline-content">
                <div className="timeline-heading">{edu.schoolName}</div>

                <div className="timeline-sub-heading">
                  {edu.eduTitle}
                </div>

                <time>{edu.date}</time>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default TimeLine;
