import { React, useContext, Link } from "../../../imports/common-imports";
import ThemeContext from "../../../context/theme-context";
import { line1, line2, line3, line4 } from "./about-text";
import './about.scss'
import BackgroundTag from "../../common/components/bacground-tags";

const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div id="about" className={`about-container`}>
      <div className={`about`}>
      <BackgroundTag theme={theme} value={`<h3>`} />
        <div className={`about-heading`}>Me mE mee .. </div>
        <BackgroundTag theme={theme} value={`</h3>`} />
        <BackgroundTag theme={theme} value={`<p>`} />
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
        <BackgroundTag theme={theme} value={`</p>`} />
      </div>
    </div>
  );
};

export default About;
