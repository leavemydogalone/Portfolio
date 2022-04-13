import React from "react";
import "./About.scss";
import { useState, useRef } from "react";

export default function About() {
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
    <section className="about">
      <div className="container">
        <figure className="image-container">
          <img
            src="https://lh3.googleusercontent.com/MT633ReHL7FA75TXesyNh9VcShC4lVh29-g4IG3jh_mzjQ2lYIdi7Ictx5X983UUnTcXNIjhk7gpnOjmJCQ33iwqhA1pLlLiV-2qpdmxckNEALv-J0zL9qvkii1jpHzsy-pQn9rJ73YF-YIABuLw6PowYOHq9SfNCwtDvcXsZx2ek-GHZGHwFJQFoMdWfq4buPZiXgTrhl4M7RXTxWXuc4qIL3Uz9HueiwUUsGg7we3h_nKWgf0NQtllyth3nlLPslcV8Y21AF6ec1l1fjOsa5pi77L7q2vovTKxeQ2VZ1t1EIevGcgpP-8ACQTccWijfbxBlzMFyG-gybCxUa8vUrj4r8BiiYCc35oYezEpBAp5qPP35Hucq4bqmOBazGlVrrefp9V3BsodIlI2kjcxW4h-T9bTvD51D7RZaqneVM4cb_g14yNbS29YVoj3en6o26T_0W_znhmGNd_lYgLRs3-dZeAx6JjM9DLJctLTk2z_52iC9bEzU3TuXhnMHznVknNVtZrgJ5Bt2MgAbvb15GBOa5s4ReQWVTJK-s9VXOUmbZ11sJHA9ES5yVfhy3ujNdoOVEiHy2DpL5OaLGd9uvxWDScg52waBRVEGgsWoN6D0j8H9afTWVpgIX83vVmGCUIhoFYPCFTgVxV92PrZFLI9goXHqILn52aMtOVeIPfRXONpZ2UKQ6qB5y3bTTKzHNXrWKaw8Feo2tRzpVzSEtnNmV3BPB29FwBUNf3kSbkMfct-XscijsqeE4A=w642-h856-no?authuser=0"
            alt="its me. But actually a giraffe."
          />
        </figure>
        <div className="text-wrap">
          <h2 className="small-title">Welcome!</h2>
          <h1 className="title">My name is Nik Port</h1>
          <p className="text">
            I am a front-end engineer/web designer <br /> <br /> I am currently
            working as a web designer, but have a passion for implementing ideas
            and creating fun and interactive web experiences
            <br />
            <br />
            Just look at this fun and interative experience, here:
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
