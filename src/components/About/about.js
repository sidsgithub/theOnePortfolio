import React from "../../imports/common-imports";
import "../../stylesheets/About/about.css";
import "../../imports/fonts.css";
import "../../context/theme.css";
import { useContext } from "react";
import ThemeContext  from "../../context/theme-context";
import { Link } from "react-scroll";

const About = () => {
  const { theme } =  useContext(ThemeContext);
  const style = theme === 'dark' ? 'dark' : 'light';
  
  return (
    <div id="about" className={`about-container ${style}`}>
   <div className={`about style`}>
   <div className={`caveat-font html-${style}-background-tags`}>{`<h3>`}</div>
        <div className={`heading dancing-script-font`}>Me mE mee  .. </div>
        <div className={`caveat-font html-${style}-background-tags`}>{`</h3>`}</div>
        <div className={`caveat-font html-${style}-background-tags`}>{`<p>`}</div>
        <div className={`about-content cormorant-garamond`}>
          <p >
            I am sure by now you a have pretty descent idea of some of my likes
            and interests. Allow me to add some more.
          </p>
          <p>
            I am a code fanatic based in India who does think of himself as an
            artist and a pseudo-perfectionist. This pseudo-perfectionist is involved
            in a lot of artsy stuff. Travelling is fuel for me.
          </p>
          <p>
            My plan is to code while sipping coffee in my Cafe, to busk and to
            paint the streets. Oh! almost forgot, I do want to scale the
            everest too.
          </p>
          <p>
            Interested in learning about the entire front end spectrum or maybe
            have some idea we can work together on. <Link className="blue" to='contact'>Drop me a line.</Link>
          </p>
        </div>
          <div className={`caveat-font html-${style}-background-tags`}>{`</p>`}</div>
      </div>
    </div>
  );
};

export default About;
