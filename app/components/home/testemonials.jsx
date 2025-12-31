"use client";
import { useState, useEffect } from "react";
import { testemonials } from "./content-testemonials";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
  const [ slideIndex, setSlideIndex ] = useState( 0 );
  const [ direction, setDirection ] = useState( 1 );

  useEffect( () => {
    const interval = setInterval( () => nextSlide(), 5000 );
    return () => clearInterval( interval );
  }, [ slideIndex ] );

  const nextSlide = () => {
    setDirection( 1 );
    setSlideIndex( ( prev ) => ( prev === testemonials.length - 1 ? 0 : prev + 1 ) );
  };

  const prevSlide = () => {
    setDirection( -1 );
    setSlideIndex( ( prev ) => ( prev === 0 ? testemonials.length - 1 : prev - 1 ) );
  };

  const slideVariants = {
    enter: ( direction ) => ( {
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    } ),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: ( direction ) => ( {
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    } ),
  };

  return (
    <section className="relative max-h-screen lg:mt-0 flex items-center bg-transparent text-white overflow-hidden">
      {/* Subtle dark glows */ }
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[160px]" />
        <div className="absolute -bottom-40 left-0 w-96 h-96 bg-violet-500/8 rounded-full blur-[160px]" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-violet-400/5 rounded-full blur-[110px]" />
      </div> */}

      <div className="relative z-10 container mx-auto px-4 w-full">
        {/* Header */ }
        <motion.div
          initial={ { opacity: 0, y: 20 } }
          whileInView={ { opacity: 1, y: 0 } }
          viewport={ { once: true } }
          transition={ { duration: 0.6 } }
          className="text-center mb-8"
        >
          {/* <motion.div
            initial={ { scale: 0 } }
            whileInView={ { scale: 1 } }
            viewport={ { once: true } }
            transition={ { duration: 0.5, delay: 0.2 } }
            className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-violet-600 to-violet-800 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.3)] mb-4"
          >
            <Quote className="w-6 h-6 text-white" />
          </motion.div> */}
          <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-violet-200">
            What People Say
          </h2>
          <p className="text-base text-gray-300 mt-2 max-w-2xl mx-auto">
            A beautifully contrasting experience powered by real voices.
          </p>
        </motion.div>

        {/* Carousel */ }
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence initial={ false } custom={ direction } mode="wait">
            { testemonials.map(
              ( item, index ) =>
                index === slideIndex && (
                  <motion.div
                    key={ index }
                    custom={ direction }
                    variants={ slideVariants }
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={ {
                      x: { type: "spring", stiffness: 260, damping: 30 },
                      opacity: { duration: 0.4 },
                    } }
                    className="w-full"
                  >
                    <div className="bg-zinc-900/60 backdrop-blur-xl rounded-2xl shadow-[0_0_20px_rgba(139,92,246,0.1)] border border-violet-900/20 p-8 md:p-10 relative overflow-hidden">
                      {/* Glow Accent */ }
                      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-violet-700/15 blur-2xl" />

                      {/* Stars */ }
                      <div className="flex justify-center gap-1 mb-6 relative z-10">
                        { [ ...Array( 5 ) ].map( ( _, i ) => (
                          <motion.div
                            key={ i }
                            initial={ { opacity: 0, scale: 0 } }
                            animate={ { opacity: 1, scale: 1 } }
                            transition={ { delay: 0.1 * i } }
                          >
                            <Star className="w-5 h-5 fill-amber-400 text-amber-400 drop-shadow-[0_0_4px_rgba(255,200,0,0.5)]" />
                          </motion.div>
                        ) ) }
                      </div>

                      <motion.p
                        initial={ { opacity: 0 } }
                        animate={ { opacity: 1 } }
                        transition={ { delay: 0.2 } }
                        className="text-lg md:text-xl text-gray-300 text-center leading-relaxed mb-6 italic"
                      >
                        "{ item.content }"
                      </motion.p>

                      {/* Author */ }
                      <motion.div
                        initial={ { opacity: 0, y: 20 } }
                        animate={ { opacity: 1, y: 0 } }
                        transition={ { delay: 0.3 } }
                        className="flex flex-col items-center"
                      >
                        { item.image && (
                          <div className="relative mb-3">
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-violet-800 rounded-full blur-md opacity-40" />
                            <Image
                              src={ item.image }
                              width={ 170 }
                              height={ 170 }
                              alt={ item.name }
                              className="relative rounded-full border-3 border-zinc-900 shadow-[0_0_15px_rgba(139,92,246,0.3)] object-cover"
                            />
                          </div>
                        ) }
                        <h3 className="text-xl font-bold text-white drop-shadow-md">{ item.name }</h3>
                        <p className="text-violet-400 font-medium text-sm">{ item.designation }</p>
                      </motion.div>
                    </div>
                  </motion.div>
                )
            ) }
          </AnimatePresence>

          {/* Navigation */ }
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* <motion.button
              whileHover={ { scale: 1.15 } }
              whileTap={ { scale: 0.9 } }
              onClick={ prevSlide }
              className="w-12 h-12 rounded-full bg-zinc-900 text-violet-400 border border-violet-800/30 shadow-[0_0_10px_rgba(139,92,246,0.15)] flex items-center justify-center hover:bg-violet-700 hover:text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button> */}

            {/* Dots */ }
            <div className="flex gap-2">
              { testemonials.map( ( _, index ) => (
                <motion.button
                  key={ index }
                  whileHover={ { scale: 1.2 } }
                  whileTap={ { scale: 0.95 } }
                  onClick={ () => {
                    setDirection( index > slideIndex ? 1 : -1 );
                    setSlideIndex( index );
                  } }
                  className={ `rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(139,92,246,0.3)] ${ index === slideIndex
                    ? "w-8 h-2.5 bg-violet-500"
                    : "w-2.5 h-2.5 bg-violet-800 hover:bg-violet-600"
                    }` }
                />
              ) ) }
            </div>
{/* 
            <motion.button
              whileHover={ { scale: 1.15 } }
              whileTap={ { scale: 0.9 } }
              onClick={ nextSlide }
              className="w-12 h-12 rounded-full bg-zinc-900 text-violet-400 border border-violet-800/30 shadow-[0_0_10px_rgba(139,92,246,0.15)] flex items-center justify-center hover:bg-violet-700 hover:text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button> */}
          </div>
        </div>

        {/* Footer text */ }
        {/* <motion.p
          initial={ { opacity: 0, y: 10 } }
          whileInView={ { opacity: 1, y: 0 } }
          viewport={ { once: true } }
          transition={ { delay: 0.4 } }
          className="text-center mt-8 text-gray-500 text-sm"
        >
          Join { testemonials.length }+ people who trust us.
        </motion.p> */}
      </div>
    </section>
  );
}