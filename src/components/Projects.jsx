import netflix from "../assets/netflix.png";
import weather from "../assets/weather.png";
import movie from "../assets/movie.png";

function Projects() {
  const projects = [
    {
      title: "Netflix Clone",
      description:
        "A responsive Netflix homepage clone built using HTML and CSS.",
      tech: "HTML, CSS",
      image: netflix,
      github:"https://github.com/ALISHACODER30/Netflix-Clone-using-html-css",
      Live:"https://netflix-clone-using-html-css-liard.vercel.app/",
    },

    {
      title: "Movie Search App",
      description: "A React app to search movies using API integration.",
      tech: "React, API, Tailwind",
      image: movie,
      github: "https://github.com/ALISHACODER30/Movie-Search-app",
      Live:"https://movie-search-app-two-nu.vercel.app/",
    },

    {
      title: "Weather App",
      description: "A weather dashboard using real-time API data.",
      tech: "React, JavaScript, API",
      image: weather,
      github: "https://github.com/ALISHACODER30/Weather---App-Clone",
      Live:"https://weather-app-clone-mu.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#0f0f0f] text-white py-32 px-8 md:px-16 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            A collection of projects showcasing my frontend development skills
            and problem-solving approach.
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

                <p className="text-sm text-gray-500 mt-4">{project.tech}</p>

                {/* BUTTONS */}
                <div className="flex gap-4 mt-6">
                  {/* LIVE DEMO */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-400 text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition"
                  >
                    Live Demo
                  </a>

                  {/* GITHUB */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
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
