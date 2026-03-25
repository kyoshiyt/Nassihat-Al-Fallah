import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, PiggyBank, Lightbulb, Leaf, Cpu } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      title: 'Productivité Accrue',
      description: 'Maximisez le rendement de vos cultures avec nos méthodes éprouvées et nos intrants de haute qualité.',
      icon: <TrendingUp className="w-10 h-10 text-white" />,
    },
    {
      title: 'Réduction des Coûts',
      description: 'Optimisez l\'utilisation des ressources pour réduire considérablement vos dépenses d\'exploitation.',
      icon: <PiggyBank className="w-10 h-10 text-white" />,
    },
    {
      title: 'Conseils d\'Experts',
      description: 'Accès à des agronomes chevronnés qui comprennent les défis agricoles locaux.',
      icon: <Lightbulb className="w-10 h-10 text-white" />,
    },
    {
      title: 'Agriculture Durable',
      description: 'Adoptez des pratiques écologiques qui protègent les sols pour les générations futures.',
      icon: <Leaf className="w-10 h-10 text-white" />,
    },
    {
      title: 'Technologies Modernes',
      description: 'Tirez parti de l\'énergie solaire et de l\'irrigation intelligente pour garder une longueur d\'avance.',
      icon: <Cpu className="w-10 h-10 text-white" />,
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-green-900 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-green-400 font-semibold tracking-wide uppercase">Pourquoi Nous Choisir</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            L'Avantage Nassihat Al Fallah
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-green-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-700/50 hover:bg-green-800 transition-colors duration-300"
            >
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-900/50">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-green-100 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
