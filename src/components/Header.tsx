import React from 'react';
import { Sparkles, Ghost } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-8 text-center">
      <div className="inline-flex items-center justify-center p-3 mb-4 bg-indigo-100 rounded-2xl text-indigo-600">
        <Ghost size={32} />
      </div>
      <h1 className="text-4xl font-black tracking-tight text-slate-900 mb-2">
        소울 <span className="text-indigo-600">체인저</span>
      </h1>
      <p className="text-slate-500 font-medium">
        평범한 문장에 새로운 영혼을 불어넣으세요
      </p>
    </header>
  );
};

export default Header;