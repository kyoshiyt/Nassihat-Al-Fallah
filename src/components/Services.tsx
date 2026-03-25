import React from 'react';
import { motion } from 'motion/react';
import { Bug, Sprout, Droplets, Sun, Tractor, LeafyGreen, GraduationCap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Pesticides Agricoles',
      description: 'Pesticides sûrs et de haute qualité pour protéger vos cultures contre les ravageurs et les maladies.',
      benefits: 'Augmente le rendement, réduit les pertes.',
      icon: <Bug className="w-8 h-8 text-green-600" />,
    },
    {
      title: 'Engrais',
      description: 'Engrais riches en nutriments adaptés au sol marocain pour une croissance optimale.',
      benefits: 'Améliore la santé du sol, stimule la récolte.',
      icon: <Sprout className="w-8 h-8 text-green-600" />,
    },
    {
      title: 'Irrigation et Pompage',
      description: 'Systèmes modernes d\'irrigation goutte-à-goutte et de pompage d\'eau efficaces.',
      benefits: 'Économise l\'eau, réduit les coûts de main-d\'œuvre.',
      icon: <Droplets className="w-8 h-8 text-green-600" />,
    },
    {
      title: 'Solutions d\'Énergie Solaire',
      description: 'Panneaux solaires et pompes solaires pour une agriculture durable.',
      benefits: 'Réduit les factures d\'électricité, écologique.',
      icon: <Sun className="w-8 h-8 text-green-600" />,
    },
    {
      title: 'Outils et Équipements Agricoles',
      description: 'Machines agricoles et outils manuels durables et modernes.',
      benefits: 'Augmente l\'efficacité, fait gagner du temps.',
      icon: <Tractor className="w-8 h-8 text-green-600" />,
    },
    {
      title: 'Soutien à l\'Agriculture Biologique',
      description: 'Conseils et produits pour la transition vers l\'agriculture biologique certifiée.',
      benefits: 'Valeur marchande plus élevée, durable.',
      icon: <LeafyGreen className="w-8 h-8 text-green-600" />,
    },
    {
      title: 'Conseil Agricole',
      description: 'Conseils d\'experts agronomes pour optimiser votre stratégie agricole.',
      benefits: 'Conseils d\'experts, résolution de problèmes.',
      icon: <GraduationCap className="w-8 h-8 text-green-600" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Nos Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Solutions Complètes pour les Agriculteurs Modernes
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Tout ce dont vous avez besoin pour cultiver mieux, plus vite et plus durablement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                {React.cloneElement(service.icon, {
                  className: `w-8 h-8 transition-colors duration-300 ${
                    'group-hover:text-white text-green-600'
                  }`,
                })}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                <p className="text-sm font-medium text-green-800 flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                  {service.benefits}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
