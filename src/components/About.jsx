import aboutImage from "../assets/profilePhoto2.jpeg";
import { ABOUT_TEXT } from "../constants";

const About = ({ isLightMode }) => {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-28 border-b border-slate-700/30 py-16 sm:py-20"
    >
      <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <div className="mx-auto w-full max-w-xs">
          <img
            src={aboutImage}
            alt="Madhur Mangal"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-2xl object-cover object-center shadow-xl"
          />
        </div>
        <div>
          <p
            className={`mb-3 text-sm font-semibold uppercase tracking-[0.18em] ${
              isLightMode ? "text-cyan-800" : "text-cyan-300"
            }`}
          >
            About
          </p>
          <h2
            id="about-title"
            className={`text-3xl font-semibold tracking-tight sm:text-4xl ${
              isLightMode ? "text-slate-950" : "text-white"
            }`}
          >
            Engineering across complex domains
          </h2>
          <p
            className={`mt-5 max-w-2xl text-base leading-8 ${
              isLightMode ? "text-slate-600" : "text-slate-300"
            }`}
          >
            {ABOUT_TEXT}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
