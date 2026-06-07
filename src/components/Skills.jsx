import useTapToggle from "../hooks/useTapToggle";

function Skills() {
  const { toggle, isActive } = useTapToggle();

  const skills = [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "JavaScript",
    "React",
    "Git",
    "GitHub",
    "Responsive Design",
  ];

  return (
    <section id = "skills" className="bg-black text-white py-32 px-8 md:px-16 lg:px-24">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-16">

        <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
            My{" "}
            <span className="text-cyan-400">
              Skills
            </span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
           Technologies and tools I use to
create responsive, interactive and
modern frontend experiences.
          </p>

        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <div
              key={index}
              onClick={() => toggle(index)}
              className={`bg-[#111] rounded-2xl p-8 flex justify-center items-center tap-skill-card ${
                isActive(index) ? "tap-skill-card-active" : "border-gray-800"
              }`}
            >
              <h3 className="text-xl font-semibold text-cyan-400">
                {skill}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;