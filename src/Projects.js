import React, { useRef, useEffect } from "react";
import "./Projects.scss";
import GalleryItem from "./components/GalleryItem";

export default function Projects() {
  const projectsRef = useRef([]);
  const projects = document.querySelectorAll(".project");

  const options = {
    root: null,
    threshold: 0.1,
    rootMargin: "-25px 0px",
  };
  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      console.log(entry);
    });
  }, options);

  useEffect(() => {
    if (projectsRef.current)
      projectsRef.current.forEach((project, index) => {
        observer.observe(projectsRef.current[index]);
      });

    return () => {
      if (projectsRef.current)
        projectsRef.current.forEach((project, index) => {
          observer.unobserve(projectsRef.current[index]);
        });
    };
  }, [projectsRef.current, options]);

  const standInGallery = ["first", "second", "third"];

  return (
    <section className="projects">
      <div className="container">
        <h2 className="title">Who Is Nik?</h2>
        <h2 className="small-title">Let's Break it Down</h2>
        <div
          className="project first"
          ref={(el) => {
            projectsRef.current[0] = el;
          }}
        >
          <div className="title-container">
            <span className="big-letter">N</span>
            <h3 className="section-title">Nice Designs</h3>
          </div>

          <div className="gallery-container">
            {standInGallery.map((thing, index) => (
              <GalleryItem title={thing} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
