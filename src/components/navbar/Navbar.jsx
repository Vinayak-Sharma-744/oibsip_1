import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";
// import logo from "../images/logo.png";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <BrowserRouter>
      <nav className="navBar">
            <div className="links-container show-container">
              <ul className="links">
                <li>
                  <Link to="#Home" smooth>
                    {/* <img src={logo} alt="logo" /> */}
                    <h1>Vinayak</h1>
                  </Link>
                </li>
                <li>
                  <Link to="#Home" smooth>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="#Resume" smooth>
                    Resume
                  </Link>
                </li>
                <li>
                  <Link to="#skills" smooth>
                    Skills
                  </Link>
                </li>
                <li>
                  <Link to="#Project" smooth>
                    Projects
                  </Link>
                </li>

                <li>
                  <Link to="#contact-main" smooth>
                    Contact Me
                  </Link>
                </li>
                <ul className="social-icons">
                  <li>
                    <a
                      href="https://github.com/Vinayak-Sharma-744"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub style={{ color: "white", cursor: "pointer" }} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/er-vinayak-sharma-/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin
                        style={{ color: "white", cursor: "pointer" }}
                      />
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
      </nav>
    </BrowserRouter>
  );
};

export default Navbar;
