import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/themes', label: 'Themes' },
  { path: '/timeline', label: 'Timeline' },
  { path: '/characters', label: 'Characters' },
  { path: '/quiz', label: 'Quiz' },
  { path: '/poems', label: 'Poems' },
  { path: '/chatbot', label: 'Chatbot' },
];

export function Layout({ children }) {
  const location = useLocation();
  const [theme, setTheme] = useState('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="sticky top-0 z-40 w-full border-b bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold">Afro-Latin Voices</span>
            </Link>
            <nav className="hidden lg:flex space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium ${
                    item.path === location.pathname
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="Open mobile menu"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                </svg>
              </button>
            </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </button>
          </div>
        </div>
      </header>
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  item.path === location.pathname
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
      <footer className="border-t">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-center md:text-left text-sm">
            Built with passion for Afro-Latin literature and culture.
          </p>
        </div>
      </footer>
    </div>
  );
}

