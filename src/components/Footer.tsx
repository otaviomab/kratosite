import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-6">
              <img src="https://i.imgur.com/4LKr5so.png" alt="KRATO Logo" className="h-12" />
            </div>
            <p className="text-gray-400">
              Transformando o atendimento empresarial com inteligência artificial.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Produto</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-[#34d070]">Recursos</a></li>
              <li><a href="#pricing" className="hover:text-[#34d070]">Preços</a></li>
              <li><a href="#faq" className="hover:text-[#34d070]">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#34d070]">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#34d070]">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#34d070]">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p> 2024 KRATO. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}