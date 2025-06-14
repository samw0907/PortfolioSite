import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedPreference = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedPreference === 'dark' || (!storedPreference && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newMode);
  };

  return (
<button
  onClick={toggleTheme}
  className="px-4 py-2 sm:px-3 sm:py-1 border border-gray-400 dark:border-gray-600 rounded text-sm transition"
  aria-label="Toggle Dark Mode"
>
  {isDark ? '🌙 Dark' : '☀️ Light'}
</button>

  );
};

export default DarkModeToggle;
