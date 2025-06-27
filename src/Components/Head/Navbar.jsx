import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const navList = (
    <ul className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
      <li>
        <NavLink
          to="/"
          className="text-white font-medium text-lg hover:text-cyan-400 transition-all duration-300"
        >
          Home
        </NavLink>
      </li>
      
      <li className="relative" ref={dropdownRef}>
        <button
          className="text-white font-medium text-lg flex items-center gap-1 hover:text-cyan-400 transition-all duration-300"
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
        >
          MiniProjects
          <svg className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-3 w-56 bg-slate-900/80 border border-white/10 backdrop-blur-md rounded shadow-lg z-50 animate-fade-in">
            <NavLink
              to="/todo"
              className="block px-5 py-3 text-sm text-white hover:text-purple-400 hover:bg-white/10 rounded-t-xl transition"
              onClick={() => setIsDropdownOpen(false)}
            >
              Todo Application
            </NavLink>
            <NavLink
              to="/tictactoe"
              className="block px-5 py-3 text-sm text-white hover:text-purple-400 hover:bg-white/10 transition"
              onClick={() => setIsDropdownOpen(false)}
            >
              Tic Tac Toe
            </NavLink>
          </div>
        )}
      </li>

      <li>
        <NavLink
          to="/skills"
          className="text-white font-medium text-lg hover:text-cyan-400 transition-all duration-300"
        >
          About Me
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className="text-white font-medium text-lg hover:text-cyan-400 transition-all duration-300"
        >
          About Us
        </NavLink>
      </li>
    </ul>
  );

  return (
    <nav className="fixed top-2 left-2 right-2 z-50 rounded border backdrop-blur-md bg-slate-900/70 shadow-lg shadow-black/30 font-poppins">
      <div className="px-16 py-2">
        <div className="flex items-center justify-between">
          {/* Logo / Title */}
          <NavLink
            to="/"
            className="flex items-center gap-3 text-white font-semibold text-xl hover:text-purple-400 transition-colors duration-300"
          >
            <img
              src="/profile.jpg"
              alt="Logo"
              className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
            />
            <span className="inline-block text-base sm:text-xl md:text-2xl">Saish Sachin Patil</span>
          </NavLink>


          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">{navList}</div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-purple-400 transition"
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-white/10">
            <div className="space-y-3">{navList}</div>
          </div>
        )}
      </div>
    </nav>
  );
}
