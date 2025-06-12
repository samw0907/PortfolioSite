import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header
      id="main-navbar"
      className="bg-gray-100 dark:bg-gray-800 shadow-md sticky top-0 z-50 backdrop-blur-md bg-opacity-90 dark:bg-opacity-90"
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between font-josefin">
        <span className="text-xl tracking-wide text-gray-900 dark:text-white">
          Sam Williamson
        </span>

        {/* DESKTOP NAV LINKS (visible on lg and up) */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`underline-from-left transition-colors duration-200 ${
                location.pathname === to
                  ? 'font-semibold text-teal-600 dark:text-teal-400'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
              aria-current={location.pathname === to ? 'page' : undefined}
            >
              {label}
            </Link>
          ))}
          <DarkModeToggle />
        </div>

        {/* MOBILE: Hamburger Icon (visible below lg) */}
        <button
          className="lg:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* MOBILE: Dropdown Menu (visible when open) */}
      {isMenuOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-2 font-josefin">
          {navItems.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsMenuOpen(false)}
              className={`block underline-from-left transition-colors duration-200 ${
                location.pathname === to
                  ? 'font-semibold text-teal-600 dark:text-teal-400'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
              aria-current={location.pathname === to ? 'page' : undefined}
            >
              {label}
            </Link>
          ))}

          <div className="pt-2">
            <DarkModeToggle />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
