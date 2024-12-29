import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="special-heading">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Passionate Frontend Developer with experience in building
            interactive and engaging web applications using different languages.
            Dedicated to creating seamless user experiences, optimizing
            performance, and bringing innovative ideas to life. Always eager to
            learn new technologies and apply best practices in development.
          </p>
        </div>
        <div class="col">
          <div class="sea-photo hidden-div">
            <img src="/images/about-photo.jpg" alt="" />
          </div>
        </div>
        {/* <div className="about-stats">
          <div className="stat-item">
            <h3>2+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="stat-item">
            <h3>5+</h3>
            <p>Completed Projects</p>
          </div>
          <div className="stat-item">
            <h3>5+</h3>
            <p>Happy Clients</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
