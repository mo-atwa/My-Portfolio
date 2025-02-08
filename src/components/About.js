import React from "react";
import "../styles/About.css";

const About = () => {

  const handDowanloudCV = () => {
    window.open("https://drive.google.com/file/d/1oH9P8n6Gb4Hv0qNAXYkjiC-fvSW14jEb/view?usp=sharing", "_blank");
  };

  return (
    <section id="about" className="about">
      <h2 className="special-heading">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p data-aos="fade-up">
            I am a web developer specializing in designing and developing user
            interfaces with exceptional interactive experiences. My expertise
            lies in utilizing modern web technologies such as HTML5, CSS3, SASS,
            and JavaScript (ES6+), along with mastering frameworks like Tailwind
            CSS and Bootstrap to create visually appealing and responsive user
            interfaces.
          </p>
          <br />
          <p data-aos="fade-up">
            With advanced experience in developing interactive web applications
            using React.js, I focus on optimizing performance and enhancing user
            experience to deliver seamless solutions.
          </p>
          <br />
          <p data-aos="fade-up">
            My commitment to understanding web development fundamentals has led
            me to complete comprehensive courses on internet architecture,
            including browser functionality, Search Engine Optimization (SEO),
            and Domain Name System (DNS).
          </p>
          <div onClick={handDowanloudCV} className="cv" data-aos="fade-out">
            <span className="project-footer__title">
              <span className="project-footer__title__outline">MY CV</span>
              <span className="project-footer__title__clip">
                <span className="project-footer__title__filled">MY CV</span>
              </span>
            </span>
            <img src="./images/download.gif" alt="Download icon" />
          </div>
        </div>
        <div className="col">
          <div className="sea-photo hidden-div" data-aos="fade-lift">
            <img src="./images/about-photo.jpg" alt="" data-aos="fade-lift" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
