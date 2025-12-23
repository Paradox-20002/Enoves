"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Slider = ({ heading }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // {
    //   image: "/slider-images/buildings.gif",
    //   label: "Digital Excellence",
    //   title: "Brands That",
    //   spann: "Scale-Up",
    //   description:
    //     "From strategy to execution, we craft immersive digital experiences that drive growth and strengthen brand presence.",
    //   cta: { text: "Start Your Project", href: "/contact" },
    // },
    {
      image: "/slider-images/buildings3.gif",
      label: "Growth Engineering",
      title: "AI-Powered",
      spann: "Solutions",
      description:
      "Automation, analytics, and AI copilots work together to transform how you engage customers and optimize operations.",
      cta: { text: "Explore Services", href: "/services" },
    },
    {
      image: "/slider-images/buildings2.gif",
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
      nextSlide();
    }, 6000);

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
    <div className="w-full h-screen relative overflow-hidden mb-0 bg-[#05070E]">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) =>
          index === currentSlide ? (
            <motion.div
              key={index}
              className="absolute top-0 left-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,7,14,0.3)] via-[rgba(5,7,14,0.6)] to-[rgba(5,7,14,0.85)] z-[1]" />

              <motion.div
                className="absolute top-[30%] left-8 md:left-16 lg:left-24 text-left text-white z-[2] w-[90%] md:w-[85%] lg:w-[900px] max-w-[900px]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl mb-5 font-bold leading-tight bg-gradient-to-r from-white via-indigo-100 to-indigo-200 bg-clip-text text-transparent">
                  {slide.title}{" "}
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {slide.spann}
                  </span>
                </h2>

                <p className="text-base md:text-lg lg:text-xl mb-8 text-white/90 leading-relaxed max-w-[650px]">
                  {slide.description}
                </p>

                {/* FIX — wrap Link around an <a> tag so styled-jsx works */}
                <Link href={slide.cta.href} legacyBehavior>
                  <a className="cta-button">{slide.cta.text} →</a>
                </Link>
              </motion.div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-[3]">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 border-2 transition-all duration-300 ease-in-out p-0 cursor-pointer hover:bg-white/70 hover:scale-110 ${
              index === currentSlide
                ? "w-8 rounded-md bg-gradient-to-r from-violet-600 to-purple-600 border-white"
                : "w-3 rounded-full bg-white/40 border-white/60"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        @property --angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        .cta-button::after,
        .cta-button::before {
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
          z-index: -2;
          filter: blur(6px);
          opacity: 0.8;
          animation: blur-effect 2s linear infinite;
        }

        @keyframes spin-border {
          from {
            --angle: 0deg;
          }
          to {
            --angle: 360deg;
          }
        }

        @keyframes blur-effect {
          0% {
            filter: blur(6px);
            opacity: 0.7;
          }
          100% {
            filter: blur(18px);
            opacity: 1;
          }
        }

        .cta-button {
          display: inline-flex;
          position: relative;
          gap: 0.5rem;
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
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(124, 58, 237, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Slider;
