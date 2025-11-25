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
            <a href="/">Home</a>
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
              href="https://www.github.com/leavemydogalone"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.canva.com/design/DAG5vtLOFk0/KOAAdaZSEyRSTP4Pn_oKlg/view?utm_content=DAG5vtLOFk0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc12f01309e"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
