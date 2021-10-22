import React from 'react';
import './About.css';
import { useState, useRef } from 'react';

export default function About() {
  const clicker = useRef(null);
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
    clicker.current.disabled = true;
    const undisable = setTimeout(() => {
      clicker.current.disabled = false;
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
          <img
            src="https://lh3.googleusercontent.com/AJOibwujzDCNV5-IsKp-efNwfiOF33wjQ7OuWyE1J0yoMwb0iElr51JXTtHgtLhi0uOzbFU6nRkupAjqzyy-J0o-N2IR5dgjeyWzxRHOsxq1QOSDSOs_trAn-e4SItnqyzoF-3ckAXnWV01g99oSHlE4ppfxiX5tYwi-PJ4yDaNHKHXx3KwboQWmY-Yh1okmTmhg7mWEiZ-cQ6mkFNH3QUTMbP8XPGAaxVW3ZetLVvgnVDDDOVXt7UXbbxU0FLdOBneQmhcvfmOteXrurvHIbtcnae0p0KzxK__AuKOR7WPSIdseFZqis6zs1yN4N7ojptIWOEEdNTBuQGPbpxSyyRIyHgokWtZphvP0zUw2YyAMUmc6dDbeN8Ans16Qaq1yQlQqJ2vMYsnDTxspO0CmY72wmK4PXglPlLu36WvYfC25AX3zdFTgSwoZ719ILv_-7z0yvRoMTIIo6e-SCmrI3BnCS8DTUqR-IByX3aTP7LcTDpK8wRvGTDxo3KejG121uGQRo9go6fewsJxof8hU-HCOL3wI0rODWqs-msT5tBVeVwixE0Yt0Q5Fq5m-pOkJlOhRKCBsZUTDs5aAfvIh-6C4FFmj13LnytZt-KZCG2aGHaIgMrdn01-5GNaSmHiRJK1mTsMZGfkb1o7sNfNfaQBmNWvbboYoFqBInhrJu3dXISsqiT7u2gxvD3oMNQTgcN1-GslQgiPTl3BbSrDInME=w600-h780-no?authuser=0"
            alt="its me. But actually a giraffe."
          />
        </figure>
        <div className="text-wrap">
          <h2 className="small-title">Welcome!</h2>
          <h1 className="title">My name is Nik Port</h1>
          <p className="text">
            I am a front-end web developer/designer <br /> <br /> I am currently
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
