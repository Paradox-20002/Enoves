import Link from "next/link";
import "./header.css";
import LanguageSwitcher from "./LanguageSwitcher";
import Search from "../search/search";
import Sidebar from "../sidebar/sidebar";

export default function Header() {
  return (
    <header className="header">
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
                fill="#FFFFFF"
                d="M284.5,55.6V44.2c2.5,1.8,7.2,3.6,11.7,3.6c5.6,0,7.8-1.9,7.8-4.3c0-1.8-1.1-2.8-4.1-4.1l-5-2.1   c-6.7-2.9-10.4-6.8-10.4-13.5c0-8.2,7.3-14.8,19.7-14.8c4.5,0,8.9,1.1,11,2.4v11.6c-2.4-1.2-5.5-2.4-9.2-2.4   c-4.4,0-6.9,1.3-6.9,3.6c0,1.7,0.9,2.6,3.4,3.7l4.7,2c7.5,3.1,10.8,7.1,10.8,13.8c0,8.4-6.7,15.8-19.8,15.8   C292.1,59.5,287.1,57.8,284.5,55.6L284.5,55.6L284.5,55.6z"
              />
            </g>
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
          </svg>
        </Link>

        <div className="nav-right1">
          <ul className="nav-list1">
            <li>
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item has-mega" aria-haspopup="false">
              <Link href="/services" className="nav-link">
                Services <span className="caret">▾</span>
              </Link>

              <div className="mega-menu" role="menu" aria-label="Services">
                <div className="mega-content">
                  <div className="mega-column">
                    <h5>Web & Mobile</h5>
                    <ul>
                      <li>
                        <Link href="/services/web">Web Development</Link>
                      </li>
                      <li>
                        <Link href="/services/mobile">Mobile Apps</Link>
                      </li>
                      <li>
                        <Link href="/services/pwa">PWA</Link>
                      </li>
                    </ul>
                  </div>
                  {/* End of mega-column  and you can insert a new column here*/}
                </div>
              </div>
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
            <li>
              <Search />
            </li>
            <li>
              <Link href="/contact" className="lets-talk-btn">
                Let's Talk
              </Link>
            </li>
          </ul>
          <LanguageSwitcher />
          <Sidebar />
        </div>
      </nav>
    </header>
  );
}
