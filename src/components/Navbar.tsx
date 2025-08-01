import React, { useState } from 'react';
import logo from '../assets/2.png';
import { LoginButton, useAuth } from './FutureverseAuthProvider';

/**
 * The navigation bar appears at the top of every page. It uses a dark
 * background to blend into the site's design and supports a mobile
 * hamburger menu. Navigation links scroll to their respective
 * sections via anchor tags. The right side includes sign‑in and a
 * prominent "Get Started" call to action.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { userSession } = useAuth();

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <button
          className="flex items-center space-x-2 focus:outline-none bg-transparent border-none p-0 m-0"
          onClick={() => {
            if (window.location.pathname !== '/') {
              window.location.href = '/';
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <img src={logo} alt="Evolution Stables Logo" className="h-6 w-auto opacity-60" />
        </button>
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/#mission" className="hover:text-gold transition-colors">Our Mission</a>
          <a href="/#about" className="hover:text-gold transition-colors">About</a>
          <a href="/#innovation" className="hover:text-gold transition-colors">Innovation</a>
          {!userSession ? (
            <LoginButton>
              <span className="hover:text-gold transition-colors">MyStable</span>
            </LoginButton>
          ) : (
            <a href="/mystable" className="hover:text-gold transition-colors">MyStable</a>
          )}
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {userSession ? (
            <LoginButton />
          ) : (
            <>
              <LoginButton label="SIGN IN" />
              <LoginButton label="GET STARTED" />
            </>
          )}
        </div>
        {/* Mobile burger */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setOpen((o) => !o)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>
      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-black border-b border-gray-800">
          <a href="/#mission" className="block" onClick={() => setOpen(false)}>
            Our Mission
          </a>
          <a href="/#about" className="block" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="/#innovation" className="block" onClick={() => setOpen(false)}>
            Innovation
          </a>
          <a href="/#mystable" className="block" onClick={() => setOpen(false)}>
            MyStable
          </a>
          {userSession ? (
            <LoginButton />
          ) : (
            <>
              <LoginButton label="SIGN IN" />
              <LoginButton label="GET STARTED" />
            </>
          )}
        </div>
      )}
    </nav>
  );
}
