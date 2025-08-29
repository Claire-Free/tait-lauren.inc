

import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Hide navbar on home page
  if (location.pathname === "/") {
    return null;
  }

  return (
    <nav className="bg-white bg-opacity-80 backdrop-blur-md fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-end items-center p-4">
        {/* Oyster Shell (menu toggle) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2"
          aria-label="Toggle menu"
        >
          <img
            src="/assets/2.svg"
            alt="Menu"
            className="h-16 w-16 transform transition duration-300 hover:scale-110 hover:rotate-12 cursor-pointer"
          />
        </button>
      </div>

<div
  className={`fixed top-0 right-0 h-screen h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
    isOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="text-gray-600 hover:text-[#1957b8] text-2xl"
          >
            ✕
          </button>
        </div>

        <ul className="flex flex-col items-center space-y-6 mt-10 py-8 text-gray-800 font-medium bg-white text-lg">
             <li className="group relative">
            <NavLink to="/" onClick={() => setIsOpen(false)} className="hover:text-[#1957b8]">
              Home
            </NavLink>
            <span className="pointer-events-none absolute -bottom-1 left-0 h-[6px] w-0 overflow-hidden transition-all duration-300 group-hover:w-full">
              <svg viewBox="0 0 120 6" preserveAspectRatio="none" className="h-full w-full text-[#1957b8]">
                <path d="M0 3 C 10 0, 20 6, 30 3 S 50 0, 60 3 90 6, 120 3" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
          </li>

          {/* About */}
          <li className="group relative">
            <NavLink to="/about" onClick={() => setIsOpen(false)} className="hover:text-[#1957b8]">
              About
            </NavLink>
            <span className="pointer-events-none absolute -bottom-1 left-0 h-[6px] w-0 overflow-hidden transition-all duration-300 group-hover:w-full">
              <svg viewBox="0 0 120 6" preserveAspectRatio="none" className="h-full w-full text-[#1957b8]">
                <path d="M0 3 C 10 0, 20 6, 30 3 S 50 0, 60 3 90 6, 120 3" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
          </li>

          {/* Custom Order */}
          <li className="group relative">
            <NavLink to="/pricing" onClick={() => setIsOpen(false)} className="hover:text-[#1957b8]">
              Custom Order
            </NavLink>
            <span className="pointer-events-none absolute -bottom-1 left-0 h-[6px] w-0 overflow-hidden transition-all duration-300 group-hover:w-full">
              <svg viewBox="0 0 120 6" preserveAspectRatio="none" className="h-full w-full text-[#1957b8]">
                <path d="M0 3 C 10 0, 20 6, 30 3 S 50 0, 60 3 90 6, 120 3" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
          </li>

          {/* Contact */}
          <li className="group relative">
            <NavLink to="/contact" onClick={() => setIsOpen(false)} className="hover:text-[#1957b8]">
              Contact
            </NavLink>
            <span className="pointer-events-none absolute -bottom-1 left-0 h-[6px] w-0 overflow-hidden transition-all duration-300 group-hover:w-full">
              <svg viewBox="0 0 120 6" preserveAspectRatio="none" className="h-full w-full text-[#1957b8]">
                <path d="M0 3 C 10 0, 20 6, 30 3 S 50 0, 60 3 90 6, 120 3" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
          </li>
        </ul>
      </div>
    
    </nav>
  );
};

export default Navbar;
