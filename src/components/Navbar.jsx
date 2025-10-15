import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = ["Inicio", "Sobre mí", "Habilidades", "Proyectos", "Contacto"];

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-90 text-gray-100 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-purple-500">Porfolio Henry Mendoza</h1>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-purple-300"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Menú */}
        <ul className={`md:flex md:space-x-6 text-md ${open ? "block" : "hidden"} md:block`}>
          {navItems.map((item, i) => (
            <li key={i} className="mt-2 md:mt-0">
              <Link
                to={item.toLowerCase().replace(" ", "")}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-purple-300 transition block"
              >
                {item}
              </Link>
            </li>
          ))}
          <li className="mt-2 md:mt-0">
            <a
              href="../HJ Henry Zepeda.pdf"
              download='../HJ Henry Zepeda.pdf'
              className="bg-purple-500 text-black px-3 py-1 rounded hover:bg-purple-300 transition block text-center"
            >
              Descargar CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;