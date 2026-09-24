import { profile } from '../data/profile';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3"
      >
        <a href="#top" className="text-lg font-bold text-slate-900">
          {profile.name}
        </a>
        <ul className="flex flex-wrap gap-4 text-sm font-medium text-slate-700">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded px-1 py-1 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
