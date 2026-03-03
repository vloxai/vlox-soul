import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { Theme } from '../types';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const options: { id: Theme; icon: React.ReactNode; label: string }[] = [
    { id: 'light', icon: <Sun size={14} />, label: '라이트' },
    { id: 'dark', icon: <Moon size={14} />, label: '다크' },
    { id: 'system', icon: <Monitor size={14} />, label: '시스템' },
  ];

  return (
    <div className="inline-flex p-1 bg-zinc-200/50 dark:bg-zinc-800/50 rounded-lg backdrop-blur-sm transition-colors duration-300">
      {options.map((opt) => (
        <button
          key={opt.id}
          onClick={() => setTheme(opt.id)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
            theme === opt.id
              ? 'bg-white dark:bg-zinc-700 text-indigo-600 dark:text-indigo-300 shadow-sm'
              : 'text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200'
          }`}
          title={opt.label}
        >
          {opt.icon}
          <span className="hidden sm:inline">{opt.label}</span>
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;