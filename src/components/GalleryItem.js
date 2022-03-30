import React from "react";
import "../componentStyles/Project.css";

export default function GalleryItem({ title, imgSrc, link, setDisplayItem }) {
  return (
    <div className="gallery-item">
      <div className="gallery-item-inner" onClick={setDisplayItem}>
        <div class="image-container link">
          <h3 className="gallery-item-title">{title}</h3>
        </div>
      </div>
    </div>
  );
}
