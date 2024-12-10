import React, { useState } from "react";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import "./SkillsShowcase.css";

const skills = [
  {
    name: "React",
    icon: <FaReact />,
    level: 90, // Percent proficiency
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    level: 80,
  },
  {
    name: "MongoDB",
    icon: <FaDatabase />,
    level: 75,
  },
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    level: 95,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    level: 85,
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    level: 90,
  },
];

const SkillsShowcase = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [progress, setProgress] = useState(Array(skills.length).fill(0));

  React.useEffect(() => {
    if (inView) {
      skills.forEach((skill, index) => {
        let currentProgress = 0;
        const interval = setInterval(() => {
          if (currentProgress < skill.level) {
            currentProgress += 1;
            setProgress((prev) => {
              const newProgress = [...prev];
              newProgress[index] = currentProgress;
              return newProgress;
            });
          } else {
            clearInterval(interval);
          }
        }, 15); // Speed of animation
      });
    }
  }, [inView]);

  return (
    <div className="skills-showcase" ref={ref} id="skills">
      <h2 className="section-title">Skills Showcase</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="icon-container">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
            <div className="progress-circle">
              <svg>
                <circle cx="40" cy="40" r="36" className="circle-background"></circle>
                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  className="circle-progress"
                  style={{
                    strokeDasharray: 226,
                    strokeDashoffset: 226 - (226 * progress[index]) / 100,
                  }}
                ></circle>
              </svg>
              <div className="progress-text">{progress[index]}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsShowcase;











