import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Leaf, ShieldCheck, Users } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
      title: 'Expertise Fiable',
      description: 'Plus de 30 ans d\'expérience dans l\'agriculture marocaine.',
    },
    {
      icon: <Leaf className="w-6 h-6 text-green-600" />,
      title: 'Pratiques Durables',
      description: 'Promotion d\'une agriculture écologique et biologique.',
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      title: 'Centré sur l\'Agriculteur',
      description: 'Dévoué à l\'amélioration de vos rendements et à la réduction de vos coûts.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 lg:mb-0"
          >
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">À Propos de Nous</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Qui est Nassihat Al Fallah ?
            </p>
            <p className="mt-4 max-w-2xl text-lg text-gray-500">
              Nous sommes une entreprise de solutions agricoles basée au Maroc. Notre mission est d'accompagner les agriculteurs en fournissant des solutions modernes, complètes et durables. Des engrais de haute qualité à l'irrigation solaire avancée, nous sommes votre partenaire de confiance pour la croissance.
            </p>
            
            <div className="mt-8 space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.title}</h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a href="#contact" className="text-base font-medium text-green-600 hover:text-green-500 flex items-center">
                En savoir plus sur notre mission
                <span aria-hidden="true" className="ml-2">&rarr;</span>
              </a>
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                className="w-full rounded-xl shadow-lg object-cover h-64"
                src="https://images.unsplash.com/photo-1592982537447-6f2a6a0c6c1b?q=80&w=1000&auto=format&fit=crop"
                alt="Farmer in field"
                referrerPolicy="no-referrer"
              />
              <img
                className="w-full rounded-xl shadow-lg object-cover h-64 mt-8"
                src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1000&auto=format&fit=crop"
                alt="Tractor and crops"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl flex items-center space-x-4 border border-gray-100">
              <div className="bg-green-600 text-white p-3 rounded-full">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">30+</p>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Années d'Expérience</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
