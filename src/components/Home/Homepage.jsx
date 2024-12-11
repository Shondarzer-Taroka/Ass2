
import { useRef } from "react";

import ProjectsSection from "../ProjectsSection/ProjectsSection";
import HeroSection from "./HeroSection/HeroSection";
import HireMe from "../HireMe/HireMe";
import SkillsShowcase from "../SkillsShowcase/SkillsShowcase";
import "./Homepage.css";
import Timeline from "../Timeline/Timeline";



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
      <HeroSection onViewMyWorkClick={scrollToProjects} onHireMe={scrollToHireMe} />
     
      <div ref={projectsRef}>
        <ProjectsSection />
      </div>
      <SkillsShowcase />
      <Timeline/>
      <div ref={hiremeRef}>
       <HireMe />    
      </div>
   
    </section>
  );
};

export default Homepage;
