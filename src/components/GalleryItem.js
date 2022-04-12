import React from "react";
import "../componentStyles/Project.css";

export default function GalleryItem({
  title,
  imgSrc,
  link,
  setDisplayItem,
  setTabAsActiveTab,
  isActive,
}) {
  const handleClick = () => {
    setDisplayItem();
    setTabAsActiveTab();
  };
  return (
    <div className={`gallery-item ${isActive ? "active" : "not-active"}`}>
      <div className="gallery-item-inner" onClick={handleClick}>
        <h3 className="gallery-item-title">{title}</h3>
      </div>
    </div>
  );
}
