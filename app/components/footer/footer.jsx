import Link from "next/link";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import NewsletterWidget from "../newsletter/NewsletterWidget";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-b from-[#0b1220] to-[#0a0f1a] text-white flex flex-col items-center justify-center">

      {/* INNER GRID WRAPPER */ }
      <div
        className="
          w-full max-w-[1200px] mx-auto py-14 px-6
          grid grid-cols-4 gap-10
          lg:grid-cols-4
          md:grid-cols-2
          max-sm:grid-cols-1
        "
      >

        {/* COLUMN 1 */ }
        <div className="flex flex-col gap-4 md:items-start max-sm:items-center max-sm:text-center">
          <Link href="/" aria-label="Enoves home">
            <svg
              className="w-40 mx-auto md:mx-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 356 65.2"
              role="img"
            >
              {/* SVG unchanged */ }
              <g>
                <path fill="#FFFFFF" d="M144.9,27.8v30.1h-15.1V31.5c0-6.3-2.8-10.2-7.8-10.2c-5.3,0-8.7,4.5-8.7,11.3v25.4H98.2V10.5h14.2V19
                c2.5-6,8.1-10,15.6-10C138,9,144.9,16,144.9,27.8z"/>
                <path fill="#FFFFFF" d="M147.5,34.1c0-14.3,11.4-25.1,25.9-25.1s25.7,10.9,25.7,25.1s-11.3,25.4-25.7,25.4S147.5,48.6,147.5,34.1z
                M184.7,34.2c0-7.2-4.8-12-11.3-12s-11.3,4.8-11.3,12s4.8,11.9,11.3,11.9S184.7,41.2,184.7,34.2z"/>
                <path fill="#FFFFFF" d="M241.9,10.5l-23.4,48.6h-1.8l-23.5-48.6h15.4l8.9,21.9l9.2-21.9H241.9L241.9,10.5z" />
                <path fill="#FFFFFF" d="M281.7,38.1h-30.9c1.3,6.4,5.7,8.7,13.5,8.7c6.9,0,12.3-1.9,15.7-4.2V55c-4.3,3-11.5,4.5-17.7,4.5
                c-16,0-26-9.6-26-25.4c0-14.8,9.8-25.1,24-25.1c13,0,22.1,8.5,22.1,22.7C282.5,34.3,282.1,36.4,281.7,38.1z M250.6,29.7h18.8
                c-0.3-5.8-3.6-8.7-9.2-8.7C255,21,251.5,24,250.6,29.7z"/>
                <path fill="#FFFFFF" d="M284.5,55.6V44.2c2.5,1.8,7.2,3.6,11.7,3.6c5.6,0,7.8-1.9,7.8-4.3c0-1.8-1.1-2.8-4.1-4.1l-5-2.1
                c-6.7-2.9-10.4-6.8-10.4-13.5c0-8.2,7.3-14.8,19.7-14.8c4.5,0,8.9,1.1,11,2.4v11.6c-2.4-1.2-5.5-2.4-9.2-2.4
                c-4.4,0-6.9,1.3-6.9,3.6c0,1.7,0.9,2.6,3.4,3.7l4.7,2c7.5,3.1,10.8,7.1,10.8,13.8c0,8.4-6.7,15.8-19.8,15.8
                C292.1,59.5,287.1,57.8,284.5,55.6z"/>
              </g>
              <path fill="#5956E9" d="M60.6,41.4H8c-4.4,0-8-3.9-8-8.8s3.6-8.8,8-8.8h52.6c4.4,0,8,3.9,8,8.8S65,41.4,60.6,41.4z" />
              <path fill="#5956E9" d="M78.9,65.2H18.6c-5.1,0-9.2-3.9-9.2-8.8c0-4.8,4.1-8.8,9.2-8.8h60.2c5.1,0,9.2,3.9,9.2,8.8
              C88.1,61.3,84,65.2,78.9,65.2z"/>
              <path fill="#5956E9" d="M78.9,17.5H18.6c-5.1,0-9.2-3.9-9.2-8.8c0-4.8,4.1-8.8,9.2-8.8h60.2c5.1,0,9.2,3.9,9.2,8.8
              C88.1,13.6,84,17.6,78.9,17.5z"/>
            </svg>
          </Link>

          <h3 className="text-sm max-w-[260px] py-4 text-slate-300 md:text-left max-sm:text-center">
           We are a global digital brand tech agency creating standout brands and scalable digital products for ambitious businesses.
          </h3>

          <div className="flex flex-col gap-2">
            {/* <div className="flex items-center gap-2 md:justify-start max-sm:justify-center">
              <i className="fa-solid fa-phone"></i>
              <a href="https://wa.me/923216013698" className="text-white hover:text-indigo-500">
                +92 321 6013698
              </a>
            </div> */}

            <div className="flex items-center gap-2 md:justify-start max-sm:justify-center">
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:support@enoves.com" className="text-white hover:text-indigo-500">
                support@enoves.com
              </a>
            </div>
          </div>
        </div>

        {/* COLUMN 2 */ }
        <div className="flex flex-col gap-4 md:items-start max-sm:items-center max-sm:text-center">
          <h4 className="text-xl font-bold">Company</h4>
          <ul className="flex flex-col gap-3 text-slate-300">
            <li>
              <Link href="/about" className="group inline-flex items-center gap-2 hover:text-indigo-500 transition-colors">
                {/* <span className="group-hover:opacity-100 transition-opacity">→</span> */}
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link href="/team" className="group inline-flex items-center gap-2 hover:text-indigo-500 transition-colors">
                {/* <span className="group-hover:opacity-100 transition-opacity">→</span> */}
                <span>Our Team</span>
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="group inline-flex items-center gap-2 hover:text-indigo-500 transition-colors">
                {/* <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span> */}
                <span>Our Portfolio</span>
              </Link>
            </li>
            <li>
              <Link href="/careers" className="group inline-flex items-center gap-2 hover:text-indigo-500 transition-colors">
                {/* <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span> */}
                <span>Careers</span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="group inline-flex items-center gap-2 hover:text-indigo-500 transition-colors">
                {/* <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span> */}
                <span>Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 3 */ }
        <div className="flex flex-col gap-4 md:items-start max-sm:items-center max-sm:text-center">
          <h4 className="text-xl font-bold">Our Services</h4>
          <ul className="flex flex-col gap-3 text-slate-300">
            <li>
              <Link href="/services/digital-marketing" className="group inline-flex items-center gap-2 hover:text-indigo-500 transition-colors">
                {/* <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span> */}
                <span>Digital Marketing</span>
              </Link>
            </li>
            <li>
              <Link href="/services/web-development" className="group inline-flex items-center gap-2 hover:text-indigo-500 transition-colors">
                {/* <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span> */}
                <span>Web Development</span>
              </Link>
            </li>
            <li>
              <Link href="/services/custom-software-development" className="group inline-flex items-center gap-2 hover:text-indigo-500 transition-colors">
                {/* <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span> */}
                <span>Custom SWD</span>
              </Link>
            </li>
            <li>
              <Link href="/services/product-hunt-support" className="group inline-flex items-center gap-2 hover:text-indigo-500 transition-colors">
                {/* <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span> */}
                <span>Product Design</span>
              </Link>
            </li>
            <li>
              <Link href="/services" className="group inline-flex items-center gap-2 hover:text-indigo-500 transition-colors">
                {/* <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span> */}
                <span>More Services </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 4 - Newsletter */ }
        <div
          className="
            flex-1 
            min-w-[260px]
            
            md:max-lg:w-[260px] 
            md:max-lg:min-w-[260px]

            relative
            md:right-[30px]
            flex flex-col 
            max-md:w-full max-md:items-center

          "
        >
          <NewsletterWidget />
        </div>
      </div>

      {/* FOOTER BOTTOM */ }
      <div
        className="
          w-full max-w-[1200px] border-t border-slate-700 px-6 py-4 
          flex flex-wrap justify-between items-center gap-4
          max-sm:flex-col max-sm:text-center
        "
      >
        <p className="text-slate-400 text-sm">
          © { year } Enoves. All rights reserved.
        </p>

        <div className="flex gap-4 text-xl">
          <a href="https://twitter.com" target="_blank" className="hover:opacity-70"><FaTwitter /></a>
          <a href="https://facebook.com" target="_blank" className="hover:opacity-70"><FaFacebook /></a>
          <a href="https://instagram.com" target="_blank" className="hover:opacity-70"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" className="hover:opacity-70"><FaLinkedin /></a>
        </div>
      </div>

    </footer>
  );
}