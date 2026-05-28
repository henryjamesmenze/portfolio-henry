const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center px-4 overflow-hidden bg-black"
    >
      {/* Fondo animado con gradiente */}
      <div className="absolute inset-0 bg-gradient-animated opacity-30 z-0" />
      
      {/* Efecto de círculos decorativos animados - mejorado */}
      <div className="absolute top-10 -left-60 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse-slow" />
      <div className="absolute -bottom-32 right-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float" />

      {/* Difuminado superior */}
      <div className="absolute top-0 left-0 w-full h-32 bg-black/30 z-10" />

      {/* Difuminado inferior */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-black/30 z-10" />

      {/* Contenido dividido */}
      <div className="relative z-20 max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Texto - izquierda */}
        <div className="w-full md:w-3/5 text-white text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-purple-400 mb-4">
            Henry Mendoza
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-purple-300 font-semibold mb-6">
            Junior Frontend Developer y Tecnólogo en desarrollo de sistemas de información y de software
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 leading-relaxed font-medium">
            Creo experiencias web hermosas y funcionales con React, JavaScript y tecnologías modernas. Transformo ideas en código elegante y eficiente.
          </p>
          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <a
              href="#proyectos"
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300"
            >
              Ver Proyectos
            </a>
            <a
              href="#contacto"
              className="inline-block border-2 border-purple-500 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300"
            >
              Contactar
            </a>
          </div>
        </div>

        {/* Imagen - derecha */}
        <div className="w-full md:w-2/5 flex justify-center">
          <div className="relative group">
            {/* Aura brillante animada alrededor de la imagen */}
            <div className="absolute inset-0 bg-purple-600 rounded-full blur-2xl opacity-30 transition-all duration-300" />
            <img
              src="/henryHero.jpeg"
              alt="Foto de perfil"
              className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-purple-500 shadow-lg transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Línea decorativa animada en la parte inferior */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg className="w-8 h-8 text-purple-500 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Elementos decorativos flotantes */}
      <div className="absolute top-1/4 right-10 w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 left-10 w-1.5 h-1.5 bg-pink-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
    </section>
  );
};

export default Hero;