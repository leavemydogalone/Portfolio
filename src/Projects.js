import React from "react";
import "./Projects.scss";
import GalleryItem from "./components/GalleryItem";
import { projectObjectArray } from "./TextObjects/projectObjects";

export default function Projects() {
  // const projectObjectArrayCopy = [...projectObjectArray];

  // const projectCards = projectObjectArrayCopy.map((projectObject, index) => (
  //   <Project
  //     title={projectObject.title}
  //     icon={projectObject.icon}
  //     link={projectObject.link}
  //     descriptionArray={projectObject.descriptionArray}
  //     key={index}
  //   />
  // ));

  const standInGallery = ["first", "second", "third"];

  return (
    <section className="projects">
      <div className="container">
        <h2 className="title">Why Hire Nik?</h2>
        <h2 className="small-title">Let's Break it Down</h2>
        <div className="project first">
          <div className="title-container">
            <span className="big-letter">N</span>
            <h3 className="section-title">Nice Designs</h3>
          </div>

          <div className="gallery-container">
            {standInGallery.map((thing) => (
              <GalleryItem title={thing} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
