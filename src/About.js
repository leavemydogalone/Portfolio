import React from 'react';
import './About.css';
import { useState } from 'react';

export default function About() {
  const [insideText, setInsideText] = useState('Click the arrow');
  const [number, setNumber] = useState(0);
  const [brokenClicks, setBrokenClicks] = useState(0);

  const stringsArray = [
    'Wow',
    "You're doing great!",
    'What a good clicker!',
    'Yea thats about it',
    'Its broken',
  ];

  const containerExpand = () => {
    let clickerContainer = document.querySelector('.clicker-container');
    clickerContainer.classList.add('expand');
    const removeExpand = setTimeout(() => {
      clickerContainer.classList.remove('expand');
    }, 500);
  };

  const stringAndMoveFunction = () => {
    let clickerMover = document.querySelector('.clicker-mover');
    stringsArray[number] && setInsideText(stringsArray[number]);
    setNumber(number + 1);
    if (number > 3) return;
    clickerMover.classList.toggle('move');
  };

  const blockClick = () => {
    let clicker = document.querySelector('.clicker');
    clicker.disabled = true;
    const undisable = setTimeout(() => {
      clicker.disabled = false;
    }, 800);
  };

  const breakContainer = () => {
    let clickerContainer = document.querySelector('.clicker-container');
    setBrokenClicks(brokenClicks + 1);
    if (brokenClicks >= 4) {
      clickerContainer.classList.add('red');
      const removeExpand = setTimeout(() => {
        clickerContainer.classList.remove('red');
      }, 800);
      if (brokenClicks > 4) clickerContainer.classList.add('break');
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
          <img src="" alt="" />
        </figure>
        <div className="text-wrap">
          <h2 className="small-title">Welcome!</h2>
          <h1 className="title">My name is Nik Port</h1>
          <p className="text">
            I am a front-end web developer/designer. <br /> <br /> I am
            currently working as a web designer, but have a passion for
            implementing ideas and creating fun and interactive web experiences.
            <br />
            <br />
            Just look at this fun and interative experience, here:
          </p>
          <div className="clicker-container">
            <p className="inside-text">{insideText}</p>
            <div className="clicker-mover">
              <button onClick={handleClick} className="clicker"></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
