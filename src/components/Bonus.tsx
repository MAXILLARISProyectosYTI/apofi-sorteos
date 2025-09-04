'use client';

import { motion } from 'framer-motion';
import { CheckCircle, DollarSign, Sparkles, Heart } from 'lucide-react';

const benefits = [
  'Aplicable a cualquier tratamiento dental',
  'Válido por 6 meses desde la fecha de emisión',
  'No tiene restricciones ni condiciones ocultas',
  'Puedes combinarlo con otros descuentos vigentes',
  'Transferible a un familiar directo',
  'Incluye consulta de evaluación gratuita'
];

export default function Bonus() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Qué es el bono?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo este bono puede transformar tu sonrisa y tu confianza
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Bono de S/ 3,500
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    El bono de <strong>S/ 3,500</strong> es un super descuento aplicado en tu 
                    tratamiento dental, para que transformes tu sonrisa con confianza y sin 
                    preocupaciones económicas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    ¿Cómo funciona?
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Simplemente presenta tu bono al momento de tu consulta y se descontará 
                    automáticamente del costo total de tu tratamiento dental.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Tratamientos incluidos
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Aplica a ortodoncia, implantes, carillas, blanqueamiento y cualquier 
                    otro tratamiento dental que necesites.
                  </p>
                </div>
              </div>
            </div>

            {/* Lista de beneficios */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                ✅ Beneficios del bono
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Imagen/Ilustración */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Bono principal */}
              <div className="relative w-80 h-96 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl shadow-2xl transform rotate-3">
                <div className="absolute inset-0 bg-white/20 rounded-2xl"></div>
                <div className="absolute inset-0 p-8 text-white">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">BONO</h3>
                    <p className="text-4xl font-bold mb-2">S/ 3,500</p>
                    <p className="text-sm opacity-90">Válido por 6 meses</p>
                  </div>
                </div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">💎</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xl">✨</span>
              </div>
              <div className="absolute top-1/2 -left-8 w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-lg">🎯</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA adicional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Listo para transformar tu sonrisa?
            </h3>
            <p className="text-gray-600 mb-6">
              Este bono puede ser la diferencia entre posponer tu tratamiento dental 
              y tener la sonrisa que siempre has querido.
            </p>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-lg font-semibold">
              <span className="text-2xl">🎁</span>
              ¡Participa y gana tu bono!
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
