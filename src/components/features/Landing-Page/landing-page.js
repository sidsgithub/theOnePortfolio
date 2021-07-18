import {
  React,
  Parallax,
  useEffect,
  useContext,
  ThemeContext,
  BackgroundTag,
} from "../../../imports/common-imports";
import { useState } from "react";
import TypistText from "./typist";
import { urlString, accessToken } from "../../common/components/constants";
import "./landing-page.scss";
import { db } from "../../common/components/firestore.db";
import _ from "lodash";

const LandingPage = () => {
  const { theme } = useContext(ThemeContext);
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    var scene = document.getElementById("scene");
    new Parallax(scene);
  }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await db.collection("profile").get();
      setProfile(fetchedPosts.docs.map((doc) => doc.data()));
    };

    fetchPosts();
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
            {_.get(profile[0], "image") ? (
              <img
                data-depth=".6"
                className="profile-image"
                src={`${urlString}${_.get(
                  profile[0],
                  "image"
                )}?alt=media&token=${accessToken}`}
                alt="siddharth pandey profile"
              ></img>
            ) : null}
          </div>
        </div>

        <BackgroundTag theme={theme} value={`</img>`} />
      </div>
    </div>
  );
};

export default LandingPage;
