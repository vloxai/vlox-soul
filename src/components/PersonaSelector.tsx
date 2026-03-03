import React from 'react';
import { Persona } from '../types';
import { PERSONAS } from '../data/personas';
import { Check } from 'lucide-react';

interface Props {
  selectedId: string;
  onSelect: (persona: Persona) => void;
}

const PersonaSelector: React.FC<Props> = ({ selectedId, onSelect }) => {
  return (
    <section className="w-full">
      <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 px-1">페르소나 선택</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {PERSONAS.map((persona) => (
          <button
            key={persona.id}
            onClick={() => onSelect(persona)}
            className={`relative p-4 rounded-2xl border-2 transition-all duration-200 text-left group ${
              selectedId === persona.id
                ? `${persona.color} shadow-lg scale-[1.02]`
                : 'bg-white border-slate-100 hover:border-indigo-200 text-slate-600'
            }`}
          >
            <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
              {persona.emoji}
            </div>
            <div className="font-bold text-sm mb-1">{persona.name}</div>
            <div className="text-[10px] leading-tight opacity-70">{persona.description}</div>
            {selectedId === persona.id && (
              <div className="absolute top-3 right-3">
                <Check size={16} />
              </div>
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default PersonaSelector;