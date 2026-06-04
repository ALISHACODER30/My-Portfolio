import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.png";



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
<a
  href="#projects"
  className="inline-block bg-cyan-400 text-black px-8 py-5 rounded-xl font-semibold hover:scale-105 transition duration-300"
>
  View Projects
</a>

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
              href="https://github.com/ALISHACODER30"
              target="_blank"
              className="text-3xl hover:text-cyan-400 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/alisha-taneja-cha21nd/"
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
  className="relative flex justify-center items-center"
>

  {/* BLURRED GLOW BACKGROUND */}
  <div className="absolute w-80 h-80 bg-cyan-400 rounded-full blur-[130px] opacity-30"></div>

  {/* IMAGE BOX */}
  <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_45px_rgba(34,211,238,0.45)]">
<img
  src={profile}
  alt="profile"
  onContextMenu={(e) => e.preventDefault()}
  draggable="false"
  className="
    select-none
    w-full
    h-full
    object-cover
    object-top
    brightness-110
    contrast-110
  "
/>

  <div className="absolute inset-0 z-10"></div>

</div>


</motion.div>
    </section>
  );
}

export default Hero;
