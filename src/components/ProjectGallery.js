import React, { useEffect, useRef } from "react";
import "./ProjectGallery.css";
import clicker from "../images/Clicker.PNG";
import stock from "../images/Stock.PNG";
import playGame from "../images/PlayGame.PNG";

export default function ProjectGallery() {
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

  const galleryItems = [
    {
      name: "Clicker",
      stack: "React, DaisyUI, Node.js, Express, Socket.io, MongoDB",
      // text: '',
      img: clicker,
      link: "https://worthy-bridge-production.up.railway.app/",
      git: "https://github.com/leavemydogalone/click_v2",
    },
    {
      name: "Color Stocks",
      stack: "Nextjs, React, MongoDB, Chartjs",
      // text: '',
      img: stock,
      link: "https://color-stock-8bmb.vercel.app/",
      git: "https://github.com/leavemydogalone/color-stock",
    },
    {
      name: "Let's Play Some Games",
      stack: "React, TypeScript, Scss",
      // text: '',
      img: playGame,
      link: "https://lets-play-some-games.vercel.app/",
      git: "https://github.com/leavemydogalone/LetsPlaySomeGames",
    },
  ];

  return (
    <section className="gallery">
      <div className="container">
        <h3 className="title">Projects</h3>
        <div className="flexGallery">
          {galleryItems.map((item, index) => (
            <article
              className="galleryItem"
              ref={(el) => {
                projectsRef.current[index] = el;
              }}
            >
              <img src={item.img} alt={`project ${index}`} />
              <h4 className="projectTitle">{item.name}</h4>
              <div className="stack">{item.stack}</div>
              {/* <div className="stack">{item.text}</div> */}
              <div className="linkContainer">
                <a href={item.link} target="_blank" rel="noreferrer">
                  App
                </a>
                <a href={item.git} target="_blank" rel="noreferrer">
                  Github
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
