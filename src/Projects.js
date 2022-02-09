import React from "react";
import "./Projects.scss";
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
        <h2 className="small-title">Let's Break it Down</h2>
        <div className="project first">
          <span className="big-letter">N </span>
          <h3 className="section-title">Nice Animations</h3>
        </div>
      </div>
    </section>
  );
}
