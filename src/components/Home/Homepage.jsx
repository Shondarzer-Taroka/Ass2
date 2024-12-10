
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








import React, { useRef } from 'react';

import ProjectsSection from '../ProjectsSection/ProjectsSection';
import HeroSection from './HeroSection/HeroSection';
import HireMe from '../HireMe/HireMe';


const Homepage = () => {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section>
      <HeroSection onViewMyWorkClick={scrollToProjects} />
      <div ref={projectsRef}>
        <ProjectsSection />
      </div>
      <HireMe/>
    </section>
  );
};

export default Homepage;
