'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Terminos() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-800 to-blue-900 text-white py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              APOFI
            </Link>
            <Link 
              href="/"
              className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300"
            >
              ← Volver al sorteo
            </Link>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className={`bg-white rounded-3xl shadow-2xl p-8 md:p-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Términos y Condiciones
            </h1>
            <p className="text-xl text-gray-600">
              Sorteo con Propósito - APOFI
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información General</h2>
                              <p className="leading-relaxed">
                  El presente documento establece los términos y condiciones del sorteo &ldquo;Sorteo con Propósito&rdquo; 
                  organizado por APOFI (Escuela de Especialización Odontológica), con domicilio en Lima, Perú.
                </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Objetivo del Sorteo</h2>
              <p className="leading-relaxed">
                El sorteo tiene como objetivo otorgar 3 bonos de S/ 3,500 para especializaciones odontológicas 
                en APOFI, con el propósito de apoyar a profesionales de la odontología en su desarrollo profesional.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Participación</h2>
              <div className="space-y-3">
                <p className="leading-relaxed">
                  <strong>3.1 Requisitos:</strong> Podrán participar odontólogos titulados y estudiantes de último año 
                  de odontología que cumplan con los requisitos establecidos.
                </p>
                <p className="leading-relaxed">
                  <strong>3.2 Registro:</strong> La participación se realiza únicamente a través del formulario 
                  oficial en la página web de APOFI.
                </p>
                <p className="leading-relaxed">
                  <strong>3.3 Datos:</strong> Los participantes deben proporcionar información veraz y actualizada.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Premios</h2>
              <div className="space-y-3">
                <p className="leading-relaxed">
                  <strong>4.1 Cantidad:</strong> Se sortearán 5 bonos con 85% de descuento en tratamientos odontológicos.
                </p>
                <p className="leading-relaxed">
                  <strong>4.2 Aplicación:</strong> Los bonos son aplicables a tratamientos de ortodoncia funcional 
                  ofrecidos por APOFI en convenio con Clínica Maxillaris.
                </p>
                <p className="leading-relaxed">
                  <strong>4.3 Validez:</strong> Los bonos tienen una validez de 6 meses desde la fecha de inscripción en el sorteo.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Planes de Tratamiento y Precios</h2>
              
              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-blue-800 mb-4">📋 Plan 1: Tratamiento con AOF (Aparato de Ortodoncia Funcional)</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 text-lg">💰</span>
                    <div>
                      <strong>Precio del tratamiento:</strong> $600 USD
                      <ul className="mt-2 ml-4 space-y-1 text-sm">
                        <li>• Incluye 1era toma de ambas radiografías (Panorámica y Cefalométrica)</li>
                        <li>• Incluye su 1er aparato de ortodoncia funcional</li>
                        <li>• <strong>Exonerado de pago de controles</strong> (sin costo adicional)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 text-lg">🔄</span>
                    <div>
                      <strong>Aparatos adicionales:</strong> S/250 por cada nuevo aparato
                      <p className="text-sm mt-1">(Solo cuando el Dr. indique que sea necesario un cambio de aparato)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-blue-600 text-lg">🦷</span>
                    <div>
                      <strong>Transición a alineadores:</strong> $500 USD adicionales
                      <p className="text-sm mt-1">(Solo si el Dr. indique que puede pasar a alineadores durante el tratamiento)</p>
                      <p className="text-sm mt-1 text-blue-600">⚠️ Nota: Este costo cubre todos los juegos completos de alineadores</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-green-800 mb-4">🎯 Plan 2: Tratamiento Directo con MARPE</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-lg">💰</span>
                    <div>
                      <strong>Precio del tratamiento:</strong> $1,200 USD
                      <ul className="mt-2 ml-4 space-y-1 text-sm">
                        <li>• Incluye planificación con radiografías</li>
                        <li>• Incluye aparato de MARPE</li>
                        <li>• Incluye instalación del aparato</li>
                        <li>• <strong>Exonerado de pago de controles</strong> (sin costo adicional)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-lg">🔄</span>
                    <div>
                      <strong>Transición a AOF:</strong> S/250 por cada aparato adicional
                      <p className="text-sm mt-1">(Si pasa de MARPE a AOF durante el tratamiento)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-green-600 text-lg">🦷</span>
                    <div>
                      <strong>Transición a alineadores:</strong> $500 USD adicionales
                      <p className="text-sm mt-1">(Solo si el Dr. indique que puede pasar a alineadores)</p>
                      <p className="text-sm mt-1 text-green-600">⚠️ Nota: Este costo cubre todos los juegos completos de alineadores</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-800 mb-4">⏰ Información Importante sobre Controles</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center gap-3">
                    <span className="text-purple-600 text-lg">📅</span>
                    <div>
                      <strong>Frecuencia de controles:</strong> Cada 2 meses
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-purple-600 text-lg">✅</span>
                    <div>
                      <strong>Costo de controles:</strong> Sin costo adicional (incluido en ambos planes)
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-purple-600 text-lg">💡</span>
                    <div>
                      <strong>Nota importante:</strong> Los controles son obligatorios para el éxito del tratamiento
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Fechas Importantes</h2>
              <div className="space-y-3">
                <p className="leading-relaxed">
                  <strong>6.1 Inscripción:</strong> Desde el momento de registro hasta el 22 de Agosto de 2026.
                </p>
                <p className="leading-relaxed">
                  <strong>6.2 Sorteo:</strong> Sábado 22 de Agosto de 2026 a las 12:00 p.m. (Hora de Perú).
                </p>
                <p className="leading-relaxed">
                  <strong>6.3 Resultados:</strong> Se publicarán en el Fanpage oficial de APOFI.
                </p>
                <p className="leading-relaxed">
                  <strong>6.4 Inicio del beneficio:</strong> El descuento aplica desde el día de inscripción en el sorteo.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Selección de Ganadores</h2>
              <p className="leading-relaxed">
                Los ganadores serán seleccionados mediante un sorteo electrónico aleatorio, 
                supervisado por un notario público, garantizando la transparencia del proceso.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Notificación</h2>
              <p className="leading-relaxed">
                Los ganadores serán notificados por WhatsApp y correo electrónico en un plazo máximo 
                de 24 horas después del sorteo. Deberán confirmar su aceptación en un plazo de 48 horas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Restricciones</h2>
              <div className="space-y-3">
                <p className="leading-relaxed">
                  <strong>8.1 Transferencia:</strong> Los bonos no son transferibles a terceros.
                </p>
                <p className="leading-relaxed">
                  <strong>8.2 Combinación:</strong> No se pueden combinar con otras promociones vigentes.
                </p>
                <p className="leading-relaxed">
                  <strong>8.3 Canje:</strong> Los bonos no son canjeables por dinero en efectivo.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Privacidad</h2>
              <p className="leading-relaxed">
                APOFI se compromete a proteger la privacidad de los participantes. Los datos personales 
                serán utilizados únicamente para fines del sorteo y no serán compartidos con terceros.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Modificaciones</h2>
              <p className="leading-relaxed">
                APOFI se reserva el derecho de modificar estos términos y condiciones en cualquier momento, 
                notificando los cambios a través de la página web oficial.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contacto</h2>
              <div className="space-y-2">
                <p className="leading-relaxed">
                  <strong>APOFI - Escuela de Especialización Odontológica</strong>
                </p>
                <p className="leading-relaxed">📞 +51 940 225 052</p>
                <p className="leading-relaxed">📧 info@apofi.com</p>
                <p className="leading-relaxed">📍 Lima, Perú</p>
              </div>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold px-8 py-4 rounded-2xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-2xl">🎯</span>
              Participar en el sorteo
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
