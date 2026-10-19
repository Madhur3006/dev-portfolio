import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiMenu, BiMoon, BiSun, BiX } from "react-icons/bi";
import logoDark from "../assets/logo_dark.svg";
import logoLight from "../assets/logo_light.svg";
import { RESUME_PDF } from "../constants";

const SECTION_LINKS = [
  { href: "#about", label: "About" },
  { href: "#technologies", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
];

const Navbar = ({ isLightMode, setIsLightMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const focusStyle = `rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 ${
    isLightMode ? "focus-visible:ring-offset-white" : "focus-visible:ring-offset-neutral-950"
  }`;

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur-xl ${
        isLightMode
          ? "border-slate-200 bg-white/90 text-slate-900"
          : "border-white/10 bg-neutral-950/85 text-slate-100"
      }`}
    >
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          aria-label="Madhur Mangal home"
          onClick={closeMenu}
          className={`${focusStyle} flex shrink-0 items-center gap-3`}
        >
          <img
            src={isLightMode ? logoDark : logoLight}
            alt=""
            aria-hidden="true"
            className="h-9 w-8"
          />
          <span className="hidden text-sm font-semibold tracking-wide sm:inline">
            MADHUR MANGAL
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex">
          {SECTION_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${focusStyle} text-sm font-medium transition-colors hover:text-cyan-500 ${
                isLightMode ? "text-slate-600" : "text-slate-300"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={RESUME_PDF}
            className={`${focusStyle} text-sm font-medium transition-colors hover:text-cyan-500 ${
              isLightMode ? "text-slate-600" : "text-slate-300"
            }`}
          >
            Résumé
          </a>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            aria-label={isLightMode ? "Switch to dark theme" : "Switch to light theme"}
            aria-pressed={isLightMode}
            onClick={() => setIsLightMode(!isLightMode)}
            className={`${focusStyle} inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
              isLightMode
                ? "text-slate-700 hover:bg-slate-100"
                : "text-slate-200 hover:bg-white/10"
            }`}
          >
            {isLightMode ? <BiMoon size={21} aria-hidden="true" /> : <BiSun size={21} aria-hidden="true" />}
          </button>
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${focusStyle} inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden ${
              isLightMode
                ? "text-slate-700 hover:bg-slate-100"
                : "text-slate-200 hover:bg-white/10"
            }`}
          >
            {isMenuOpen ? <BiX size={24} aria-hidden="true" /> : <BiMenu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className={`border-t px-4 py-3 lg:hidden ${
            isLightMode ? "border-slate-200 bg-white" : "border-white/10 bg-neutral-950"
          }`}
        >
          <div className="mx-auto flex max-w-6xl flex-col">
            {SECTION_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`${focusStyle} rounded-lg px-3 py-3 text-sm font-medium ${
                  isLightMode ? "text-slate-700 hover:bg-slate-100" : "text-slate-200 hover:bg-white/5"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={RESUME_PDF}
              onClick={closeMenu}
              className={`${focusStyle} rounded-lg px-3 py-3 text-sm font-medium ${
                isLightMode ? "text-slate-700 hover:bg-slate-100" : "text-slate-200 hover:bg-white/5"
              }`}
            >
              Résumé
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
