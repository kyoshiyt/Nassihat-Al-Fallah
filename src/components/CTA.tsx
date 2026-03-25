import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-green-600 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 w-64 h-64 bg-green-700 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-5xl mb-6">
            Prêt à Transformer Votre Ferme ?
          </h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Contactez Nassihat Al Fallah dès aujourd'hui pour des conseils d'experts, des produits de haute qualité et des solutions agricoles modernes adaptées à vos besoins.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+212661202947"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-green-700 bg-white hover:bg-gray-50 transition-colors shadow-xl"
            >
              <Phone className="w-5 h-5 mr-2" />
              Appeler
            </a>
            <a
              href="https://wa.me/212661202947"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-bold rounded-full text-white hover:bg-white hover:text-green-700 transition-colors shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-green-800 hover:bg-green-900 transition-colors shadow-xl"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Demander une Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
