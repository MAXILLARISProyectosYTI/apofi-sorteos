'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Maxillaris
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Transformamos sonrisas y cambiamos vidas. Somos una clínica dental 
                comprometida con la excelencia y el bienestar de nuestros pacientes.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Av. Principal 123, Lima, Perú</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+51 1 234 5678</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>info@maxillaris.com</span>
              </div>
            </div>
          </motion.div>

          {/* Enlaces rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Enlaces</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Redes sociales */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">Síguenos</h4>
            <div className="space-y-3">
              <a
                href="https://facebook.com/maxillaris"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                  <Facebook className="w-5 h-5" />
                </div>
                <span>Facebook</span>
              </a>
              
              <a
                href="https://instagram.com/maxillaris"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:from-purple-600 group-hover:to-pink-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
                <span>Instagram</span>
              </a>
              
              <a
                href="https://wa.me/51912345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Separador */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Maxillaris. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Términos y condiciones
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Política de privacidad
              </a>
            </div>
          </div>
        </motion.div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              ¿Aún no participas en el sorteo?
            </h3>
            <p className="text-blue-100 mb-6">
              No pierdas la oportunidad de ganar uno de los 3 bonos de S/ 3,500
            </p>
            <a
              href="#formulario"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-2xl">🎯</span>
              Participar ahora
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
