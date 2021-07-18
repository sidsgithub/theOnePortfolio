import React from "react";
import "./footer.scss";
import mit from "../../assets/tech-icon/mit.svg";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  function handleClick(link) {
    window.open(link,'_blank');
    }
  return (
    <div className="footer-container">
      <div className="footer-licence-wrapper">
        <img className="licence-logo" src={mit} alt="mit" />
        <div className="licence">
          <div>MIT Licence</div>
          <div>Copyright (c) 2021</div>
        </div>
      </div>
      <div className="footer-desc">
        Made with 🤍 on React, hosted on Firebase.
      </div>
      <div className="icons">
        <div className="clickable" onClick={()=>handleClick('https://www.linkedin.com/in/siddharth-pandey-34aba6162/')}>
          <AiFillLinkedin />
        </div>
        <div className="clickable" onClick={()=>handleClick('https://github.com/sidsgithub')}>
          <AiFillGithub />
        </div>
        <div className="clickable" onClick={()=>handleClick('https://twitter.com/_sid_pandey')}>
          <AiFillTwitterSquare />
        </div>
        <div className="clickable" onClick={()=>handleClick('https://www.instagram.com/_siddharth_pandey_/')}>
          <AiFillInstagram />
        </div>
        <div className="clickable" onClick={()=>handleClick("https://www.facebook.com/siddharth.pandey.9847/")}>
          <AiFillFacebook />
        </div>
      </div>
    </div>
  );
};

export default Footer;
