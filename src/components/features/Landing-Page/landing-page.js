import {
  React,
  Parallax,
  useEffect,
  useContext,
  ThemeContext,
  BackgroundTag,
} from "../../../imports/common-imports";
import TypistText from "./typist";
import profile from "../../../assets/images/profile.jpg";
import "./landing-page.scss";

const LandingPage = () => {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    var scene = document.getElementById("scene");
    new Parallax(scene);
  }, []);

  return (
    <div id="home" className="landing-div">
      <div className="introduction-script">
        <BackgroundTag theme={theme} value={`<html>`} />
        <BackgroundTag theme={theme} value={`<body>`} />
        <BackgroundTag theme={theme} value={`<h3>`} />

        <div className="dancing-script-font content">Hi ,</div>

        <BackgroundTag theme={theme} value={`</h3>`} />
        <BackgroundTag theme={theme} value={`<section>`} />

        <div className="content">Thanks for stopping by</div>
        <div className="content">meet Sidd ,</div>

        <div className="content">
          <TypistText />
        </div>

        <BackgroundTag theme={theme} value={`</section>`} />
        <BackgroundTag theme={theme} value={`</body>`} />
      </div>
      <div className="image-section">

        <BackgroundTag theme={theme} value={`<img>`} />

        <div className="outer-frame" id="scene">
          <div className="inner-frame" data-depth=".2">
            <img
              data-depth=".6"
              className="profile-image"
              src={profile}
              alt="profile.jpg"
            ></img>
          </div>
        </div>
        
        <BackgroundTag theme={theme} value={`</img>`} />
      </div>
    </div>
  );
};

export default LandingPage;
