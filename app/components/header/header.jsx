'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import "./header.css";
import LanguageSwitcher from "./LanguageSwitcher";
import Search from "../search/search";
import Sidebar from "../sidebar/sidebar";
import MegaMenu from "../mega-menu/mega-menu";
import '@fortawesome/fontawesome-free/css/all.min.css';

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact us", href: "/contact" },
];

export default function Header() {
  const megaMenuData = [
    {
      title: "Acquisition and Retention",
      subHeadings: [
        {
          subHeading: "Digital Marketing",
          label: "Drive campaigns with targeted digital marketing programs.",
          href: "/services/web",
          icon: "fa-solid fa-code",
        },
        {
          subHeading: "Email Marketing",
          label: "Automate personalised journeys with email marketing.",
          href: "/services/mobile",
          icon: "fa-solid fa-mobile-screen",
        },
        {
          subHeading: "(SEO) Solutions",
          label: "Boost visibility with data-led SEO solutions.",
          href: "/services/pwa",
          icon: "fa-solid fa-rocket",
        },
        {
          subHeading: "Linkedin Outreach",
          label: "Boost visibility with data-led SEO solutions.",
          href: "/services/pwa",
          icon: "fa-solid fa-rocket",
        },
      ],
    },
    {
      title: "Design Services",
      subHeadings: [
        {
          subHeading: "UI/UX Design",
          label: "Deliver intuitive experiences with UX research and design.",
          href: "/services/uiux",
          icon: "fa-solid fa-palette",
        },
        {
          subHeading: "Branding",
          label: "Shape memorable brands with cohesive visual systems.",
          href: "/services/branding",
          icon: "fa-solid fa-award",
        },
        {
          subHeading: "Graphics",
          label: "Produce high-impact graphics and marketing assets.",
          href: "/services/graphics",
          icon: "fa-solid fa-pen-nib",
        },
        {
          subHeading: "Graphics",
          label: "Produce high-impact graphics and marketing assets.",
          href: "/services/graphics",
          icon: "fa-solid fa-pen-nib",
        },
      ],
    },
    {
      title: "Awareness",
      subHeadings: [
        {
          subHeading: "(SMM) Marketing",
          label: "Architect and optimise resilient cloud environments.",
          href: "/services/cloud",
          icon: "fa-solid fa-cloud",
        },
        {
          subHeading: "Paid Media",
          label: "Automate delivery pipelines with DevOps practices.",
          href: "/services/devops",
          icon: "fa-solid fa-gears",
        },
        {
          subHeading: "Marketing Strategy",
          label: "Accelerate releases with integrated CI/CD workflows.",
          href: "/services/cicd",
          icon: "fa-solid fa-repeat",
        },
        {
          subHeading: "Analytics Outreach",
          label: "Accelerate releases with integrated CI/CD workflows.",
          href: "/services/cicd",
          icon: "fa-solid fa-repeat",
        },
      ],
    },
    {
      title: "SaaS Solutions",
      subHeadings: [
        {
          subHeading: "SaaS Product Development",
          label: "Align technology investments with business priorities.",
          href: "/services/consulting",
          icon: "fa-solid fa-lightbulb",
        },
        {
          subHeading: "Pre and Post Support",
          label: "Define digital roadmaps that unlock new growth.",
          href: "/services/strategy",
          icon: "fa-solid fa-chart-line",
        },
        {
          subHeading: "Product Hunt Support",
          label: "Upskill teams with expert-led enablement programmes.",
          href: "/services/training",
          icon: "fa-solid fa-graduation-cap",
        },
        {
          subHeading: "Data Security And Compliance",
          label: "Upskill teams with expert-led enablement programmes.",
          href: "/services/training",
          icon: "fa-solid fa-graduation-cap",
        },
      ],
    },
    {
      title: "Web & App Development",
      subHeadings: [
        {
          subHeading: "Web Development",
          label: "Align technology investments with business priorities.",
          href: "/services/consulting",
          icon: "fa-solid fa-lightbulb",
        },
        {
          subHeading: "App Development",
          label: "Define digital roadmaps that unlock new growth.",
          href: "/services/strategy",
          icon: "fa-solid fa-chart-line",
        },
        {
          subHeading: "Custom Software Development",
          label: "Upskill teams with expert-led enablement programmes.",
          href: "/services/training",
          icon: "fa-solid fa-graduation-cap",
        },
        {
          subHeading: "Staff Augmentation",
          label: "Upskill teams with expert-led enablement programmes.",
          href: "/services/training",
          icon: "fa-solid fa-graduation-cap",
        },
      ],
    },
  ];

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

  const closeMobileNav = () => setIsMobileNavOpen(false);
  const closeMegaMenu = () => setIsMegaOpen(false);
  const openMegaMenu = () => setIsMegaOpen(true);
  const caretRotation = (open) => ({
    transform: open ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.2s ease",
  });

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <nav className="nav">
        <Link href="/" className="logo-link" aria-label="Enoves home">
          {/* Inline SVG so color can be controlled precisely with CSS */}
          <svg
            className="logo-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 356 65.2"
            role="img"
          >
            <g>
              <path
                fill="#FFFFFF"
                d="M144.9,27.8v30.1h-15.1V31.5c0-6.3-2.8-10.2-7.8-10.2c-5.3,0-8.7,4.5-8.7,11.3v25.4H98.2V10.5h14.2V19   c2.5-6,8.1-10,15.6-10C138,9,144.9,16,144.9,27.8z"
              />
              <path
                fill="#FFFFFF"
                d="M147.5,34.1c0-14.3,11.4-25.1,25.9-25.1s25.7,10.9,25.7,25.1s-11.3,25.4-25.7,25.4S147.5,48.6,147.5,34.1z    M184.7,34.2c0-7.2-4.8-12-11.3-12s-11.3,4.8-11.3,12s4.8,11.9,11.3,11.9S184.7,41.2,184.7,34.2z"
              />
              <path
                fill="#FFFFFF"
                d="M241.9,10.5l-23.4,48.6h-1.8l-23.5-48.6h15.4l8.9,21.9l9.2-21.9H241.9L241.9,10.5z"
              />
              <path
                fill="#FFFFFF"
                d="M281.7,38.1h-30.9c1.3,6.4,5.7,8.7,13.5,8.7c6.9,0,12.3-1.9,15.7-4.2V55c-4.3,3-11.5,4.5-17.7,4.5   c-16,0-26-9.6-26-25.4c0-14.8,9.8-25.1,24-25.1c13,0,22.1,8.5,22.1,22.7C282.5,34.3,282.1,36.4,281.7,38.1L281.7,38.1L281.7,38.1z    M250.6,29.7h18.8c-0.3-5.8-3.6-8.7-9.2-8.7C255,21,251.5,24,250.6,29.7z"
              />
              <path
                fill="#5956E9"
                d="M60.6,41.4H8c-4.4,0-8-3.9-8-8.8l0,0c0-4.9,3.6-8.8,8-8.8h52.6c4.4,0,8,3.9,8,8.8l0,0  C68.6,37.5,65,41.4,60.6,41.4z"
              />
              <path
                fill="#5956E9"
                d="M78.9,65.2H18.6c-5.1,0-9.2-3.9-9.2-8.8l0,0c0-4.8,4.1-8.8,9.2-8.8h60.2c5.1,0,9.2,3.9,9.2,8.8l0,0  C88.1,61.3,84,65.2,78.9,65.2z"
              />
              <path
                fill="#5956E9"
                d="M78.9,17.5H18.6c-5.1,0-9.2-3.9-9.2-8.8l0,0c0-4.8,4.1-8.8,9.2-8.8h60.2c5.1,0,9.2,3.9,9.2,8.8l0,0  C88.1,13.6,84,17.6,78.9,17.5L78.9,17.5L78.9,17.5z"
              />
            </g>
            <path
              fill="#FFFFFF"
              d="M284.5,55.6V44.2c2.5,1.8,7.2,3.6,11.7,3.6c5.6,0,7.8-1.9,7.8-4.3c0-1.8-1.1-2.8-4.1-4.1l-5-2.1   c-6.7-2.9-10.4-6.8-10.4-13.5c0-8.2,7.3-14.8,19.7-14.8c4.5,0,8.9,1.1,11,2.4v11.6c-2.4-1.2-5.5-2.4-9.2-2.4   c-4.4,0-6.9,1.3-6.9,3.6c0,1.7,0.9,2.6,3.4,3.7l4.7,2c7.5,3.1,10.8,7.1,10.8,13.8c0,8.4-6.7,15.8-19.8,15.8   C292.1,59.5,287.1,57.8,284.5,55.6L284.5,55.6L284.5,55.6z"
            />
          </svg>
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

        <div className="nav-right1">
          <ul className="nav-list1" id="site-navigation">
            <li>
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>

            <li
              className={`nav-item has-mega${isMegaOpen ? " is-open" : ""}`}
              aria-haspopup="true"
              onMouseEnter={openMegaMenu}
              onMouseLeave={closeMegaMenu}
              onFocusCapture={openMegaMenu}
              onBlur={closeMegaMenu}
            >
              <Link
                href="/services"
                className="nav-link nav-link--services"
                aria-expanded={isMegaOpen}
                onClick={closeMegaMenu}
              >
                <span className="nav-link-text">Services</span>
                <span className="caret" aria-hidden="true" style={caretRotation(isMegaOpen)}>
                  ▾
                </span>
              </Link>

              <MegaMenu columns={megaMenuData} onClose={closeMegaMenu} />
            </li>

            <li className="dropdown">
              <Link href="/portfolio" className="nav-link">
                Portfolio <span className="dropdown-arrow">▼</span>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/portfolio/websites">Websites</Link>
                </li>
                <li>
                  <Link href="/portfolio/apps">Applications</Link>
                </li>
                <li>
                  <Link href="/portfolio/designs">Designs</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/contact" className="nav-link">
                Contact us
              </Link>
            </li>
            <li className="nav-search">
              <Search />
            </li>
            <li>
              <Link href="/contact" className="lets-talk-btn">
                Let's Talk
              </Link>
            </li>
          </ul>

          <div className="nav-utilities">
            <LanguageSwitcher />
            <Sidebar />
          </div>
        </div>
      </nav>

      {isMobileNavOpen && (
        <div className="nav-mobile-panel">
          <div className="nav-mobile-inner">
            <div className="nav-mobile-meta">
              <span className="nav-mobile-eyebrow">Menu</span>
              <button
                type="button"
                className="nav-mobile-close"
                onClick={closeMobileNav}
              >
                <span className="sr-only">Close navigation</span>
                ✕
              </button>
            </div>

            <div className="nav-mobile-sections">
              <div className="nav-mobile-group">
                <span className="nav-mobile-label">Browse</span>
                <ul>
                  {navLinks.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} onClick={closeMobileNav}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  <li className="nav-mobile-services">
                    <div className="nav-mobile-services-header">
                      <Link href="/services" className="nav-mobile-services-link" onClick={closeMobileNav}>
                        Services
                      </Link>
                      <button
                        type="button"
                        className="nav-mobile-services-toggle"
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        aria-expanded={isMobileServicesOpen}
                      >
                        <span className="caret" style={caretRotation(isMobileServicesOpen)}>▼</span>
                      </button>
                    </div>
                    {isMobileServicesOpen && (
                      <div className="nav-mobile-services-panel">
                        <ul className="nav-mobile-services-list">
                          {megaMenuData.map((column) => (
                            <li key={column.title}>
                              <span className="nav-mobile-column">{column.title}</span>
                              <ul className="nav-mobile-subservices">
                                {column.subHeadings.map((service) => (
                                  <li key={service.subHeading}>
                                    <Link href={service.href} onClick={closeMobileNav}>
                                      <i className={`${service.icon} nav-mobile-service-icon`}></i>
                                      {service.subHeading}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                </ul>
              </div>

              <div className="nav-mobile-group">
                <span className="nav-mobile-label">Connect</span>
                <div className="nav-mobile-actions">
                  <Link href="/contact" className="btn btn--primary" onClick={closeMobileNav}>
                    Let's Talk
                  </Link>
                  <div className="nav-mobile-language">
                    <LanguageSwitcher />
                  </div>
                  <div className="nav-mobile-search">
                    <Search />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}