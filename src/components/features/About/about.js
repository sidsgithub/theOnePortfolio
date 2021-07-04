import { React, useContext, Link } from "../../../imports/common-imports";
import ThemeContext from "../../../context/theme-context";
import { line1, line2, line3, line4 } from "./about-text";
import './about.scss'

const About = () => {
  const { theme } = useContext(ThemeContext);
  const style = theme === "dark" ? "dark" : "light";

  return (
    <div id="about" className={`about-container`}>
      <div className={`about`}>
        <div className={`background-html-tags-${style}`}>{`<h3>`}</div>
        <div className={`about-heading`}>Me mE mee .. </div>
        <div className={`background-html-tags-${style}`}>{`</h3>`}</div>
        <div className={`background-html-tags-${style}`}>{`<p>`}</div>
        <div className={`about-content`}>
          <p>{line1}</p>
          <p>{line2}</p>
          <p>{line3}</p>
          <p>
            {line4}{" "}
            <Link className="about-link" to="contact">
              Drop me a line.
            </Link>
          </p>
        </div>
        <div className={`background-html-tags-${style}`}>{`</p>`}</div>
      </div>
    </div>
  );
};

export default About;
