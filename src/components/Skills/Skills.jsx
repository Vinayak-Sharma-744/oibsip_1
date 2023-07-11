import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <h1>Skills</h1>
      <div className="skills-grid">
        <div className="skills-html">
          <h4> HTML/CSS</h4> <span></span>
        </div>
        <div className="skills-javascript">
          <h4> JAVASCRIPT</h4> <span></span>
        </div>
        <div className="skills-react">
          <h4> REACT</h4> <span></span>
        </div>
        <div className="skills-mern">
          <h4> MERN STACK </h4> <span></span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
