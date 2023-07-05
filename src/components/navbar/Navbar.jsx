import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";
import logo from '../images/logo.png'

const Navbar = () => {
  return (
    <>
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
                  <a href="#">Contact</a>
                </li>
                <ul className="social-icons">
              <li>
                <a href="#">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="#"></a>
                <FaLinkedin />
              </li>
            </ul>
              </ul>

            </div>

          
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
