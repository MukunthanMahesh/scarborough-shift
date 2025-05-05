import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brand-navyBlueDeep text-brand-offWhite px-4 md:px-6 py-2.5 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <img src="logo.png" alt="Scarborough Shift logo"/>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-6 text-sm">
          <li><Link to="/about" className="hover:underline">About Us</Link></li>
          <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
          <li><Link to="/services" className="hover:underline">Services</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>

        {/* Action Buttons (Desktop) */}
        <div className="hidden md:flex gap-3">
          <button className="bg-brand-offWhite text-brand-darkGray px-3 py-1 rounded text-sm">❤️ Donate to SHN</button>
          <button className="border border-white px-3 py-1 rounded text-sm">Sign Up</button>
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 text-sm px-4">
          <Link to="/about" className="block">About Us</Link>
          <Link to="/faq" className="block">FAQ</Link>
          <Link to="/services" className="block">Services</Link>
          <Link to="/contact" className="block">Contact</Link>
          <button className="w-full bg-brand-offWhite text-brand-darkGray px-3 py-1 rounded">❤️ Donate to SHN</button>
          <button className="w-full border border-brand-offWhite px-3 py-1 rounded">Sign Up</button>
        </div>
      )}
    </nav>
  );
}
