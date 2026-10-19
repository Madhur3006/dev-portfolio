import profilePic from "../assets/profilePhoto1.jpeg";
import { HERO_CONTENT, HERO_ROLE, RESUME_PDF } from "../constants";

const Hero = ({ isLightMode }) => {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="grid scroll-mt-28 items-center gap-12 border-b border-slate-700/30 py-16 sm:py-20 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:py-24"
    >
      <div className="max-w-2xl">
        <p
          className={`mb-4 text-sm font-semibold uppercase tracking-[0.18em] ${
            isLightMode ? "text-cyan-800" : "text-cyan-300"
          }`}
        >
          Forward Deployed Engineer · React · TypeScript · Node.js · AI systems
        </p>
        <h1
          id="hero-title"
          className={`text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl ${
            isLightMode ? "text-slate-950" : "text-white"
          }`}
        >
          Madhur Mangal
        </h1>
        <h2
          className={`mt-4 max-w-2xl text-2xl font-medium leading-tight tracking-tight sm:text-3xl lg:text-4xl ${
            isLightMode ? "text-slate-700" : "text-slate-200"
          }`}
        >
          {HERO_ROLE}
        </h2>
        <p
          className={`mt-6 max-w-xl text-base leading-8 sm:text-lg ${
            isLightMode ? "text-slate-600" : "text-slate-300"
          }`}
        >
          {HERO_CONTENT}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className={`inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 ${
              isLightMode
                ? "bg-cyan-800 text-white hover:bg-cyan-900 focus-visible:ring-offset-white"
                : "bg-cyan-300 text-slate-950 hover:bg-cyan-200 focus-visible:ring-offset-neutral-950"
            }`}
          >
            View Projects
          </a>
          <a
            href={RESUME_PDF}
            aria-label="View the latest résumé PDF"
            className={`inline-flex min-h-11 items-center justify-center rounded-lg border px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 ${
              isLightMode
                ? "border-slate-300 text-slate-800 hover:border-slate-500 hover:bg-slate-100 focus-visible:ring-offset-white"
                : "border-slate-600 text-slate-100 hover:border-slate-400 hover:bg-white/5 focus-visible:ring-offset-neutral-950"
            }`}
          >
            View Résumé
          </a>
        </div>
      </div>

      <div className="mx-auto w-full max-w-sm">
        <div
          className={`relative overflow-hidden rounded-3xl border p-2 shadow-2xl ${
            isLightMode
              ? "border-slate-200 bg-white shadow-slate-300/40"
              : "border-white/10 bg-white/5 shadow-black/40"
          }`}
        >
          <img
            src={profilePic}
            alt="Portrait of Madhur Mangal"
            className="aspect-[4/5] w-full rounded-2xl object-cover object-center"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
