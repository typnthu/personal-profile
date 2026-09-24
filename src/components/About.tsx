import { profile } from '../data/profile';

export const About = () => {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">About</h2>

      <div className="mt-4 max-w-3xl space-y-4 text-lg leading-relaxed text-slate-600">
        {profile.about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <h3 className="mt-8 text-lg font-semibold text-slate-900">
        Core areas of interest
      </h3>
      <ul className="mt-4 grid max-w-3xl gap-2 sm:grid-cols-2">
        {profile.interests.map((interest) => (
          <li
            key={interest}
            className="flex items-start gap-2 text-slate-600"
          >
            <span aria-hidden="true" className="mt-1 text-slate-400">
              •
            </span>
            <span>{interest}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
