'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Smile } from 'lucide-react';

interface HeroProps {
  onScrollToForm: () => void;
}

export default function Hero({ onScrollToForm }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-4 py-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Contenido principal */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <span className="text-2xl">🎉</span>
            ¡Sorteo Activo!
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Sorteo con{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Propósito
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
          >
            Gana uno de los <strong>3 Bonos de S/ 3,500</strong> para tu tratamiento dental
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="space-y-4"
          >
            <button
              onClick={onScrollToForm}
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full md:w-auto"
            >
              Participar ahora
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
            
            <p className="text-sm text-gray-500">
              ⏰ Solo hasta el 24 de marzo de 2025
            </p>
          </motion.div>
        </motion.div>
        
        {/* Imagen/Ilustración */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 blur-3xl"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center shadow-2xl">
              <Smile className="w-32 h-32 text-blue-600" />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">🎯</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xl">💎</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
