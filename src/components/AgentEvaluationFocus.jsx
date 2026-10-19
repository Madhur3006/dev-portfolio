const AgentEvaluationFocus = ({ isLightMode }) => {
  const panel = isLightMode
    ? "border-teal-800/20 bg-teal-50/70"
    : "border-teal-200/15 bg-teal-300/[0.04]";
  const heading = isLightMode ? "text-slate-950" : "text-white";
  const body = isLightMode ? "text-slate-700" : "text-slate-300";
  const steps = [
    { number: "01", title: "Repeatable task", detail: "Inputs and success criteria" },
    { number: "02", title: "Observable trace", detail: "Evidence, tool calls, actions, outcomes" },
    { number: "03", title: "Quality checks", detail: "Task success, tool reliability, answer quality" },
    { number: "04", title: "Failure patterns", detail: "Recurring gaps to investigate" },
  ];

  return (
    <aside
      aria-labelledby="agent-evaluation-title"
      className={`mt-4 overflow-hidden rounded-2xl border p-5 sm:p-6 ${panel}`}
    >
      <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${isLightMode ? "text-teal-800" : "text-teal-200"}`}>
            Engineering focus · evaluation approach
          </p>
          <h3
            id="agent-evaluation-title"
            className={`mt-2 text-xl font-semibold tracking-tight sm:text-2xl ${heading}`}
          >
            Agent Reasoning &amp; Evaluation
          </h3>
          <p className={`mt-3 text-sm leading-6 sm:text-base ${body}`}>
            A repeatable way to assess task success, tool-use reliability, and answer quality, then use trace analysis to spot failure patterns.
          </p>
          <p className={`mt-3 text-xs leading-5 ${isLightMode ? "text-slate-600" : "text-slate-400"}`}>
            This is an engineering approach, not a claimed Innovaccer deliverable or measured result. Trace review focuses on observable behavior, not hidden model reasoning.
          </p>
        </div>

        <ol aria-label="Illustrative agent evaluation process" className="grid gap-2 sm:grid-cols-2">
          {steps.map((step) => (
            <li
              key={step.number}
              className={`flex min-h-20 gap-3 rounded-xl border p-3 ${
                isLightMode ? "border-teal-900/10 bg-white/80" : "border-white/10 bg-slate-950/50"
              }`}
            >
              <span className={`pt-0.5 text-xs font-semibold tabular-nums ${isLightMode ? "text-teal-800" : "text-teal-200"}`}>
                {step.number}
              </span>
              <span>
                <span className={`block text-sm font-semibold ${heading}`}>{step.title}</span>
                <span className={`mt-1 block text-xs leading-5 ${body}`}>{step.detail}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </aside>
  );
};

export default AgentEvaluationFocus;
