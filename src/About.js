import React from "react";
import "./About.scss";
import { useState, useRef, useEffect } from "react";
import profile from "./images/ver2.webp";

export default function About() {
  const about = useRef(null);

  const options = {
    root: null,
    threshold: 0.8,
    rootMargin: "-100px 0px 0px 0px",
  };

  const sectionOneObserver = new IntersectionObserver(function (
    entries,
    sectionOneObserver
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        const header = document.querySelector("header");
        header.classList.add("nav-scrolled");
        console.log("scrool");
      } else {
        const header = document.querySelector("header");
        header.classList.remove("nav-scrolled");
        console.log("remove");
      }
    });
  },
  options);

  useEffect(() => {
    if (about.current) {
      sectionOneObserver.observe(about.current);
      console.log("watching");
    }

    return () => {
      if (about.current) sectionOneObserver.unobserve(about.current);
    };
  }, [about.current, options]);

  // clicker section. Should be moved to own component
  const clicker = useRef(null);
  const [insideText, setInsideText] = useState("Click the arrow");
  const [number, setNumber] = useState(0);
  const [brokenClicks, setBrokenClicks] = useState(0);

  // Array of strings to show up in the clicker box
  const stringsArray = [
    "Wow",
    "You're doing great!",
    "What a good clicker!",
    "Yea thats about it",
    "Its broken",
  ];

  const containerExpand = () => {
    let clickerContainer = document.querySelector(".clicker-container");
    clickerContainer.classList.add("expand");
    const removeExpand = setTimeout(() => {
      clickerContainer.classList.remove("expand");
    }, 500);
  };

  const stringAndMoveFunction = () => {
    let clickerMover = document.querySelector(".clicker-mover");
    stringsArray[number] && setInsideText(stringsArray[number]);
    setNumber(number + 1);
    if (number > 3) return;
    clickerMover.classList.toggle("move");
  };

  const blockClick = () => {
    clicker.current.disabled = true;
    const undisable = setTimeout(() => {
      clicker.current.disabled = false;
    }, 800);
  };

  const breakContainer = () => {
    let clickerContainer = document.querySelector(".clicker-container");
    setBrokenClicks(brokenClicks + 1);
    if (brokenClicks >= 4) {
      clickerContainer.classList.add("red");
      const removeExpand = setTimeout(() => {
        clickerContainer.classList.remove("red");
      }, 800);
      if (brokenClicks > 4) clickerContainer.classList.add("break");
    }
  };

  const handleClick = () => {
    containerExpand();
    stringAndMoveFunction();
    blockClick();
    breakContainer();
  };

  return (
    <section className="about" ref={about}>
      <div className="container">
        <figure className="image-container">
          <img
            loading="lazy"
            src={profile}
            alt="its me. But actually a giraffe."
          />
        </figure>
        <div className="text-wrap">
          <h2 className="small-title">Welcome!</h2>
          <h1 className="title">My name is Nik Port</h1>
          <p className="text">
            I am a front-end engineer/web designer
            <p class="text">
              I am currently working as a web designer, but have a passion for
              implementing ideas and creating fun and interactive web
              experiences
            </p>
            <p class="text">
              Just look at this fun and interative experience, here:
            </p>
          </p>
          <div className="clicker-container">
            <p className="inside-text">{insideText}</p>
            <div className="clicker-mover">
              <button
                ref={clicker}
                onClick={handleClick}
                className="clicker"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
