'use client';

import { useState, useEffect } from 'react';
import { User, Phone, Mail, CheckCircle2, FileText, Shield } from 'lucide-react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [countdown, setCountdown] = useState(4);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    acceptTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  useEffect(() => {
    // Contador regresivo
    if (showIntro && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setShowIntro(false);
      setIsVisible(true);
    }
  }, [showIntro, countdown]);

  const scrollToForm = () => {
    const formElement = document.getElementById('formulario');
    if (formElement) {
      formElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Dividir el nombre completo en partes para la API
      const nameParts = formData.fullName.trim().split(/\s+/);
      const firstName = nameParts[0] || '';
      const lastNameFather = nameParts.length > 1 ? nameParts[1] : '';
      const lastNameMother = nameParts.length > 2 ? nameParts.slice(2).join(' ') : '';
      
      // Preparar los datos para la API de Maxillaris
      const apiData = {
        firstName: firstName,
        lastNameFather: lastNameFather,
        lastNameMother: lastNameMother,
        phoneNumber: formData.phone.trim(),
        email: formData.email.trim(),
        nameCampaign: 'apofi_04112025'
      };

      console.log('Enviando datos a la API:', apiData);

      // Enviar datos a la API de Maxillaris
      const response = await fetch('https://www.support.maxillaris.pe/api6/campaigns', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData)
      });

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const result = await response.json();
      console.log('Respuesta de la API:', result);
      
      // Éxito - mostrar confirmación
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      // Mostrar animación de confirmación después de 2 segundos
      setTimeout(() => {
        setShowConfirmation(true);
      }, 2000);

    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      
      // Error - mostrar mensaje de error
      setIsSubmitting(false);
      setApiError('Hubo un error al enviar tu participación. Por favor, intenta nuevamente.');
    }
  };

  const resetForm = () => {
    setFormData({ fullName: '', phone: '', email: '', acceptTerms: false });
    setIsSubmitted(false);
    setShowConfirmation(false);
    setApiError(null);
  };

  return (
    <div className="min-h-screen">
                        {/* Intro 3D Optimizada */}
                  {showIntro && (
                    <div className="fixed inset-0 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 z-50 flex items-center justify-center overflow-hidden animate-slide-up-fade gpu-accelerated">
          {/* Elementos 3D flotantes optimizados */}
          <div className="absolute inset-0 smooth-3d">
            {/* Círculos 3D rotando con diferentes velocidades */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-600/30 rounded-full animate-spin-slow animate-float-3d gpu-accelerated"></div>
            <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-indigo-600/30 rounded-full animate-spin-medium animate-float-3d-reverse gpu-accelerated"></div>
            <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-slate-600/25 rounded-full animate-ping animate-float-3d-extreme gpu-accelerated"></div>
            
            {/* Estrellas brillantes con animaciones escalonadas */}
            <div className="absolute top-20 left-20 w-2 h-2 bg-blue-700 rounded-full animate-pulse animate-float-3d gpu-accelerated"></div>
            <div className="absolute top-40 right-32 w-1 h-1 bg-slate-700 rounded-full animate-bounce animate-float-3d-reverse gpu-accelerated"></div>
            <div className="absolute bottom-32 left-32 w-3 h-3 bg-indigo-700 rounded-full animate-pulse animate-float-3d gpu-accelerated"></div>
            <div className="absolute bottom-20 right-20 w-2 h-2 bg-blue-600 rounded-full animate-bounce animate-float-3d gpu-accelerated"></div>
            
            {/* Partículas adicionales con delays escalonados */}
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-slate-700 rounded-full animate-pulse animate-float-3d gpu-accelerated" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-600 rounded-full animate-bounce animate-float-3d-reverse gpu-accelerated" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-indigo-600 rounded-full animate-pulse animate-float-3d gpu-accelerated" style={{ animationDelay: '3s' }}></div>
            
            {/* Elementos adicionales para mayor profundidad */}
            <div className="absolute top-1/6 right-1/6 w-3 h-3 bg-slate-600 rounded-full animate-float-3d gpu-accelerated" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-1/6 right-1/6 w-2 h-2 bg-blue-600 rounded-full animate-float-3d-reverse gpu-accelerated" style={{ animationDelay: '1.5s' }}></div>
            
            {/* Capas de profundidad adicionales */}
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full animate-float-3d gpu-accelerated" style={{ animationDelay: '2.5s' }}></div>
            <div className="absolute top-1/3 right-1/2 w-20 h-20 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-float-3d-reverse gpu-accelerated" style={{ animationDelay: '3.5s' }}></div>
            
            {/* Líneas de conexión sutiles */}
            <div className="absolute top-1/4 left-1/2 w-px h-32 bg-gradient-to-b from-transparent via-slate-600/30 to-transparent animate-pulse"></div>
            <div className="absolute top-1/2 right-1/4 w-32 h-px bg-gradient-to-r from-transparent via-blue-600/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            {/* Efectos de ondas de sonido */}
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-slate-600/40 rounded-full animate-ripple"></div>
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-600/40 rounded-full animate-ripple-delayed"></div>
          </div>

          {/* Contenido principal de la intro optimizado */}
          <div className="text-center relative z-10 smooth-3d">
            {/* Logo APOFI 3D DRAMÁTICO */}
            <div className="mb-12 transform perspective-1000 gpu-accelerated">
              <div className="animate-logo-3d transform hover:scale-110 transition-all duration-700 ease-out gpu-accelerated">
                <img 
                  src="/apofi_logo.svg" 
                  alt="APOFI Logo" 
                  className="w-96 md:w-[500px] h-auto logo-glow"
                />
              </div>
            </div>

            {/* Mensaje principal con efecto 3D optimizado */}
            <div className="space-y-8 transform perspective-1000 smooth-3d">
                                        <div className="transform rotate-y-12 hover:rotate-y-0 gpu-accelerated">
                            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
                              <span className="block text-blue-700 transform translate-z-40 gpu-accelerated animate-text-depth">MAXILLARIS</span>
                              <span className="block transform translate-z-20 gpu-accelerated animate-text-depth" style={{ animationDelay: '0.5s' }}>en convenio con APOFI</span>
                            </h1>
                          </div>

                          <div className="transform rotate-y-12 hover:rotate-y-0 gpu-accelerated">
                            <p className="text-3xl md:text-5xl text-slate-700 mb-8">
                              <span className="block animate-text-depth">Te regala</span>
                              <span className="block text-4xl md:text-6xl font-bold text-blue-700 transform translate-z-30 gpu-accelerated animate-text-depth" style={{ animationDelay: '1s' }}>
                                85% de descuento
                              </span>
                            </p>
                          </div>

              {/* Botón de skip optimizado */}
              <div className="transform rotate-y-12 hover:rotate-y-0 gpu-accelerated">
                                            <button
                              onClick={() => {
                                setShowIntro(false);
                                setIsVisible(true);
                              }}
                              className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white font-bold px-8 py-4 rounded-2xl hover:shadow-2xl transform hover:scale-110 transition-all duration-500 ease-out gpu-accelerated animate-pulse"
                            >
                              🚀 Ver landing page
                            </button>
              </div>
            </div>

            {/* Contador regresivo */}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className={`min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-16 transition-all duration-1000 ${!showIntro ? 'animate-slide-up-fade' : 'opacity-0'}`}>
        {/* Fondos animados */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-indigo-400/10 to-slate-400/10"></div>
        
        {/* Elementos flotantes animados */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-pink-400/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-blue-400/20 rounded-full animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className={`inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
              <span className="text-2xl animate-bounce">🎉</span>
              ¡Sorteo Activo!
            </div>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Sorteo con{' '}
                          <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Propósito
            </span>
            </h1>
            
            <p className={`text-xl md:text-2xl text-white/90 mb-6 leading-relaxed transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <strong className="text-blue-300">Maxillaris en convenio con APOFI</strong> te ofrece ganar uno de los{' '}
              <strong className="text-yellow-300">5 bonos</strong> con{' '}
              <strong className="text-yellow-300">85% de descuento</strong> en tu tratamiento
            </p>
            
            <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-10 border border-white/20 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-lg text-white/95 leading-relaxed mb-4">
                <strong className="text-yellow-300">A veces dejamos nuestro bienestar para después…  pero tu descanso, tu sonrisa y tu salud no pueden esperar más..</strong>
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                Tendrás un descuento de mas de <strong className="text-green-300"></strong> <strong className="text-green-300">$2500</strong> en tu tratamiento.
              </p>
            </div>
            
            <div className={`space-y-6 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button 
                onClick={scrollToForm}
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold text-xl rounded-3xl shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 transition-all duration-300 w-full md:w-auto overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center gap-3">
                  Participar ahora
                  <span className="group-hover:translate-y-1 transition-transform duration-300 text-2xl">🎯</span>
                </span>
              </button>
              
                              <div className="flex items-center justify-center lg:justify-start gap-4 text-white/80">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-300 text-2xl">⏰</span>
                    <span className="text-sm">Solo hasta el 6 de noviembre de 2025</span>
                  </div>
                </div>
            </div>
          </div>
          
          <div className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Círculos animados de fondo */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-pink-400/30 rounded-full animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full animate-ping"></div>
              
              {/* Círculo principal */}
              <div className="relative w-full h-full bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl border border-white/20">
                <span className="text-8xl animate-bounce">😊</span>
              </div>
              
              {/* Elementos decorativos animados */}
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-3xl">🎯</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-2xl">💎</span>
              </div>
              <div className="absolute top-1/2 -left-8 w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Fondo degradado */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Cómo participar?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Solo necesitas seguir estos 3 simples pasos para participar en nuestro sorteo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📝',
                title: 'Llena el formulario',
                description: 'Completa tus datos de contacto de manera rápida y segura',
                gradient: 'from-blue-500 to-cyan-500',
                bgColor: 'bg-blue-50',
                delay: 300
              },
              {
                icon: '✅',
                title: 'Acepta los términos',
                description: 'Lee y acepta las condiciones del sorteo',
                gradient: 'from-green-500 to-emerald-500',
                bgColor: 'bg-green-50',
                delay: 500
              },
              {
                icon: '🎉',
                title: '¡Listo, ya participas!',
                description: 'Tu participación está confirmada automáticamente',
                gradient: 'from-purple-500 to-pink-500',
                bgColor: 'bg-purple-50',
                delay: 700
              }
            ].map((step, index) => (
              <div 
                key={index}
                className={`${step.bgColor} p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full border border-white/50 backdrop-blur-sm transition-all duration-1000 delay-${step.delay} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r ${step.gradient} rounded-full mb-8 shadow-xl transform hover:scale-110 transition-transform duration-300`}>
                    <span className="text-4xl animate-bounce">{step.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section - Ahora es el atractivo principal */}
      <section id="formulario" className="py-32 px-4 relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-50">
        {/* Elementos decorativos sutiles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-indigo-200/30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-cyan-200/30 rounded-full animate-ping"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className={`text-center mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-pulse">
              <span className="text-2xl">🎯</span>
              ¡Participa y gana!
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              ¡Participa ahora!
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Completa el formulario y participa por uno de los <strong className="text-blue-600">5 bonos con 85% de descuento</strong> en tu tratamiento dental
            </p>
          </div>

                    {isSubmitted ? (
            <div className={`bg-white rounded-3xl shadow-2xl p-16 text-center border border-blue-100 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
              <div className="w-32 h-32 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce shadow-2xl">
                <span className="text-6xl">🎉</span>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                ¡Participación confirmada!
              </h3>
              <p className="text-gray-600 text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                Tu participación ha sido registrada exitosamente. Te notificaremos los resultados por WhatsApp y correo electrónico.
              </p>
              <button
                onClick={resetForm}
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold px-10 py-5 rounded-2xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
              >
                Participar de nuevo
              </button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Formulario principal */}
              <div className={`bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 transition-all duration-1000 relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Elementos decorativos sutiles */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-indigo-50/50 to-purple-50/50 rounded-full translate-y-24 -translate-x-24 blur-3xl"></div>
                
                {/* Header del formulario */}
                <div className="mb-8 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <FileText className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Formulario de Participación</h3>
                      <p className="text-sm text-gray-500 mt-0.5">Completa tus datos en menos de 1 minuto</p>
                    </div>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  {/* Indicador de progreso mejorado */}
                  <div className="mb-8 bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Progreso de Completado</span>
                      <span className="text-sm font-bold text-blue-600">
                        {((formData.fullName && formData.phone && formData.email && formData.acceptTerms) ? 100 : 
                          ((formData.fullName ? 1 : 0) + (formData.phone ? 1 : 0) + (formData.email ? 1 : 0) + (formData.acceptTerms ? 1 : 0)) * 25).toFixed(0)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 h-2.5 rounded-full transition-all duration-700 ease-out shadow-sm"
                        style={{ 
                          width: `${(formData.fullName && formData.phone && formData.email && formData.acceptTerms) ? 100 : 
                            ((formData.fullName ? 1 : 0) + (formData.phone ? 1 : 0) + (formData.email ? 1 : 0) + (formData.acceptTerms ? 1 : 0)) * 25}%` 
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      Nombre Completo
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                        <User className="w-5 h-5" />
                      </div>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        placeholder="Ej: Juan Pérez García"
                        className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400"
                        required
                      />
                    </div>
                    {formData.fullName && (
                      <div className="flex items-center gap-2 text-green-600 text-xs font-medium">
                        <CheckCircle2 className="w-4 h-4" />
                        Campo completado
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      Número de Celular
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                        <Phone className="w-5 h-5" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="9 1234 5678"
                        className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400"
                        required
                      />
                    </div>
                    {formData.phone && (
                      <div className="flex items-center gap-2 text-green-600 text-xs font-medium">
                        <CheckCircle2 className="w-4 h-4" />
                        Campo completado
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      Correo Electrónico
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="tu@email.com"
                        className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400"
                        required
                      />
                    </div>
                    {formData.email && (
                      <div className="flex items-center gap-2 text-green-600 text-xs font-medium">
                        <CheckCircle2 className="w-4 h-4" />
                        Campo completado
                      </div>
                    )}
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <div className="flex items-center h-5 mt-0.5">
                      <input
                        id="acceptTerms"
                        type="checkbox"
                        checked={formData.acceptTerms}
                        onChange={(e) => handleInputChange('acceptTerms', e.target.checked)}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 transition-all duration-200 cursor-pointer"
                        required
                      />
                    </div>
                    <label htmlFor="acceptTerms" className="text-sm text-gray-700 leading-relaxed cursor-pointer">
                      He leído y acepto los{' '}
                      <a href="/terminos" className="text-blue-600 hover:text-blue-700 font-semibold underline underline-offset-2 transition-colors">
                        términos y condiciones
                      </a>
                      {' '}del sorteo
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                  </div>
                  {formData.acceptTerms && (
                    <div className="flex items-center gap-2 text-green-600 text-xs font-medium ml-8">
                      <CheckCircle2 className="w-4 h-4" />
                      Términos aceptados
                    </div>
                  )}

                  {/* Mensaje de error de la API */}
                  {apiError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center">
                            <span className="text-red-600 text-xs">!</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-red-800 mb-1">Error de conexión</p>
                          <p className="text-sm text-red-600">{apiError}</p>
                          <button
                            onClick={() => setApiError(null)}
                            className="mt-2 text-xs text-red-600 hover:text-red-800 font-medium underline"
                          >
                            Cerrar mensaje
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-base py-4 px-6 rounded-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-lg relative group"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-3">
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                          <span>Enviando datos...</span>
                        </div>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <span>Participar en el sorteo</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      )}
                    </button>
                    
                    {/* Mensaje de seguridad */}
                    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                      <Shield className="w-4 h-4" />
                      <span>Tus datos están protegidos y seguros</span>
                    </div>
                  </div>
                </form>
              </div>

                              {/* Panel informativo atractivo */}
                <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                  {/* Beneficios del bono */}
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <span className="text-3xl animate-pulse">💎</span>
                      ¿Qué incluye tu bono?
                    </h3>
                    <div className="space-y-4">
                      {[
                        '85% de descuento en tu tratamiento',
                        '1er Aparato incluido (no lo pagas)',
                        'Controles incluidos',
                        'Válido hasta el día del sorteo',
                        'Consulta de evaluación incluida',
                        'Sin restricciones ocultas',
                        'No transferible a familiares'
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                          <span className="text-2xl animate-bounce">✅</span>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Estadísticas animadas */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-blue-100 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                      <div className="text-4xl font-bold text-blue-600 mb-2 animate-pulse">5</div>
                      <p className="text-gray-600">Bonos disponibles</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-blue-100 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                      <div className="text-4xl font-bold text-blue-600 mb-2 animate-pulse">85%</div>
                      <p className="text-gray-600">Descuento incluido</p>
                    </div>
                  </div>

                  {/* CTA adicional */}
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-6 text-white text-center shadow-xl transform hover:scale-105 transition-all duration-300">
                    <h4 className="text-xl font-bold mb-3">🏥 Convenio Maxillaris-APOFI</h4>
                    <p className="text-indigo-100 mb-4">
                      Clínica Maxillaris en convenio con APOFI te ofrece esta oportunidad única de acceder a tratamientos de alta calidad
                    </p>
                    <div className="text-3xl animate-bounce">🤝</div>
                  </div>

                  {/* Contador regresivo */}
                  <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-3xl p-6 text-white text-center shadow-xl">
                    <h4 className="text-xl font-bold mb-3">⏰ Tiempo Limitado</h4>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-white/20 rounded-lg p-3">
                        <div className="text-2xl font-bold">06</div>
                        <div className="text-sm">Noviembre</div>
                      </div>
                      <div className="bg-white/20 rounded-lg p-3">
                        <div className="text-2xl font-bold">11:59</div>
                        <div className="text-sm">AM</div>
                      </div>
                      <div className="bg-white/20 rounded-lg p-3">
                        <div className="text-2xl font-bold">2025</div>
                        <div className="text-sm">Año</div>
                      </div>
                    </div>
                  </div>

                  {/* Proceso del sorteo */}
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-6 text-white text-center shadow-xl">
                    <h4 className="text-xl font-bold mb-3">📋 ¿Cómo funciona?</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2 justify-center">
                        <span className="text-lg">1️⃣</span>
                        <span>Participas en el sorteo</span>
                      </div>
                      <div className="flex items-center gap-2 justify-center">
                        <span className="text-lg">2️⃣</span>
                        <span>Si ganas, pasas evaluación</span>
                      </div>
                      <div className="flex items-center gap-2 justify-center">
                        <span className="text-lg">3️⃣</span>
                        <span>Obtienes tu bono del 85%</span>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-20 px-4 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-pink-500/20 rounded-full animate-bounce"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              APOFI
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transformamos sonrisas y cambiamos vidas con tecnología de vanguardia
            </p>
          </div>
          
          <div className={`grid md:grid-cols-3 gap-8 mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white mb-4">Contacto</h4>
              <div className="space-y-2 text-gray-300">
                <a href="https://wa.me/51940225052" target="_blank" rel="noopener noreferrer" className="block hover:text-green-400 transition-colors">
                  📞 +51 940 225 052
                </a>
                <p>📧 info@apofi.com</p>
                <p>📍 Lima, Perú</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white mb-4">Redes Sociales</h4>
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href="https://www.facebook.com/profile.php?id=61575793183444" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors group"
                >
                  <span className="text-xl">📘</span>
                  <span className="text-sm group-hover:text-blue-400">Facebook</span>
                </a>
                <a 
                  href="https://www.instagram.com/apofi.lima" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-pink-400 transition-colors group"
                >
                  <span className="text-xl">📷</span>
                  <span className="text-sm group-hover:text-pink-400">@apofi.lima</span>
                </a>
                <a 
                  href="https://www.tiktok.com/@apofi.lima" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors group"
                >
                  <span className="text-xl">🎵</span>
                  <span className="text-sm group-hover:text-cyan-400">@apofi.lima</span>
                </a>
                <a 
                  href="https://wa.me/51940225052" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors group"
                >
                  <span className="text-xl">💬</span>
                  <span className="text-sm group-hover:text-green-400">WhatsApp</span>
                </a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white mb-4">Enlaces</h4>
              <div className="space-y-2 text-gray-300">
                <a href="#" className="block hover:text-white transition-colors">Inicio</a>
                <a href="#" className="block hover:text-white transition-colors">Servicios</a>
                <a href="#" className="block hover:text-white transition-colors">Sobre nosotros</a>
              </div>
            </div>
          </div>
          
          <div className={`border-t border-gray-700 pt-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-gray-400">
              © 2025 APOFI. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Animación de confirmación completa */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 z-50 flex items-center justify-center">
          {/* Logo APOFI animado */}
          <div className="text-center">
            <div className="mb-8">
              <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent animate-pulse">
                APOFI
              </div>
            </div>
            
            {/* Mensaje de confirmación */}
            <div className="space-y-6 text-white">
              <div className="text-4xl md:text-6xl animate-bounce">
                🎉
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¡Participación Confirmada!
              </h2>
              
              <p className="text-xl md:text-2xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
                En breve recibirás un mensaje de confirmación por WhatsApp y correo electrónico
              </p>
              
              <div className="flex items-center justify-center gap-3 text-blue-300 text-lg">
                <span className="text-2xl">💬</span>
                <span>WhatsApp: +51 940 225 052</span>
              </div>
              
              {/* Elementos decorativos flotantes */}
              <div className="absolute top-20 left-20 w-16 h-16 bg-blue-400/20 rounded-full animate-pulse"></div>
              <div className="absolute top-40 right-20 w-12 h-12 bg-cyan-400/20 rounded-full animate-bounce"></div>
              <div className="absolute bottom-40 left-20 w-20 h-20 bg-indigo-400/20 rounded-full animate-ping"></div>
              <div className="absolute bottom-20 right-10 w-14 h-14 bg-blue-400/20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
