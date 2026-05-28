const projects = [
  {
    title: "Calculadora de relaciones de recurrencias lineales",
    description: "Desarrollo de una calculadora para resolver ejercicios de recurrencias lineales homogeneas de segundo orden",
    category: "Herramienta Educativa",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    demo: "https://recurrenciascalc.netlify.app/",
    repo: "https://github.com/henryjamesmenze/calculadora.git",
    status: "Completado",
  },
  {
    title: "RutiApp Web",
    description: "Desarrollo de una aplicación móvil para aumentar la seguridad de los infantes",
    category: "Seguridad Infantil",
    tech: ["HTML5", "CSS3", "JavaScript", "SQL"],
    demo: "https://rutiappt.web.app/inicio.html",
    repo: "#",
    status: "Completado",
  },
  {
    title: "Generador de graficos basado en datos CSV",
    description: "Generador de gráficos dinámicos a partir de archivos CSV cargados por el usuario",
    category: "Visualización de Datos",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    demo: "https://getgraph.netlify.app/",
    repo: "https://github.com/henryjamesmenze/projectSemillero.git",
    status: "Completado",
  },
  {
    title: "AhorrApp – Aplicación de Finanzas Personales",
    description: "Aplicación para gestionar y ahorrar dinero de manera efectiva",
    category: "Finanzas",
    tech: ["React Native", "Expo", "Node.js", "MongoDB" ],
    demo: "https://ahorrapp.netlify.app/",
    repo: "https://github.com/henryjamesmenze/ahorrapp.git",
    status: "Completado",
  }
];

const Projects = () => {
  return (
    <section
      id="proyectos"
      className="relative w-full min-h-screen flex items-center justify-center px-4 overflow-hidden py-16 bg-black"
    >
      {/* Video de fondo solo en modo oscuro */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 hidden dark:block md:block"
      >
        <source src="/videos/projectsVideo.webm" type="video/webm" />
      </video>

      <img
        src="/projects.png"
        alt="Fondo Proyectos"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 dark:hidden block md:hidden"
      />

      <div className="absolute top-1/3 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse-slow" />
      
      {/* Overlay mejorado */}
      <div className="absolute inset-0 bg-black/70 dark:bg-black/60 backdrop-blur-sm z-10" />
      
      <div className="absolute top-0 left-0 w-full h-24 bg-black/30 dark:bg-black/30 z-10" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-black/30 dark:bg-black/30 z-10" />
      
      <div className="relative z-20 max-w-5xl mx-auto text-white w-full">
        <div className="text-center mb-16">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Proyectos Destacados
          </h3>
          <p className="text-gray-300 text-lg font-semibold">Trabajos que demuestran mis habilidades y creatividad</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="group card-hover relative"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Efecto de borde animado mejorado */}
              <div className="absolute -inset-0.5 bg-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl" />
              
              {/* Card principal con diseño mejorado */}
              <div className="relative bg-black/50 border border-purple-500/40 rounded-lg p-6 h-full flex flex-col group-hover:border-purple-400 transition-all duration-300">
                {/* Header con categoría y estado */}
                <div className="flex justify-between items-start mb-4 pb-3 border-b border-purple-500/20">
                  <span className="text-xs font-bold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                    {proj.category}
                  </span>
                  <span className="text-xs font-bold text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                    ✓ {proj.status}
                  </span>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg sm:text-xl font-semibold mb-2 text-purple-300">
                    {proj.title}
                  </h4>
                </div>
                <p className="text-sm sm:text-base text-gray-300 mb-6 flex-grow leading-relaxed font-medium">
                  {proj.description}
                </p>
                <div className="mb-6">
                  <p className="text-xs sm:text-sm text-purple-400 font-bold mb-3 uppercase tracking-wide">Stack Tecnológico</p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map((t, idx) => (
                      <span key={idx} className="bg-purple-500/20 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-500/50 hover:border-purple-400 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 pt-6 border-t border-purple-500/20">
                  <a
                    href={proj.demo}
                    className="flex-1 text-center py-2 px-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-md font-semibold hover:from-purple-700 hover:to-purple-600 hover:shadow-lg hover:shadow-purple-500/50 transition-all text-sm transform hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Demo
                  </a>
                  {proj.repo !== "#" && (
                    <a 
                      href={proj.repo} 
                      className="flex-1 text-center py-2 px-4 border-2 border-cyan-400 text-cyan-400 rounded-md font-semibold hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/50 transition-all text-sm transform hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Código
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;