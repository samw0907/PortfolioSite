import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      id="main-navbar"
      className="sticky top-0 z-50 border-b border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur"
    >
      <div className="container-max flex items-center justify-between py-4">
        <Link
          to="/"
          className="font-josefin tracking-[0.18em] uppercase text-sm sm:text-base text-gray-900 dark:text-white hover:opacity-80 transition"
        >
          Sam Williamson
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "text-sm tracking-wide uppercase font-medium transition",
                    "hover:opacity-80",
                    isActive
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-600 dark:text-gray-300",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="pl-2 border-l border-black/10 dark:border-white/10">
            <DarkModeToggle />
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-black/10 dark:border-white/10 text-gray-800 dark:text-gray-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="text-lg">{open ? "×" : "≡"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-black/10 dark:border-white/10 bg-white dark:bg-[#0f172a]">
          <div className="container-max py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    "py-2 text-sm tracking-wide uppercase font-medium",
                    isActive
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-600 dark:text-gray-300",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="pt-2">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
