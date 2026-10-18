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

      <div className="grid items-stretch gap-5 lg:grid-cols-2">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className={`flex h-full flex-col overflow-hidden rounded-2xl border ${
              isLightMode
                ? "border-slate-200 bg-white shadow-sm"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >
            <img
              src={project.image}
              alt={`${project.title} project preview`}
              loading="lazy"
              className="aspect-[16/10] w-full bg-slate-900 object-cover object-top"
            />
            <div className="flex flex-1 flex-col p-5 sm:p-6">
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
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      isLightMode
                        ? "bg-cyan-50 text-cyan-900"
                        : "bg-cyan-950/70 text-cyan-200"
                    }`}
                  >
                    {technology}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} live demo in a new tab`}
                  className={`inline-flex min-h-10 items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 ${
                    isLightMode
                      ? "bg-cyan-800 text-white hover:bg-cyan-900 focus-visible:ring-offset-white"
                      : "bg-cyan-300 text-slate-950 hover:bg-cyan-200 focus-visible:ring-offset-neutral-950"
                  }`}
                >
                  Live demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} source repository in a new tab`}
                  className={`inline-flex min-h-10 items-center justify-center rounded-lg border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 ${
                    isLightMode
                      ? "border-slate-300 text-slate-800 hover:bg-slate-100 focus-visible:ring-offset-white"
                      : "border-slate-600 text-slate-100 hover:bg-white/5 focus-visible:ring-offset-neutral-950"
                  }`}
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
