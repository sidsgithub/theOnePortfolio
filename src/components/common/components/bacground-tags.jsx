import React from "react";
const BackgroundTag = ({ theme, value }) => (
  <div className={`background-html-tags-${theme}`}>{`${value}`}</div>
);
export default BackgroundTag;