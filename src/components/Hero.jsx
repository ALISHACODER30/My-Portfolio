import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex flex-col-reverse lg:flex-row items-center justify-between px-8 md:px-16 lg:px-24 pt-32"
    >
      {/* LEFT SECTION */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl text-center lg:text-left mt-12 lg:mt-0"
      >
        <p className="text-cyan-400 text-lg mb-3">Hello, I'm</p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">Alisha</h1>

        <TypeAnimation
          sequence={[
            "Frontend Developer",
            1500,
            "React Developer",
            1500,
            "JavaScript Enthusiast",
            1500,
          ]}
          speed={50}
          repeat={Infinity}
          className="text-2xl md:text-4xl text-cyan-400 mt-4 font-semibold block"
        />

        <p className="text-gray-400 text-lg mt-6 leading-8 max-w-xl">
          Aspiring Frontend Developer passionate about building modern,
          responsive and user-friendly web applications using React, JavaScript
          and Tailwind CSS.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 mt-8 justify-center lg:justify-start">
          <button className="bg-cyan-400 text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300">
            View Projects
          </button>

          <a
            href="/resume.pdf"
            download
            className="border border-cyan-400 px-8 py-5 rounded-xl hover:bg-cyan-400 hover:text-black transition duration-300"
          >
            {" "}
            Download Resume
          </a>

          <div className="flex gap-5 mt-8 justify-center lg:justify-start">
            <a
              href="https://github.com/"
              target="_blank"
              className="text-3xl hover:text-cyan-400 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="text-3xl hover:text-cyan-400 transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </motion.div>

      {/* RIGHT SECTION */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-cyan-500 blur-[120px] opacity-20 rounded-full"></div>

        {/* Profile Card */}
        <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full border-4 border-cyan-400 overflow-hidden shadow-lg shadow-cyan-500/20">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
