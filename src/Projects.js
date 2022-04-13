import React, { useRef, useEffect, useState } from "react";
import "./Projects.scss";
import Gallery from "./components/Gallery";

import games from "./images/games.webp";

export default function Projects() {
  const projectsRef = useRef([]);

  const options = {
    root: null,
    threshold: 0.1,
    rootMargin: "-25px 0px",
  };
  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry, index) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add("inView");
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
            <p className="sub-title-description text">
              Websites created using PatientPop's proprietary templating
              software for most javascript functionality. Page body content,
              layout and styles created using custom HTML and CSS.
            </p>
          </div>
          <Gallery />
        </div>
        <div
          className="project second simple"
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
              <a
                href="https://lets-play-some-games.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
                title="link to project website"
              >
                <img src={games} alt="screenshot of project website" />
              </a>
            </div>
            <div className="text-container ">
              <h3 className="smallest-title">About this project</h3>
              <p className="text">
                This was created using TypeScript and Reactjs. It is a short and
                simple experience (maybe a game?) using some of my own
                animations and styles. Exemplary of the kinds of interaction and
                animation that help make a web page/app come to life.
              </p>
              <div class="link-bar">
                <a
                  href="https://github.com/leavemydogalone/LetsPlaySomeGames"
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://lets-play-some-games.herokuapp.com/"
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Website
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="project third simple"
          ref={(el) => {
            projectsRef.current[2] = el;
          }}
        >
          <div className="title-container">
            <span className="big-letter">K</span>
            <h3 className="section-title">Killer CRUD Skills?</h3>
          </div>

          <div className="gallery-container">
            <div className="text-container ">
              <h3 className="smallest-title">About this project</h3>
              <p className="text">
                Older project created using React and Firebase as a backend.
                Full CRUD capabilities, Users/login, form validation, react
                router.
              </p>
              <div class="link-bar">
                <a
                  href="https://github.com/leavemydogalone/redrit"
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://redrit-75871.web.app/"
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Website
                </a>
              </div>
            </div>
            <div className="image-container">
              <a
                href="https://redrit-75871.web.app/"
                target="_blank"
                rel="noreferrer"
                title="link to project website"
              >
                <img src={games} alt="screenshot of project website" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
