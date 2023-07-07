import React from "react";
import "./projects.css";

import p1 from "../images/p1.jpeg";
import p2 from "../images/p2.jpeg";
import p3 from "../images/p3.jpeg";

const Project = () => {
  return (
    <div className="project">
      <h1>Projects</h1>
      <div className="pro">
        <div className="project-one">
          <h3>Gym Application</h3>
          <div className="project-image">
            <img src={p1} alt="" />
          </div>
          Developed a Front-End web application using with React Using Rapid
          API. Integrated Rapid API to fetch gym related data, including workout
          plans, exercise tutorials, and nutrition tips. <br />
          <button className="project-b4">
            <a href="https://deluxe-mochi-4e76ab.netlify.app/">See Here</a>
          </button>
        </div>
        <div className="project-two">
          <h3>Social Media Clone</h3>
          <div className="project-image">
            <img src={p2} alt="" />
            <p>
              Developed astatic social media clone using React, replicating the
              core features and user interface of popular social media
              platforms.
            </p>
            <button className="project-b4">
              <a href="https://dograsocial.netlify.app/">See Here</a>
            </button>
          </div>
        </div>
        <div className="project-three">
          <h3>News Monkey</h3>
          <div className="project-image">
            <img src={p3} alt="" />
          </div>
          <p>
            Developed a dynamic and user-friendly News Monkey application
            utilizing React, demonstrating proficiency in front-end web
            development, component-based architecture, and responsive design
          </p>
          <button className="project-b4">
            <a href="https://dograsocial.netlify.app/">See Here</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
