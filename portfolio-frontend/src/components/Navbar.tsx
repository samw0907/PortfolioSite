import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isActive = (to: string) => location.pathname === to;

  return (
    <header
      id="main-navbar"
      className="sticky top-0 z-50 w-full backdrop-blur bg-surface/85 border-b border-border/10"
    >
      <div className="container-max">
        <div className="flex items-center justify-between py-4">
          <Link
            to="/"
            className="font-display text-sm sm:text-base uppercase tracking-[0.18em] font-semibold text-text"
            aria-label="Go to home"
          >
            Sam Williamson
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {navItems.map((item) => {
                const active = isActive(item.to);

                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`font-display text-xs uppercase tracking-[0.18em] font-semibold transition-opacity hover:opacity-80 ${
                      active ? "text-text underline" : "text-muted"
                    }`}
                    style={{
                      textUnderlineOffset: active ? "8px" : undefined,
                      textDecorationColor: "rgb(var(--border) / 0.25)",
                    }}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <DarkModeToggle />
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden btn btn-secondary px-4 py-2"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-5">
            <div className="card p-5">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => {
                  const active = isActive(item.to);

                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`font-display text-sm uppercase tracking-[0.18em] font-semibold transition-opacity hover:opacity-80 ${
                        active ? "text-text underline" : "text-muted"
                      }`}
                      style={{
                        textUnderlineOffset: active ? "8px" : undefined,
                        textDecorationColor: "rgb(var(--border) / 0.25)",
                      }}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-6">
                <DarkModeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
