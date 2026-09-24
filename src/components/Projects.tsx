import { profile } from '../data/profile';

export const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Projects</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {profile.projects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col rounded-xl border border-slate-200 p-6 shadow-sm transition hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-slate-900">{project.name}</h3>
            <p className="mt-2 text-slate-600">{project.description}</p>

            {project.highlights && project.highlights.length > 0 && (
              <ul className="mt-4 space-y-1.5">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <span aria-hidden="true" className="mt-0.5 text-slate-400">
                      ✓
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}

            {project.tags && project.tags.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-auto pt-4">
              {project.links && project.links.length > 0 ? (
                <div className="flex flex-wrap gap-4">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-slate-900 underline underline-offset-4 hover:text-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              ) : (
                project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-slate-900 underline underline-offset-4 hover:text-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                  >
                    View project →
                  </a>
                )
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
