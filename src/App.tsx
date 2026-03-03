import React, { useState } from 'react';
import Header from './components/Header';
import PersonaSelector from './components/PersonaSelector';
import TextInputSection from './components/TextInputSection';
import ResultCard from './components/ResultCard';
import Footer from './components/Footer';
import { Persona } from './types';
import { PERSONAS } from './data/personas';
import { transformSentence } from './services/aiService';

function App() {
  const [selectedPersona, setSelectedPersona] = useState<Persona>(PERSONAS[0]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleTransform = async () => {
    if (!inputText.trim()) return;
    
    setIsLoading(true);
    setResult(null);
    
    try {
      const transformed = await transformSentence(inputText, selectedPersona);
      setResult(transformed);
    } catch (error) {
      console.error('Transformation failed:', error);
      alert('변환 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setInputText('');
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 flex flex-col items-center px-4 transition-colors duration-300">
      <div className="w-full max-w-xl flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 space-y-8 pb-12">
          {!result ? (
            <div className="space-y-8 animate-in fade-in duration-700">
              <PersonaSelector 
                selectedId={selectedPersona.id} 
                onSelect={setSelectedPersona} 
              />
              
              <TextInputSection 
                value={inputText} 
                onChange={setInputText} 
                onSubmit={handleTransform} 
                isLoading={isLoading}
              />
            </div>
          ) : (
            <ResultCard 
              resultText={result} 
              persona={selectedPersona}
              onReset={handleReset}
            />
          )}

          {!result && !isLoading && (
            <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 p-4 rounded-xl flex gap-3 items-start transition-colors duration-300">
              <div className="bg-white dark:bg-indigo-900 p-1 rounded-md shadow-sm text-indigo-500 dark:text-indigo-300 font-bold text-xs uppercase">
                Tip
              </div>
              <p className="text-xs text-indigo-700 dark:text-indigo-200 leading-normal font-medium">
                문장이 길고 구체적일수록 페르소나의 특징이 더 잘 살아납니다. 
                다양한 말투로 당신의 생각을 표현해보세요!
              </p>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;