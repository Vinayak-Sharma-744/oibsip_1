import React from "react";
import "./contact.css";
import {
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact-main">
      <div className="contHeading">
        <h1>Contact Me</h1>
      </div>

      <div class="wrapper">
        <ul>
          <li class="facebook">
            <a href="#">
              <FaFacebook style={{ color: "black", cursor: "pointer" }} />
            </a>
          </li>
          <li class="twitter">
            <a href="#">
              <FaTwitter style={{ color: "black", cursor: "pointer" }} />
            </a>
          </li>
          <li class="instagram">
            <a href="#">
              <FaInstagram style={{ color: "black", cursor: "pointer" }} />
            </a>
          </li>
          <li class="google">
            <a href="#">
              <FaEnvelope style={{ color: "black", cursor: "pointer" }} />
            </a>
          </li>
          <li class="whatsapp">
            <a href="#">
              <FaWhatsapp style={{ color: "black", cursor: "pointer" }} />
            </a>
          </li>
        </ul>
      </div>

      <div className="form">
        <form action="" className="entry">
          <div className="inputDiv">
            <input className="input ip1" type="text" placeholder="Name"></input>

            <input
              className="input ip2"
              type="text"
              placeholder="Email"
            ></input>
          </div>
          <br />

          <input
            className="message subject"
            type="text"
            placeholder="Subject"
          ></input>
          <br />

          <textarea
            name=""
            id="Message"
            cols="93"
            rows="15"
            placeholder="Message"
          ></textarea>
          <br />

          <input type="button" value="Send Message" className="button"></input>
        </form>
      </div>
    </div>
  );
};

export default Contact;
