import React, { useState } from "react";
import GalleryItem from "../components/GalleryItem";
import { galleryObjects } from "../TextObjects/projectObjects";

export default function Gallery() {
  const [displayItem, setDisplayItem] = useState(null);
  return (
    <div className="gallery-container">
      <div className="gallery-list">
        {galleryObjects &&
          galleryObjects.map((thing, index) => (
            <GalleryItem
              title={thing.title}
              key={index}
              imgSrc={thing.imgSrc}
              link={thing.link}
              setDisplayItem={() => setDisplayItem(thing)}
            />
          ))}
      </div>
      <div className="gallery-display">
        {displayItem && (
          <div className="gallery-display-inner">
            <img
              src={displayItem.imgSrc}
              alt={`${displayItem.title} website`}
            />
          </div>
        )}
      </div>
    </div>
  );
}
