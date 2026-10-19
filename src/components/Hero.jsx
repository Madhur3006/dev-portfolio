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
          Madhur Mangal · Forward Deployed Engineer
        </p>
        <h1
          id="hero-title"
          className={`max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl ${
            isLightMode ? "text-slate-950" : "text-white"
          }`}
        >
          AI-driven software engineering
        </h1>
        <h2
          className={`mt-5 max-w-2xl text-xl font-medium leading-tight tracking-tight sm:text-2xl lg:text-3xl ${
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
        <div className="mt-7 flex flex-wrap gap-3">
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

      <div className="mx-auto w-full max-w-sm [perspective:1100px]">
        <img
          src="/profile_image.jpg"
          alt="Portrait of Madhur Mangal"
          className={`mx-auto aspect-square w-full object-cover object-center [clip-path:circle(47%_at_50%_50%)] [transform:rotateY(-7deg)_rotateX(2deg)] [filter:drop-shadow(24px_30px_24px_rgba(0,0,0,0.42))] transition-transform duration-300 hover:[transform:rotateY(-2deg)_rotateX(0deg)_scale(1.02)] motion-reduce:transform-none motion-reduce:transition-none ${
            isLightMode ? "[filter:drop-shadow(24px_30px_24px_rgba(15,23,42,0.2))]" : ""
          }`}
          fetchPriority="high"
        />
      </div>
    </section>
  );
};

export default Hero;
