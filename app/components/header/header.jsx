"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./header.css";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileNavOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileNavOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setIsMegaOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const closeMobileNav = () => setIsMobileNavOpen(false);
  const closeMegaMenu = () => setIsMegaOpen(false);
  const openMegaMenu = () => setIsMegaOpen(true);
  const toggleMegaMenu = () => setIsMegaOpen((prev) => !prev);

  const handleServicesClick = () => {
    setIsMegaOpen(false);
  };

  const caretRotation = (open) => ({
    transform: open ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.2s ease",
  });

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <nav className="nav">
        <Link href="/" className="logo-link" aria-label="Enoves home">
          {/* Inline SVG so color can be controlled precisely with CSS */}
          <Image src="./Enoves.svg" width={150} height={150}/>
        </Link>

        <button
          type="button"
          className="nav-mobile-toggle"
          aria-expanded={isMobileNavOpen}
          aria-controls="site-navigation"
          onClick={() => setIsMobileNavOpen((prev) => !prev)}
        >
          <span className="nav-mobile-toggle__bar" />
          <span className="nav-mobile-toggle__bar" />
          <span className="nav-mobile-toggle__bar" />
          <span className="sr-only">Toggle navigation</span>
        </button>

        <DesktopNav
          isMegaOpen={isMegaOpen}
          onMegaEnter={openMegaMenu}
          onMegaLeave={closeMegaMenu}
          onServicesClick={handleServicesClick}
          onToggleMega={toggleMegaMenu}
          caretRotation={caretRotation}
        />
      </nav>

      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={closeMobileNav}
        isMobileServicesOpen={isMobileServicesOpen}
        onToggleServices={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
      />
    </header>
  );
}
