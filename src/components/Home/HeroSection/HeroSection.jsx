

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
// import { Typewriter } from 'react-simple-typewriter';
// import './HeroSection.css';
// import avatar from '../../../../src/assets/lmkdn-removebg-preview.png';

// const HeroSection = ({ onViewMyWorkClick, onHireMe }) => {
//   return (
//     <div className="hero-container max-w-7xl mx-auto mt-14" id="about">
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
//       <div className="hero-left">
//         <div className="avatar-container">
//           <img
//             src={avatar}
//             alt="Professional Avatar"
//             className="hero-avatar object-contain pointer-events-none"
//           />
//           <div className="avatar-bg"></div>
//         </div>
//       </div>
//       <div className="hero-right">
//         <h1 className="namewriter text-3xl md:text-4xl font-bold mb-2">
//           Hi, I'm{' '}
//           <span className="highlight">
//             <Typewriter
//               words={['NAZMUL HASAN']}
//               loop={false}
//               cursor
//               cursorStyle="_"
//               typeSpeed={70}
//               deleteSpeed={50}
//               delaySpeed={1000}
//             />
//           </span>
//         </h1>
//         <p className="tagline text-2xl text-gray-600 mb-4">
//           <Typewriter
//             words={['Full Stack Web Developer', 'Designer']}
//             loop
//             cursor
//             cursorStyle="|"
//             typeSpeed={70}
//             deleteSpeed={50}
//             delaySpeed={1500}
//           />
//         </p>
//         <p className="intro">
//           I specialize in creating stunning web applications that combine
//           functionality and elegance. Let's bring your ideas to life!
//         </p>
//         <div className="hero-buttons">
//           <button className="btn btn-left" onClick={onHireMe}>
//             Hire Me
//           </button>
//           <button className="btn btn-right" onClick={onViewMyWorkClick}>
//             View My Work
//           </button>
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
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import './HeroSection.css';
import avatar from '../../../../src/assets/lmkdn-removebg-preview.png';

const HeroSection = ({ onViewMyWorkClick, onHireMe }) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="hero-container max-w-7xl mx-auto mt-14"
      id="about"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated Icons */}
      <div className="animated-icons">
        {[
          { Component: FaReact, label: 'React', color: '#61dafb', spin: true },
          { Component: FaNodeJs, label: 'Node.js', color: '#68a063', spin: false },
          { Component: FaDatabase, label: 'MongoDB', color: '#4db33d', spin: false },
          { Component: FaHtml5, label: 'HTML5', color: '#e34c26', spin: false },
          { Component: FaCss3Alt, label: 'CSS3', color: '#264de4', spin: false },
          { Component: FaJs, label: 'JavaScript', color: '#f7df1e', spin: false },
          { Component: FaGitAlt, label: 'Git', color: '#f14e32', spin: true },
        ].map(({ Component, label, color, spin }, index) => (
          <motion.div
            key={index}
            className={`icon-wrapper ${spin ? 'spinning' : ''}`}
            variants={iconVariants}
            style={{ color }}
          >
            <Component className={`icon ${label.toLowerCase()}-icon`} />
            <span className="icon-label">{label}</span>
          </motion.div>
        ))}
      </div>

      <div className="hero-left">
        <motion.div
          className="avatar-container"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={avatar}
            alt="Professional Avatar"
            className="hero-avatar object-contain pointer-events-none"
          />
          <div className="avatar-bg"></div>
        </motion.div>
      </div>

      <div className="hero-right">
        <motion.h1
          className="namewriter text-3xl md:text-4xl font-bold mb-2"
          variants={itemVariants}
        >
          Hi, I'm{' '}
          <span className="highlight">
            <Typewriter
              words={['NAZMUL HASAN']}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </motion.h1>

        <motion.p
          className="tagline text-2xl text-gray-600 mb-4"
          variants={itemVariants}
        >
          <Typewriter
            words={['Full Stack Web Developer', 'Designer']}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.p>

        <motion.p className="intro" variants={itemVariants}>
          I specialize in creating stunning web applications that combine
          functionality and elegance. Let's bring your ideas to life!
        </motion.p>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <button className="btn btn-left" onClick={onHireMe}>
            Hire Me
          </button>
          <button className="btn btn-right" onClick={onViewMyWorkClick}>
            View My Work
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
