import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-1 flex items-center md:flex-none">
            <div className="flex items-center w-full justify-center md:justify-start">
              <img src="https://i.imgur.com/kNrs6vP.png" alt="KRATO Logo" className="h-12" />
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Recursos</a>
            <a href="#benefits" className="text-gray-600 hover:text-gray-900">Benefícios</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Preços</a>
            <div className="flex flex-col items-center">
              <a href="#pricing">
                <button className="bg-[#28B45D] text-white px-4 py-2 rounded-lg hover:bg-[#229549]">
                  Teste Grátis
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}