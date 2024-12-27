import React from 'react';
import { TrendingUp, Heart, ShoppingCart, LayoutGrid } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Redução de Custos',
    description: 'Diminua custos operacionais em até 60% com automação inteligente.'
  },
  {
    icon: Heart,
    title: 'Satisfação do Cliente',
    description: 'Aumente a satisfação com respostas instantâneas e precisas.'
  },
  {
    icon: ShoppingCart,
    title: 'Aumento nas Vendas',
    description: 'Potencialize conversões com atendimento comercial 24/7.'
  },
  {
    icon: LayoutGrid,
    title: 'Gestão Centralizada',
    description: 'Todas as interações em uma única plataforma intuitiva.'
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Por Que Escolher KRATO?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Benefícios reais que impactam diretamente seus resultados.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="p-8 rounded-xl bg-gradient-to-br from-green-50 to-white border border-green-100 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 bg-[#28B45D] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}