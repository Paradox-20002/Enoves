"use client";
import {
  FaBars,
  FaTimes,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import "./sidebar.css";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Sidebar() {
  const [ isOpen, setIsOpen ] = useState( false );
  const [ email, setEmail ] = useState( "" );

  const handleChange = ( e ) => {
    setEmail( e.target.value );
  };
  const toggleSidebar = () => setIsOpen( ( prev ) => !prev );
  useEffect( () => {
    const handleClick = ( e ) => {
      if ( !e.target.closest( ".sidebar-menu" ) ) {
        setIsOpen( false );
      }
    };
    if ( isOpen ) document.addEventListener( "click", handleClick );
    return () => {
      document.removeEventListener( "click", handleClick );
    };
  }, [ isOpen ] );
  return (
    <>
      <div className="sidebar">
        <button className="sidebar-toggle-btn" onClick={ toggleSidebar }>
          <FaBars />
        </button>
        { isOpen && (
          <div className="sidebar-menu">
            <div>
              <button className="sidebar-close-btn" onClick={ toggleSidebar }>
              <FaTimes />
              </button>
              <div>
                <Image src="/favicon.ico" alt="logo" width={ 60 } height={ 60 } />
              </div>
            </div>
            <h2 className="sidebar-heading">
              We are global digital brand tech agency
            </h2>
            <div className="flex items-center gap-4 p-2 mt-6 rounded-md border cursor-pointer hover:bg-white/5 transition-all" style={{border: '1px solid rgba(255, 255, 255, 0.04)', background: 'rgba(255, 255, 255, 0.01)'}}>
              {/* Icon */}
              <span className="flex items-center justify-center text-xl text-white flex-shrink-0" style={{width: '44px'}}>
                <i className="fa-solid fa-location-dot"></i>
              </span>

              {/* City and Address */}
              <div className="flex flex-col flex-1 min-w-0">
                <h2 className="text-base font-semibold text-white m-0">New York</h2>
                <h5 className="text-xs text-gray-400 m-0 mt-1" style={{color: '#cbd5e1'}}>
                  123 Business St, Suite 456, City, State, ZIP Code 3456, Country.
                </h5>
              </div>
            </div>

            <div className="sidebar-mail">
              <div className="sidebar-mail-icon">
                <FaEnvelope />
              </div>
              <div className="sidebar-mail-text">
                <h6>send us mail</h6>
                <h3>info@example.com</h3>
              </div>
            </div>
            <div className="sidebar-mail">
              <div className="sidebar-mail-icon">
                <span><i className="fa-solid fa-phone"></i></span>
              </div>
              <div className="sidebar-mail-text">
                <h6>Call 24/7</h6>
                <h3>{ "+92 321 601369" } </h3>
              </div>
            </div>
            <h4 className="sidebar-subscribe">Subscribe to get free updates</h4>
            <form className="relative mt-2" action={ "https://getform.io/f/amdjppjb" } method="POST" >
              <input
                name="email"
                type="email"
                placeholder="youremail@gmail.com"
                value={ email }
                onChange={ handleChange }
                className="w-full px-4 py-3 pr-12 rounded border border-white/10 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-lg hover:text-indigo-400"
              >
                <FaPaperPlane />
              </button>
            </form>
            <div className="sidebar-icons">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        ) }
      </div>
    </>
  );
}
