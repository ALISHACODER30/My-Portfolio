import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md text-white px-8 py-5 flex justify-between items-center z-50 border-b border-gray-800">

      {/* LOGO */}
      <h1 className="text-3xl font-bold text-cyan-400">
        Alisha
      </h1>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex gap-8 text-lg font-medium">

  <li>
    <a
      href="#home"
      className="hover:text-cyan-400 hover:underline underline-offset-8 transition duration-300"
    >
      Home
    </a>
  </li>

  <li>
    <a
      href="#about"
      className="hover:text-cyan-400 transition duration-300"
    >
      About
    </a>
  </li>

  <li>
    <a
      href="#skills"
      className="hover:text-cyan-400 transition duration-300"
    >
      Skills
    </a>
  </li>

  <li>
    <a
      href="#projects"
      className="hover:text-cyan-400 transition duration-300"
    >
      Projects
    </a>
  </li>

  <li>
    <a
      href="#contact"
      className="hover:text-cyan-400 transition duration-300"
    >
      Contact
    </a>
  </li>

</ul>

      {/* HAMBURGER BUTTON */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black border-t border-gray-800 flex flex-col items-center gap-6 py-8 md:hidden">

          <p className="cursor-pointer hover:text-cyan-400">
            Home
          </p>

          <p className="cursor-pointer hover:text-cyan-400">
            About
          </p>

          <p className="cursor-pointer hover:text-cyan-400">
            Skills
          </p>

          <p className="cursor-pointer hover:text-cyan-400">
            Projects
          </p>

          <p className="cursor-pointer hover:text-cyan-400">
            Contact
          </p>

        </div>
      )}
    </nav>
  );
}

export default Navbar;