import React from "react";
import logo from "./images/nik_logo.png";
import "./Nav.scss";

export default function Nav() {
  return (
    <header>
      <nav class="nav-inner">
        <figure className="logo-container">
          <img src={logo} alt="logo" />
        </figure>

        <ul className="links-list">
          <li>
            <a href="#contact">Contact</a>
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
              href="https://www.github.com/leavemydogalone/Portfolio"
              target="_blank"
              rel="noreferrer"
            >
              Github
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
      </nav>
    </header>
  );
}
