import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";
import logo from "../images/logo.png";
import { BrowserRouter } from "react-router-dom"
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <BrowserRouter>
      <nav className="navBar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="logo"></img>

            <div className="links-container show-container">
              <ul className="links">
                <li>
                  <Link to="#Home" smooth>About</Link>
                </li>
                <li>
                  <Link to="#Resume" smooth>Resume</Link>
                </li>
                <li>
                  <Link to='#Project' smooth>Projects</Link>
                </li>
                <li>
                  <Link to="#">Skills</Link>
                </li>
                <li>
                  <Link to="#contact-main" smooth>Contact Me</Link>
                </li>
                <ul className="social-icons">
                  <li>
                    <a href="#">
                      <FaGithub style={{ color: "white", cursor: "pointer" }} />
                    </a>
                  </li>
                  <li>
                    <a href="#"></a>
                    <FaLinkedin style={{ color: "white", cursor: "pointer" }} />
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </BrowserRouter>
  );
};

export default Navbar;
