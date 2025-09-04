'use client';

import { motion } from 'framer-motion';
import { ClipboardList, CheckCircle, PartyPopper } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    title: 'Llena el formulario',
    description: 'Completa tus datos de contacto de manera rápida y segura',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    icon: CheckCircle,
    title: 'Acepta los términos',
    description: 'Lee y acepta las condiciones del sorteo',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600'
  },
  {
    icon: PartyPopper,
    title: '¡Listo, ya participas!',
    description: 'Tu participación está confirmada automáticamente',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600'
  }
];

export default function Steps() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Cómo participar?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Solo necesitas seguir estos 3 simples pasos para participar en nuestro sorteo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className={`${step.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full`}>
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${step.color} rounded-full mb-6 shadow-lg`}
                  >
                    <step.icon className={`w-10 h-10 ${step.iconColor.replace('text-', 'text-white')}`} />
                  </motion.div>
                  
                  <div className="mb-4">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-gray-200 text-gray-700 rounded-full text-sm font-semibold mb-3">
                      {index + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 px-6 py-3 rounded-full">
            <span className="text-2xl">✨</span>
            <span className="text-blue-800 font-medium">
              ¡Es completamente gratis y solo toma 2 minutos!
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
