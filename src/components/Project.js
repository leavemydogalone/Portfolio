import React from "react";
import "../componentStyles/Project.css";

export default function Project({ title, icon, descriptionArray, link }) {
  const descriptionPList = descriptionArray.map((descriptionString, index) => (
    <p key={index}>{descriptionString}</p>
  ));

  return (
    <div className="project">
      <div className="project-inner">
        <div className="icon">{icon}</div>
        <h3 className="project-title"> {title} </h3>
        <p className="project-description">{descriptionPList}</p>
      </div>
      <a className="link" href={link}>
        Link to {title} project
      </a>
    </div>
  );
}
