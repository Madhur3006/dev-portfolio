import { Link } from "react-router-dom";
import { BiMoon, BiSun } from "react-icons/bi";
import {
  AWARDS,
  CERTIFICATIONS,
  CONTACT,
  EDUCATION,
  EXPERIENCES,
  HERO_CONTENT,
  HERO_ROLE,
  PROJECTS,
  SKILL_GROUPS,
} from "../constants";

const Resume = ({ isLightMode, setIsLightMode }) => {
  const headingColor = isLightMode ? "text-slate-950" : "text-white";
  const bodyColor = isLightMode ? "text-slate-600" : "text-slate-300";
  const panelColor = isLightMode
    ? "border-slate-200 bg-white"
    : "border-white/10 bg-white/[0.03]";

  return (
    <div
      className={`resume-page min-h-screen transition-colors duration-200 ${
        isLightMode ? "bg-slate-50 text-slate-900" : "bg-[#090b12] text-slate-100"
      }`}
    >
      <header
        className={`resume-controls sticky top-0 z-30 border-b backdrop-blur-xl ${
          isLightMode
            ? "border-slate-200 bg-white/90"
            : "border-white/10 bg-neutral-950/85"
        }`}
      >
        <div className="mx-auto flex min-h-16 max-w-4xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link
            to="/"
            className="rounded text-sm font-medium text-cyan-600 hover:text-cyan-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          >
            ← Back to portfolio
          </Link>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className={`rounded-lg border px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                isLightMode
                  ? "border-slate-300 text-slate-800 hover:bg-slate-100"
                  : "border-slate-600 text-slate-100 hover:bg-white/5"
              }`}
            >
              Print / Save as PDF
            </button>
            <button
              type="button"
              aria-label={isLightMode ? "Switch to dark theme" : "Switch to light theme"}
              aria-pressed={isLightMode}
              onClick={() => setIsLightMode(!isLightMode)}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
                isLightMode ? "text-slate-700 hover:bg-slate-100" : "text-slate-200 hover:bg-white/10"
              }`}
            >
              {isLightMode ? <BiMoon aria-hidden="true" size={21} /> : <BiSun aria-hidden="true" size={21} />}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <header className="border-b border-slate-700/30 pb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-500">
            Résumé
          </p>
          <h1 className={`mt-3 text-4xl font-semibold tracking-tight sm:text-5xl ${headingColor}`}>
            Madhur Mangal
          </h1>
          <p className={`mt-3 text-xl font-medium sm:text-2xl ${bodyColor}`}>{HERO_ROLE}</p>
          <p className={`mt-4 max-w-3xl leading-7 ${bodyColor}`}>{HERO_CONTENT}</p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="mt-4 inline-flex rounded text-sm font-medium text-cyan-600 hover:text-cyan-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          >
            {CONTACT.email}
          </a>
        </header>

        <section aria-labelledby="resume-experience-title" className="py-8">
          <h2 id="resume-experience-title" className={`text-2xl font-semibold ${headingColor}`}>
            Experience
          </h2>
          <ol className="mt-5 space-y-4">
            {EXPERIENCES.map((experience) => (
              <li key={`${experience.company}-${experience.year}`}>
                <article className={`rounded-xl border p-5 ${panelColor}`}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <div>
                      <h3 className={`font-semibold ${headingColor}`}>{experience.role}</h3>
                      <p className={bodyColor}>{experience.company}</p>
                    </div>
                    <p className={`shrink-0 text-sm font-medium ${bodyColor}`}>{experience.year}</p>
                  </div>
                  <ul className={`mt-4 list-disc space-y-2 pl-5 text-sm leading-6 marker:text-cyan-500 ${bodyColor}`}>
                    {experience.description.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="resume-skills-title" className="border-t border-slate-700/30 py-8">
          <h2 id="resume-skills-title" className={`text-2xl font-semibold ${headingColor}`}>
            Skills
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {SKILL_GROUPS.map((group) => (
              <article key={group.title} className={`rounded-xl border p-5 ${panelColor}`}>
                <h3 className={`font-semibold ${headingColor}`}>{group.title}</h3>
                <p className={`mt-2 text-sm leading-6 ${bodyColor}`}>{group.skills.join(" · ")}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="resume-projects-title" className="border-t border-slate-700/30 py-8">
          <h2 id="resume-projects-title" className={`text-2xl font-semibold ${headingColor}`}>
            Projects
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <article key={project.title} className={`rounded-xl border p-5 ${panelColor}`}>
                <h3 className={`font-semibold ${headingColor}`}>{project.title}</h3>
                <p className={`mt-2 text-sm leading-6 ${bodyColor}`}>{project.description}</p>
                <p className={`mt-3 text-xs font-medium ${bodyColor}`}>
                  {project.technologies.join(" · ")}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="resume-education-title" className="border-t border-slate-700/30 py-8">
          <h2 id="resume-education-title" className={`text-2xl font-semibold ${headingColor}`}>
            Education
          </h2>
          <article className={`mt-5 rounded-xl border p-5 ${panelColor}`}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className={`font-semibold ${headingColor}`}>{EDUCATION.institution}</h3>
              <p className={`text-sm ${bodyColor}`}>
                {EDUCATION.location} · {EDUCATION.dates}
              </p>
            </div>
            <p className={`mt-2 text-sm ${bodyColor}`}>{EDUCATION.degree}</p>
          </article>
        </section>

        <section aria-labelledby="resume-certifications-title" className="border-t border-slate-700/30 py-8">
          <h2 id="resume-certifications-title" className={`text-2xl font-semibold ${headingColor}`}>
            Certifications & awards
          </h2>
          <ul className={`mt-4 grid gap-2 sm:grid-cols-2 ${bodyColor}`}>
            {[...CERTIFICATIONS, ...AWARDS].map((item) => (
              <li key={item} className={`rounded-lg border px-4 py-3 text-sm ${panelColor}`}>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Resume;
