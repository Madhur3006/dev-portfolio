import {
  SiAmazonwebservices,
  SiDocker,
  SiGooglecloud,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiTypescript,
  SiWebpack,
} from "react-icons/si";
import { FEATURED_TECHNOLOGIES, SKILL_GROUPS } from "../constants";

const TECHNOLOGY_ICONS = {
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Node.js": SiNodedotjs,
  "Google Cloud": SiGooglecloud,
  AWS: SiAmazonwebservices,
  Docker: SiDocker,
  Webpack: SiWebpack,
};

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
          Technologies & tools
        </h2>
        <p className={`mt-3 leading-7 ${isLightMode ? "text-slate-600" : "text-slate-300"}`}>
          Engineering skills and product-facing AI capabilities from my current work.
        </p>
      </div>

      <ul
        aria-label="Core technologies"
        className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
      >
        {FEATURED_TECHNOLOGIES.map((technology) => {
          const Icon = TECHNOLOGY_ICONS[technology];
          return (
            <li
              key={technology}
              className={`flex min-h-24 flex-col items-center justify-center gap-2 rounded-xl border px-2 py-4 text-center ${
                isLightMode
                  ? "border-slate-200 bg-white text-slate-700 shadow-sm"
                  : "border-white/10 bg-white/[0.03] text-slate-200"
              }`}
            >
              <Icon aria-hidden="true" className="text-2xl text-cyan-500" />
              <span className="text-xs font-medium sm:text-sm">{technology}</span>
            </li>
          );
        })}
      </ul>

      <div className="grid gap-4 md:grid-cols-2">
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
                  className={`rounded-full px-3 py-1.5 text-xs font-medium sm:text-sm ${
                    isLightMode
                      ? "bg-slate-100 text-slate-700"
                      : "bg-slate-800 text-slate-200"
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
