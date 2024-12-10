import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import "./ProjectsSection.css";

const projects = [
  {
    title: "E-Commerce Website",
    description: "An online store with product management and order tracking.",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "MongoDB", icon: <FaDatabase /> },
    ],
    img: "https://via.placeholder.com/300x200?text=E-Commerce+Website",
    link: "#",
  },
  {
    title: "Real-Time Chat App",
    description: "A chat application using WebSocket for real-time communication.",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "WebSocket", icon: <FaJs /> },
      { name: "Tailwind CSS", icon: <FaCss3Alt /> },
    ],
    img: "https://via.placeholder.com/300x200?text=Chat+App",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my skills and projects.",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
    ],
    img: "https://via.placeholder.com/300x200?text=Portfolio+Website",
    link: "#",
  },
];

const ProjectsSection = () => {
  return (
    <div className="projects-section" id="projects">
      <h2 className="section-title">My Work</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <div key={i} className="technology-icon">
                    {tech.icon}
                    <span className="technology-name">{tech.name}</span>
                  </div>
                ))}
              </div>
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
