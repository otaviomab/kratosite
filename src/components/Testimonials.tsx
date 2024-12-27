import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Silva Meireles',
    role: 'CEO, Auto Peça Meireles',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80',
    content: 'Conseguimos reduzir 50% do tempo de resposta aos nossos clientes. A IA é fantástica!',
  },
  {
    name: 'Carlos Santos',
    role: 'Diretor Comercial, Centro Automotivo V8',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80',
    content: 'Economizamos em contratações e aumentamos nossa taxa de conversão em 30%.',
  },
  {
    name: 'Mariana Costa',
    role: 'COO e Fundadora, Imobiliária Amanda',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200&q=80',
    content: 'O KRATO transformou completamente nosso atendimento ao cliente.',
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Empresas Que Já Transformaram Seus Resultados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como o KRATO está revolucionando o atendimento em diferentes setores.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}