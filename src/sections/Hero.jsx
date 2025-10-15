const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center px-4 overflow-hidden bg-black"
    >
      {/* Difuminado superior */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-t from-transparent via-black to-black z-10" />

      {/* Difuminado inferior */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent via-black to-black z-10" />

      {/* Contenido dividido */}
      <div className="relative z-20 max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Texto - izquierda */}
        <div className="w-full md:w-3/5 text-white text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-8xl font-bold text-purple-500 mb-4">
            Henry Mendoza
          </h2>
          <p className="text-base sm:text-lg md:text-5xl text-gray-300 mb-6">
            Junior JavaScript & TypeScript Developer
          </p>
          <a
            href="#proyectos"
            className="bg-purple-500 text-black px-6 py-2 rounded hover:bg-purple-300 transition inline-block"
          >
            Ver proyectos
          </a>
        </div>

        {/* Imagen - derecha */}
        <div className="w-full md:w-2/5 flex justify-center">
          <img
            src="/henryHero.jpeg"
            alt="Foto de perfil"
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-100 md:h-100 object-cover rounded-full border-4 border-purple-500 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;