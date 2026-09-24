import { profile } from '../data/profile';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="mx-auto max-w-5xl px-4 text-sm text-slate-500">
        © {year} {profile.name}. Built with React + Vite + Tailwind CSS.
      </div>
    </footer>
  );
};
