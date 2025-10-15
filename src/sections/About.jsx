const About = () => {
  return (
    <section
      id="sobremí"
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-black"
    >
      {/* Difuminado superior */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-t from-transparent via-black to-black z-10" />

      {/* Difuminado inferior */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent via-black to-black z-10" />

      {/* Contenido dividido */}
      <div className="relative z-20 max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-8 py-12">
        {/* Imagen - 40% */}
        <div className="w-full md:w-2/5 flex justify-center">
          <img
            src="/henryAbout.jpeg"
            alt="Foto de perfil"
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-120 md:h-120 object-cover rounded-lg border-4 border-purple-500 shadow-lg"
          />
        </div>

        {/* Texto - 60% */}
        <div className="w-full md:w-3/5 text-white text-center md:text-left">
          <h3 className="text-4xl sm:text-5xl md:text-8xl font-semibold text-purple-500 mb-6">
            Sobre mí
          </h3>
          <p className="text-base sm:text-lg md:text-2xl text-gray-300 leading-relaxed mb-4">
            Soy un desarrollador persistente y orientado a la excelencia técnica. Me especializo en crear experiencias web eficientes y profesionales. Me apasiona el minimalismo visual, la accesibilidad y la optimización de flujos de trabajo.
          </p>
          <p className="text-base sm:text-lg md:text-3xl text-gray-300 leading-relaxed font-bold">
            "Mi filosofía se basa en no dejar de estudiar y aprender constantemente."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;