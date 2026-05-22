const About = () => {
  return (
    <section
      id="sobremí"
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-black"
    >
      {/* Efecto de círculos animados de fondo mejorado */}
      <div className="absolute top-1/4 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" />
      <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float" />

      {/* Difuminado superior */}
      <div className="absolute top-0 left-0 w-full h-24 bg-black/30 z-10" />

      {/* Difuminado inferior */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-black/30 z-10" />

      {/* Contenido dividido */}
      <div className="relative z-20 max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-12 py-16">
        {/* Imagen - 40% */}
        <div className="w-full md:w-2/5 flex justify-center animate-slide-in-left">
          <div className="relative group">
            {/* Aura brillante animada */}
            <div className="absolute inset-0 bg-purple-600 rounded-2xl blur-3xl opacity-60 group-hover:opacity-80 animate-pulse-slow transition-all duration-300" />
            <div className="absolute inset-0 bg-purple-600 rounded-2xl blur-2xl opacity-40 animate-float" />
            <img
              src="/henryAbout.jpeg"
              alt="Foto de perfil"
              className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 object-cover rounded-2xl border-4 border-purple-500 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 hover:border-pink-500 hover:-rotate-2"
            />
          </div>
        </div>

        {/* Texto - 60% */}
        <div className="w-full md:w-3/5 text-white text-center md:text-left animate-slide-in-right">
          <h3 className="text-4xl sm:text-5xl md:text-7xl font-black text-purple-400 mb-6 animate-gradient drop-shadow-lg">
            Sobre Mí
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-gray-300 leading-relaxed mb-8 font-medium">
            Soy un desarrollador persistente y orientado a la excelencia técnica. Me especializo en crear experiencias web eficientes y profesionales. Me apasiona el minimalismo visual, la accesibilidad y la optimización de flujos de trabajo.
          </p>
          <div className="bg-purple-900/30 border-2 border-purple-500/50 rounded-xl p-8 mb-8 hover:border-purple-400 transition-all duration-300 transform hover:scale-105">
            <p className="text-base sm:text-lg md:text-xl text-purple-300 leading-relaxed font-bold italic">
              "Mi filosofía se basa en no dejar de estudiar y aprender constantemente."
            </p>
          </div>
          
          {/* Atributos destacados mejorados */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-purple-900/40 border-2 border-purple-500/50 rounded-xl p-5 hover:border-purple-400 hover:bg-purple-900/60 transition-all duration-300 transform hover:scale-110">
              <div className="text-3xl font-black text-purple-400">+10</div>
              <div className="text-xs sm:text-sm text-gray-300 font-semibold mt-1">Proyectos</div>
            </div>
            <div className="bg-purple-900/40 border-2 border-purple-500/50 rounded-xl p-5 hover:border-purple-400 hover:bg-purple-900/60 transition-all duration-300 transform hover:scale-110">
              <div className="text-3xl font-black text-purple-400">1+</div>
              <div className="text-xs sm:text-sm text-gray-300 font-semibold mt-1">Años</div>
            </div>
            <div className="bg-purple-900/40 border-2 border-purple-500/50 rounded-xl p-5 hover:border-purple-400 hover:bg-purple-900/60 transition-all duration-300 transform hover:scale-110 col-span-2 md:col-span-1">
              <div className="text-3xl font-black text-purple-400">100%</div>
              <div className="text-xs sm:text-sm text-gray-300 font-semibold mt-1">Dedicación</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;