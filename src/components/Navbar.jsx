import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = ["Inicio", "Sobre mí", "Habilidades", "Experiencia", "Proyectos", "Certificaciones"];

  return (
    <nav className="fixed top-0 w-full bg-black/80 dark:bg-black/80 backdrop-blur-lg text-gray-100 dark:text-gray-100 shadow-lg shadow-purple-500/10 z-50 border-b border-purple-500/20 dark:border-purple-500/20">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-purple-400 hover:scale-110 transition-transform duration-300 cursor-pointer">
          HM
        </h1>

        {/* Controles derechos */}
        <div className="flex items-center gap-4">
          {/* Botón hamburguesa */}
          <button
            className="md:hidden text-purple-300 hover:text-purple-200 transition-colors duration-200"
            onClick={() => setOpen(!open)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Menú */}
        <ul className={`${open ? "flex" : "hidden"} md:flex md:space-x-6 absolute md:relative top-full left-0 right-0 md:top-auto md:left-auto md:right-auto flex-col md:flex-row bg-black/95 dark:bg-black/95 md:bg-transparent w-full md:w-auto p-4 md:p-0 border-b md:border-b-0 border-purple-500/20 space-y-2 md:space-y-0`}>
          {navItems.map((item, i) => (
            <li key={i} className="md:mt-0">
              <Link
                to={item.toLowerCase().replace(" ", "")}
                smooth={true}
                duration={500}
                className="cursor-pointer text-gray-200 dark:text-gray-200 hover:text-purple-400 transition-colors duration-200 block font-medium relative group"
                onClick={() => setOpen(false)}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300" />
              </Link>
            </li>
          ))}
          <li className="md:mt-0">
            <a
              href="/_HJ_HenryZepeda.pdf"
              download='/_HJ_HenryZepeda.pdf'
              className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 block text-center"
            >
              CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;