import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { AboutMe } from "./sections/AboutMe";
import { Content } from "./sections/Content";
import { Frame } from "./sections/Frame";
import { PortfolioShowcase } from "./sections/PortfolioShowcase";
import { Projects } from "./sections/Projects/Projects";
import { Certificates } from "./sections/Certificates/Certificates";
import { MySkills } from "./sections/MySkills/MySkills";
import { Contact } from "./sections/Contact/Contact";
import Footer from "./Footer";

export const PortfolioLanding = () => {
  const [activeSection, setActiveSection] = useState("projects");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  const getContactTopPosition = () => {
    switch(activeSection) {
      case "projects":
        return "2400px"; 
      case "certificates":
        return "2100px"; 
      case "myskills":
        return "2900px"; 
      default:
        return "2500px";
    }
  };

  const getFooterTopPosition = () => {
    switch(activeSection) {
      case "projects":
        return "2850px"; 
      case "certificates":
        return "2550px"; 
      case "myskills":
        return "3350px";
      default:
        return "3000px";
    }
  };

  return (
    <div
      id="home"
      className="bg-[#151022] w-full max-w-full lg:min-w-[1280px] relative overflow-x-hidden"
      style={{ height: isMobile ? 'auto' : `${parseInt(getFooterTopPosition()) + 150}px` }}
    >

      <img
        className="absolute top-0 left-0 w-full max-w-full h-[400px] sm:h-[450px] lg:h-[516px] lg:w-[1280px] object-cover"
        alt="Bg blur"
        src="https://c.animaapp.com/ps12dqg1/img/bg-blur.png"
      />

      <Navbar />
      <Content />
      
      <div id="about">
        <AboutMe />
      </div>

      <div id="project">
        <PortfolioShowcase />
        <Frame onNavigate={handleNavigation} />
        
        {activeSection === "projects" && <Projects />}
        {activeSection === "certificates" && <Certificates />}
        {activeSection === "myskills" && <MySkills />}
      </div>

      <div 
        id="contact"
        className={`w-full transition-all duration-500 ease-in-out px-4 sm:px-8 lg:px-0 ${isMobile ? 'relative' : 'absolute left-0'}`}
        style={isMobile ? {} : { top: getContactTopPosition() }}
      >
        <Contact />
      </div>

      <div 
        id="footer"
        className={`w-full max-w-[1300px] mx-auto left-0 right-0 transition-all duration-500 ease-in-out ${isMobile ? 'relative' : 'absolute'}`}
        style={isMobile ? {} : { top: getFooterTopPosition() }}
      >
        <Footer />
      </div>
    </div>
  );
};