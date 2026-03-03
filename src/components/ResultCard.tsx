import React, { useState } from 'react';
import { Copy, Check, Share2, RotateCcw } from 'lucide-react';
import { Persona } from '../types';

interface Props {
  resultText: string;
  persona: Persona;
  onReset: () => void;
}

const ResultCard: React.FC<Props> = ({ resultText, persona, onReset }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(resultText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-6 duration-500">
      <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
        <div className="px-6 py-4 bg-slate-800 flex justify-between items-center border-b border-slate-700">
          <div className="flex items-center gap-2">
            <span className="text-lg">{persona.emoji}</span>
            <span className="text-slate-300 font-bold text-sm">{persona.name}의 한마디</span>
          </div>
          <button 
            onClick={onReset}
            className="text-slate-500 hover:text-white transition-colors"
            title="다시 하기"
          >
            <RotateCcw size={18} />
          </button>
        </div>
        <div className="p-8">
          <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8 italic">
            {resultText}
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              className="flex-1 bg-white hover:bg-slate-100 text-slate-900 font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
            >
              {copied ? (
                <><Check size={18} className="text-green-600" /> 복사됨</>
              ) : (
                <><Copy size={18} /> 결과 복사</>
              )}
            </button>
            <button className="bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-xl transition-colors">
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;