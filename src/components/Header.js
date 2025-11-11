import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import visionultraLogo from '../assets/visionultra.jpg';

const NavItem = ({ to, children, className }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `relative text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-primary ${isActive ? 'text-primary' : ''} ${className || ''}`
    }
  >
    {children}
    {({ isActive }) =>
      isActive && (
        <motion.div
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
          layoutId="underline"
        />
      )
    }
  </NavLink>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-slate-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={visionultraLogo}
              alt="VIGUX Logo"
              className="w-10 h-10 object-contain"
              width="40"
              height="40"
            />
            <span className="text-xl font-bold text-slate-900">VIGUX</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/technology">Technology</NavItem>
            <NavItem to="/impact">Impact</NavItem>
            <NavItem to="/contact">Contact</NavItem>
            <NavItem to="/pricing">Pricing</NavItem>
            <NavItem to="/demo">Demo</NavItem>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/login" className="text-sm font-medium text-slate-700 hover:text-primary">Login</Link>
            <Link to="/signup" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-opacity-90">
              Sign Up
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-slate-700 hover:bg-slate-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-slate-200"
          >
            <div className="px-6 pt-2 pb-4 space-y-1">
              <NavItem to="/" className="block py-2">Home</NavItem>
              <NavItem to="/about" className="block py-2">About</NavItem>
              <NavItem to="/technology" className="block py-2">Technology</NavItem>
              <NavItem to="/impact" className="block py-2">Impact</NavItem>
              <NavItem to="/contact" className="block py-2">Contact</NavItem>
              <NavItem to="/pricing" className="block py-2">Pricing</NavItem>
              <NavItem to="/demo" className="block py-2">Demo</NavItem>
              <div className="border-t border-slate-200 pt-4 mt-4 flex items-center gap-4">
                <Link to="/login" className="text-sm font-medium text-slate-700 hover:text-primary">Login</Link>
                <Link to="/signup" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-opacity-90">
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
