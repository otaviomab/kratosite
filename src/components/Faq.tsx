import React from 'react';

const faqs = [
  {
    question: 'Como funciona a integração com o WhatsApp?',
    answer: 'A integração é simples e rápida através da API oficial e não oficial do WhatsApp Business. Basta seguir nosso processo guiado de configuração que leva apenas alguns minutos.'
  },
  {
    question: 'Posso usar apenas a função de IA?',
    answer: 'Sim! Oferecemos a flexibilidade de escolher apenas os recursos que você precisa, incluindo somente a IA para automatização de atendimento.'
  },
  {
    question: 'O que acontece após o período gratuito?',
    answer: 'Após os 7 dias de teste, você pode escolher um de nossos planos para continuar usando a plataforma. Não há compromisso e você pode cancelar a qualquer momento.'
  },
  {
    question: 'Quantos atendentes posso ter simultaneamente?',
    answer: 'O número de atendentes simultâneos varia de acordo com o plano escolhido, desde 3 no plano Básico até ilimitados no plano Enterprise.'
  }
];

export default function Faq() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as principais dúvidas sobre o KRATO.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}