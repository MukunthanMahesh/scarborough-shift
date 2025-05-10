import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Nav link data 
const NAV_LINKS = [
  { name: "About Us", to: "/about" },
  { name: "FAQ", to: "/faq" },
  { name: "Services", to: "/services" },
  { name: "Contact", to: "/contact" }
];

// Link group renderer
function NavLinks({ className = "", currentPath }) {
  return (
    <ul className={`gap-8 text-sm md:text-base flex ${className}`}>
      {NAV_LINKS.map(({ name, to }) => {
        const isActive = currentPath === to;

        return (
          <li key={to} className="relative">
            <Link
              to={to}
              className="no-underline hover:no-underline relative inline-block"
            >
              {name}
              {/* underline indicator */}
              <span
                className={`absolute -bottom-1 left-0 h-[3px] w-full origin-left transform transition-transform duration-300 ${
                  isActive ? "scale-x-100 bg-brand-offWhite" : "scale-x-0 bg-brand-darkGray"
                }`}
              ></span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}


// Buttons renderer
function ActionButtons({ className = "", fullWidth = false }) {
  const base = fullWidth ? "w-full" : "";
  return (
    <div className={`gap-3 ${className}`}>
      <button className={`${base} bg-brand-offWhite text-brand-black px-3 py-1 rounded text-sm`}>
        ❤️ Donate to SHN
      </button>
      <button className={`${base} border border-white px-3 py-1 rounded text-sm`}>
        Sign Up
      </button>
    </div>
  );
}

// Main Navbar component
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-40 bg-brand-navyBlueDeep text-brand-offWhite px-4 md:px-6 py-4 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">

        {/* Logo linking to home */}
        <Link to="/">
          <img src="logo.png" alt="Scarborough Shift logo" className="w-32 md:w-40 cursor-pointer" />
        </Link>

        {/* Desktop view */}
        <div className="hidden md:flex items-center gap-6">
          <NavLinks className="flex" currentPath={location.pathname} />
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
