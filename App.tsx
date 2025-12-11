import React, { useState } from 'react';
import { cards } from './data/cards';
import { CardDisplay } from './components/CardDisplay';
import { CardData } from './types';
import { Users, Play, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [currentCard, setCurrentCard] = useState<CardData | null>(null);

  // Simple logic to get a random card, trying not to repeat immediately
  const getRandomCard = () => {
    // If we have a current card, filter it out from the options for the next pick
    const availableCards = currentCard 
      ? cards.filter(c => c.id !== currentCard.id)
      : cards;
    
    const randomIndex = Math.floor(Math.random() * availableCards.length);
    return availableCards[randomIndex];
  };

  const handleStart = () => {
    setCurrentCard(getRandomCard());
    setIsStarted(true);
  };

  const handleNext = () => {
    setCurrentCard(getRandomCard());
  };

  return (
    <div className="min-h-screen bg-bni-cream text-gray-800 font-sans selection:bg-bni-gold selection:text-white flex flex-col">
      
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-10 shadow-sm">
  <div className="max-w-md mx-auto flex items-center justify-between">
    <div className="flex items-center gap-2">
       {/* Logo removed as requested - Aquí es donde estaba el logo antes */}
       <h1 className="text-bni-navy font-bold text-lg leading-tight">
         Mentor de Bolso
       </h1>
    </div>
          {isStarted && (
             <button 
               onClick={() => setIsStarted(false)}
               className="text-xs text-gray-500 hover:text-bni-navy"
             >
               Sair
             </button>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        
        {!isStarted ? (
          // Welcome Screen
          <div className="max-w-md w-full text-center space-y-8 animate-fade-in-up">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-bni-gold blur-xl opacity-20 rounded-full"></div>
              <Users size={80} className="text-bni-navy relative z-10 mx-auto" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl font-serif font-bold text-bni-navy">
                Prepare-se para o seu 1 a 1
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Você tem 5 minutos antes da reunião. Use-os para calibrar sua mentalidade e verificar sua estratégia.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-l-4 border-bni-gold shadow-sm text-left mx-2">
              <h3 className="font-bold text-bni-navy mb-2 flex items-center gap-2">
                <span className="text-bni-gold">★</span> Foco de Hoje:
              </h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span> Preparação e Documentos
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span> Mentalidade "Givers Gain"
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span> Evitar Mitos Comuns
                </li>
              </ul>
            </div>

            <button
              onClick={handleStart}
              className="w-full bg-bni-red hover:bg-red-700 text-white text-xl font-bold py-4 px-8 rounded-xl shadow-lg transform transition hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3"
            >
              <Play size={24} fill="currentColor" />
              <span>Estou Pronto</span>
            </button>
          </div>
        ) : (
          // Card Screen
          currentCard && (
            <CardDisplay 
              card={currentCard} 
              onNext={handleNext} 
            />
          )
        )}

      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400 text-xs">
        <p>© Mentor BNI - Baseado na metodologia oficial</p>
      </footer>
    </div>
  );
};

export default App;
