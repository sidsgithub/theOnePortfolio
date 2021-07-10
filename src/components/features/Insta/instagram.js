import React, { useContext, useEffect, useState } from "react";
import { firebaseConfig } from "../../../config";
import firebase from "firebase";
import "./instagram.scss";
import BackgroundTag from "../../common/components/bacground-tags";
import ThemeContext from "../../../context/theme-context";

const Instagram = () => {
  const { theme } = useContext(ThemeContext);
  const urlString =
    "https://firebasestorage.googleapis.com/v0/b/sidportfolio-e73a6.appspot.com/o/";
  const accessToken = "1db92b3c-f3c3-4017-9468-f377e3e933f4";
  // initialising firebase
  const [posts, setPosts] = useState([]);
  // const [images, setImages] = useState([]);

  let firebaseApp;
  if (!firebase.apps.length) {
    firebaseApp = firebase.initializeApp(firebaseConfig);
  } else {
    firebaseApp = firebase.app(); // if already initialized
  }
  const db = firebaseApp.firestore();
  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await db.collection("instaPosts").get();
      setPosts(fetchedPosts.docs.map((doc) => doc.data()));
    };
    fetchPosts();
  }, []);

  useEffect(() => console.log(posts), [posts]);
  function handleClick(link) {
    window.open(link,'_blank');
    }

  return (
    <div className='post-component-wrapper'>
      <div className>
        <BackgroundTag theme={theme} value={`<h1>`} />
        <h1 className="post-heading">Shutterbug Work</h1>
        <BackgroundTag theme={theme} value={`<h1>`} />
      </div>
      <div className="posts-container">
        {posts.map((element) => (
          <img
            onClick={()=>handleClick(element.link)}
            className="posts"
            src={`${urlString}${element.post}?alt=media&token=${accessToken}`}
            alt="some"
          />
        ))}
      </div>
    </div>
  );
};

export default Instagram;
