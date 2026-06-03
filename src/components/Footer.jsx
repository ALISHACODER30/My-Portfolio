import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0f0f0f] border-t border-gray-800 py-10">

      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-5">

        <div>
          <h2 className="text-2xl font-bold text-cyan-400">
            Alisha
          </h2>

          <p className="text-gray-500 mt-2">
            Frontend Developer
          </p>
        </div>

        <div className="flex gap-6 text-2xl">

          <a
            href="#"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="#"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

      <p className="text-center text-gray-500 mt-8">
        © 2026 Alisha. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;