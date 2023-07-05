import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img alt="logo"></img>

          <div className="links-container show-container">
            <ul className="links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">Resume</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Skills</a>
              </li>
              <li>
                <a href="#">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
        <ul className="social-icons">
          <li>
            <a href="xyz">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="xyz"></a>
            <FaLinkedin />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
