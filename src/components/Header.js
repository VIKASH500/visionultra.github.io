import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import visionultraLogo from '../assets/visionultra.jpg';

const MenuIcon = ({ isOpen, onClick }) => (
  <button 
    onClick={onClick}
    className="md:hidden p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
    aria-label={isOpen ? "Close menu" : "Open menu"}
    aria-expanded={isOpen}
  >
    <div className="w-6 h-5 flex flex-col justify-between">
      <span className={`block h-0.5 w-6 bg-slate-600 dark:bg-slate-300 transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
      <span className={`block h-0.5 w-6 bg-slate-600 dark:bg-slate-300 transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
      <span className={`block h-0.5 w-6 bg-slate-600 dark:bg-slate-300 transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
    </div>
  </button>
);

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${isActive ? 'text-slate-900 font-semibold' : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'}`
    }
    aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
  >
    {children}
  </NavLink>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between relative">
        <MenuIcon isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />

        {/* logo on the left (site name moved to left side) */}
        <Link to="/" className="flex items-center gap-3 mr-4">
          <img
            src={visionultraLogo}
            alt="VIGUX Logo"
            className="w-10 h-10 object-contain transition-transform group-hover:scale-105"
            loading="eager"
            width="40"
            height="40"
          />
          <div className="text-slate-900 dark:text-white font-semibold text-lg">VIGUX</div>
        </Link>

        {/* left nav - will align left */}
        <div className="hidden md:flex items-center gap-4">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/technology">Technology</NavItem>
        </div>

        {/* right nav - login/signup + theme */}
        <div className="hidden md:flex items-center gap-4 justify-end flex-1">
          <NavItem to="/impact">Impact</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <NavItem to="/login">Login</NavItem>
          <NavItem to="/signup">Sign Up</NavItem>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-0 top-[61px] bg-white/95 backdrop-blur-sm border-b shadow-lg"
          >
            <nav className="container mx-auto py-4 px-6 flex flex-col gap-2">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/about">About</NavItem>
              <NavItem to="/technology">Technology</NavItem>
              <NavItem to="/impact">Impact</NavItem>
              <NavItem to="/contact">Contact</NavItem>
              <div className="h-px bg-slate-100 dark:bg-slate-800 my-2"></div>
              <NavItem to="/login">Login</NavItem>
              <NavItem to="/signup">Sign Up</NavItem>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-sm text-slate-500">Theme:</span>
                <ThemeToggle />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
