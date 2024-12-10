


// import React from 'react';
// import {
//   FaReact,
//   FaNodeJs,
//   FaDatabase,
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaGitAlt,
// } from 'react-icons/fa';
// import './HeroSection.css';
// import avatar from '../../../../src/assets/react.svg'; // Replace with your avatar or photo path

// const HeroSection = () => {
//   return (
//     <div className="hero-container">
//       {/* Animated Full Stack Icons */}
//       <div className="animated-icons">
//         <div className="icon-wrapper spinning">
//           <FaReact className="icon react-icon" />
//           <span className="icon-label">React</span>
//         </div>
//         <div className="icon-wrapper spinning">
//           <FaNodeJs className="icon node-icon" />
//           <span className="icon-label">Node.js</span>
//         </div>
//         <div className="icon-wrapper">
//           <FaDatabase className="icon db-icon" />
//           <span className="icon-label">MongoDB</span>
//         </div>
//         <div className="icon-wrapper">
//           <FaHtml5 className="icon html-icon" />
//           <span className="icon-label">HTML5</span>
//         </div>
//         <div className="icon-wrapper">
//           <FaCss3Alt className="icon css-icon" />
//           <span className="icon-label">CSS3</span>
//         </div>
//         <div className="icon-wrapper">
//           <FaJs className="icon js-icon" />
//           <span className="icon-label">JavaScript</span>
//         </div>
//         <div className="icon-wrapper spinning">
//           <FaGitAlt className="icon git-icon" />
//           <span className="icon-label">Git</span>
//         </div>
//       </div>
//       {/* Hero Content */}
//       <div className="hero-left">
//         <div className="avatar-container">
//           <img src={avatar} alt="Professional Avatar" className="hero-avatar" />
//           <div className="avatar-bg"></div>
//         </div>
//       </div>
//       <div className="hero-right">
//         <h1>
//           Hi, I'm <span className="highlight">[Your Name]</span>
//         </h1>
//         <p className="tagline">Full Stack Developer | Designer</p>
//         <p className="intro">
//           I specialize in creating stunning web applications that combine
//           functionality and elegance. Let's bring your ideas to life!
//         </p>
//         <div className="hero-buttons">
//           <button className="btn btn-left">Hire Me</button>
//           <button className="btn btn-right">View My Work</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;







import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from 'react-icons/fa';
import './HeroSection.css';
import avatar from '../../../../src/assets/lmkdn-removebg-preview.png';

const HeroSection = ({ onViewMyWorkClick,onHireMe }) => {
  return (
    <div className="hero-container">
      <div className="animated-icons">
        <div className="icon-wrapper spinning">
          <FaReact className="icon react-icon" />
          <span className="icon-label">React</span>
        </div>
        <div className="icon-wrapper spinning">
          <FaNodeJs className="icon node-icon" />
          <span className="icon-label">Node.js</span>
        </div>
        <div className="icon-wrapper">
          <FaDatabase className="icon db-icon" />
          <span className="icon-label">MongoDB</span>
        </div>
        <div className="icon-wrapper">
          <FaHtml5 className="icon html-icon" />
          <span className="icon-label">HTML5</span>
        </div>
        <div className="icon-wrapper">
          <FaCss3Alt className="icon css-icon" />
          <span className="icon-label">CSS3</span>
        </div>
        <div className="icon-wrapper">
          <FaJs className="icon js-icon" />
          <span className="icon-label">JavaScript</span>
        </div>
        <div className="icon-wrapper spinning">
          <FaGitAlt className="icon git-icon" />
          <span className="icon-label">Git</span>
        </div>
      </div>
      <div className="hero-left">
        <div className="avatar-container">
          <img src={avatar} alt="Professional Avatar" className="hero-avatar object-contain pointer-events-none" />
          <div className="avatar-bg"></div>
        </div>
      </div>
      <div className="hero-right">
        <h1>
          Hi, I'm <span className="highlight">[Your Name]</span>
        </h1>
        <p className="tagline">Full Stack Developer | Designer</p>
        <p className="intro">
          I specialize in creating stunning web applications that combine
          functionality and elegance. Let's bring your ideas to life!
        </p>
        <div className="hero-buttons">
          <button className="btn btn-left" onClick={onHireMe}>Hire Me</button>
          <button className="btn btn-right" onClick={onViewMyWorkClick}>
            View My Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
