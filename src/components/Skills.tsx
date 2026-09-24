import { profile } from '../data/profile';

export const Skills = () => {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Skills</h2>
      <ul className="mt-6 flex flex-wrap gap-3">
        {profile.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-slate-300 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-800"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};
