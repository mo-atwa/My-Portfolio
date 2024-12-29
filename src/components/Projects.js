import React from "react";
import "../styles/Projects.css";

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="projects">
      <h2 className="special-heading">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-img">
              <img src={project.image} alt={project.title} />
              <div className="project-links">
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  Demo
                </a>
                <a href={project.github} target="_blaِnk" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>ِ
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
