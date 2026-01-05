"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testemonials } from "./content-testemonials";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setDirection(1);
      setActive((i) => (i === testemonials.length - 1 ? 0 : i + 1));
    }, 5000);
    return () => clearInterval(id);
  }, [isPaused]);

  const navigate = (newDirection) => {
    setDirection(newDirection);
    setActive((i) => {
      if (newDirection === 1) {
        return i === testemonials.length - 1 ? 0 : i + 1;
      } else {
        return i === 0 ? testemonials.length - 1 : i - 1;
      }
    });
  };

  return (
    <section className="relative py-20 overflow-hidden bg-transparent">
      {/* Large Quote Icon Background */}
      <motion.div
        initial={{ opacity: 0, rotate: -5 }}
        animate={{ opacity: 0.03, rotate: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10"
      >
        <Quote className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] text-violet-500" strokeWidth={0.5} />
      </motion.div>

      {/* Ambient background effects */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-20 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-violet-600/15 blur-[120px] sm:blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-500/15 blur-[120px] sm:blur-[140px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Quote className="w-6 h-6 text-violet-500" />
            <span className="text-sm font-medium text-violet-400 uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent mb-4">
            Voices of Trust
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Insights from leaders who experienced excellence firsthand
          </p>
        </motion.div>

        {/* Testimonial stack */}
        <div 
          className="relative h-[400px] md:h-[380px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Previous / Next buttons - hidden on small screens */}
          <button
            onClick={() => navigate(-1)}
            className="hidden md:flex absolute top-1/2 -left-6 -translate-y-1/2 p-3 rounded-full bg-zinc-900 border border-zinc-800 hover:border-violet-500/50 hover:bg-zinc-800 transition-all duration-300 z-30"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-400 hover:text-violet-400 transition-colors" />
          </button>

          <button
            onClick={() => navigate(1)}
            className="hidden md:flex absolute top-1/2 -right-6 -translate-y-1/2 p-3 rounded-full bg-zinc-900 border border-zinc-800 hover:border-violet-500/50 hover:bg-zinc-800 transition-all duration-300 z-30"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-400 hover:text-violet-400 transition-colors" />
          </button>

          <AnimatePresence initial={false} mode="popLayout">
            {testemonials.map((item, i) => {
              const offset = i - active;
              if (Math.abs(offset) > 1) return null;

              const isActive = offset === 0;

              return (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    y: direction * 100,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: isActive ? 1 : 0.4,
                    y: offset * 50,
                    scale: isActive ? 1 : 0.92,
                    filter: isActive ? "blur(0px)" : "blur(3px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: direction * -100,
                    scale: 0.88,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  className="absolute inset-x-0 mx-auto max-w-4xl"
                  style={{ 
                    zIndex: isActive ? 10 : 5,
                    pointerEvents: isActive ? 'auto' : 'none'
                  }}
                >
                  <div className="relative group">
                    {/* Glow effect on hover */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                    
                    <div className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-2xl border border-zinc-800/50 rounded-3xl px-6 md:px-12 py-10 md:py-14 shadow-[0_20px_70px_-15px_rgba(0,0,0,0.8)]">
                      {/* Decorative quote icon */}
                      <Quote className="absolute top-6 left-6 w-10 h-10 text-violet-500/20" strokeWidth={1.5} />
                      
                      {/* Quote text without inverted commas */}
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative z-10"
                      >
                        <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-100 leading-relaxed mb-12 pl-8">
                          {item.content}
                        </p>
                      </motion.div>

                      {/* Author section */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-4 md:gap-5 pl-8"
                      >
                        <div className="relative">
                          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full blur-sm opacity-75" />
                          <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-zinc-800">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              sizes="64px"
                              className="object-cover"
                            />
                          </div>
                        </div>

                        <div>
                          <p className="font-semibold text-white text-base md:text-lg">{item.name}</p>
                          <p className="text-xs md:text-sm text-violet-400 font-medium mt-0.5">
                            {item.designation}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2.5 mt-12">
          {testemonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > active ? 1 : -1);
                setActive(i);
              }}
              className="group relative"
              aria-label={`Go to testimonial ${i + 1}`}
            >
              <motion.div
                className={`transition-all duration-300 rounded-full ${
                  i === active
                    ? "w-10 h-2.5 bg-gradient-to-r from-violet-600 to-indigo-600"
                    : "w-2.5 h-2.5 bg-zinc-700 group-hover:bg-zinc-500"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
