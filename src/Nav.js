import React, { useLayoutEffect, useRef } from "react";

export default function Nav() {
  // const navRef = useRef();
  // useLayoutEffect(() => {
  //   setTimeout(() => {
  //     navRef.current.style.position = "fixed";
  //   }, 2000);
  // }, []);
  return (
    <nav>
      <div class="nav-inner">
        <figure className="logo-container">
          <img src="" alt="" />
        </figure>

        <ul className="links-list">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:niklasport88@gmail.com"
            >
              niklasport88@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/niklas-port-a8898118a"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/119s-71_J-k2cLRuNH_YASWJOk42lZS6z/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
