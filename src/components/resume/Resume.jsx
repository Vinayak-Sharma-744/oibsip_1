import React from "react";
import "./resume.css";
import Akash from "./akash.pdf";
import { FaReact, FaNodeJs } from "react-icons/fa";

const Resume = () => {
  const cnf = () => {
    alert("The file has been downloaded successfuly");
  };
  return (
    <div id="Resume">
      <div className="resume-left">
        <div className="resume-left-text">
          <h1>Resume/CV</h1>
          <p>
            "Unveiling Excellence on Paper: <br /> A Reflection of Skills and "
          </p>
          <button className="resume-button" onClick={cnf}>
            <a href={Akash} download>
              Download
            </a>
          </button>
          <div className="resume-icons">
            <FaNodeJs style={{ color: "yellow" }} className="bounce" />
            <FaReact style={{ color: "blue" }} className="bounce" />
          </div>
        </div>
      </div>
      <div className="resume-right">
        <embed
          src={`${Akash}#toolbar=0&navpanes=0&scrollbar=0`}
          type="application/pdf"
          width="90%"
          height="600px"
        ></embed>
      </div>
    </div>
  );
};

export default Resume;
