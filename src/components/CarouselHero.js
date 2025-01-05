"use client";
import React, { useState } from "react";
import "./CarouselHero.css";

const CarouselHero = () => {
  const slides = [
    { image: "poultry.jpg",
      message: [
      { text: "Welcome", color: "#4CAF50" },
      { text: "to Our", color: "#FF5722" },
      { text: "Poultry Farm!", color: "#2196F3" },
    ],
    btn:"Get Live Birds"
   },
    { image: "diary.jpg", message: [
      { text: "Get Fresh", color: "#FFC107" },
      { text: "Produce", color: "#03A9F4" },
      { text: "Everyday!", color: "#8BC34A" },
    ],
    btn:"Get Milk Products"
   },
    { image: "farm.jpg",message: [
      { text: "Sustainability", color: "#E91E63" },
      { text: "is Our", color: "#673AB7" },
      { text: "Priority!", color: "#3F51B5" },
    ],
    btn:"Get Farm Produce"
   },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <div
        className="carousel-slide"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,

        }}
      >
        {slides.map((slide, index) => (
          <div className="carousel-item" key={index}>
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
            <div className="carousel-message">
            {slide.message.map((part, idx) => (
              <span key={idx} style={{ color: part.color }}>
                {part.text}{" "}
              </span>
            ))}
            <div className="btn-container">
          <button className="btn">{slide.btn}</button>
          <button className="btn-secondary">Learn More</button>
            </div>
          </div>
          </div>
        ))}
      </div>
      <div className="carousel-buttons">
        <button className="carousel-button" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="carousel-button" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default CarouselHero;
