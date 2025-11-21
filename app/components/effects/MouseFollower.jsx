"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MouseFollower() {
  const followerRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    // Hide on touch devices
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      return;
    }

    const follower = followerRef.current;
    if (!follower) return;

    // Track mouse position
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    // Smooth follow animation
    const animate = () => {
      // Lerp (linear interpolation) for smooth following
      const ease = 0.15;
      followerPos.current.x += (mousePos.current.x - followerPos.current.x) * ease;
      followerPos.current.y += (mousePos.current.y - followerPos.current.y) * ease;

      // Update position
      gsap.set(follower, {
        x: followerPos.current.x,
        y: followerPos.current.y,
      });

      rafId.current = requestAnimationFrame(animate);
    };

    // Handle mouse enter/leave
    const handleMouseEnter = () => {
      gsap.to(follower, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(follower, {
        opacity: 0,
        scale: 0.5,
        duration: 0.3,
      });
    };

    // Handle hover over interactive elements
    const handleElementHover = (isHovering) => {
      gsap.to(follower, {
        scale: isHovering ? 1.5 : 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, [role="button"], [onclick]'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => handleElementHover(true));
      el.addEventListener("mouseleave", () => handleElementHover(false));
    });

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    // Start animation
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", () => handleElementHover(true));
        el.removeEventListener("mouseleave", () => handleElementHover(false));
      });

      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <div
      ref={followerRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] opacity-0"
      style={{
        width: "32px",
        height: "32px",
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, rgba(147, 51, 234, 0.3) 30%, rgba(14, 165, 233, 0.2) 60%, transparent 100%)",
          filter: "blur(12px)",
        }}
      />
      
      {/* Inner core */}
      <div
        className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(124, 58, 237, 0.8) 50%, rgba(147, 51, 234, 0.6) 100%)",
          boxShadow: "0 0 8px rgba(124, 58, 237, 0.8), 0 0 16px rgba(147, 51, 234, 0.4)",
        }}
      />
    </div>
  );
}
