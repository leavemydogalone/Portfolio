import React, { useRef, useEffect, useState } from "react";
import "./Projects.scss";
import Gallery from "./components/Gallery";

import games from "./images/click.webp";
import convo1 from "./images/convo1.webp";

export default function Projects() {
  const projectsRef = useRef([]);

  const options = {
    root: null,
    threshold: 0.1,
    rootMargin: "-75px 0px",
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

  return (
    <section className="projects">
      <div className="container">
        <h2 className="title" id="whoIsNik">
          Who is Nik?
        </h2>
        <h2 className="small-title">Let's Break it Down</h2>
        <div
          className="project first"
          ref={(el) => {
            projectsRef.current[0] = el;
          }}
        >
          <div className="title-container">
            <span className="big-letter">N</span>
            <h3 className="section-title">Neat Websites</h3>
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
                href="https://worthy-bridge-production.up.railway.app/"
                target="_blank"
                rel="noreferrer"
                title="link to project website"
              >
                <img
                  loading="lazy"
                  src={games}
                  alt="screenshot of project website"
                />
              </a>
            </div>
            <div className="text-container ">
              <h3 className="smallest-title">About this project</h3>
              <p className="text">
                React, Express, Socket.io, MongoDB. Sign up and {""}
                <strong>Click the Button</strong>! Clicks are updated in
                realtime and progress is saved so you can always come back to
                click some more. (If game is down, please contact developer as
                Dyno may need to be spun up)
              </p>
              <div class="link-bar">
                <a
                  href="https://github.com/leavemydogalone/click_v2"
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://worthy-bridge-production.up.railway.app/"
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
            <h3 className="section-title">"K"ool & "K"ollaborative</h3>
          </div>

          <div className="gallery-container">
            <div className="image-container">
              <img
                loading="lazy"
                style={{ border: "4px solid #3f3d56" }}
                src={convo1}
                alt="screenshot of project website"
              />
            </div>
            <div className="text-container ">
              <p className="text">
                I'm the kind of person who loves working with others towards a
                common goal. I'm confident in my abilities to work independently
                when needed, but I also thrive when collaborating with my team.{" "}
                <br /> <br /> Results are important to me, so I'm always looking
                for ways to improve my own performance and that of my team. I
                approach every project and deadline with a positive attitude,
                which tends to rub off on those around me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
