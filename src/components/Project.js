import React from 'react';
import './Project.css';
import { FaGithub } from 'react-icons/fa';
function Projects() {
  const projectList = [
    {
      title: "Detection of AutoImmune Disease",
      description: "AI-Powered System To Detect Disease From Provided Medical Record(images, symptoms).",
      github: "https://github.com/Jamaltasneem/MedEazy",
    },
    {
      title: "E-commerce Website",
      description: "A fully functional Art Store Built With Django.",
      github: "https://github.com/Jamaltasneem/E-commerce",
    },
    {
      title: "E-Learning Management System",
      description: "An Online Learning Platform Built Using Html, Css, Javascript, PHP.",
      github: "https://github.com/Jamaltasneem/ELearning",
    },
    {
      title: "Tutors Point",
      description: "A System Where You Can find And Hire Tutors According To your Preferences.",
      github: "https://github.com/Jamaltasneem/ELearning",
    },

  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectList.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer"> <FaGithub/>GitHub</a>
               
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
