import { SKILL_GROUPS } from "../constants";

const Technologies = ({ isLightMode }) => {
  return (
    <section
      id="technologies"
      aria-labelledby="skills-title"
      className="scroll-mt-28 border-b border-slate-700/30 py-16 sm:py-20"
    >
      <div className="mb-9 max-w-2xl">
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.18em] ${
            isLightMode ? "text-cyan-800" : "text-cyan-300"
          }`}
        >
          Skills
        </p>
        <h2
          id="skills-title"
          className={`text-3xl font-semibold tracking-tight sm:text-4xl ${
            isLightMode ? "text-slate-950" : "text-white"
          }`}
        >
          A practical toolkit
        </h2>
        <p className={`mt-3 leading-7 ${isLightMode ? "text-slate-600" : "text-slate-300"}`}>
          AI platforms and workflows, paired with the product and engineering foundations to put them to work.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {SKILL_GROUPS.map((group) => (
          <article
            key={group.title}
            className={`rounded-2xl border p-5 sm:p-6 ${
              isLightMode
                ? "border-slate-200 bg-white shadow-sm"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >
            <h3
              className={`text-base font-semibold ${
                isLightMode ? "text-slate-900" : "text-slate-100"
              }`}
            >
              {group.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className={`rounded-lg border px-3 py-1.5 text-xs font-medium leading-5 sm:text-sm ${
                    isLightMode
                      ? "border-slate-200 bg-slate-50 text-slate-700"
                      : "border-white/10 bg-slate-900/70 text-slate-200"
                  }`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
