import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Básico',
    price: 'R$ 147',
    description: 'Ideal para pequenas empresas',
    features: [
      '1 usuário',
      'Agent AI de Agendamentos',
      'Integrações WhatsApp',
      'Relatórios',
      'Suporte por email'
    ]
  },
  {
    name: 'Pro',
    price: 'R$ 497',
    description: 'Para empresas em crescimento',
    features: [
      'Até 3 usuários simultâneos',
      'IA avançada',
      'Todas as integrações',
      'Relatórios avançados',
      'Suporte prioritário',
      'Disparo em Massa'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Sob consulta',
    description: 'Soluções personalizadas',
    features: [
      'Atendentes ilimitados',
      'IA personalizada',
      'API dedicada',
      'Gerente de sucesso',
      'Suporte 24/7'
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Escolha o Plano Ideal para Sua Empresa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            7 dias grátis em qualquer plano. Sem compromisso.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl ${
                plan.popular
                  ? 'bg-[#28B45D] text-white shadow-xl scale-105'
                  : 'bg-white text-gray-900 border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 transform -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#34d070] to-[#28B45D] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Mais Popular
                  </span>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={plan.popular ? 'text-green-100' : 'text-gray-600'}>
                  {plan.description}
                </p>
                <div className="my-8">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={plan.popular ? 'text-green-100' : 'text-gray-600'}>
                    /mês
                  </span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <Check className={`w-5 h-5 ${plan.popular ? 'text-green-200' : 'text-[#28B45D]'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/5519988013439?text=Ola%2C%20vim%20pelo%20site%20e%20gostaria%20de%20assinar%20um%20plano%20do%20KRATO" target="_blank" rel="noopener noreferrer">
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-white text-[#28B45D] hover:bg-green-50'
                        : 'bg-[#28B45D] text-white hover:bg-[#229549]'
                    }`}
                  >
                    Teste Grátis por 7 Dias
                  </button>
                </a>
                <p className={`text-xs mt-2 text-center ${plan.popular ? 'text-green-100' : 'text-gray-500'}`}>
                  Sem colocar cartão de crédito
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}