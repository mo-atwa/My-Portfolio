import React from "react";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills special-padding">
      <h2 className="special-heading">Skills</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>Frontend</h3>
          <div className="skill-list">
            <div className="skill-item" data-skill="90">
              <span>HTML & CSS</span>
              <div className="skill-bar">
                <div style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="skill-item" data-skill="85">
              <span>JavaScript</span>
              <div className="skill-bar">
                <div style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="skill-item" data-skill="80">
              <span>React</span>
              <div className="skill-bar">
                <div style={{ width: "80%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
