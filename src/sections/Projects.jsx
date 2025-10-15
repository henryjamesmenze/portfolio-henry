const projects = [
  {
    title: "Sistema de alquiler de vehículos",
    description: "Desarrollo de un software para el alquiler de vehículos en la ciudad de Cartagena",
    tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    demo: "#",
    repo: "#",
  },
  {
    title: "RutiApp Web",
    description: "Desarrollo de una aplicación móvil para aumentar la seguridad de los infantes",
    tech: ["HTML5", "CSS3", "JavaScript", "SQL"],
    demo: "https://rutiappt.web.app/inicio.html",
    repo: "#",
  },
  {
    title: "Sistema de inventario",
    description: "Desarrollo de un software para la detección y clasificación de productos",
    tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    demo: "#",
    repo: "#",
  }
];

const Projects = () => {
  return (
    <section
      id="proyectos"
      className="relative h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      {/* Video de fondo solo en desktop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 hidden md:block"
      >
        <source src="/videos/projectsVideo.webm" type="video/webm" />
      </video>

      {/* Imagen fallback para móviles */}
      <img
        src="/projects.png"
        alt="Fondo Proyectos"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 block md:hidden"
      />

      {/* Overlay oscuro + blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10" />

      {/* Difuminado superior */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-t from-transparent via-black to-black z-10" />

      {/* Difuminado inferior */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent via-black to-black z-10" />

      {/* Contenido Projects */}
      <div className="relative z-20 max-w-5xl mx-auto text-white">
        <h3 className="text-2xl sm:text-3xl font-semibold text-purple-500 mb-8 text-center">
          Proyectos
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="bg-black border border-purple-500 rounded p-6 hover:bg-purple-500 hover:text-black transition"
            >
              <h4 className="text-lg sm:text-xl font-bold mb-2">{proj.title}</h4>
              <p className="mb-2">{proj.description}</p>
              <p className="text-sm mb-2">Tecnologías: {proj.tech.join(", ")}</p>
              <div className="flex space-x-4">
                <a
                  href={proj.demo}
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
                <a href={proj.repo} className="underline">Repo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;