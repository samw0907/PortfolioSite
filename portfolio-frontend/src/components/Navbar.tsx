import { Link, useLocation } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'

const Navbar = () => {
  const location = useLocation()

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-xl font-semibold">Sam Williamson</span>
        <div className="flex items-center gap-4">
          {navItems.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`hover:underline ${
                location.pathname === to ? 'font-bold text-blue-600 dark:text-blue-400' : ''
              }`}
            >
              {label}
            </Link>
          ))}
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
