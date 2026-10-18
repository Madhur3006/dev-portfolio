import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Technologies from "../components/Technologies";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Social from "../components/Social";
import Email from "../components/Email";

const Home = ({ isLightMode, setIsLightMode }) => {
  return (
    <div
      className={`relative isolate min-h-screen transition-colors duration-200 ${
        isLightMode ? "bg-slate-50 text-slate-900" : "bg-[#090b12] text-slate-100"
      }`}
    >
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {isLightMode ? (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(34,211,238,0.09),transparent)]" />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(34,211,238,0.12),transparent)]" />
        )}
      </div>

      <Navbar isLightMode={isLightMode} setIsLightMode={setIsLightMode} />

      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Hero isLightMode={isLightMode} />
        <About isLightMode={isLightMode} />
        <Technologies isLightMode={isLightMode} />
        <Projects isLightMode={isLightMode} />
        <Experience isLightMode={isLightMode} />
        <Contact isLightMode={isLightMode} />
      </main>

      <footer
        className={`border-t px-4 sm:px-6 lg:px-8 ${
          isLightMode ? "border-slate-200" : "border-white/10"
        }`}
      >
        <div className="mx-auto max-w-6xl">
          <Social isLightMode={isLightMode} />
        </div>
      </footer>

      <Email isLightMode={isLightMode} />
    </div>
  );
};

export default Home;
