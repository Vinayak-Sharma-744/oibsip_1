import React from "react";
import "./experinace.css";

const Experince = () => {
  return (
    <div className="experience ">
      <h1>Past Experience </h1>

      <section class="articles">
        <article>
          <div className="article-wrapper">
            <figure>
              <img
                src="https://suvidhafoundationedutech.org/assets/images/Others/slogo_footer.png"
                alt=""
              />
            </figure>
            <div class="article-body">
              <h2>Web Development Intern</h2>
              <p>
                As a Web Development Intern, I worked on the frontendend side of
                the website on individual basis. I completley resdesgined the
                frontend of the the Website from scratch.
              </p>
            </div>
          </div>
        </article>
        <article>
          <div class="article-wrapper">
            <figure>
              <img src="https://user-images.githubusercontent.com/91726340/223084103-c04326c3-f9cc-437d-8a85-abb0865400ec.png" />
            </figure>
            <div class="article-body">
              <h2>Web Development Intern</h2>
              <p>
                As a Web Development Intern, I worked on the frontendend side of
                the website on individual basis. I completley resdesgined the
                frontend of the the Website from scratch.
              </p>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Experince;
