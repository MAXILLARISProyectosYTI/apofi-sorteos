# 🎉 Sorteo con Propósito - APOFI Landing Page

Una landing page profesional y moderna para el sorteo odontológico "Sorteo con Propósito" de APOFI, construida con Next.js 15, TypeScript y TailwindCSS.

## ✨ Características

- **Framework**: Next.js 15 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: TailwindCSS v3
- **Animaciones**: Framer Motion + CSS Animations
- **Íconos**: Lucide React + Emojis
- **SEO**: Configurado con metadata nativo
- **Responsive**: Mobile-first design
- **Optimizado**: Para conversión y SEO
- **Páginas**: Landing principal + Términos y condiciones
- **Formulario**: Completamente funcional con validaciones

## 🚀 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd maxillaris-landing
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout principal con SEO
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales
├── components/              # Componentes reutilizables
│   ├── Hero.tsx            # Sección hero principal
│   ├── Steps.tsx           # Pasos para participar
│   ├── Form.tsx            # Formulario de participación
│   ├── Dates.tsx           # Fechas del sorteo
│   ├── Bonus.tsx           # Explicación del bono
│   ├── Purpose.tsx         # Propósito del sorteo
│   └── Footer.tsx          # Pie de página
└── next-seo.config.ts      # Configuración de SEO
```

## 🎯 Componentes Principales

### Hero Section
- Título principal con animaciones
- Botón CTA "Participar ahora"
- Scroll suave al formulario
- Diseño responsivo

### Steps Section
- 3 pasos para participar
- Íconos de Lucide React
- Animaciones de entrada
- Tarjetas interactivas

### Form Section
- Formulario de participación
- Validaciones en tiempo real
- Campos: celular, email, términos
- Estados de envío y confirmación

### Dates Section
- Fecha del sorteo (6 de septiembre 2025)
- Enlace a Facebook para resultados
- Información adicional del sorteo

### Bonus Section
- Explicación del bono de S/ 3,500
- Beneficios y características
- Diseño visual atractivo

### Purpose Section
- Sección emocional
- Estadísticas de la clínica
- Testimonios
- CTA final

### Footer
- Información de contacto
- Redes sociales
- Enlaces útiles
- CTA adicional

## 🎨 Características de Diseño

- **Paleta de colores**: Azules, cian, verdes y acentos
- **Tipografía**: Inter (font-sans)
- **Sombras**: Suaves y elegantes
- **Bordes**: Redondeados (rounded-2xl)
- **Gradientes**: Azul a cian
- **Espaciado**: Consistente con Tailwind

## 📱 Responsive Design

- **Mobile-first**: Diseño optimizado para móviles
- **Breakpoints**: sm, md, lg, xl
- **Grid**: CSS Grid y Flexbox
- **Imágenes**: Adaptativas y optimizadas

## 🔧 Scripts Disponibles

```bash
npm run dev      # Desarrollo con Turbopack
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linting con ESLint
```

## 🌐 SEO y Metadatos

- **next-seo**: Configuración completa
- **Open Graph**: Para redes sociales
- **Twitter Cards**: Optimizado para Twitter
- **Meta tags**: Keywords y descripción
- **Canonical URLs**: Para evitar duplicados

## 🎭 Animaciones

- **Framer Motion**: Transiciones suaves
- **Entrada**: Animaciones de entrada en scroll
- **Hover**: Efectos en botones y tarjetas
- **Scroll**: Animaciones basadas en viewport

## 📊 Funcionalidades

- **Formulario**: Validación y envío
- **Scroll suave**: Navegación interna
- **Responsive**: Adaptable a todos los dispositivos
- **Accesibilidad**: ARIA labels y navegación por teclado

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Subir carpeta .next a Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔒 Variables de Entorno

Crear archivo `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/maxillaris
NEXT_PUBLIC_WHATSAPP_NUMBER=51912345678
```

## 📝 Personalización

### Cambiar Colores
Editar `tailwind.config.js` o usar clases personalizadas en `globals.css`

### Modificar Contenido
Actualizar textos en cada componente según necesidades

### Agregar Funcionalidades
Implementar nuevas secciones o componentes siguiendo la estructura existente

## 🤝 Contribución

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

- **APOFI**: [info@apofi.com](mailto:info@apofi.com)
- **Desarrollador**: [jjeampierjs97@gmail.com](mailto:jjeampierjs97@gmail.com)

---

⭐ Si este proyecto te ayuda, ¡déjale una estrella!
