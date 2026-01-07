import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedPreference = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const shouldUseDark =
      storedPreference === "dark" || (!storedPreference && systemPrefersDark);

    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="btn btn-secondary dark-toggle"
      aria-label="Toggle color theme"
    >
      <span className="dark-toggle-inner">
        {isDark ? <Moon className="dark-toggle-icon" aria-hidden /> : <Sun className="dark-toggle-icon" aria-hidden />}
        <span className="dark-toggle-label">{isDark ? "Dark" : "Light"}</span>
      </span>
    </button>
  );
};

export default DarkModeToggle;

