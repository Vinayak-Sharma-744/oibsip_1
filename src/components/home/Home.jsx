import React from "react";
import "./home.css";
import myimage from "../images/WhatsApp_Image_2023-09-13_at_1.01.07_PM-removebg-preview.png";

const Home = () => {
  return (
      <div id="Home">
        <div className="home-txt">
          <div>
            <h1>I'm a Creative Web Developer</h1>
            <div className="home-lines">
              <h3>
                Elevate your Online Presence with Innovative Web Development
              </h3>
            </div>
            <div className="btn-div">
              <a id="emailMe" href="mailto:akashdogra171@gmail.com">
                <button className="button-34">Connect with me</button>
              </a>
            </div>
          </div>
        </div>
        <div className="home-img">
          <img src={myimage} alt="profile pic" />
        </div>
      </div>
  );
};
export default Home;
