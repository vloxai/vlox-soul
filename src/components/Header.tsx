import React from 'react';
import { Ghost } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="w-full py-8 flex flex-col items-center">
      <div className="w-full flex justify-end mb-4">
        <ThemeToggle />
      </div>
      <div className="inline-flex items-center justify-center p-3 mb-4 bg-indigo-100 dark:bg-indigo-900/50 rounded-2xl text-indigo-600 dark:text-indigo-400 transition-colors duration-300">
        <Ghost size={32} />
      </div>
      <h1 className="text-4xl font-black tracking-tight text-zinc-900 dark:text-white mb-2">
        소울 <span className="text-indigo-600 dark:text-indigo-400">체인저</span>
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 font-medium">
        평범한 문장에 새로운 영혼을 불어넣으세요
      </p>
    </header>
  );
};

export default Header;