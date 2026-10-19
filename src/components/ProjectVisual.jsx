const ProjectVisual = ({ type, isLightMode }) => {
  const palette = isLightMode
    ? {
        panel: "border-slate-200 bg-white",
        muted: "text-slate-500",
        text: "text-slate-800",
        tile: "border-slate-200 bg-slate-50",
        accent: "border-teal-300 bg-teal-50 text-teal-900",
        line: "bg-slate-300",
      }
    : {
        panel: "border-white/10 bg-slate-950/70",
        muted: "text-slate-400",
        text: "text-slate-100",
        tile: "border-white/10 bg-white/[0.04]",
        accent: "border-teal-300/30 bg-teal-300/10 text-teal-100",
        line: "bg-slate-700",
      };

  const diagrams = {
    hiring: {
      label: "Problem-to-solution progression",
      eyebrow: "Hiring sandbox",
      title: "From problem to practice",
      steps: ["Real problem", "Agentic solution", "Practical evaluation"],
    },
    macro: {
      label: "Macro-factor model research workflow",
      eyebrow: "Research workflow",
      title: "Input, analysis, iteration",
      steps: ["Supplied market data", "Macro-factor analysis", "MCP-connected refinement"],
    },
    council: {
      label: "Illustrative multi-agent council flow",
      eyebrow: "Council framework",
      title: "Perspectives to synthesis",
      steps: ["Perspective 01", "Perspective 02", "Perspective 03"],
    },
  };
  const diagram = diagrams[type];

  return (
    <div
      role="img"
      aria-label={`${diagram.label}. Illustrative diagram based on the project description; not a product screenshot or live data.`}
      className={`relative flex min-h-48 flex-col justify-between overflow-hidden rounded-xl border p-4 sm:min-h-52 sm:p-5 ${palette.panel}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${palette.muted}`}>
            {diagram.eyebrow}
          </p>
          <p className={`mt-1 text-sm font-semibold ${palette.text}`}>{diagram.title}</p>
        </div>
        <span className={`shrink-0 rounded-md border px-2 py-1 text-[9px] font-semibold uppercase tracking-wider ${palette.muted}`}>
          Illustrative
        </span>
      </div>

      {type === "council" ? (
        <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
          <div className="space-y-2">
            {diagram.steps.map((step) => (
              <div key={step} className={`rounded-lg border px-2.5 py-2 text-[10px] font-medium sm:text-xs ${palette.tile} ${palette.text}`}>
                {step}
              </div>
            ))}
          </div>
          <div aria-hidden="true" className={`h-px w-5 sm:w-8 ${palette.line}`} />
          <div className={`rounded-lg border px-3 py-4 text-center text-xs font-semibold sm:px-4 sm:py-5 ${palette.accent}`}>
            Synthesis
          </div>
        </div>
      ) : (
        <div className="mt-5 grid grid-cols-3 items-stretch gap-2">
          {diagram.steps.map((step, index) => (
            <div key={step} className="relative">
              <div className={`flex min-h-16 items-center rounded-lg border px-2 py-2 text-[10px] font-medium leading-4 sm:min-h-[4.5rem] sm:px-3 sm:text-xs ${index === 1 ? palette.accent : `${palette.tile} ${palette.text}`}`}>
                {step}
              </div>
              {index < diagram.steps.length - 1 && (
                <span aria-hidden="true" className={`absolute -right-2 top-1/2 z-10 h-px w-2 ${palette.line}`} />
              )}
            </div>
          ))}
        </div>
      )}

      <p className={`mt-4 border-t pt-3 text-[10px] leading-4 ${palette.muted} ${isLightMode ? "border-slate-200" : "border-white/10"}`}>
        Concept sketch · descriptive labels only
      </p>
    </div>
  );
};

export default ProjectVisual;
