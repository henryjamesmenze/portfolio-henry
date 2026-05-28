const experiences = [
  {
    title: "Junior FrontEnd Developer",
    company: "CodeCat",
    period: "2023 - Presente",
    description: "Participe en el desarrollo de aplicaciones web usando React y tecnologías modernas. Optimización de interfaces y mejora de experiencia de usuario.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Git"],
    type: "Actual"
  },
  {
    title: "Practicante Tecnólogo en desarrollo de sistemas de información y software",
    company: "Universidad Rafael Núñez",
    period: "Febrero 2025 - Junio 2025",
    description: "Encargado de la configuración y despliegue de servidores en entornos Linux, optimizando el rendimiento y la seguridad del sistema operativo, por otro lado a cargo de la implementación y mantenimiento de los sistemas de gestión bibliotecaria Koha y Vufind, incluyendo la migración de datos y configuración del servidor.",
    technologies: ["Koha", "Vufind", "Linux", "Bash", "SQL"],
    type: "Pasado"
  },
  {
    title: "Docente de Tecnologia por prestación de servicios",
    company: "Gimnasio Moderno de Cartagena",
    period: "Enero 2026 - Abril 2026",
    description: "Responsable del desarrollo de guías de aprendizaje y recursos didácticos digitales, además de la evaluación continua del desempeño académico mediante herramientas institucionales.",
    technologies: ["Google Classroom", "Herramientas de evaluación digital", "Excel", "Arduino"],
    type: "Pasado"
  }
];

const Experience = () => {
  return (
    <section
      id="experiencia"
      className="relative w-full min-h-screen flex items-center justify-center px-4 bg-black overflow-hidden py-16"
    >
      {/* Efecto de círculos animados de fondo mejorado */}
      <div className="absolute top-1/3 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" />
      <div className="absolute bottom-1/3 -left-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float" />

      {/* Difuminado superior */}
      <div className="absolute top-0 left-0 w-full h-24 bg-black/30 z-10" />

      {/* Difuminado inferior */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-black/30 z-10" />

      {/* Contenido */}
      <div className="relative z-20 w-full max-w-5xl mx-auto">
        {/* Título */}
        <div className="text-center mb-20 animate-slide-in-left">
          <h3 className="text-4xl sm:text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4 animate-gradient drop-shadow-lg">
            Experiencia Laboral
          </h3>
          <p className="text-gray-400 text-lg">Mi trayectoria profesional</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea central (solo en desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-purple-500" />

          {/* Experiencias */}
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-start md:items-center animate-slide-in-left`}>
                {/* Contenido - 50% */}
                <div className="w-full md:w-1/2">
                  <div className="group card-hover relative">
                    {/* Efecto de borde animado mejorado */}
                    <div className="absolute -inset-0.5 bg-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg" />
                    
                    {/* Card con diseño mejorado */}
                    <div className="relative bg-black/50 border-2 border-purple-500/50 rounded-xl p-8 group-hover:border-purple-400 transition-all duration-300 hover:-rotate-1">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h4 className="text-2xl sm:text-3xl font-bold text-purple-300 mb-2 group-hover:animate-color-shift">
                            {exp.title}
                          </h4>
                          <p className="text-purple-400 font-bold text-lg">{exp.company}</p>
                        </div>
                        <span className={`text-xs font-bold px-4 py-2 rounded-full border-2 uppercase tracking-wide ${
                          exp.type === 'Actual' 
                            ? 'bg-green-500/20 text-green-300 border-green-500/30' 
                            : 'bg-purple-500/20 text-purple-300 border-purple-500/30'
                        }`}>
                          {exp.type}
                        </span>
                      </div>
                      
                      <p className="text-gray-400 text-sm font-bold mb-4 uppercase tracking-wide">{exp.period}</p>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed font-medium">
                        {exp.description}
                      </p>
                      
                      {/* Tecnologías mejoradas */}
                      <div className="flex flex-wrap gap-3">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-purple-500/20 text-purple-300 text-xs px-4 py-2 rounded-full border border-purple-500/50 hover:border-purple-400 transition-all transform hover:scale-110 font-semibold">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Punto del timeline - 50% */}
                <div className="hidden md:flex w-full md:w-1/2 justify-center">
                  <div className="relative flex justify-center">
                    {/* Círculo externo */}
                    <div className="absolute w-4 h-4 bg-purple-500 rounded-full left-1/2 transform -translate-x-1/2 shadow-lg shadow-purple-500/50" />
                    
                    {/* Círculo interno */}
                    <div className="absolute w-2 h-2 bg-black rounded-full left-1/2 transform -translate-x-1/2 z-10" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer con estadísticas */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-black border border-purple-500/30 rounded-lg p-4 text-center hover:border-purple-500 transition-colors">
            <div className="text-2xl font-bold text-purple-400">2+</div>
            <div className="text-xs text-gray-400 mt-1">Experiencias</div>
          </div>
          <div className="bg-black border border-purple-500/30 rounded-lg p-4 text-center hover:border-purple-500 transition-colors">
            <div className="text-2xl font-bold text-purple-400">15+</div>
            <div className="text-xs text-gray-400 mt-1">Tecnologías</div>
          </div>
          <div className="bg-black border border-purple-500/30 rounded-lg p-4 text-center hover:border-purple-500 transition-colors col-span-2 md:col-span-1">
            <div className="text-2xl font-bold text-purple-400">1+</div>
            <div className="text-xs text-gray-400 mt-1">Años</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
