"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined" && !gsap.core.globals().ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SectionScrollFX() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = gsap.utils.toArray("[data-home-section]");
    const timelines = [];

    sections.forEach((section, index) => {
      // Determine animation style based on index (alternate between styles)
      const isEven = index % 2 === 0;

      // Main section timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "top 20%",
          toggleActions: "play none none reverse",
          // markers: true, // Uncomment for debugging
        },
      });

      if (isEven) {
        // Style 1: Scale + Fade with slight rotation
        tl.fromTo(
          section,
          {
            opacity: 0,
            scale: 0.92,
            rotateX: 8,
            filter: "blur(10px)",
          },
          {
            opacity: 1,
            scale: 1,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power3.out",
          }
        );
      } else {
        // Style 2: Slide from side with fade
        tl.fromTo(
          section,
          {
            opacity: 0,
            x: -60,
            rotateY: -5,
            filter: "blur(8px)",
          },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power3.out",
          }
        );
      }

      // Animate child elements with stagger
      const children = section.querySelectorAll(
        "h2, h3, p, a, article, div > div, button, form"
      );

      if (children.length > 0) {
        tl.fromTo(
          children,
          {
            opacity: 0,
            y: 30,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.9" // Start slightly before section animation ends
        );
      }

      timelines.push(tl);
    });

    return () => {
      timelines.forEach((tl) => {
        tl.scrollTrigger?.kill();
        tl.kill();
      });
    };
  }, []);

  return null;
}
