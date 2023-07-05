import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";

import logo from "./logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo"></img>

          <div className="links-container show-container">
            <ul className="links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
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
      </div>
    </nav>
  );
};

export default Navbar;
