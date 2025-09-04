'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Star, Target } from 'lucide-react';

export default function Purpose() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            El propósito del sorteo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más que un sorteo, es una oportunidad para transformar vidas
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido emocional */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Porque creemos en el impacto
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Muchas familias han pospuesto su tratamiento dental por motivos económicos, 
                    pero sabemos que una sonrisa saludable puede cambiar completamente la vida 
                    de una persona.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Nuestra misión
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Con este sorteo queremos dar la oportunidad de sonreír sin barreras, 
                    porque el propósito eres tú. Tu bienestar, tu confianza y tu felicidad 
                    son lo que nos motiva cada día.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Historias que inspiran
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Hemos visto cómo un tratamiento dental puede devolver la confianza 
                    a personas que habían perdido la esperanza de sonreír libremente.
                  </p>
                </div>
              </div>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-white rounded-xl shadow-md"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <p className="text-sm text-gray-600">Sonrisas transformadas</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-white rounded-xl shadow-md"
              >
                <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                <p className="text-sm text-gray-600">Pacientes satisfechos</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Imagen/Ilustración */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Imagen principal */}
              <div className="relative w-80 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Familias</h3>
                    <p className="text-lg opacity-90">Sonriendo juntas</p>
                  </div>
                </div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <Star className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-400 rounded-full flex items-center justify-center shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA emocional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-10 text-white max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="text-6xl">💝</span>
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Tu sonrisa es nuestro propósito
            </h3>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              Cada participación en este sorteo representa una oportunidad de cambiar 
              una vida. No solo estás participando por un bono, estás siendo parte 
              de algo más grande: la misión de hacer que más personas puedan sonreír 
              con confianza.
            </p>
            <div className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              <span className="text-2xl">🎯</span>
              ¡Participa con propósito!
            </div>
          </div>
        </motion.div>

        {/* Testimonios */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
                      <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-4xl mb-3">😊</div>
                <p className="text-gray-600 italic">
                  &ldquo;Gracias a Maxillaris, mi hija puede sonreír sin vergüenza&rdquo;
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-4xl mb-3">🌟</div>
                <p className="text-gray-600 italic">
                  &ldquo;El tratamiento cambió mi vida y mi confianza&rdquo;
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-4xl mb-3">💪</div>
                <p className="text-gray-600 italic">
                  &ldquo;Ahora puedo hablar y reír sin preocupaciones&rdquo;
                </p>
              </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
