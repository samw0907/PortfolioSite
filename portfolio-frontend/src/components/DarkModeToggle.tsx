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
      className="btn btn-secondary px-4 py-2"
      aria-label="Toggle color theme"
    >
      <span className="flex items-center gap-2">
        {isDark ? (
          <Moon className="w-4 h-4" aria-hidden />
        ) : (
          <Sun className="w-4 h-4" aria-hidden />
        )}
        <span className="hidden sm:inline">
          {isDark ? "Dark" : "Light"}
        </span>
      </span>
    </button>
  );
};

export default DarkModeToggle;
