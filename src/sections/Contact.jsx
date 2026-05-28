import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success', 'error', or null
  const [statusMessage, setStatusMessage] = useState("");

  // Inicializar EmailJS (reemplaza con tu Public Key de emailjs.com)
  useEffect(() => {
    emailjs.init("ZXAM2UvvN653o07Co"); // Obtén esto de https://dashboard.emailjs.com/
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que los campos no estén vacíos
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setStatusMessage("Por favor, completa todos los campos.");
      return;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setStatusMessage("Por favor, ingresa un email válido.");
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      // Configurar los parámetros para EmailJS
      // Reemplaza con tus valores de emailjs.com
      const templateParams = {
        to_email: "hmendozazepeda@gmail.com", // Tu email
        subject: `Nuevo mensaje de ${formData.name}`,
        name: formData.name,
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email,
        time: new Date().toLocaleString("es-ES"),
      };

      // Enviar email usando EmailJS
      // Reemplaza SERVICE_ID y TEMPLATE_ID con tus IDs de emailjs.com
      await emailjs.send(
        "service_sbw38fk", // SERVICE_ID de emailjs.com
        "template_natbuym", // TEMPLATE_ID de emailjs.com
        templateParams
      );

      setStatus("success");
      setStatusMessage("Mensaje enviado exitosamente! Gracias por contactarme.");
      setFormData({ name: "", email: "", message: "" });
      
      // Limpiar el mensaje después de 5 segundos
      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      setStatus("error");
      setStatusMessage("Error al enviar el mensaje. Intenta de nuevo más tarde.");
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contacto"
      className="relative w-full min-h-screen flex items-center justify-center px-4 overflow-hidden bg-black py-16"
    >
      {/* Efecto de círculos animados de fondo mejorado */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float" />

      {/* Difuminado superior */}
      <div className="absolute top-0 left-0 w-full h-24 bg-black/30 z-10" />

      {/* Difuminado inferior */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-black/30 z-10" />

      {/* Contenido */}
      <div className="relative z-20 w-full max-w-3xl mx-auto text-center">
        <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
          ¡Hablemos!
        </h3>
        <p className="text-gray-300 text-lg mb-12 leading-relaxed">
          Estoy siempre disponible para nuevas oportunidades, proyectos interesantes o simplemente para conversar sobre tecnología. No dudes en contactarme.
        </p>

        {/* Formulario de Contacto */}
        <div className="bg-black/40 border-2 border-purple-500/30 rounded-2xl p-8 mb-12 hover:border-purple-400 transition-all duration-300">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            {/* Nombre */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-black/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                required
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Tu email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                required
              />
            </div>

            {/* Mensaje */}
            <div>
              <textarea
                name="message"
                placeholder="Tu mensaje"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-black/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                required
              ></textarea>
            </div>

            {/* Mensaje de estado */}
            {status && (
              <div
                className={`p-4 rounded-lg font-semibold text-center ${
                  status === "success"
                    ? "bg-green-500/20 text-green-300 border border-green-500/30"
                    : "bg-red-500/20 text-red-300 border border-red-500/30"
                }`}
              >
                {statusMessage}
              </div>
            )}

            {/* Botón Enviar */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-600 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {loading ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </form>
        </div>

        {/* Contacto Directo */}
        <div className="mb-12">
          <p className="text-gray-400 mb-6 text-sm uppercase tracking-wide font-semibold">O contactarme directamente en:</p>
          <div className="flex gap-6 justify-center flex-wrap">
            {/* Email */}
            <a
              href="mailto:hmendozazepeda@gmail.com"
              className="group flex items-center gap-3 bg-black/40 border-2 border-purple-500/30 rounded-lg px-6 py-4 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105"
            >
              <FaEnvelope className="text-2xl text-purple-400 group-hover:text-cyan-400 transition-colors" />
              <div className="text-left">
                <p className="text-xs text-gray-400 uppercase">Email</p>
                <p className="text-white font-semibold">hmendozazepeda@gmail.com</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/henry-james-mendoza-zepeda-ba4617329/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-black/40 border-2 border-cyan-400/30 rounded-lg px-6 py-4 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 transform hover:scale-105"
            >
              <FaLinkedin className="text-2xl text-cyan-400 group-hover:text-purple-400 transition-colors" />
              <div className="text-left">
                <p className="text-xs text-gray-400 uppercase">LinkedIn</p>
                <p className="text-white font-semibold">LinkedIn</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/henryjamesmenze"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-black/40 border-2 border-purple-500/30 rounded-lg px-6 py-4 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105"
            >
              <FaGithub className="text-2xl text-purple-400 group-hover:text-cyan-400 transition-colors" />
              <div className="text-left">
                <p className="text-xs text-gray-400 uppercase">GitHub</p>
                <p className="text-white font-semibold">GitHub</p>
              </div>
            </a>
          </div>
        </div>

        {/* Respuesta rápida */}
        <p className="text-gray-400 text-sm">
          Respondo en máximo 24 horas • Abierto a nuevas oportunidades
        </p>
      </div>
    </section>
  );
};

export default Contact;
