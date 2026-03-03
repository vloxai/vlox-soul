import React from 'react';
import { Send, Loader2 } from 'lucide-react';

interface Props {
  value: string;
  onChange: (val: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const TextInputSection: React.FC<Props> = ({ value, onChange, onSubmit, isLoading }) => {
  return (
    <section className="w-full space-y-3">
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="변환하고 싶은 문장을 입력하세요... (예: 오늘 점심 뭐 먹지?)"
          className="w-full h-32 p-5 bg-white dark:bg-zinc-900 border-2 border-zinc-100 dark:border-zinc-800 rounded-2xl focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-0 outline-none transition-all resize-none text-zinc-700 dark:text-zinc-200 shadow-sm placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
          disabled={isLoading}
        />
        <div className="absolute bottom-3 right-3 text-xs text-zinc-400 dark:text-zinc-600 font-mono">
          {value.length} / 200
        </div>
      </div>
      <button
        onClick={onSubmit}
        disabled={isLoading || !value.trim()}
        className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-zinc-200 dark:disabled:bg-zinc-800 disabled:cursor-not-allowed text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98]"
      >
        {isLoading ? (
          <Loader2 className="animate-spin" size={20} />
        ) : (
          <><Send size={18} /> 소울 주입하기</>
        )}
      </button>
    </section>
  );
};

export default TextInputSection;