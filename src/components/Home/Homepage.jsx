
// import HireMe from "../HireMe/HireMe";
// import HeroSection from "./HeroSection/HeroSection";


// const Homepage = () => {
//     return (
//         <section>
//          <HeroSection/>
//          <HireMe/>
//         </section>
//     );
// };

// export default Homepage;








// import React, { useRef } from 'react';

// import ProjectsSection from '../ProjectsSection/ProjectsSection';
// import HeroSection from './HeroSection/HeroSection';
// import HireMe from '../HireMe/HireMe';
// import SkillsShowcase from '../SkillsShowcase/SkillsShowcase';


// const Homepage = () => {
//   const projectsRef = useRef(null);

//   const scrollToProjects = () => {
//     if (projectsRef.current) {
//       projectsRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section>
//       <HeroSection onViewMyWorkClick={scrollToProjects} />
//       <div ref={projectsRef}>
//         <ProjectsSection />
//       </div>
//       <SkillsShowcase/>
//       <HireMe/>
//     </section>
//   );
// };

// export default Homepage;





import { useRef } from "react";

import ProjectsSection from "../ProjectsSection/ProjectsSection";
import HeroSection from "./HeroSection/HeroSection";
import HireMe from "../HireMe/HireMe";
import SkillsShowcase from "../SkillsShowcase/SkillsShowcase";
import "./Homepage.css";
import Particle from "../Particle/Particle";

const Homepage = () => {
  const projectsRef = useRef(null);
  const hiremeRef = useRef(null);



  const scrollToProjects = () => {
    console.log(projectsRef);
    
    if (projectsRef.current) {
        
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToHireMe = () => {
    if (hiremeRef.current) {
        hiremeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <section>
      {/* Particles Background */}
      
      <Particle/>

      {/* Content Sections */}
      <HeroSection onViewMyWorkClick={scrollToProjects} onHireMe={scrollToHireMe} />
      <div ref={projectsRef}>
        <ProjectsSection />
      </div>
      <SkillsShowcase />
      <div ref={hiremeRef}>
       <HireMe />    
      </div>
   
    </section>
  );
};

export default Homepage;
