import { AWARDS, CERTIFICATIONS } from "../constants";

const CertificationsAwards = ({ isLightMode }) => {
  const panelStyle = isLightMode
    ? "border-slate-200 bg-white shadow-sm"
    : "border-white/10 bg-white/[0.03]";
  const headingStyle = isLightMode ? "text-slate-950" : "text-white";
  const bodyStyle = isLightMode ? "text-slate-600" : "text-slate-300";

  return (
    <section
      id="credentials"
      aria-labelledby="credentials-title"
      className="scroll-mt-28 border-b border-slate-700/30 py-16 sm:py-20"
    >
      <div className="mb-9 max-w-2xl">
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.18em] ${
            isLightMode ? "text-cyan-800" : "text-cyan-300"
          }`}
        >
          Recognition
        </p>
        <h2
          id="credentials-title"
          className={`text-3xl font-semibold tracking-tight sm:text-4xl ${headingStyle}`}
        >
          Certifications &amp; Awards
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {[
          { title: "Certifications", items: CERTIFICATIONS },
          { title: "Awards", items: AWARDS },
        ].map((group) => (
          <article key={group.title} className={`rounded-2xl border p-5 sm:p-6 ${panelStyle}`}>
            <h3 className={`text-base font-semibold ${headingStyle}`}>{group.title}</h3>
            <ul className={`mt-4 list-disc space-y-2 pl-5 leading-7 marker:text-cyan-500 ${bodyStyle}`}>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CertificationsAwards;
