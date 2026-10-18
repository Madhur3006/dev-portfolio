import { CONTACT } from "../constants";

const Email = ({ isLightMode }) => (
  <aside
    aria-label="Email contact"
    className={`fixed bottom-0 right-8 z-20 hidden flex-col items-center gap-5 xl:flex ${
      isLightMode ? "text-slate-600" : "text-slate-300"
    }`}
  >
    <a
      href={`mailto:${CONTACT.email}`}
      aria-label="Email Madhur Mangal"
      title="Email Madhur Mangal"
      className="rounded px-2 py-1 text-xs transition-colors hover:text-cyan-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
      style={{ writingMode: "vertical-rl" }}
    >
      {CONTACT.email}
    </a>
    <span
      aria-hidden="true"
      className={`h-20 w-px ${isLightMode ? "bg-slate-300" : "bg-slate-600"}`}
    />
  </aside>
);

export default Email;
