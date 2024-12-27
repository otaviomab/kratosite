import React from 'react';
import { Brain, Zap, BarChart3, RefreshCw } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'IA Avançada',
    description: 'Automatiza tarefas complexas de suporte, vendas e financeiro com precisão.'
  },
  {
    icon: Zap,
    title: 'Resposta Instantânea',
    description: 'Atendimento 24/7 com respostas imediatas e contextualizadas.'
  },
  {
    icon: BarChart3,
    title: 'Aprendizado Contínuo',
    description: 'Sistema que evolui com cada interação, melhorando constantemente.'
  },
  {
    icon: RefreshCw,
    title: 'Integração Total',
    description: 'Conecta-se perfeitamente com seus sistemas existentes.'
  }
];

export default function AiFeatures() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            A IA Que Revoluciona o Atendimento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnologia de ponta que transforma completamente a maneira como sua empresa se comunica.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-[#28B45D] rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative p-8 rounded-2xl border border-gray-200 bg-white">
                <feature.icon className="w-12 h-12 text-[#28B45D] mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}