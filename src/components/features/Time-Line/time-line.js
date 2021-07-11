import React, { useEffect, useState, useContext } from "react";
import useElementOnScreen from "../../common/components/isInViewPort";
import "./time-line.scss";
// import TimeLineElement from "./Time-Line-Elements/time-line-elements";
import { education } from "./Time-Line-Elements/eduction";
// import { work } from "./Time-Line-Elements/work";
// import BackgroundTag from "../../common/components/bacground-tags";
import ThemeContext from "../../../context/theme-context";
// import { onVisibilityChange } from "../../common/components/isInViewPort";

const TimeLine = () => {
  const { theme } = useContext(ThemeContext);
  const [containerRef, isVisible] = useElementOnScreen();
  const [items, setItems] = useState([]);

  // adding calsses to the lists in view;
  function addClassToLi() {
    items.forEach(element => element.classList.add("in-view"));
  }

  useEffect(() => {
    if (isVisible) {
      setItems(document.querySelectorAll(".timeline li"));
    }
  }, [isVisible]);

  useEffect(()=>{if(items.length > 0) addClassToLi()},[items,addClassToLi])

  return (
    <section className="timeline">
      <ul>
        {education.map((edu, key) => (
          <li ref={containerRef} key={key}>
            <div>
              <time>{edu.date}</time>
              {edu.schoolName}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default TimeLine;
