import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>“The roots of hardship are bitter, but the fruits are sweet.”</span>
      <span>− SehyunRyu</span>
    </div>
  );
}

export default About;
