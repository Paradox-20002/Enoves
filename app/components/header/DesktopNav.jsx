"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import MegaMenu from "../mega-menu/mega-menu";
import Search from "../search/search";
import LanguageSwitcher from "./LanguageSwitcher";
import Sidebar from "../sidebar/sidebar";
import { megaMenuData } from "./megaMenuData";

export default function DesktopNav( {
  isMegaOpen,
  onMegaEnter,
  onMegaLeave,
  onServicesClick,
  onToggleMega,
  caretRotation,
} ) {
  const [ isDropdownOpen, setIsDropdownOpen ] = useState( false );
  const closeTimer = useRef( null );

  return (
    <div className="nav-right1">
      <ul className="nav-list1" id="site-navigation">
        <li>
          <Link href="/" className="nav-link">
            Home
          </Link>
        </li>

        <li
          className={ `nav-item has-mega${ isMegaOpen ? " is-open" : "" }` }
          aria-haspopup="true"
          onMouseEnter={ () => {
            if ( closeTimer.current ) {
              clearTimeout( closeTimer.current );
              closeTimer.current = null;
            }
            onMegaEnter();
          } }
          onMouseLeave={ () => {
            if ( closeTimer.current ) clearTimeout( closeTimer.current );
            closeTimer.current = setTimeout( () => {
              onMegaLeave();
            }, 120 );
          } }
        >
          <Link
            href="/services"
            className="nav-link nav-link--services"
            aria-expanded={ isMegaOpen }
            onClick={ onServicesClick }
          >
            <span className="nav-link-text">Services</span>
            <span
              className="caret"
              role="button"
              tabIndex={ 0 }
              aria-controls="mega-menu"
              aria-expanded={ isMegaOpen }
              onClick={ ( e ) => {
                e.preventDefault();
                e.stopPropagation();
                onToggleMega();
              } }
              onKeyDown={ ( e ) => {
                if ( e.key === "Enter" || e.key === " " ) {
                  e.preventDefault();
                  e.stopPropagation();
                  onToggleMega();
                } else if ( e.key === "Escape" ) {
                  onMegaLeave();
                }
              } }
              style={ caretRotation( isMegaOpen ) }
            >
              ▾
            </span>
          </Link>

          <MegaMenu columns={ megaMenuData } onClose={ onMegaLeave } />
        </li>

        {/* ✅ Fixed dropdown */ }
        <li
          className={ `dropdown ${ isDropdownOpen ? "open" : "" }` }
          onMouseEnter={ () => setIsDropdownOpen( true ) }
          onMouseLeave={ () => setIsDropdownOpen( false ) }
        >
          <Link
            href="/portfolio"
            className="nav-link"
            onClick={ () => setIsDropdownOpen( false ) } // close when navigating
          >
            Portfolio
            {/* <span
              className="dropdown-arrow">▼

            </span> */}
          </Link>
          {/* <ul className="dropdown-menu">
            <li>
              <Link
                href="/portfolio/websites"
                onClick={() => setIsDropdownOpen(false)}
              >
                Websites
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio/apps"
                onClick={() => setIsDropdownOpen(false)}
              >
                Applications
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio/designs"
                onClick={() => setIsDropdownOpen(false)}
              >
                Designs
              </Link>
            </li>
          </ul> */}
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
  );
}
