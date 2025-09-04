'use client';

import { motion } from 'framer-motion';
import { Calendar, Facebook, Clock } from 'lucide-react';

export default function Dates() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fechas importantes
          </h2>
          <p className="text-xl text-gray-600">
            Marca en tu calendario estas fechas clave del sorteo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-8 md:p-10 border border-blue-100"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Fecha del sorteo */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📅 Fecha del Sorteo
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span className="text-lg font-semibold text-gray-800">
                    Lunes 24 de marzo de 2025
                  </span>
                </div>
                
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-lg font-semibold text-gray-800">
                    1:00 p.m. (Hora de Perú)
                  </span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-100 rounded-lg border border-yellow-200">
                <p className="text-yellow-800 font-medium">
                  ⏰ ¡Solo quedan pocos días para participar!
                </p>
              </div>
            </div>

            {/* Resultados */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <Facebook className="w-8 h-8 text-green-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📢 Resultados en Vivo
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Los ganadores serán anunciados en tiempo real a través de nuestro Fanpage de Facebook. 
                ¡No te pierdas el momento!
              </p>
              
              <a
                href="https://facebook.com/maxillaris"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
                Seguir en Facebook
              </a>
              
              <div className="mt-6 p-4 bg-blue-100 rounded-lg border border-blue-200">
                <p className="text-blue-800 font-medium">
                  🔔 Activa las notificaciones para no perderte nada
                </p>
              </div>
            </div>
          </div>

          {/* Información adicional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-10 pt-8 border-t border-blue-200"
          >
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">3 Ganadores</h4>
                <p className="text-sm text-gray-600">Se sortearán 3 bonos de S/ 3,500</p>
              </div>
              
              <div className="p-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Resultados Inmediatos</h4>
                <p className="text-sm text-gray-600">Los ganadores se conocerán al instante</p>
              </div>
              
              <div className="p-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📱</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Notificación Directa</h4>
                <p className="text-sm text-gray-600">Te contactaremos por WhatsApp y email</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
