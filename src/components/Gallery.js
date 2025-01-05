import React from "react";
import "./Gallery.css";

function Gallery() {
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
  ];

  return (
    <div className="gallery" id="gallery">
      <h2>Our Farm Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Gallery ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;