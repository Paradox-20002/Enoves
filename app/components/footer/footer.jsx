import Link from "next/link";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-b from-[#0b1220] to-[#0a0f1a] text-white flex flex-col items-center">

      {/* INNER GRID */ }
      <div className="w-full max-w-[1200px] mx-auto py-12 flex flex-wrap justify-between gap-10">

        {/* COLUMN 1 */ }
        <div className="flex flex-col gap-4 flex-1 min-w-[260px] max-w-[340px]">
          <Link href="/" aria-label="Enoves home">
            <svg
              className="w-40"
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

          <h3 className="text-xl font-bold pr-20">
            We are a global digital brand tech agency
          </h3>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <FaPhone className="text-lg" />
              <a href="https://wa.me/923216013698" className="text-white">
                +92 321 6013698
              </a>
            </div>

            <div className="flex items-center gap-2">
              <FaEnvelope className="text-lg" />
              <a href="mailto:hello@enoves.com" className="text-white">
                hello@enoves.com
              </a>
            </div>
          </div>
        </div>

        {/* COLUMN 2 */ }
        <div className="flex flex-col gap-4 min-w-60">
          <h4 className="text-xl font-bold">Company</h4>
          <ul className="flex flex-col gap-3 text-slate-300">
            <li><Link href="/about" className="hover:text-indigo-500">About us</Link></li>
            <li><Link href="/team" className="hover:text-indigo-500">Our team</Link></li>
            <li><Link href="/portfolio" className="hover:text-indigo-500">Our portfolio</Link></li>
            <li><Link href="/careers" className="hover:text-indigo-500">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-indigo-500">Contact us</Link></li>
          </ul>
        </div>

        {/* COLUMN 3 */ }
        <div className="flex flex-col gap-4 flex-1 min-w-[240px]">
          <h4 className="text-xl font-bold">Industries</h4>
          <ul className="flex flex-col gap-3 text-slate-300">
            <li><Link href="/" className="hover:text-indigo-500">Finance and Fintech</Link></li>
            <li><Link href="/" className="hover:text-indigo-500">Healthcare and Life</Link></li>
            <li><Link href="/" className="hover:text-indigo-500">Retail and E-commerce</Link></li>
            <li><Link href="/" className="hover:text-indigo-500">Government and Public</Link></li>
            <li><Link href="/" className="hover:text-indigo-500">Travel and Hospitality</Link></li>
          </ul>
        </div>

      </div>

      {/* FOOTER BOTTOM */ }
      <div className="w-full max-w-[1200px] border-t border-slate-700 px-6 py-4 flex flex-wrap justify-between items-center gap-4">
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
