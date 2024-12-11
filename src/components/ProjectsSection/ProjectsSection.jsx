// import React from "react";
// import {
//   FaReact,
//   FaNodeJs,
//   FaDatabase,
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
// } from "react-icons/fa";
// import "./ProjectsSection.css";

// import project_1 from '../../../src/assets/jobs.jpeg'
// import project_2 from '../../../src/assets/cat.jpeg'
// import project_3 from '../../../src/assets/volu.jpeg'

// const projects = [
//   {
//     title: "Next-Hire Job Portal",
//     description: "An online job portal website,finding jobs based on skills.",
//     technologies: [
//       { name: "React", icon: <FaReact /> },
//       { name: "Node.js", icon: <FaNodeJs /> },
//       { name: "MongoDB", icon: <FaDatabase /> },
//     ],
//     img:project_1,
//     link: "https://innovative-codex.web.app/",
//   },
//   {
//     title: "Npetoria Pet App",
//     description: "A pet website, adopting and donating campaign.",
//     technologies: [
//       { name: "React", icon: <FaReact /> },
//       { name: "Mongodb", icon: < FaDatabase/> },
//       { name: "Tailwind CSS", icon: <FaCss3Alt /> },
//     ],
//     img: project_2,
//     link: "https://assignment-twelve-final.web.app/",
//   },
//   {
//     title: "Volunteer Website",
//     description: "A platform connecting volunteers with meaningful opportunities.",
//     technologies: [
//       { name: "React", icon: <FaReact /> },
//       { name: "CSS3", icon: <FaCss3Alt /> },
//       { name: "JavaScript", icon: <FaJs /> },
//     ],
//     img: project_3,
//     link: "https://assignment-eleven-df832.web.app/",
//   },
// ];

// const ProjectsSection = () => {
//   return (
//     <div className="projects-section" id="projects">
//       <h2 className="section-title">My Work</h2>
//       <div className="projects-container">
//         {projects.map((project, index) => (
//           <div className="project-card" key={index}>
//             <div>
//                <img src={project.img} alt={project.title} className="project-image p-2" />
//             </div>
           
//             <div className="project-content">
//               <h3 className="project-title">{project.title}</h3>
//               <p className="project-description">{project.description}</p>
//               <div className="project-technologies">
//                 {project.technologies.map((tech, i) => (
//                   <div key={i} className="technology-icon">
//                     {tech.icon}
//                     <span className="technology-name">{tech.name}</span>
//                   </div>
//                 ))}
//               </div>
//               <a
//                 href={project.link}
//                 className="project-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 View Project
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectsSection;






import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import "./ProjectsSection.css";

import project_1 from "../../../src/assets/jobs.jpeg";
import project_2 from "../../../src/assets/cat.jpeg";
import project_3 from "../../../src/assets/volu.jpeg";

const projects = [
  {
    title: "Next-Hire Job Portal",
    description: "An online job portal website, finding jobs based on skills.",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "MongoDB", icon: <FaDatabase /> },
    ],
    img: project_1,
    link: "https://innovative-codex.web.app/",
  },
  {
    title: "Npetoria Pet App",
    description: "A pet website, adopting and donating campaign.",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "Mongodb", icon: <FaDatabase /> },
      { name: "Tailwind CSS", icon: <FaCss3Alt /> },
    ],
    img: project_2,
    link: "https://assignment-twelve-final.web.app/",
  },
  {
    title: "Volunteer Website",
    description: "A platform connecting volunteers with meaningful opportunities.",
    technologies: [
      { name: "React", icon: <FaReact /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
    ],
    img: project_3,
    link: "https://assignment-eleven-df832.web.app/",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = (index) => ({
  hidden: {
    opacity: 0,
    x: index % 2 === 0 ? "-100vw" : "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
    },
  },
});

const ProjectsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 }); // Tracks if the section is in view
  const animationControls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      animationControls.start("visible");
    }
  }, [inView, animationControls]);

  return (
    <div className="projects-section overflow-hidden" id="projects" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        animate={animationControls}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
      >
        
        <span className="text-4xl font-extrabold text-gray-800 text-center mb-16">My Work </span>
      </motion.h2>
      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate={animationControls}
      >
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            variants={cardVariants(index)}
            whileHover={{ scale: 1.05 }}
          >
            <div>
              <img
                src={project.img}
                alt={project.title}
                className="project-image p-2"
              />
            </div>

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
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
