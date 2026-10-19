import { EXPERIENCES } from "../constants";

const Experience = ({ isLightMode }) => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="scroll-mt-28 border-b border-slate-700/30 py-16 sm:py-20"
    >
      <div className="mb-9 max-w-2xl">
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.18em] ${
            isLightMode ? "text-cyan-800" : "text-cyan-300"
          }`}
        >
          Career
        </p>
        <h2
          id="experience-title"
          className={`text-3xl font-semibold tracking-tight sm:text-4xl ${
            isLightMode ? "text-slate-950" : "text-white"
          }`}
        >
          Professional experience
        </h2>
      </div>

      <ol className="space-y-4">
        {EXPERIENCES.map((experience) => (
          <li key={`${experience.company}-${experience.year}`}>
            <article
              className={`grid gap-4 rounded-2xl border p-5 sm:p-6 md:grid-cols-[12rem_1fr] md:gap-8 ${
                isLightMode
                  ? "border-slate-200 bg-white shadow-sm"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              <p
                className={`text-sm font-medium md:pt-1 ${
                  isLightMode ? "text-cyan-900" : "text-cyan-200"
                }`}
              >
                {experience.year}
              </p>
              <div>
                <h3
                  className={`text-lg font-semibold sm:text-xl ${
                    isLightMode ? "text-slate-950" : "text-white"
                  }`}
                >
                  {experience.role}
                </h3>
                <p
                  className={`mt-1 font-medium ${
                    isLightMode ? "text-slate-600" : "text-slate-300"
                  }`}
                >
                  {experience.company} · {experience.location}
                </p>
                <ul
                  className={`mt-4 list-disc space-y-2 pl-5 leading-7 marker:text-cyan-500 ${
                    isLightMode ? "text-slate-600" : "text-slate-300"
                  }`}
                >
                  {experience.description.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
