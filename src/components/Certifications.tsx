import { profile } from '../data/profile';

export const Certifications = () => {
  return (
    <section id="certifications" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Certifications</h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {profile.certifications.map((cert) => (
          <li
            key={cert.code}
            className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 p-4"
          >
            <div className="flex flex-col">
              {cert.url ? (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-900 underline underline-offset-4 hover:text-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                >
                  {cert.name}
                </a>
              ) : (
                <span className="font-medium text-slate-900">{cert.name}</span>
              )}
              {cert.url && (
                <span className="text-xs text-slate-500">Verify on Credly →</span>
              )}
            </div>
            <span className="shrink-0 rounded bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-700">
              {cert.code}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
