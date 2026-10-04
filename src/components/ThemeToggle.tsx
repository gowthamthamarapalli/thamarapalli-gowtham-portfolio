import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export default function ThemeToggle({ className = '', showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center gap-2 p-2 rounded-xl transition-all duration-200 cursor-pointer border select-none
        ${
          isDark
            ? 'bg-slate-900/80 border-slate-700/80 text-amber-300 hover:text-amber-200 hover:bg-slate-800 hover:border-slate-600 shadow-sm'
            : 'bg-white/90 border-slate-200 text-indigo-600 hover:text-indigo-700 hover:bg-slate-100 hover:border-slate-300 shadow-sm'
        } ${className}`}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 transition-transform duration-300 rotate-0 scale-100 text-amber-400" />
        ) : (
          <Moon className="w-4 h-4 transition-transform duration-300 -rotate-12 scale-100 text-indigo-600" />
        )}
      </div>

      {showLabel && (
        <span className="text-xs font-medium">
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </span>
      )}
    </button>
  );
}
