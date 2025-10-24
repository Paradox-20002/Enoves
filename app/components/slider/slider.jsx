"use client";
import { useState, useEffect } from "react";
import "./slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/download1.webp",
      title: "Welcome to Our World",
      description:
        "Discover amazing possibilities with our innovative solutions",
    },
    {
      image: "/images/download2.webp",
      title: "Excellence in Design",
      description: "Creating stunning experiences that captivate and inspire",
    },
    {
      image: "/images/download3.webp",
      title: "Building the Future",
      description:
        "Leading the way with cutting-edge technology and creativity",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >
          <img src={slide.image} alt={slide.title} />
          <div className="content">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}

      <div className="arrow prev" onClick={prevSlide}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </div>
      <div className="arrow next" onClick={nextSlide}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
        </svg>
      </div>

      <div className="navigation">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
