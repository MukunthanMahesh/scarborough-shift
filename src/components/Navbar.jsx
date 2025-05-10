import { useState } from "react";
import { Link } from "react-router-dom";

// 1. Nav link data 
const NAV_LINKS = [
  { name: "About Us", to: "/about" },
  { name: "FAQ", to: "/faq" },
  { name: "Services", to: "/services" },
  { name: "Contact", to: "/contact" }
];

// 2. Link group renderer
function NavLinks({ className = "" }) {
  return (
    <ul className={`gap-6 text-sm ${className}`}>
      {NAV_LINKS.map(({ name, to }) => (
        <li key={to}>
          <Link to={to} className="hover:underline">{name}</Link>
        </li>
      ))}
    </ul>
  );
}

// 3. Buttons renderer (shared for desktop & mobile)
function ActionButtons({ className = "", fullWidth = false }) {
  const base = fullWidth ? "w-full" : "";
  return (
    <div className={`gap-3 ${className}`}>
      <button className={`${base} bg-brand-offWhite text-brand-darkGray px-3 py-1 rounded text-sm`}>
        ❤️ Donate to SHN
      </button>
      <button className={`${base} border border-white px-3 py-1 rounded text-sm`}>
        Sign Up
      </button>
    </div>
  );
}

// 4. Main Navbar component
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brand-navyBlueDeep text-brand-offWhite px-4 md:px-6 py-2.5 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">

        {/* Logo linking to home */}
        <Link to="/">
          <img src="logo.png" alt="Scarborough Shift logo" className="w-28 md:w-32 cursor-pointer" />
        </Link>
        
        {/* Desktop view */}
        <div className="hidden md:flex items-center gap-6">
          <NavLinks className="flex" />
          <ActionButtons className="flex" />
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 text-sm px-4">
          <NavLinks className="flex flex-col space-y-2" />
          <ActionButtons className="flex flex-col gap-2" fullWidth />
        </div>
      )}
    </nav>
  );
}
