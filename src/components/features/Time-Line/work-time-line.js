import React, { useEffect, useState, useContext } from "react";
import useElementOnScreen from "../../common/components/isInViewPort";
import "./time-line.scss";
import { work } from "./Time-Line-Elements/work";
import ThemeContext from "../../../context/theme-context";


const WorkTimeLine = () => {
  const [containerRef, isVisible] = useElementOnScreen();
  const [items, setItems] = useState([]);

  const {theme} = useContext(ThemeContext);

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
        {work.map((work, key) => (
          <li ref={containerRef} key={key}>
            <div className={`timeline-element ${theme}-element`} >
              <div className="timeline-image-container">
              <img className="timeline-image" src={work.icon} alt={`${key}`} />
              </div>
              <div className="timeline-content">
              <div>{work.company}</div>
              <div></div>
              <div>{work.location}</div>
              <div>{work.jobTitle}</div>
              <div></div>
              <time>{work.date}</time>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default WorkTimeLine;
