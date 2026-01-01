"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Slider = ({ heading }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      type: "video",
      src: "/slider-images/video1.mp4",
      label: "Growth Engineering",
      title: "AI-Powered",
      spann: "Solutions",
      description:
        "Automation, analytics, and AI copilots work together to transform how you engage customers and optimize operations.",
      cta: { text: "Explore Services", href: "/services" },
    },
    {
      type: "video",
      src: "/slider-images/video2.mp4",
      label: "Innovation First",
      title: "Motion-Powered",
      spann: "Story",
      description:
        "Cinematic design meets cutting-edge technology to deliver experiences that are visually stunning and fully functional.",
      cta: { text: "View Our Work", href: "/portfolio" },
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="w-full xl:max-w-full lg:max-w-7xl h-screen relative overflow-hidden bg-[#05070E]">
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, index) =>
            index === currentSlide && (
              <motion.div
                key={`slide-${index}`}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                {/* MEDIA */}
                {slide.type === "video" ? (
                  <video
                    src={slide.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className="w-full h-full object-cover object-center"
                  />
                )}

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,7,14,0.3)] via-[rgba(5,7,14,0.6)] to-[rgba(5,7,14,0.85)] z-[1]" />

                {/* CONTENT */}
                <motion.div
                  className="absolute top-[30%] left-8 md:left-16 lg:left-19 text-white z-[2] w-[90%] md:w-[85%]"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <h1 className="text-3xl md:text-5xl lg:text-5xl mb-5 font-bold leading-tight bg-gradient-to-r from-white via-indigo-100 to-indigo-200 bg-clip-text text-transparent">
                    {slide.title}{" "}
                    <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      {slide.spann}
                    </span>
                  </h1>

                  <p className="text-base md:text-lg lg:text-xl mb-8 text-white/90 max-w-[650px]">
                    {slide.description}
                  </p>

                  <Link href={slide.cta.href} legacyBehavior>
                    <a className="cta-button">{slide.cta.text} →</a>
                  </Link>
                </motion.div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* DOTS */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-[3]">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-3 border-2 transition-all duration-300 ${
              index === currentSlide
                ? "w-8 rounded-md bg-gradient-to-r from-violet-600 to-purple-600 border-white"
                : "w-3 rounded-full bg-white/40 border-white/60"
            }`}
          />
        ))}
      </div>

      {/* CTA STYLES */}
      <style jsx>{`
        @property --angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        .cta-button {
          position: relative;
          display: inline-flex;
          padding: 0.875rem 1.75rem;
          font-size: 0.95rem;
          font-weight: 600;
          color: white;
          background: linear-gradient(
            135deg,
            #7c3aed 0%,
            #9333ea 50%,
            #0ea5e9 100%
          );
          border-radius: 9999px;
          text-decoration: none;
          box-shadow: 0 10px 30px rgba(124, 58, 237, 0.3);
        }

        .cta-button::before,
        .cta-button::after {
          content: "";
          position: absolute;
          inset: -3px;
          border-radius: 9999px;
          z-index: -1;
          background: conic-gradient(
            from var(--angle),
            #722828,
            #ff2a00,
            #252323,
            #9fe413,
            #750f77,
            #e5f00d
          );
          animation: spin-border 3s linear infinite;
        }

        .cta-button::before {
          filter: blur(10px);
          opacity: 0.8;
        }

        @keyframes spin-border {
          from {
            --angle: 0deg;
          }
          to {
            --angle: 360deg;
          }
        }
      `}</style>
    </div>
  );
};

export default Slider;
