import { PROJECTS } from "../constants";

const Projects = ({ isLightMode }) => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="scroll-mt-28 border-b border-slate-700/30 py-16 sm:py-20"
    >
      <div className="mb-9 max-w-2xl">
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.18em] ${
            isLightMode ? "text-cyan-800" : "text-cyan-300"
          }`}
        >
          Selected work
        </p>
        <h2
          id="projects-title"
          className={`text-3xl font-semibold tracking-tight sm:text-4xl ${
            isLightMode ? "text-slate-950" : "text-white"
          }`}
        >
          Projects
        </h2>
      </div>

      <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className={`flex h-full flex-col rounded-2xl border p-5 sm:p-6 ${
              isLightMode
                ? "border-slate-200 bg-white shadow-sm"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >
            <h3
              className={`text-xl font-semibold ${
                isLightMode ? "text-slate-950" : "text-white"
              }`}
            >
              {project.title}
            </h3>
            <p
              className={`mt-3 flex-1 leading-7 ${
                isLightMode ? "text-slate-600" : "text-slate-300"
              }`}
            >
              {project.description}
            </p>
            {project.status && (
              <p
                className={`mt-5 text-sm font-medium ${
                  isLightMode ? "text-cyan-800" : "text-cyan-200"
                }`}
              >
                {project.status}
              </p>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live demo in a new tab`}
                className={`mt-5 inline-flex min-h-10 w-fit items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 ${
                  isLightMode
                    ? "bg-cyan-800 text-white hover:bg-cyan-900 focus-visible:ring-offset-white"
                    : "bg-cyan-300 text-slate-950 hover:bg-cyan-200 focus-visible:ring-offset-neutral-950"
                }`}
              >
                Live demo
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
