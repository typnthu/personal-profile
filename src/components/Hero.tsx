import { profile } from '../data/profile';

export const Hero = () => {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-5xl flex-col items-start gap-4 px-4 py-20 md:py-28"
    >
      <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
        {profile.title}
      </p>
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
        {profile.name}
      </h1>
      <p className="max-w-2xl text-lg text-slate-600">{profile.tagline}</p>
      <div className="mt-2 flex gap-3">
        <a
          href="#contact"
          className="rounded-lg bg-slate-900 px-5 py-2.5 font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
        >
          Contact me
        </a>
        <a
          href="#projects"
          className="rounded-lg border border-slate-300 px-5 py-2.5 font-medium text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
        >
          View projects
        </a>
      </div>
    </section>
  );
};
