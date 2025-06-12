import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header  id="main-navbar" className="bg-gray-100 dark:bg-gray-800 shadow-md sticky top-0 z-50 backdrop-blur-md bg-opacity-90 dark:bg-opacity-90">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center font-josefin">
        <span className="text-xl font-josefin tracking-wide text-gray-900 dark:text-white">
          Sam Williamson
        </span>
        <div className="flex items-center gap-6">
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
      </nav>
    </header>
  );
};

export default Navbar;
