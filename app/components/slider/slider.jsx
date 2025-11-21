"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import "./slider.css";

const Slider = ({ heading }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/download1.jpg",
      label: "Digital Excellence",
      title: "We Build Brands That Scale",
      description:
        "From strategy to execution, we craft immersive digital experiences that drive growth and captivate audiences.",
      cta: { text: "Start Your Project", href: "/contact" },
    },
    {
      image: "/images/download2.jpg",
      label: "Innovation First",
      title: "Motion-Native Storytelling",
      description: "Cinematic design meets cutting-edge technology. Every pixel engineered for performance and impact.",
      cta: { text: "View Our Work", href: "/portfolio" },
    },
    {
      image: "/images/download3.jpg",
      label: "Growth Engineering",
      title: "AI-Powered Solutions",
      description:
        "Automation, analytics, and AI copilots that transform how you engage customers and scale revenue.",
      cta: { text: "Explore Services", href: "/services" },
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000); // Auto-advance every 6 seconds

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
      <AnimatePresence mode="wait">
        {slides.map((slide, index) =>
          index === currentSlide ? (
            <motion.div
              key={index}
              className="slide active"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <img src={slide.image} alt={slide.title} />
              <div className="slide-overlay" />
              <motion.div
                className="content"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <p className="content-label">{slide.label}</p>
                <h2>{slide.title}</h2>
                <p className="content-description">{slide.description}</p>
                <Link href={slide.cta.href} className="cta-button">
                  {slide.cta.text} →
                </Link>
              </motion.div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      <button className="arrow prev" onClick={prevSlide} aria-label="Previous slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>
      <button className="arrow next" onClick={nextSlide} aria-label="Next slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
        </svg>
      </button>

      <div className="navigation">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
