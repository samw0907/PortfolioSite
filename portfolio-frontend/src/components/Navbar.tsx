// src/components/Navbar.tsx
import { useEffect, useMemo, useRef, useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

type NavItem = {
  href: string;
  label: string;
  id: string;
};

const navItems: NavItem[] = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#about", label: "About", id: "about" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#contact", label: "Contact", id: "contact" },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");

  const ids = useMemo(() => navItems.map((n) => n.id), []);
  const lockRef = useRef(false);
  const lockTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (lockTimerRef.current !== null) window.clearTimeout(lockTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (lockRef.current) return;

        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => {
            const at = (a.target as HTMLElement).getBoundingClientRect().top;
            const bt = (b.target as HTMLElement).getBoundingClientRect().top;
            return Math.abs(at) - Math.abs(bt);
          })[0];

        const id = (visible?.target as HTMLElement | undefined)?.id;
        if (id) setActiveId(id);
      },
      {
        root: null,
        rootMargin: `-${76 + 8}px 0px -60% 0px`,
        threshold: [0.01, 0.1, 0.2, 0.35, 0.5],
      }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [ids]);

  const onNavClick = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOpen(false);

    lockRef.current = true;
    setActiveId(id);
    scrollToId(id);
    history.replaceState(null, "", `#${id}`);

    if (lockTimerRef.current !== null) window.clearTimeout(lockTimerRef.current);
    lockTimerRef.current = window.setTimeout(() => {
      lockRef.current = false;
    }, 700);
  };

  return (
    <header id="main-navbar" className="navbar">
      <div className="container-max">
        <div className="navbar-row">
          <a href="#home" onClick={onNavClick("home")} className="navbar-brand" aria-label="Go to home">
            Sam Williamson
          </a>

          <div className="navbar-desktop">
            <nav className="navbar-nav" aria-label="Primary">
              {navItems.map((item) => {
                const active = activeId === item.id;

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={onNavClick(item.id)}
                    className={`navbar-link ${active ? "is-active" : ""}`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <DarkModeToggle />
          </div>

          <button
            type="button"
            className="navbar-mobile-toggle btn btn-secondary"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open && (
          <div className="navbar-mobile">
            <div className="card navbar-mobile-card">
              <nav className="navbar-mobile-nav" aria-label="Mobile">
                {navItems.map((item) => {
                  const active = activeId === item.id;

                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={onNavClick(item.id)}
                      className={`navbar-link navbar-link-lg ${active ? "is-active" : ""}`}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>

              <div className="navbar-mobile-toggle-row">
                <DarkModeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
