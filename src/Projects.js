import React, { useRef, useEffect, useState } from "react";
import "./Projects.scss";
import GalleryItem from "./components/GalleryItem";

export default function Projects() {
  const projectsRef = useRef([]);
  const [inView, setInView] = useState([false, false, false]);

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
        <h2 className="title">Who is Nik?</h2>
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
        <div
          className="project second"
          ref={(el) => {
            projectsRef.current[1] = el;
          }}
        >
          <div className="title-container">
            <span className="big-letter">I</span>
            <h3 className="section-title">Interaction and Animation</h3>
          </div>

          <div className="gallery-container">
            <div className="image-container">
              <img src=""></img>
            </div>
            <div className="text-container ">
              <h3 className="smallest-title">About this project</h3>
              <p className="text">
                This was created using TypeScript and Reactjs. It is a simple
                adn short game showing off some custom animations and styles.
                Exemplary of the kinds of interaction and animation that help
                make a web page/app come to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
