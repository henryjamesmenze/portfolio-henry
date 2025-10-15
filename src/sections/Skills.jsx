import { FaAws } from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiSass,
  SiDocker,
  SiGit,
  SiMysql,
  SiBootstrap,
  SiGnubash,
} from "react-icons/si";

const skills = [
  { name: "TypeScript", icon: <SiTypescript size={40} /> },
  { name: "JavaScript", icon: <SiJavascript size={40} /> },
  { name: "React", icon: <SiReact size={40} /> },
  { name: "Node.js", icon: <SiNodedotjs size={40} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
  { name: "SASS/SCSS", icon: <SiSass size={40} /> },
  { name: "Docker", icon: <SiDocker size={40} /> },
  { name: "Git", icon: <SiGit size={40} /> },
  { name: "MySQL", icon: <SiMysql size={40} /> },
  { name: "Bootstrap", icon: <SiBootstrap size={40} /> },
  { name: "Bash", icon: <SiGnubash size={40} /> },
  { name: "AWS", icon: <FaAws size={40} /> },
];

const Skills = () => {
  return (
    <section
      id="habilidades"
      className="relative min-h-screen flex items-center justify-center px-4 bg-black overflow-hidden"
    >
      {/* Difuminado superior */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-t from-transparent via-black to-black z-10" />

      {/* Difuminado inferior */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent via-black to-black z-10" />

      {/* Contenido Skills */}
      <div className="relative z-20 w-full max-w-6xl mx-auto text-center py-12">
        <h3 className="text-3xl sm:text-4xl font-semibold text-purple-500 mb-10">
          Habilidades Técnicas
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-black border border-purple-500 rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-purple-500 hover:text-black transition text-white"
            >
              {skill.icon}
              <span className="text-lg font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;