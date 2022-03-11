import React from "react";
import "../componentStyles/Project.css";

export default function GalleryItem({ title, image, link }) {
  return (
    <div className="gallery-item">
      <div className="gallery-item-inner">
        im a thing <a href={link}>Link to {title} website</a>
      </div>
    </div>
  );
}
