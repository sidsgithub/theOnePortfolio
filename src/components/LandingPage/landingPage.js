import {
  React,
  Parallax,
  useEffect,
  Typist,
} from "../../imports/common-imports";
import "../../stylesheets/LandingPage/landing-page.css";
import "../../imports/fonts.css";
import "../../assets/images/profile.jpg";
import profile from "../../assets/images/profile.jpg";

const LandingPage = () => {
  useEffect(() => {
    var scene = document.getElementById("scene");
    new Parallax(scene);
  }, []);
  return (
    <div className="landing-div">
      <div className="introduction-script">
        <div className="caveat-font html-background-tags">{`<body>`}</div>
        <div className="caveat-font html-background-tags margin-top-3">{`<h3>`}</div>
        <div className="dancing-script-font em-1 content">Hi ,</div>
        <div className="caveat-font html-background-tags">{`</h3>`}</div>
        <div className="caveat-font html-background-tags margin-top-3">{`<section>`}</div>
        <div className="dancing-script-font em-2 content">
          Thanks for stopping by
        </div>
        <div className="dancing-script-font em-2 content margin-top-5">
          meet Sidd ,
        </div>
        <div className="dancing-script-font em-2 content margin-top-5">
          <Typist cursor={{ show: false }} startDelay={500} avgTypingDelay={100}>
            <span>a<span className="color-red"> Front End Engineer</span> </span>
            <Typist.Backspace count={19} delay={1000} />
            <span className="color-red">Photographer</span>
            <Typist.Backspace count={12} delay={1000} />
            <span className="color-red">Musician</span>
            <Typist.Backspace count={8} delay={1000} />
            <span className="color-red">Mural Artist</span>
            <Typist.Backspace count={12} delay={1000} />
            <span className="color-red">Traveller</span>
            <Typist.Backspace count={10} delay={1000} />
            <span className="color-red"> Dreamer</span>
            <Typist.Backspace count={8} delay={1000} />
            <span>nd a <span className="color-red">Believer</span></span>
            <Typist.Backspace count={14} delay={1000} />
            <span className="color-red"> Lost Context :p</span>
            <Typist.Backspace count={15} delay={800} />
            <span className="color-yellow">Let's Scroll Now</span>
          </Typist>
        </div>
        <div className="caveat-font html-background-tags">{`</section>`}</div>
        <div className="caveat-font html-background-tags margin-top-3">{`</body>`}</div>
      </div>
      <div className="image-section">
        <div className="caveat-font html-background-tags">{`<img>`}</div>
        <div className="outer-frame content" id="scene">
          <div className="inner-frame" data-depth=".2">
            <img
              data-depth=".6"
              className="profile-image"
              src={profile}
              alt="profile.jpg"
            ></img>
          </div>
        </div>
        <div className="caveat-font html-background-tags margin-top-b3">{`</img>`}</div>
      </div>
    </div>
  );
};

export default LandingPage;
