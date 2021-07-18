import React, { useContext, useEffect, useState } from "react";
import "./instagram.scss";
import BackgroundTag from "../../common/components/bacground-tags";
import ThemeContext from "../../../context/theme-context";
import useElementOnScreen from "../../common/components/isInViewPort";
import {db} from '../../common/components/firestore.db';
import { urlString, accessToken } from "../../common/components/constants";

const Instagram = () => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };
  const [containerRef, isVisible] = useElementOnScreen(options);
  const { theme } = useContext(ThemeContext);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await db.collection("instaPosts").get();
      setPosts(fetchedPosts.docs.map((doc) => doc.data()));
    };
    if(isVisible){

      fetchPosts();
    }
  }, [isVisible]);

  function handleClick(link) {
    window.open(link, "_blank");
  }

  return (
    <div className="post-component-wrapper" id="posts">
      <div ref={containerRef}>
        <BackgroundTag theme={theme} value={`<h1>`} />
        <h1 className="post-heading">Photography</h1>
        <BackgroundTag theme={theme} value={`<h1>`} />
      </div>
      <div className="posts-container">
        {posts.map((element, key) => (
            <img
              key={key}
              onClick={() => handleClick(element.link)}
              className="posts"
              src={`${urlString}${element.post}?alt=media&token=${accessToken}`}
              alt="some"
              loading='lazy'
            />
        ))}
      </div>
    </div>
  );
};

export default Instagram;
