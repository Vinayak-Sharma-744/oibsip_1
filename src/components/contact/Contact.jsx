import React from "react";
import emailjs from 'emailjs-com'
import "./contact.css";
import {
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm()
  }
  return (
    <div id="contact-main">
      <div className="contHeading">
        <h1>Contact Me</h1>
      </div>

      <div class="wrapper">
        <ul>
          <li class="facebook">
            <a href="#">
              <FaFacebook className="brandIcon" style={{ fontSize:"50", color: "black", cursor: "pointer" }} onMouseOver={({target})=>target.style.color="#3b5998"} />
            </a>
          </li>
          <li class="twitter">
            <a href="#">
              <FaTwitter className="brandIcon" style={{ fontSize:"50", color: "black", cursor: "pointer" }} onMouseOver={({target})=>target.style.color="#00aced"} />
            </a>
          </li>
          <li class="instagram">
            <a href="#">
              <FaInstagram className="brandIcon" style={{ fontSize:"50", color: "black", cursor: "pointer" }} onMouseOver={({target})=>target.style.color="#bc2a8d"} />
            </a>
          </li>
          <li class="google">
            <a href="#">
              <FaEnvelope className="brandIcon" style={{ fontSize:"50", color: "black", cursor: "pointer" }} onMouseOver={({target})=>target.style.color="#dd4b39"} />
            </a>
          </li>
          <li class="whatsapp">
            <a href="#">
              <FaWhatsapp className="brandIcon" style={{ fontSize:"50", color: "black", cursor: "pointer" }} onMouseOver={({target})=>target.style.color="#4dc247"} />
            </a>
          </li>
        </ul>
      </div>

      <div className="form">
        <form action="" onSubmit={sendEmail} className="entry">
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
