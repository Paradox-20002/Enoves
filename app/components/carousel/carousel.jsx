"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AuroraScene from "../Aurora"; // Adjust the import path

const TRACK_DURATION = 32; // seconds
const CARD_WIDTH = 180;
const CARD_HEIGHT = 80;

export default function Carousel( { img1, img2, img3, img4, className = "" } ) {
  const containerRef = useRef( null );

  const provided = [ img1, img2, img3, img4 ].filter( Boolean );
  const logos = ( provided.length ? provided : [ "enoves", "linkedin", "saas", "seo" ] ).map(
    ( logo ) => logo.replace( /^\//, "" ).replace( /\.svg$/, "" )
  );

  const duplicatedLogos = [ ...logos, ...logos ];

  return (
    <section
      ref={ containerRef }
      className={ `relative isolate w-full overflow-hidden px-20 py-16 ${ className }` }
      aria-label="Partner logos carousel"
      style={ { background: "linear-gradient(180deg, #05070E 0%, #0B0F1A 50%, #05070E 100%)" } }
    >
      {/* Aurora animation background */ }
      <AuroraScene
        containerRef={ containerRef }
        foldSectionRef={ { current: null } }
        heavySectionRef={ { current: null } }
      />

      {/* LEFT FADE */ }
      <div
        className="pointer-events-none absolute inset-y-0 left-0 sm:w-24 lg:w-100 md:w-50 z-20"
        aria-hidden="true"
        style={ { background: "linear-gradient(90deg, #05070E 50%, rgba(5,7,14,0) 90%)" } }
      />
      {/* RIGHT FADE */ }
      <div
        className="pointer-events-none absolute inset-y-0 right-0 sm:w-24 lg:w-200 md:w-100 z-20"
        aria-hidden="true"
        style={ { background: "linear-gradient(270deg, #05070E 80%, rgba(5,7,14,0) 90%)" } }
      />

      <motion.div
        className="relative z-10 flex min-w-max gap-8 will-change-transform"
        animate={ { x: [ "0%", "-50%" ] } }
        transition={ {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: TRACK_DURATION,
          },
        } }
      >
        {/* Invisible left spacer */ }
        <div className="w-[500px] flex-shrink-0" aria-hidden="true"></div>

        { duplicatedLogos.map( ( logo, index ) => (
          <motion.div
            key={ `${ logo }-${ index }` }
            className="flex h-[110px] w-[210px] items-center justify-center rounded-3xl border border-white/10 bg-[#0B0F1A]/90 px-6 py-4 shadow-lg shadow-purple-500/10 backdrop-blur hover:border-purple-400/50 hover:shadow-purple-500/30"
            initial={ { opacity: 0, y: 12, scale: 0.96 } }
            whileInView={ { opacity: 1, y: 0, scale: 1 } }
            viewport={ { once: true } }
            whileHover={ { scale: 1.05, rotateX: -4, rotateY: 4 } }
            transition={ { type: "spring", stiffness: 200, damping: 20 } }
            style={ { transformStyle: "preserve-3d" } }
          >
            <Image
              src={ `/${ logo }.svg` }
              alt={ `${ logo } logo` }
              width={ CARD_WIDTH }
              height={ CARD_HEIGHT }
              className="h-[70px] w-full object-contain"
              priority={ index < 4 }
            />
          </motion.div>
        ) ) }

        {/* Invisible right spacer */ }
        <div className="w-[500px] flex-shrink-0" aria-hidden="true"></div>
      </motion.div>
    </section>
  );
}
