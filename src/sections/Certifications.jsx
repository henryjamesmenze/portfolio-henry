import { FaAward, FaCalendarAlt, FaDownload } from "react-icons/fa";
import { useState } from "react";

const Certifications = () => {
  const [downloadingId, setDownloadingId] = useState(null);

  const handleDownload = (certId, certName, certificateUrl) => {
    if (certificateUrl === "#") {
      alert("El certificado aún no está disponible para descargar. Por favor, intenta más tarde.");
      return;
    }

    setDownloadingId(certId);
    
    // Simular descarga
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = certificateUrl;
      link.download = `Certificado_${certName}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloadingId(null);
    }, 500);
  };
  const certifications = [
    {
      id: 1,
      name: "Tecnologo en desarrollo de sistemas de información y de software",
      institution: "Corporación Universitaria Rafael Núñez",
      date: "Junio 2025",
      description: "Formación integral en desarrollo de software, abarcando desde fundamentos de programación hasta tecnologías web avanzadas, con énfasis en proyectos prácticos y experiencia laboral en el sector.",
      category: "Educación",
      color: "from-purple-500 to-purple-600",
      certificateUrl: "Diploma.pdf", // Reemplaza con URL real del certificado
    },
    {
      id: 2,
      name: "Programación con JavaScript",
      institution: "Coursera",
      date: "Junio 2025",
      description: "Dominio avanzado de JavaScript, async/await, closures y patrones de diseño.",
      category: "Programming",
      color: "from-yellow-500 to-yellow-600",
      certificateUrl: "JavaScript_Course.pdf", // Reemplaza con URL real del certificado
    },
    {
      id: 3,
      name: "Cómo resolver problemas y tomar decisiones con eficacia",
      institution: "Coursera",
      date: "Junio 2025",
      description: "Habilidades para resolver problemas complejos, análisis crítico y toma de decisiones informadas en entornos profesionales.  ",
      category: "Soft Skills",
      color: "from-cyan-500 to-cyan-600",
      certificateUrl: "Problemas_decisiones.pdf",
    },
    {
      id: 4,
      name: "Generacion IA: el ABC de la inteligencia artificial generativa",
      institution: "Eidos Global y Microsoft",
      date: "Julio 2025",
      description: "Introducción a la inteligencia artificial generativa, incluyendo conceptos clave, aplicaciones prácticas y consideraciones éticas en el uso de esta tecnología emergente.",
      category: "IA",
      color: "from-green-500 to-green-600",
      certificateUrl: "IA_Generativa.pdf",
    },
    {
      id: 5,
      name: "Ciencia e ingeniería de datos",
      institution: "@medellin",
      date: "Octubre 2024",
      description: "Formación en ciencia e ingeniería de datos, abarcando desde la manipulación y análisis de datos hasta la implementación de soluciones basadas en datos para la toma de decisiones informadas.",
      category: "Data Science",
      color: "from-blue-500 to-blue-600",
      certificateUrl: "Certifica_Analisis_Datos.pdf",
    },
    {
      id: 6,
      name: "AWS Academy Cloud Foundations",
      institution: "AWS Academy",
      date: "Julio 2025",
      description: "Fundamentos de la nube de AWS, incluyendo servicios clave, arquitectura en la nube y mejores prácticas para implementar soluciones escalables y seguras en AWS.",
      category: "Cloud Computing",
      color: "from-gray-500 to-gray-600",
      certificateUrl: "AWS_Academy_Cloud_Foundations.pdf",
    }
  ];

  return (
    <section
      id="certificaciones"
      className="relative w-full min-h-screen flex items-center justify-center px-4 overflow-hidden bg-black py-16"
    >
      {/* Efectos de fondo */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" />

      {/* Difuminado superior e inferior */}
      <div className="absolute top-0 left-0 w-full h-24 bg-black/30 z-10" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-black/30 z-10" />

      {/* Contenido */}
      <div className="relative z-20 w-full max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Certificaciones
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Cursos y certificaciones que demuestran mi compromiso con el aprendizaje continuo
          </p>
        </div>

        {/* Grid de Certificaciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group relative bg-black/40 border-2 border-purple-500/30 rounded-2xl p-8 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
            >
              {/* Gradiente de fondo animado */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
              />

              {/* Contenido */}
              <div className="relative z-10">
                {/* Encabezado con icono */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{cert.image}</div>
                  <div className={`bg-gradient-to-r ${cert.color} px-3 py-1 rounded-full text-xs font-semibold text-white`}>
                    {cert.category}
                  </div>
                </div>

                {/* Nombre de la Certificación */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                  {cert.name}
                </h3>

                {/* Institución */}
                <p className="text-purple-300 font-semibold mb-3">
                  {cert.institution}
                </p>

                {/* Fecha */}
                <div className="flex items-center gap-2 text-gray-400 mb-4 text-sm">
                  <FaCalendarAlt className="text-cyan-400" />
                  <span>{cert.date}</span>
                </div>

                {/* Descripción */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Verificación */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold">
                    <FaAward className="text-lg" />
                    <span>Verificado</span>
                  </div>
                  
                  {/* Botón Descargar */}
                  <button
                    onClick={() => handleDownload(cert.id, cert.name, cert.certificateUrl)}
                    disabled={downloadingId === cert.id}
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-600 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <FaDownload className="text-lg" />
                    <span>{downloadingId === cert.id ? "Descargando..." : "Descargar"}</span>
                  </button>
                </div>
              </div>

              {/* Borde luminoso en hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `linear-gradient(45deg, transparent, rgba(139, 92, 246, 0.1), transparent)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Sección de Cursos en Progreso (opcional) */}
        <div className="mt-16 p-8 bg-black/40 border-2 border-cyan-400/30 rounded-2xl hover:border-cyan-400/50 transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="text-3xl">📚</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Actualmente Aprendiendo</h3>
              <p className="text-gray-300">
                Estoy continuamente mejorando mis habilidades. Actualmente explorando TypeScript, Next.js y arquitectura de microservicios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
