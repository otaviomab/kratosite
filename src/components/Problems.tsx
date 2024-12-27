import React from 'react';
import { Clock, Users, MessageCircleWarning, DollarSign } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'Atendimento Lento',
    description: 'Elimine delays no atendimento e ofereça atendimento 24 horas com nossa IA.',
  },
  {
    icon: Users,
    title: 'Gestão de Equipe',
    description: 'Gerencie múltiplos atendentes no WhatsApp de forma eficiente.',
  },
  {
    icon: MessageCircleWarning,
    title: 'Falhas na Comunicação',
    description: 'Integre suporte, vendas e financeiro em uma única plataforma.',
  },
  {
    icon: DollarSign,
    title: 'Custos Elevados',
    description: 'Reduza custos operacionais com automação inteligente.',
  },
];

export default function Problems() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Soluções Reais para os Principais Desafios das Empresas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Identificamos e resolvemos os principais gargalos que impedem o crescimento do seu negócio.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <problem.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}