import React from "react";

export default function Nav() {
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
