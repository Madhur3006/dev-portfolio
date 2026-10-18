import { createElement } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { NAVLINKS } from "../constants";

const SOCIAL_ITEMS = [
  { label: "GitHub", href: NAVLINKS.github, Icon: FaGithub },
  { label: "LinkedIn", href: NAVLINKS.linkedIn, Icon: FaLinkedin },
  { label: "X", href: NAVLINKS.x, Icon: FaSquareXTwitter },
];

const Social = ({ isLightMode }) => {
  const linkColor = isLightMode
    ? "text-slate-600 hover:text-cyan-800"
    : "text-slate-300 hover:text-cyan-200";

  return (
    <>
      <aside
        aria-label="Social profiles"
        className={`fixed bottom-0 left-8 z-20 hidden flex-col items-center gap-5 xl:flex ${linkColor}`}
      >
        <ul className="flex flex-col items-center gap-5">
          {SOCIAL_ITEMS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Madhur Mangal on ${label}`}
                title={label}
                className="inline-flex h-8 w-8 items-center justify-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              >
                {createElement(Icon, { "aria-hidden": "true", size: 19 })}
              </a>
            </li>
          ))}
        </ul>
        <span
          aria-hidden="true"
          className={`h-20 w-px ${isLightMode ? "bg-slate-300" : "bg-slate-600"}`}
        />
      </aside>

      <nav aria-label="Social profiles" className="flex items-center justify-center gap-5 py-6 xl:hidden">
        {SOCIAL_ITEMS.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit Madhur Mangal on ${label}`}
            className={`inline-flex min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${linkColor}`}
          >
            {createElement(Icon, { "aria-hidden": "true", size: 18 })}
            <span>{label}</span>
          </a>
        ))}
      </nav>
    </>
  );
};

export default Social;
