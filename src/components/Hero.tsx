import React, { useState, useEffect } from 'react';
import { Bot, MessageSquareMore, ArrowRight } from 'lucide-react';
import './glitch.css';

const useModernTypewriter = (words: string[], switchDelay: number = 3000) => {
  const [displayWord, setDisplayWord] = useState(words[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const switchWord = () => {
      setIsGlitching(true);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setDisplayWord(words[(currentIndex + 1) % words.length]);
        setIsGlitching(false);
      }, 750); // Duração do efeito glitch
    };

    const interval = setInterval(switchWord, switchDelay);
    return () => clearInterval(interval);
  }, [currentIndex, words, switchDelay]);

  return { displayWord, isGlitching };
};

export default function Hero() {
  const { displayWord, isGlitching } = useModernTypewriter([
    'vendedor',
    'SDR',
    'atendente'
  ], 1500);

  return (
    <div className="relative bg-gradient-to-b from-[#1a8544] to-[#28B45D] text-white overflow-hidden">
      {/* Padrão de ondas decorativo */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,45 50,50 T100,50 V100 H0 Z" fill="currentColor" />
          <path d="M0,60 Q25,55 50,60 T100,60 V100 H0 Z" fill="currentColor" />
          <path d="M0,70 Q25,65 50,70 T100,70 V100 H0 Z" fill="currentColor" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Bot className="w-6 h-6" />
              <span className="text-green-100 font-medium">Plataforma produzida por Global Live</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Clone seu melhor{' '}
              <span 
                className={`word-animation ${isGlitching ? 'glitch' : ''}`}
                data-text={displayWord}
              >
                {displayWord}
              </span>{' '}
              com IA
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Uma plataforma OmniChannel que conecta e automatiza seus processos comerciais, de suporte e financeiros com um Agente de IA que trabalha incansavelmente para o sucesso do seu negócio.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
              <a href="#pricing" className="w-full sm:w-auto">
                <button className="w-full bg-white text-[#28B45D] px-6 py-3 rounded-lg hover:bg-green-50 font-semibold flex items-center justify-center">
                  Teste Grátis por 7 Dias
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </a>
              <button className="w-full sm:w-auto border border-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-white/10 transition-colors whitespace-nowrap">
                <MessageSquareMore className="mr-2 w-5 h-5" />
                Solicitar Demonstração
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                alt="Platform Dashboard"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#28B45D] to-[#34d070] blur-3xl opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
      
      {/* Degradê branco na parte inferior */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-white/70 to-transparent"></div>
    </div>
  );
}