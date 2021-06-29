import React from "../../imports/common-imports";
import "../../stylesheets/About/about.css";
import "../../imports/fonts.css";

const About = () => {
  return (
    <div id="about" className="about-container">
   <div className="about">
   <div className="caveat-font html-background-tags">{`<h3>`}</div>
        <div className="heading dancing-script-font">Me mE mee  .. </div>
        <div className="caveat-font html-background-tags">{`</h3>`}</div>
        <div className="caveat-font html-background-tags">{`<p>`}</div>
        <div className="about-content cormorant-garamond">
          <p >
            I am sure by now you have pretty descent idea of some of my likes
            and interests. Allow me to add some more here.
          </p>
          <p>
            I am code fanatic based in India who does think of himself as an
            artist and a sudo-perfectionist. This sudo-perfectionist is involved
            in a lot of artsy stuff. Travelling is fuel for me.
          </p>
          <p>
            My plan is to code while sipping coffee in my Cafe, to busk and to
            paint the streets. Oh! almost forgot, I do want to scale the
            everest too.
          </p>
          <p>
            Interested in learning about the entire front end spectrum or maybe
            have some idea we can work together on. <span className="blue">Drop me a line.</span>
          </p>
        </div>
          <div className="caveat-font html-background-tags">{`</p>`}</div>
      </div>
    </div>
  );
};

export default About;
