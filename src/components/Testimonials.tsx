import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ahmed B.',
      location: 'Région Souss-Massa',
      quote: 'Depuis que j\'utilise leur système de pompage solaire et leurs engrais, mon rendement en agrumes a augmenté de 30 % tandis que mes coûts énergétiques ont considérablement baissé.',
      rating: 5,
    },
    {
      name: 'Youssef M.',
      location: 'Région du Gharb',
      quote: 'L\'équipe de conseil de Nassihat Al Fallah m\'a aidé à passer à l\'agriculture biologique. Leurs conseils ont été inestimables et pratiques.',
      rating: 5,
    },
    {
      name: 'Fatima Z.',
      location: 'Région d\'Al Haouz',
      quote: 'Des pesticides fiables et un excellent service client. Ils comprennent vraiment les défis auxquels nous sommes confrontés en tant qu\'agriculteurs au Maroc.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Preuve Sociale</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Approuvé par les Agriculteurs à Travers le Maroc
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Ne nous croyez pas sur parole. Écoutez les agriculteurs qui ont transformé leurs récoltes avec nous.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-green-100" />
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 relative z-10">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center text-green-800 font-bold text-xl mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center px-8 py-4 bg-green-50 rounded-full border border-green-100">
            <span className="text-green-800 font-semibold text-lg">
              Plus de <span className="text-green-600 font-extrabold">500+</span> Clients Satisfaits
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
