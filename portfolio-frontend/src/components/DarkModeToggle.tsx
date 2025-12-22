import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;

    const shouldUseDark = stored ? stored === "dark" : Boolean(systemPrefersDark);
    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  }

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center justify-center px-3 py-2 rounded-lg border border-black/10 dark:border-white/10 text-xs uppercase tracking-wider text-gray-800 dark:text-gray-100 hover:opacity-80 transition"
      aria-label="Toggle color theme"
    >
      {isDark ? "Dark" : "Light"}
    </button>
  );
}
