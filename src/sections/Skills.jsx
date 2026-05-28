import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiSass,
  SiGit,
  SiMysql,
  SiBootstrap,
  SiGnubash,
  SiAstro,
} from "react-icons/si";

import { TbBrandReactNative } from "react-icons/tb";

const skills = [
  { name: "TypeScript", icon: <SiTypescript size={40} /> },
  { name: "JavaScript", icon: <SiJavascript size={40} /> },
  { name: "React", icon: <SiReact size={40} /> },
  { name: "Node.js", icon: <SiNodedotjs size={40} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
  { name: "SASS/SCSS", icon: <SiSass size={40} /> },
  { name: "Git", icon: <SiGit size={40} /> },
  { name: "MySQL", icon: <SiMysql size={40} /> },
  { name: "Bootstrap", icon: <SiBootstrap size={40} /> },
  { name: "Bash", icon: <SiGnubash size={40} /> },
  { name: "Astro", icon: <SiAstro size={40} /> },
  { name: "React Native", icon: <TbBrandReactNative size={40} /> },
  { name: "Docker", icon: <TbBrandDocker size={40} /> },
];

const Skills = () => {
  return (
    <section
      id="habilidades"
      className="relative min-h-screen flex items-center justify-center px-4 bg-black overflow-hidden"
    >
      {/* Efecto de círculos animados de fondo mejorado */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float" />

      {/* Difuminado superior */}
      <div className="absolute top-0 left-0 w-full h-24 bg-black/30 z-10" />

      {/* Difuminado inferior */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-black/30 z-10" />

      {/* Contenido Skills */}
      <div className="relative z-20 w-full max-w-6xl mx-auto text-center py-16">
        <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-purple-400 mb-4">
          Habilidades Técnicas
        </h3>
        <p className="text-gray-400 mb-16 text-lg font-semibold">Tecnologías que domino y utilizo en mis proyectos</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="group card-hover relative"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Aura brillante */}
              <div className="absolute -inset-0.5 bg-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg" />
              
              {/* Card principal con fondo degradado */}
              <div className="relative bg-black border border-purple-500/30 rounded-lg p-6 flex flex-col items-center justify-center gap-3 hover:border-purple-400 transition-all duration-300 text-white">
                <div className="text-4xl text-purple-400 transition-all duration-300">
                  {skill.icon}
                </div>
                <span className="text-sm sm:text-base font-semibold text-center text-purple-300">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;