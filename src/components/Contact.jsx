import { CONTACT } from "../constants";

const Contact = ({ isLightMode }) => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-28 py-16 sm:py-20"
    >
      <div
        className={`rounded-3xl border px-6 py-10 text-center sm:px-10 sm:py-14 ${
          isLightMode
            ? "border-slate-200 bg-slate-50"
            : "border-white/10 bg-white/[0.03]"
        }`}
      >
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.18em] ${
            isLightMode ? "text-cyan-800" : "text-cyan-300"
          }`}
        >
          Contact
        </p>
        <h2
          id="contact-title"
          className={`text-3xl font-semibold tracking-tight sm:text-4xl ${
            isLightMode ? "text-slate-950" : "text-white"
          }`}
        >
          Let’s connect
        </h2>
        <p className={`mx-auto mt-3 max-w-lg leading-7 ${isLightMode ? "text-slate-600" : "text-slate-300"}`}>
          For questions or opportunities, reach out by email.
        </p>
        <a
          href={`mailto:${CONTACT.email}`}
          aria-label="Email Madhur Mangal"
          className={`mt-6 inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 ${
            isLightMode
              ? "bg-cyan-800 text-white hover:bg-cyan-900 focus-visible:ring-offset-slate-50"
              : "bg-cyan-300 text-slate-950 hover:bg-cyan-200 focus-visible:ring-offset-neutral-950"
          }`}
        >
          {CONTACT.email}
        </a>
      </div>
    </section>
  );
};

export default Contact;
