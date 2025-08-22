import React from "react";
import About from "./About.js";
import Projects from "./Projects.js";
import ProjectGallery from "../../components/ProjectGallery.js";
import Contact from "./Contact.js";

export const Home = () => {
  return (
    <>
      <About />
      <Projects />
      <ProjectGallery />
      <Contact />
    </>
  );
};
