function Projects() {

  const projects = [
    {
      title: "Netflix Clone",
      description:
        "A responsive Netflix homepage clone built using HTML and CSS.",
      tech: "HTML, CSS",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55",
    },

    {
      title: "Movie Search App",
      description:
        "A React app to search movies using API integration.",
      tech: "React, API, Tailwind",
      image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
    },

    {
      title: "Weather App",
      description:
        "A weather dashboard using real-time API data.",
      tech: "React, JavaScript, API",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
    },
  ];

  return (
    <section  id = "projects" className="bg-[#0f0f0f] text-white py-32 px-8 md:px-16 lg:px-24">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-16">

         <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
            My{" "}
            <span className="text-cyan-400">
              Projects
            </span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
          A collection of projects showcasing
my frontend development skills and
problem-solving approach.
          </p>

        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black rounded-3xl overflow-hidden border border-gray-800 hover:border-cyan-400 transition duration-300 hover:-translate-y-3 hover:shadow-cyan-500/20 shadow-lg"
            >

              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="h-52 w-full object-cover"
              />

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="text-2xl font-bold text-cyan-400">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-3 leading-7">
                  {project.description}
                </p>

                <p className="text-sm text-gray-500 mt-4">
                  {project.tech}
                </p>

                {/* BUTTONS */}
                <div className="flex gap-4 mt-6">

                  <a
  href="#"
  target="_blank"
  className="bg-cyan-400 text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition"
>
  Live Demo
</a>

                <a
  href="#"
  target="_blank"
  className="border border-cyan-400 px-5 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition"
>
  GitHub
</a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;