import React from "react";
import "./home.css";
import myimage from "../images/myimage.jpg";
const Home = () => {
  return (
    <div className="home">
      <div className="home-name">
        <h2>Akash</h2>
        <h3>A Web Developer</h3>
      </div>
      <div className="home-img">
        <img src={myimage} alt="" />
      </div>
      <div className="home-lines">
        <h3>"Elevate your Online Presence with Innovative Web Development"</h3>
      </div>
    </div>
  );
};

export default Home;
