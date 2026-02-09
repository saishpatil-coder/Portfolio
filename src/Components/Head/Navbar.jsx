import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import "../../styles/inter-font.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const projectsRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Skills', to: '/skills' },
    { name: 'Contact', to: '/#contact' },
  ];

  const projects = [
    { name: 'Calculator', to: '/calculator', icon: '🧮' },
    { name: 'Todo App', to: '/todo', icon: '📝' },
    { name: 'Tic Tac Toe', to: '/tictactoe', icon: '⭕' },
    { name: 'Currency Converter', to: '/currency', icon: '💱' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (projectsRef.current && !projectsRef.current.contains(event.target)) {
        setIsProjectsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleHashClick = (e) => {
    e.preventDefault();
    navigate(e);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 font-sans ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-slate-700/50' : 'bg-slate-900/80 backdrop-blur-md shadow-lg'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <NavLink to="/" className="flex items-center space-x-3">
            <img
              className="h-10 w-10 rounded-full object-cover border-2 border-slate-600"
              src="/profile.jpg"
              alt="Logo"
            />
            <span className="text-white text-lg font-semibold tracking-wide">Saish Sachin Patil</span>
          </NavLink>

          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `text-white text-md font-medium hover:text-[#2cb67d] transition duration-200 ${isActive ? 'text-[#2cb67d]' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="relative" ref={projectsRef}>
              <button
                onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                className="text-white text-md font-medium hover:text-[#2cb67d] flex items-center gap-1"
              >
                Projects <FaChevronDown className={`transition-transform ${isProjectsOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isProjectsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute mt-2 w-48 bg-slate-800 text-white rounded-md shadow-xl py-2 z-50"
                  >
                    {projects.map((proj) => (
                      <NavLink
                        key={proj.name}
                        to={proj.to}
                        onClick={() => setIsProjectsOpen(false)}
                        className="block px-4 py-2 hover:bg-slate-700 transition"
                      >
                        {proj.icon} {proj.name}
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#7f5af0] focus:outline-none"
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
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-slate-900 text-white px-4 pb-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-2 mt-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 px-2 rounded hover:bg-slate-700 transition ${isActive ? 'text-[#2cb67d]' : ''}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-2 border-t border-slate-600">
                {projects.map((proj) => (
                  <NavLink
                    key={proj.name}
                    to={proj.to}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 px-2 rounded hover:bg-slate-700 transition"
                  >
                    {proj.icon} {proj.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
