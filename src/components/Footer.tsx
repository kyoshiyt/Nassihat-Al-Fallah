import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center mb-4">
              <Leaf className="w-8 h-8 text-green-500 mr-2" />
              <span className="text-xl font-bold tracking-tight">NASSIHAT AL FALLAH</span>
            </div>
            <p className="text-gray-400 mb-6">
              Accompagner les agriculteurs marocains avec des solutions agricoles modernes, durables et rentables.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Liens Rapides</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-green-500 transition-colors">Accueil</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-green-500 transition-colors">À Propos</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-green-500 transition-colors">Nos Services</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-green-500 transition-colors">Avantages</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-green-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Nos Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-green-500 transition-colors">Pesticides et Engrais</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-green-500 transition-colors">Systèmes d'Irrigation</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-green-500 transition-colors">Énergie Solaire</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-green-500 transition-colors">Outils Agricoles</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-green-500 transition-colors">Conseil</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2">Contactez-nous</h3>
            <ul className="space-y-3 text-gray-400">
              <li>MAG 13 Chwiter 813 Ait Ourir</li>
              <li>Sidi Abdellah Ghiat, Marrakech</li>
              <li className="pt-2">
                <a href="tel:+212661202947" className="hover:text-green-500 transition-colors">0661 20 29 47</a>
              </li>
              <li>
                <a href="mailto:Nassihatalfallah@gmail.com" className="hover:text-green-500 transition-colors">Nassihatalfallah@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Nassihat Al Fallah. Tous droits réservés.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-green-500 transition-colors">Politique de Confidentialité</a>
            <a href="#" className="hover:text-green-500 transition-colors">Conditions d'Utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
