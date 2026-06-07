import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md text-white px-8 py-5 flex justify-between items-center z-50 border-b border-gray-800">

      {/* LOGO */}
      <h1 className="text-3xl font-bold text-cyan-400">
        Alisha
      </h1>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex gap-8 text-lg font-medium">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={`hover:text-cyan-400 transition duration-300 ${
                link.href === "#home"
                  ? "hover:underline underline-offset-8"
                  : ""
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* HAMBURGER BUTTON */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black border-t border-gray-800 flex flex-col items-center gap-6 py-8 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="text-lg font-medium cursor-pointer hover:text-cyan-400 transition duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;