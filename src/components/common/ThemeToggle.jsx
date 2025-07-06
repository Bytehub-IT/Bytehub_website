import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ theme, toggleTheme }) => {
  const [darkMode, setDarkMode] = useState(theme === 'dark');

  useEffect(() => {
    setDarkMode(theme === 'dark');
  }, [theme]);

  const handleToggle = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    toggleTheme();
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', newMode);
    }
  };

  return (
    <button
      onClick={handleToggle}
      className="w-14 h-8 flex items-center p-1 bg-[#eaf1fb] dark:bg-[#1e293b] border-2 border-blue-500 rounded-full transition-colors duration-300 relative shadow-sm focus:outline-none"
      aria-label="Toggle theme"
      title="Toggle light/dark mode"
      type="button"
    >
      <div
        className={`absolute left-1 transition-all duration-300 ease-in-out transform
          ${darkMode ? 'translate-x-6' : 'translate-x-0'}
          w-6 h-6 rounded-full flex items-center justify-center shadow-md
          ${darkMode ? 'bg-white' : 'bg-black'}`}
        style={{
          border: `2px solid ${darkMode ? '#fff' : '#000'}`,
          boxSizing: 'border-box',
        }}
      >
        {darkMode ? (
          <Sun size={18} className="text-yellow-400" />
        ) : (
          <Moon size={18} className="text-white" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
