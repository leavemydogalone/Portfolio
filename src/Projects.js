import React, { useEffect } from "react";
import "./Projects.css";
import Project from "./components/Project";
import { projectObjectArray } from "./TextObjects/projectObjects";

export default function Projects() {
  const projectObjectArrayCopy = [...projectObjectArray];

  const projectCards = projectObjectArrayCopy.map((projectObject, index) => (
    <Project
      title={projectObject.title}
      icon={projectObject.icon}
      link={projectObject.link}
      descriptionArray={projectObject.descriptionArray}
      key={index}
    />
  ));

  return (
    <section className="projects">
      <div className="container">
        <h2 className="title">Projects</h2>
        <div className="cards-container">
          {projectCards}
          {console.log(projectCards)}
        </div>
      </div>
    </section>
  );
}
