import profile from "../assets/profile.png";

function About() {
  return (
    <section id = "about" className="bg-[#0f0f0f] text-white py-32 px-8 md:px-16 lg:px-24">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="about"
            draggable="false"
      onContextMenu={(e) => e.preventDefault()}
            className="w-75 md:w-100 rounded-3xl border-2 border-cyan-400 shadow-lg shadow-cyan-500/20 select-none"
          />

<div className="absolute inset-0 z-10"></div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="max-w-2xl text-center lg:text-left">

          <h2 className="text-4xl md:text-5xl font-bold tracking-wide mb-6">
            About{" "}
            <span className="text-cyan-400">
              Me
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-8">
            I am an aspiring frontend developer
            passionate about building modern,
            responsive, and interactive websites.
            I have learned HTML, CSS, Tailwind CSS,
            JavaScript, and React basics, and I
            enjoy creating projects that improve
            user experience and sharpen my
            development skills.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="bg-black p-5 rounded-2xl border border-gray-800">
              <h3 className="text-cyan-400 text-xl font-semibold">
                5+
              </h3>
              <p className="text-gray-400">
                Projects Built
              </p>
            </div>

            <div className="bg-black p-5 rounded-2xl border border-gray-800">
              <h3 className="text-cyan-400 text-xl font-semibold">
                React
              </h3>
              <p className="text-gray-400">
                Learning Journey
              </p>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

export default About;