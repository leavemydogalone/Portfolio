import React from "react";
import "../componentStyles/Project.css";

export default function Project({ title, icon, descriptionArray, link }) {
  const descriptionPList = descriptionArray.map((descriptionString, index) => (
    <p class="description-text" key={index}>
      {descriptionString}
    </p>
  ));

  return (
    <div className="project">
      <div className="icon">{icon}</div>
      <div className="project-inner">
        <h3 className="project-title smaller-title"> {title} </h3>
        <p className="project-description text">{descriptionPList}</p>
      </div>
      <a className="link" href={link}>
        Link to {title} project
      </a>
    </div>
  );
}
